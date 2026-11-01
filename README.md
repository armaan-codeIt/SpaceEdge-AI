# SpaceEdge AI · Mission Control

An autonomous data scheduling, entropy assessment, and optimization system designed for satellite telemetry and downlink operations.

## 🚀 Overview
**SpaceEdge AI** is a lightweight, zero-setup mission control prototype built to simulate real-time satellite telemetry management. It monitors incoming observation files, evaluates their information density using **Shannon entropy**, prioritizes critical transmissions using a **Value-Density Knapsack optimization algorithm**, and displays everything on a sleek, real-time React dashboard.

---

## 🛠️ Tech Stack

* **Backend:** Python, FastAPI, Uvicorn
* **Frontend:** React, HTML5, Tailwind CSS / Custom CSS
* **Core Logic:** In-memory data structures, heuristic optimization algorithms

---

## 📂 Project Structure

```text
spaceedge-ai/
│
├── server.py             # FastAPI backend server & file watcher
├── requirements.txt      # Python dependencies list
├── incoming/             # Local simulation folder for incoming satellite data
└── frontend/
    ├── index.html        # Main dashboard HTML template
    ├── app.js            # Frontend logic, Shannon entropy (qe), & Knapsack (kt)
    └── styles.css        # Aerospace dark-mode styling & themes
⚙️ Local Installation & Setup
1. Clone the Repository
Bash
git clone [https://github.com/armaan-codeIt/spaceedge-ai.git](https://github.com/armaan-codeIt/spaceedge-ai.git)
cd spaceedge-ai
2. Set Up a Python Virtual Environment
Bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
3. Install Dependencies
Bash
pip install -r requirements.txt
4. Run the FastAPI Server
Start the backend server with live-reloading enabled:

Bash
uvicorn server:app --reload --port 8000
5. Access Mission Control
Open your web browser and navigate to:

Plaintext
http://localhost:8000
🧠 Core Algorithms
Shannon Entropy (qe in app.js): Measures the information density and unpredictability of incoming observation frames to determine data priority.

Value-Density Knapsack (kt in app.js): Optimizes downlink bandwidth constraints by calculating utility-to-size ratios, ensuring mission-critical data gets transmitted first during narrow orbital windows.

🛡️ License
This project is open-source and developed for academic and prototyping purposes.
