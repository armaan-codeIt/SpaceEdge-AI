import os
from pathlib import Path
from typing import Dict, List
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent
INCOMING_DIR = BASE_DIR / "incoming"
FRONTEND_DIR = BASE_DIR / "frontend"

INCOMING_DIR.mkdir(exist_ok=True)

app = FastAPI(
    title="SpaceEdge AI · Orbital Mission Control API",
    description="Real-time directory watcher and telemetry ingestion server",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ALLOWED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif"}
_file_registry: Dict[str, dict] = {}
_sequence_counter: int = 0


def _infer_preset_metadata(filename: str) -> dict:
    lower = filename.lower()
    if "cloud" in lower or "albedo" in lower or "frame_0006" in lower:
        return {"presetHint": "cloud", "displayName": "Met Oceanic Cloud Deck", "sizeOverrideMb": 95}
    if "ag" in lower or "canopy" in lower or "frame_0005" in lower:
        return {"presetHint": "agriculture", "displayName": "Midwest Agricultural Scan", "sizeOverrideMb": 75}
    if "cyclone" in lower or "vortex" in lower or "frame_0002" in lower:
        return {"presetHint": "cyclone", "displayName": "Bay of Bengal Cyclone Vortex", "sizeOverrideMb": 82}
    if "insar" in lower or "fringe" in lower or "frame_0004" in lower:
        return {"presetHint": "earthquake_insar", "displayName": "InSAR Fault Line Deformation", "sizeOverrideMb": 54}
    if "flood" in lower or "inundation" in lower or "frame_0003" in lower:
        return {"presetHint": "flood", "displayName": "Brahmaputra Basin Flood", "sizeOverrideMb": 48}
    if "wildfire" in lower or "plume" in lower or "frame_0001" in lower:
        return {"presetHint": "wildfire", "displayName": "California Wildfire Front", "sizeOverrideMb": 68.5}
    return {"presetHint": None, "displayName": None, "sizeOverrideMb": None}


def _scan_incoming_folder() -> None:
    global _sequence_counter
    if not INCOMING_DIR.exists():
        return

    for entry in sorted(INCOMING_DIR.iterdir(), key=lambda p: p.stat().st_mtime):
        if not entry.is_file() or entry.suffix.lower() not in ALLOWED_EXTENSIONS:
            continue
        stat = entry.stat()
        key = f"{entry.name}:{stat.st_mtime_ns}"
        if key not in _file_registry:
            _sequence_counter += 1
            meta = _infer_preset_metadata(entry.name)
            _file_registry[key] = {
                "seq": _sequence_counter,
                "fileName": entry.name,
                "sizeBytes": stat.st_size,
                "modified": stat.st_mtime,
                "url": f"/api/images/{entry.name}",
                "presetHint": meta["presetHint"],
                "displayName": meta["displayName"],
                "sizeOverrideMb": meta["sizeOverrideMb"],
            }


@app.get("/api/observations")
def get_observations(since: int = Query(0, ge=0)):
    _scan_incoming_folder()
    items: List[dict] = [
        item for item in _file_registry.values() if item["seq"] > since
    ]
    items.sort(key=lambda x: x["seq"])
    return {"latest": _sequence_counter, "items": items}


@app.get("/api/images/{filename}")
def get_image(filename: str):
    safe_name = os.path.basename(filename)
    file_path = INCOMING_DIR / safe_name
    if not file_path.exists() or not file_path.is_file():
        raise HTTPException(status_code=404, detail="Observation image not found")
    return FileResponse(file_path)


if FRONTEND_DIR.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")