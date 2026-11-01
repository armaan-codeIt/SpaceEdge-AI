(() => {
  var gt = window.React,
    e = gt,
    {
      useState: M,
      useEffect: J,
      useRef: R,
      useMemo: Ee,
      useCallback: ht
    } = gt;

  var Kt = window.React,
    w = n => i =>
      Kt.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: i.size || 24,
        height: i.size || 24,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: i.strokeWidth || 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: i.className,
        style: i.style,
        "aria-hidden": !0,
        dangerouslySetInnerHTML: { __html: n }
      }),
    vt = w('<path d="M13 7 9 3 5 7l4 4"></path><path d="m17 11 4 4-4 4-4-4"></path><path d="m8 12 4 4 6-6-4-4Z"></path><path d="m16 8 3-3"></path><path d="M9 21a6 6 0 0 0-6-6"></path>'),
    yt = w('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line>'),
    Be = w('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>'),
    Nt = w('<polygon points="6 3 20 12 6 21 6 3"></polygon>'),
    wt = w('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path>'),
    Ct = w('<path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line>'),
    je = w('<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle>'),
    et = w('<rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path>'),
    Mt = w('<rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line>'),
    ge = w('<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>'),
    tt = w('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>'),
    at = w('<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>'),
    nt = w('<path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>'),
    ot = w('<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>'),
    st = w('<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>'),
    At = w('<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>'),
    rt = w('<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>'),
    Dt = w('<line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line>'),
    it = w('<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>'),
    St = w('<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'),
    lt = w('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>'),
    Ft = w('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path>'),
    dt = w('<path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path>'),
    ke = w('<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>');

  var Et =
      window.SPACEEDGE_API_URL ||
      (window.location.origin && window.location.origin !== "null"
        ? window.location.origin
        : "http://localhost:8000"),
    Yt = 2500,
    pt = [10, 20, 30, 60];

  function safeNum(val, fallback = 0, decimals = null) {
    let num = Number(val);
    if (!Number.isFinite(num)) num = fallback;
    return decimals !== null ? Number(num.toFixed(decimals)) : num;
  }

  async function qe(n, i = "Sensor_Tile.png", o = null, r = null) {
    return new Promise((t, p) => {
      try {
        let x = new Image();
        x.crossOrigin = "Anonymous";
        x.onload = () => {
          try {
            let d = Math.max(1, safeNum(x.naturalWidth || x.width, 1280)),
              m = Math.max(1, safeNum(x.naturalHeight || x.height, 720)),
              c = document.createElement("canvas"),
              s = 128,
              l = 8,
              u = s / l;
            c.width = s;
            c.height = s;
            let g = c.getContext("2d");
            if (!g) throw new Error("Failed to acquire 2D canvas context");
            g.drawImage(x, 0, 0, s, s);
            let L = g.getImageData(0, 0, s, s).data,
              A = Math.max(1, s * s),
              ae = new Array(256).fill(0),
              Z = new Float32Array(A),
              H = new Array(l * l).fill(0),
              le = new Array(l * l).fill(0),
              ye = new Array(l * l).fill(0),
              ne = 0,
              Ne = 0,
              we = 0,
              Pe = 0,
              de = 0,
              pe = 0,
              ce = 0,
              me = 0,
              j = 0,
              Te = 0,
              X = 0,
              Ce = 0,
              Me = 0,
              Ae = 0,
              $ = 0,
              De = 0,
              Se = 0,
              Y = 0,
              Ie = s / 2,
              Oe = s / 2;

            for (let B = 0; B < s; B++) {
              for (let k = 0; k < s; k++) {
                let G = B * s + k,
                  fe = G * 4,
                  y = L[fe],
                  C = L[fe + 1],
                  N = L[fe + 2],
                  qt = Math.max(y, C, N),
                  Gt = Math.min(y, C, N),
                  Q = qt - Gt,
                  V = Math.min(
                    255,
                    Math.max(0, Math.round(0.299 * y + 0.587 * C + 0.114 * N))
                  );
                Z[G] = V;
                ae[V]++;
                let Qe = Math.floor(B / u) * l + Math.floor(k / u),
                  ut = (k - Ie) / Oe,
                  bt = (B - Ie) / Oe,
                  Je = Math.sqrt(ut * ut + bt * bt),
                  We =
                    (y > 185 && y > C * 1.25 && N < 145 && y - N > 65) ||
                    (y > 220 && C > 100 && C < 210 && N < 115 && y - N > 110),
                  Re =
                    !We &&
                    y > 162 &&
                    C > 50 &&
                    C < 172 &&
                    N < 135 &&
                    y > C * 1.18 &&
                    y - N > 48;
                We ? (ne++, (H[Qe] += 1)) : Re && (Ne++, (H[Qe] += 0.65));
                let He = V >= 182 && Q < 36,
                  ft = y > 212 && C > 212 && N > 212 && Q < 22;
                ft && pe++;
                He && le[Qe]++;
                !We && !Re && !ft && V >= 115 && V <= 235 && Q < 38 && we++;
                Je < 0.17
                  ? (ce++, He && me++, (V < 155 || (N > y * 1.12 && V < 175)) && j++)
                  : Je <= 0.52
                  ? (Te++, He && X++)
                  : Je <= 1.05 &&
                    (Ce++, He && Me++, (V < 125 || (N > y * 1.12 && N > 50)) && Ae++);
                N > y * 1.15 && N > C * 1.04 && N > 75 && Pe++;
                C > y * 1.06 && C > N * 1.08 && C > 55 && Q < 110 && de++;
                let Vt = Q > 68 && y > 140 && N > 140 && C < Math.min(y, N) - 35,
                  Zt = Q > 68 && C > 145 && N > 145 && y < Math.min(C, N) - 35,
                  Xt =
                    Q > 75 &&
                    y > 165 &&
                    C > 155 &&
                    N < 100 &&
                    Math.abs(y - C) < 55;
                Vt || Zt ? $++ : Xt && De++;
                !We &&
                  !Re &&
                  V >= 75 &&
                  V <= 198 &&
                  y >= C &&
                  C >= N - 8 &&
                  y - N >= 10 &&
                  y - N <= 62 &&
                  Q <= 65 &&
                  Se++;
              }
            }

            for (let B = 1; B < s - 1; B++) {
              for (let k = 1; k < s - 1; k++) {
                let G = B * s + k,
                  fe = Math.abs(Z[G + 1] - Z[G - 1]),
                  y = Math.abs(Z[G + s] - Z[G - s]);
                if (fe + y > 52 && fe > 18 && y > 18) {
                  Y++;
                  let C = Math.floor(B / u) * l + Math.floor(k / u);
                  ye[C]++;
                }
              }
            }

            let S = 0;
            for (let B of ae) {
              if (B > 0) {
                let k = B / A;
                S -= k * Math.log2(k);
              }
            }
            S = safeNum(S, 4.5, 2);

            let O = Math.max(1, u * u),
              xe = (ne + 0.65 * Ne) / A,
              oe = Math.max(...H) / O,
              Ue = we / A,
              se = Pe / A,
              Fe = de / A,
              ue = pe / A,
              U = me / Math.max(1, ce),
              P = X / Math.max(1, Te),
              be = Me / Math.max(1, Ce),
              h = Ae / Math.max(1, Ce),
              Xe = le.reduce((B, k) => B + k / O, 0) / (l * l),
              q =
                le.reduce((B, k) => {
                  let G = k / O - Xe;
                  return B + G * G;
                }, 0) /
                (l * l),
              ze = Math.max(0, P - U) + (j / Math.max(1, ce)) * 0.45,
              Ke = Math.max(0, P - be) + h * 0.35,
              rawVortex =
                h >= 0.22 && ue < 0.28
                  ? Math.max(
                      ze * 0.85 + (P > 0.4 ? 0.28 : 0),
                      Ke * 0.8 + (q > 0.065 ? 0.25 : 0)
                    )
                  : Math.max(0, (P - be) * 0.25),
              re = safeNum(Math.min(1, rawVortex), 0, 2),
              ie = ($ + De * 0.65) / A,
              Ye = $ > A * 0.035 && (De > A * 0.015 || $ > A * 0.08),
              a = Y / A,
              b = Math.max(...ye) / O,
              v = Se / A,
              f = safeNum(Math.min(0.38, Math.max(0.24, 0.16 + (S / 8) * 0.22)), 0.3, 2),
              F = (d * m) / 1e6,
              _ =
                o && o > 0
                  ? safeNum(
                      Math.min(
                        68,
                        Math.max(32, 26 + F * 6.5 + S * 2.4 + Math.min(22, (o / 1024) * 0.04))
                      ),
                      48,
                      1
                    )
                  : safeNum(Math.min(72, Math.max(34, 28 + F * 8 + S * 2.8)), 48, 1),
              E = "Agriculture",
              T = "Vegetation Canopy Plot",
              D = 0.22,
              I = 0.95,
              z = 48,
              W = (i || "").toLowerCase(),
              Le =
                r === "earthquake_insar" ||
                (!r && (Ye || ie >= 0.035 || W.includes("insar"))),
              $e =
                r === "earthquake_optical" ||
                (!r &&
                  (W.includes("earthquake") || (v >= 0.22 && a >= 0.065 && b >= 0.14))),
              _e =
                r === "cyclone" ||
                (!r &&
                  (W.includes("cyclone") ||
                    (P >= 0.35 && h >= 0.22 && ue < 0.28 && (q >= 0.04 || re >= 0.45)))),
              Ht =
                !Le &&
                !_e &&
                (r === "wildfire" ||
                  (!r && (xe >= 0.003 || oe >= 0.035 || W.includes("wildfire"))));

            if (Le) {
              E = "Earthquake";
              T = "Co-Seismic Phase Fringe Deformation";
              D = safeNum(Math.min(0.99, 0.86 + ie * 0.9), 0.9, 2);
              I = safeNum(Math.min(0.99, 0.82 + ie * 1.2 + S / 100), 0.92, 2);
              z = safeNum(Math.max(1, 3.2 - ie * 12), 2, 1);
            } else if (Ht) {
              E = "Wildfire";
              T = "Active Thermal Combustion Front";
              D = safeNum(Math.min(0.99, 0.88 + xe * 1.5 + oe * 0.2), 0.92, 2);
              I = safeNum(Math.min(0.99, 0.84 + oe * 0.3 + Ue * 0.2), 0.94, 2);
              z = safeNum(Math.max(0.5, 2.8 - xe * 15), 1.5, 1);
            } else if (_e) {
              E = "Cyclone";
              T = "Concentric Eyewall Vortex";
              D = safeNum(Math.min(0.98, 0.85 + re * 0.13), 0.91, 2);
              I = safeNum(Math.min(0.99, 0.81 + re * 0.18), 0.93, 2);
              z = safeNum(Math.max(1, 3.6 - re * 2), 2, 1);
            } else if ($e) {
              E = "Earthquake";
              T = "Seismic Rubble & Landslide Scars";
              D = safeNum(Math.min(0.97, 0.84 + a * 0.85), 0.88, 2);
              I = safeNum(Math.min(0.98, 0.79 + b * 0.4), 0.86, 2);
              z = safeNum(Math.max(1.5, 4.2 - a * 12), 2.5, 1);
            } else if (r === "flood" || (!r && (se >= 0.12 || W.includes("flood")))) {
              E = "Flood";
              T = "Hydrological Basin Overflow";
              D = safeNum(Math.min(0.95, 0.74 + se * 0.38), 0.82, 2);
              I = safeNum(Math.min(0.98, 0.8 + se * 0.32), 0.89, 2);
              z = safeNum(Math.max(2, 6.5 - se * 6), 4.5, 1);
            } else if (
              r === "cloud" ||
              (!r && (ue >= 0.25 || (Xe >= 0.45 && h < 0.15) || W.includes("cloud")))
            ) {
              E = "Meteorology";
              T = "Baseline Albedo Map";
              D = safeNum(Math.max(0.05, 0.2 - ue * 0.12), 0.12, 2);
              I = safeNum(Math.min(0.99, 0.91 + ue * 0.08), 0.96, 2);
              z = 72;
            } else {
              E = "Agriculture";
              T = "Vegetation Canopy Plot";
              D = safeNum(Math.min(0.45, 0.15 + Fe * 0.3), 0.25, 2);
              I = safeNum(Math.min(0.98, 0.82 + Fe * 0.22), 0.91, 2);
              z = 48;
            }

            let jt = safeNum(_ * f, 15, 1);
            t({
              width: d,
              height: m,
              eventType: E,
              detectedSubclass: T,
              baseUrgency: D,
              confidence: I,
              deadlineHours: z,
              rawSizeMb: _,
              compressedSizeMb: jt,
              compressionRatio: f,
              shannonEntropy: S,
              spectral: {
                hotspotPct: safeNum(xe * 100, 0, 2),
                smokePct: Math.round(safeNum(Ue * 100, 0)),
                waterPct: Math.round(safeNum(se * 100, 0)),
                vegPct: Math.round(safeNum(Fe * 100, 0)),
                vortexScorePct: Math.round(safeNum(re * 100, 0)),
                insarFringePct: safeNum(ie * 100, 0, 1)
              }
            });
          } catch (d) {
            p(d);
          }
        };
        x.onerror = d => p(d);
        x.src = n;
      } catch (x) {
        p(x);
      }
    });
  }

  function Ve(n) {
    let i = document.createElement("canvas"),
      o = 1280,
      r = 720;
    i.width = o;
    i.height = r;
    let t = i.getContext("2d"),
      p = (d, m) => Math.random() * (m - d) + d;

    if (n === "cloud") {
      let d = t.createLinearGradient(0, 0, o, r);
      d.addColorStop(0, "#cfd6dc");
      d.addColorStop(0.5, "#e2e8f0");
      d.addColorStop(1, "#b8c2cc");
      t.fillStyle = d;
      t.fillRect(0, 0, o, r);
      for (let m = 0; m < 180; m++) {
        let c = p(0, o),
          s = p(0, r),
          l = p(40, 160),
          u = t.createRadialGradient(c, s, 5, c, s, l),
          g = Math.floor(p(220, 252));
        u.addColorStop(0, `rgba(${g},${g},${g},0.55)`);
        u.addColorStop(1, "rgba(210,218,226,0)");
        t.fillStyle = u;
        t.beginPath();
        t.arc(c, s, l, 0, Math.PI * 2);
        t.fill();
      }
      return {
        dataUrl: i.toDataURL("image/png"),
        name: "Met Oceanic Cloud Deck",
        fileName: "met_oceanic_albedo.png",
        presetHint: "cloud",
        sizeOverrideMb: 95
      };
    }

    if (n === "agriculture") {
      t.fillStyle = "#243b24";
      t.fillRect(0, 0, o, r);
      let d = 8,
        m = 5,
        c = o / d,
        s = r / m,
        l = ["#234d20", "#2d6128", "#3c7634", "#4e8842", "#355828", "#5c6e3b"];
      for (let u = 0; u < m; u++) {
        for (let g = 0; g < d; g++) {
          t.fillStyle = l[(u * d + g + Math.floor(p(0, 3))) % l.length];
          t.fillRect(g * c + 4, u * s + 4, c - 8, s - 8);
          if ((u + g) % 3 === 0) {
            t.fillStyle = "#38762d";
            t.beginPath();
            t.arc(g * c + c / 2, u * s + s / 2, Math.min(c, s) * 0.42, 0, Math.PI * 2);
            t.fill();
          }
        }
      }
      return {
        dataUrl: i.toDataURL("image/png"),
        name: "Midwest Agricultural Scan",
        fileName: "midwest_ag_canopy.png",
        presetHint: "agriculture",
        sizeOverrideMb: 75
      };
    }

    if (n === "cyclone") {
      t.fillStyle = "#091426";
      t.fillRect(0, 0, o, r);
      let d = o / 2,
        m = r / 2;
      for (let s = 0; s < 5; s++) {
        let l = (s * Math.PI * 2) / 5;
        for (let u = 42; u < 380; u += 4) {
          let g = l + u * 0.015,
            L = d + Math.cos(g) * u * 1.15,
            A = m + Math.sin(g) * u * 0.88,
            ae = p(28, 74) * (1 - u / 480),
            Z = Math.max(0.12, 0.65 - u / 520),
            H = t.createRadialGradient(L, A, 2, L, A, ae);
          H.addColorStop(0, `rgba(242,246,250,${Z})`);
          H.addColorStop(1, "rgba(200,215,230,0)");
          t.fillStyle = H;
          t.beginPath();
          t.arc(L, A, ae, 0, Math.PI * 2);
          t.fill();
        }
      }
      let c = t.createRadialGradient(d, m, 28, d, m, 180);
      c.addColorStop(0, "rgba(12,24,44,0.95)");
      c.addColorStop(0.22, "rgba(245,248,252,0.92)");
      c.addColorStop(0.58, "rgba(225,234,244,0.75)");
      c.addColorStop(1, "rgba(180,200,220,0)");
      t.fillStyle = c;
      t.beginPath();
      t.arc(d, m, 190, 0, Math.PI * 2);
      t.fill();
      t.fillStyle = "#0c192e";
      t.beginPath();
      t.arc(d, m, 26, 0, Math.PI * 2);
      t.fill();
      return {
        dataUrl: i.toDataURL("image/png"),
        name: "Bay of Bengal Cyclone Vortex",
        fileName: "bengal_cyclone_vortex.png",
        presetHint: "cyclone",
        sizeOverrideMb: 82
      };
    }

    if (n === "earthquake_insar") {
      t.fillStyle = "#1b162a";
      t.fillRect(0, 0, o, r);
      let d = o * 0.52,
        m = r * 0.5,
        c = ["#d926a9", "#22d3ee", "#facc15", "#a855f7", "#06b6d4", "#eab308"];
      for (let s = 320; s >= 20; s -= 22) {
        let l = Math.floor(s / 22) % c.length;
        t.fillStyle = c[l];
        t.globalAlpha = 0.68;
        t.beginPath();
        t.ellipse(d, m, s * 1.35, s * 0.82, -0.35, 0, Math.PI * 2);
        t.fill();
      }
      t.globalAlpha = 1;
      t.strokeStyle = "#111111";
      t.lineWidth = 4;
      t.beginPath();
      t.moveTo(o * 0.18, r * 0.78);
      t.lineTo(o * 0.82, r * 0.22);
      t.stroke();
      return {
        dataUrl: i.toDataURL("image/png"),
        name: "InSAR Fault Line Deformation",
        fileName: "anatolian_insar_fringe.png",
        presetHint: "earthquake_insar",
        sizeOverrideMb: 54
      };
    }

    if (n === "flood") {
      t.fillStyle = "#253924";
      t.fillRect(0, 0, o, r);
      t.fillStyle = "#1d5685";
      t.beginPath();
      t.moveTo(0, r * 0.25);
      t.bezierCurveTo(o * 0.35, r * 0.1, o * 0.55, r * 0.85, o, r * 0.6);
      t.lineTo(o, r);
      t.lineTo(0, r);
      t.closePath();
      t.fill();
      for (let d = 0; d < 90; d++) {
        t.fillStyle =
          d % 2 === 0 ? "rgba(38,108,168,0.55)" : "rgba(54,132,190,0.45)";
        t.beginPath();
        t.ellipse(
          p(80, o - 80),
          p(r * 0.3, r * 0.9),
          p(40, 140),
          p(20, 60),
          p(-0.4, 0.4),
          0,
          Math.PI * 2
        );
        t.fill();
      }
      return {
        dataUrl: i.toDataURL("image/png"),
        name: "Brahmaputra Basin Flood",
        fileName: "brahmaputra_inundation.png",
        presetHint: "flood",
        sizeOverrideMb: 48
      };
    }

    let x = t.createLinearGradient(0, 0, o, r);
    x.addColorStop(0, "#3d3526");
    x.addColorStop(0.45, "#24381f");
    x.addColorStop(1, "#1d2e18");
    t.fillStyle = x;
    t.fillRect(0, 0, o, r);
    for (let d = 0; d < 120; d++) {
      t.fillStyle =
        d % 3 === 0 ? "rgba(85,72,50,0.32)" : "rgba(32,54,28,0.35)";
      t.beginPath();
      t.ellipse(p(0, o), p(0, r), p(30, 120), p(12, 45), p(-0.8, 0.8), 0, Math.PI * 2);
      t.fill();
    }
    for (let d = 0; d < 65; d++) {
      let m = o * 0.44 + p(-90, 260),
        c = r * 0.42 + p(-110, 120),
        s = p(10, 34),
        l = t.createRadialGradient(m, c, 2, m, c, s);
      l.addColorStop(0, "rgba(255,95,25,0.96)");
      l.addColorStop(0.5, "rgba(235,45,15,0.85)");
      l.addColorStop(1, "rgba(180,30,10,0)");
      t.fillStyle = l;
      t.beginPath();
      t.arc(m, c, s, 0, Math.PI * 2);
      t.fill();
    }
    for (let d = 0; d < 110; d++) {
      let m = d / 110,
        c = o * 0.65 - m * o * 0.52 + p(-55, 55),
        s = r * 0.25 + m * r * 0.62 + p(-45, 45),
        l = p(38, 110) * (0.5 + m * 0.7),
        u = t.createRadialGradient(c, s, 4, c, s, l),
        g = Math.floor(p(175, 225));
      u.addColorStop(0, `rgba(${g},${g},${g + 5},0.46)`);
      u.addColorStop(1, "rgba(160,165,170,0)");
      t.fillStyle = u;
      t.beginPath();
      t.arc(c, s, l, 0, Math.PI * 2);
      t.fill();
    }
    return {
      dataUrl: i.toDataURL("image/png"),
      name: "California Wildfire Front",
      fileName: "sierra_wildfire_plume.png",
      presetHint: "wildfire",
      sizeOverrideMb: 68.5
    };
  }

  function Bt(n, i, o = !1) {
    let r = 1 * (n.baseUrgency * n.confidence),
      t = 0.15 * n.ageTicks,
      p = 0.05 * Math.max(0, n.deadlineHours / 24),
      x = i < 30 && !o ? 0.45 : 0,
      d = r + t - p - x,
      m = o ? d * 0.8 : d;
    return {
      totalUtility: Math.max(0.01, Number(m.toFixed(2))),
      exactUtility: Math.max(0.01, Number(m.toFixed(4)))
    };
  }

  function kt(n, i, o) {
    let r = i,
      t = 0,
      p = o < 30,
      x = n.map(m => {
        let c = p || m.rawSizeMb > i * 0.5,
          s = c ? "TRANSMIT_COMPRESSED" : "TRANSMIT_RAW",
          l = Math.max(0.1, c ? m.compressedSizeMb : m.rawSizeMb),
          u = Bt(m, o, c),
          g = u.exactUtility / l;
        return {
          obs: m,
          proposedAction: s,
          sizeMb: l,
          utility: u.totalUtility,
          exactUtility: u.exactUtility,
          density: g
        };
      });
    x.sort((m, c) => c.density - m.density);
    let d = [];
    for (let m of x) {
      let { obs: c, proposedAction: s, sizeMb: l, utility: u, density: g } = m;
      if (l > r && s === "TRANSMIT_RAW" && c.compressedSizeMb <= r) {
        s = "TRANSMIT_COMPRESSED";
        l = Math.max(0.1, c.compressedSizeMb);
        let L = Bt(c, o, !0);
        u = L.totalUtility;
        g = L.exactUtility / l;
      }
      l <= r
        ? ((r = Number((r - l).toFixed(1))),
          (t = Number((t + u).toFixed(2))),
          d.push({
            ...c,
            action: s,
            allocatedMb: l,
            utility: Number(u.toFixed(2)),
            density: Number(g.toFixed(4)),
            explanation:
              s === "TRANSMIT_COMPRESSED"
                ? "Auto-compressed to fit window."
                : "High priority raw transmission."
          }))
        : d.push({
            ...c,
            action: "DEFER",
            allocatedMb: 0,
            utility: Number(u.toFixed(2)),
            density: Number(g.toFixed(4)),
            explanation: "Bandwidth exhausted; deferred with age +1."
          });
    }
    return {
      decisions: d,
      remainingMb: r,
      usedMb: Number((i - r).toFixed(1)),
      totalUtility: Number(t.toFixed(2))
    };
  }

  function Qt(n, i) {
    let o = i,
      r = 0,
      t = [];
    for (let p of n) {
      let x = Number((p.baseUrgency * p.confidence).toFixed(2));
      p.rawSizeMb <= o
        ? ((o = Number((o - p.rawSizeMb).toFixed(1))),
          (r = Number((r + x).toFixed(2))),
          t.push({
            ...p,
            action: "TRANSMIT_RAW",
            allocatedMb: p.rawSizeMb,
            utility: x,
            explanation: "FIFO transmitted."
          }))
        : t.push({
            ...p,
            action: "DROPPED",
            allocatedMb: 0,
            utility: 0,
            explanation: "FIFO dropped: out of bandwidth."
          });
    }
    return {
      decisions: t,
      remainingMb: o,
      usedMb: Number((i - o).toFixed(1)),
      totalUtility: Number(r.toFixed(2))
    };
  }

  function Jt({ state: n, showPulse: i = !1 }) {
    let o = {
      nominal: "bg-[#83A78A]",
      warning: "bg-[#D6A756]",
      critical: "bg-[#C66F66]"
    };
    return e.createElement(
      "span",
      { className: "inline-flex items-center gap-1.5" },
      e.createElement(
        "span",
        { className: "relative flex h-2 w-2" },
        i &&
          e.createElement("span", {
            className: `absolute inline-flex h-full w-full animate-ping opacity-60 ${o[n]}`
          }),
        e.createElement("span", {
          className: `relative inline-flex h-2 w-2 ${o[n]}`
        })
      )
    );
  }

  function Rt({ state: n, label: i }) {
    let r = {
        nominal: {
          icon: At,
          color: "text-[#83A78A]",
          border: "border-[#5E8567]/60",
          bg: "bg-[#3D5544]/25"
        },
        warning: {
          icon: Be,
          color: "text-[#D6A756]",
          border: "border-[#A8843F]/60",
          bg: "bg-[#6B5526]/25"
        },
        critical: {
          icon: Be,
          color: "text-[#C66F66]",
          border: "border-[#9E5249]/60",
          bg: "bg-[#6B3A33]/30"
        }
      }[n],
      t = r.icon;
    return e.createElement(
      "span",
      {
        className: `inline-flex items-center gap-1.5 rounded-[2px] border ${r.border} ${r.bg} px-2 py-0.5`
      },
      e.createElement(t, { className: `w-3 h-3 ${r.color}` }),
      e.createElement(
        "span",
        {
          className:
            "text-[10px] font-mono font-semibold uppercase tracking-wider text-[#E8E7DF]"
        },
        i
      )
    );
  }

  function K({ children: n, tone: i = "neutral" }) {
    return e.createElement(
      "span",
      {
        className: `inline-flex items-center rounded-[2px] border px-1.5 py-px text-[9px] font-mono uppercase tracking-wider font-medium ${
          {
            neutral: "border-[#474A42] text-[#9B9D91] bg-[#33362F]/40",
            amber: "border-[#A8843F] text-[#D6A756] bg-[#6B5526]/30",
            green: "border-[#5E8567] text-[#83A78A] bg-[#3D5544]/30",
            red: "border-[#9E5249] text-[#C66F66] bg-[#6B3A33]/30",
            dim: "border-[#393C35] text-[#7A7D71] bg-transparent"
          }[i]
        }`
      },
      n
    );
  }

  function he({ label: n, value: i, unit: o, valueColor: r, icon: t }) {
    return e.createElement(
      "div",
      { className: "flex flex-col gap-0.5 py-1" },
      e.createElement(
        "div",
        {
          className:
            "flex items-center gap-1 text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
        },
        t,
        n
      ),
      e.createElement(
        "div",
        {
          className: `font-mono text-sm font-semibold tracking-tight tabular-nums ${
            r || "text-[#E8E7DF]"
          }`
        },
        i,
        o &&
          e.createElement(
            "span",
            { className: "text-[#9B9D91] font-normal ml-1 text-[11px]" },
            o
          )
      )
    );
  }

  function ee({
    label: n,
    value: i,
    max: o = 100,
    unit: r = "%",
    color: t = "bg-[#D6A756]",
    trackColor: p = "bg-[#393C35]"
  }) {
    let x = Math.min(100, Math.max(0, (i / Math.max(1, o)) * 100));
    return e.createElement(
      "div",
      { className: "flex flex-col gap-1" },
      e.createElement(
        "div",
        { className: "flex items-baseline justify-between" },
        e.createElement(
          "span",
          {
            className:
              "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
          },
          n
        ),
        e.createElement(
          "span",
          { className: "font-mono text-[11px] text-[#D5D4C9] tabular-nums" },
          Number(i).toFixed(i % 1 === 0 ? 0 : 1),
          r
        )
      ),
      e.createElement(
        "div",
        { className: `h-1 w-full ${p} relative overflow-hidden` },
        e.createElement("div", {
          className: `h-full ${t} transition-all duration-300 ease-out`,
          style: { width: `${x}%` }
        })
      )
    );
  }

  function Ge({ icon: n, title: i, meta: o }) {
    return e.createElement(
      "div",
      {
        className:
          "flex items-center justify-between pb-2.5 border-b border-[#393C35]"
      },
      e.createElement(
        "div",
        { className: "flex items-center gap-2" },
        n && e.createElement("span", { className: "text-[#D6A756]" }, n),
        e.createElement(
          "h2",
          {
            className:
              "text-[11px] font-mono uppercase tracking-[0.16em] text-[#E8E7DF] font-semibold"
          },
          i
        )
      ),
      o &&
        e.createElement(
          "div",
          { className: "text-[10px] font-mono text-[#9B9D91]" },
          o
        )
    );
  }

  function ve({ content: n, children: i }) {
    return e.createElement(
      "div",
      { className: "relative group/tt" },
      i,
      e.createElement(
        "div",
        {
          className:
            "pointer-events-none absolute bottom-full left-1/2 z-50 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-[2px] border border-[#393C35] bg-[#20231F] px-2 py-1 text-[10px] font-mono text-[#D5D4C9] opacity-0 shadow-lg transition-opacity duration-150 group-hover/tt:opacity-100"
        },
        n
      )
    );
  }

  function Pt({ value: n }) {
    let i = Math.round(n * 5),
      o =
        n >= 0.85
          ? "bg-[#C66F66]"
          : n >= 0.5
          ? "bg-[#D6A756]"
          : "bg-[#83A78A]";
    return e.createElement(
      "div",
      { className: "flex items-center gap-1.5" },
      e.createElement(
        "div",
        { className: "flex gap-0.5" },
        Array.from({ length: 5 }).map((r, t) =>
          e.createElement("div", {
            key: t,
            className: `h-2 w-1 ${t < i ? o : "bg-[#393C35]"}`
          })
        )
      ),
      e.createElement(
        "span",
        { className: "font-mono text-[10px] text-[#D5D4C9] tabular-nums" },
        n.toFixed(2)
      )
    );
  }

  function te({ label: n, value: i, unit: o }) {
    return e.createElement(
      "div",
      {
        className:
          "flex items-baseline justify-between py-1 border-b border-[#33362F]/60 last:border-0"
      },
      e.createElement(
        "span",
        {
          className:
            "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
        },
        n
      ),
      e.createElement(
        "span",
        {
          className:
            "font-mono text-[11px] text-[#E8E7DF] tabular-nums truncate max-w-[160px]",
          title: String(i)
        },
        i,
        o &&
          e.createElement(
            "span",
            { className: "text-[#9B9D91] ml-0.5 text-[10px]" },
            o
          )
      )
    );
  }

  function Tt({ action: n }) {
    return n === "TRANSMIT_RAW"
      ? e.createElement(K, { tone: "green" }, "RAW TX")
      : n === "TRANSMIT_COMPRESSED"
      ? e.createElement(K, { tone: "amber" }, "COMP TX")
      : n === "DEFER"
      ? e.createElement(K, { tone: "dim" }, "DEFER")
      : e.createElement(K, { tone: "red" }, "DROPPED");
  }

  var ea = [
      { type: "wildfire", label: "+ Wildfire", icon: tt, tone: "text-[#C66F66]" },
      { type: "cyclone", label: "+ Cyclone", icon: dt, tone: "text-[#D6A756]" },
      {
        type: "earthquake_insar",
        label: "+ Earthquake (InSAR)",
        icon: ke,
        tone: "text-[#C66F66]"
      },
      { type: "flood", label: "+ Flood", icon: at, tone: "text-[#6B96B8]" },
      {
        type: "agriculture",
        label: "+ Agriculture",
        icon: nt,
        tone: "text-[#83A78A]"
      },
      {
        type: "cloud",
        label: "+ Cloud Deck",
        icon: ot,
        tone: "text-[#9B9D91]"
      }
    ],
    ta = {
      Wildfire: e.createElement(tt, { className: "w-2.5 h-2.5" }),
      Cyclone: e.createElement(dt, { className: "w-2.5 h-2.5" }),
      Earthquake: e.createElement(ke, { className: "w-2.5 h-2.5" }),
      Flood: e.createElement(at, { className: "w-2.5 h-2.5" }),
      Agriculture: e.createElement(nt, { className: "w-2.5 h-2.5" }),
      Meteorology: e.createElement(ot, { className: "w-2.5 h-2.5" })
    };

  function It(n) {
    switch (n) {
      case "Wildfire":
        return "red";
      case "Cyclone":
        return "amber";
      case "Earthquake":
        return "red";
      case "Flood":
        return "neutral";
      case "Agriculture":
        return "green";
      case "Meteorology":
        return "dim";
      default:
        return "neutral";
    }
  }

  function ct() {
    let [n, i] = M([]),
      [o, r] = M(120),
      [t, p] = M(85),
      [x, d] = M(!1),
      [m, c] = M(1),
      [s, l] = M(!1),
      [u, g] = M(null),
      [L, A] = M(!1),
      [ae, Z] = M(() => new Date().toISOString().slice(11, 19)),
      [H, le] = M(!1),
      [ye, ne] = M(null),
      Ne = R(null),
      [we, Pe] = M(!0),
      [de, pe] = M("connecting"),
      ce = R(0),
      me = R(!1),
      [j, Te] = M(!0),
      [X, Ce] = M(20),
      [Me, Ae] = M(20),
      [$, De] = M(null),
      Se = R(null),
      Y = R(20);

    J(() => {
      if (!we) {
        pe("paused");
        return;
      }
      let a = !1,
        b = async () => {
          if (me.current) return;
          me.current = !0;
          let f = !1;
          try {
            let F = await fetch(`${Et}/api/observations?since=${ce.current}`);
            if (!F.ok) throw new Error(`HTTP ${F.status}`);
            let { latest: _, items: E } = await F.json();
            if (a) return;
            if ((pe("live"), E.length > 0)) {
              f = !0;
              l(!0);
              let T = [];
              for (let D of E) {
                try {
                  let I = await (await fetch(`${Et}${D.url}`)).blob(),
                    z = await new Promise(Le => {
                      let $e = new FileReader();
                      $e.onload = _e => Le(_e.target.result);
                      $e.readAsDataURL(I);
                    }),
                    W = await qe(z, D.fileName, D.sizeBytes, D.presetHint || null),
                    rawMb = D.sizeOverrideMb || W.rawSizeMb,
                    compMb = Number((rawMb * W.compressionRatio).toFixed(1)),
                    baseTitle = D.fileName
                      .replace(/\.[^/.]+$/, "")
                      .replace(/_/g, " ");
                  T.push({
                    id: `OBS-W${String(D.seq).padStart(3, "0")}`,
                    name: D.displayName ? `${baseTitle} (${D.displayName})` : baseTitle,
                    fileName: D.fileName,
                    imageSrc: z,
                    ...W,
                    rawSizeMb: rawMb,
                    compressedSizeMb: compMb,
                    ageTicks: 0
                  });
                } catch (I) {
                  console.warn("Auto-ingest failed for", D.fileName, I);
                }
              }
              if (a) return;
              if (T.length > 0) {
                let D = [...T].reverse();
                i(I => {
                  let z = new Set(I.map(W => W.id));
                  return [...D.filter(W => !z.has(W.id)), ...I];
                });
                g(D[0].id);
              }
            }
            ce.current = _;
          } catch (err) {
            console.debug("Auto-ingest poll error:", err);
            a || pe("offline");
          } finally {
            f && l(!1);
            me.current = !1;
          }
        };
      b();
      let v = setInterval(b, Yt);
      return () => {
        a = !0;
        clearInterval(v);
      };
    }, [we]);

    let Ie = {
        live: "#6FBF73",
        offline: "#D9694F",
        connecting: "#D6A756",
        paused: "#9B9D91"
      }[de],
      Oe = {
        live: "Live",
        offline: "Offline",
        connecting: "Connecting",
        paused: "Paused"
      }[de];

    J(() => {
      let a = setInterval(() => {
        Z(new Date().toISOString().slice(11, 19));
      }, 1e3);
      return () => clearInterval(a);
    }, []);

    let S = x ? 18 : t,
      O = x || H ? "critical" : S < 30 ? "warning" : "nominal",
      xe =
        O === "nominal"
          ? "All Systems Nominal"
          : O === "warning"
          ? "Power Constraint"
          : "Critical Alert",
      oe = ht(async (preserveIngested = !1) => {
        l(!0);
        let a = [
            "cloud",
            "agriculture",
            "cyclone",
            "earthquake_insar",
            "flood",
            "wildfire"
          ],
          b = [];
        for (let v = 0; v < a.length; v++) {
          let f = Ve(a[v]),
            F = await qe(f.dataUrl, f.fileName, null, f.presetHint),
            _ = f.sizeOverrideMb || F.rawSizeMb,
            E = Number((_ * F.compressionRatio).toFixed(1));
          b.push({
            id: `OBS-0${v + 1}`,
            name: f.name,
            fileName: f.fileName,
            imageSrc: f.dataUrl,
            ...F,
            rawSizeMb: _,
            compressedSizeMb: E,
            ageTicks: 0
          });
        }
        i(prev => {
          if (preserveIngested && prev.length > 0) {
            let defaultIds = new Set(b.map(item => item.id));
            let customItems = prev.filter(item => !defaultIds.has(item.id));
            return [...customItems, ...b];
          }
          return b;
        });
        g(prevSel => prevSel || "OBS-06");
        ne(null);
        l(!1);
      }, []);

    J(() => {
      oe(!0);
    }, [oe]);

    let Ue = () => {
        n.length !== 0 &&
          (le(!0),
          i(a =>
            a.map((b, v) => {
              if (v === 0) {
                let f = b.name.replace(" [CORRUPTED: SEU BIT-FLIP]", "");
                return {
                  ...b,
                  confidence: 0.12,
                  baseUrgency: 0.05,
                  name: `${f} [CORRUPTED: SEU BIT-FLIP]`
                };
              }
              return b;
            })
          ),
          g(n[0].id),
          ne(
            "WARNING: Cosmic ray strike detected! SEU bit-flip corrupted telemetry pointer at index 0. Edge ECC isolation active."
          ),
          setTimeout(() => {
            le(!1);
          }, 4500));
      },
      se = async a => {
        if (!a || a.length === 0) return;
        l(!0);
        let b = [];
        for (let v = 0; v < a.length; v++) {
          let f = a[v];
          if (!f.type.startsWith("image/")) continue;
          let F = await new Promise(E => {
              let T = new FileReader();
              T.onload = D => E(D.target.result);
              T.readAsDataURL(f);
            }),
            _ = await qe(F, f.name, f.size, null);
          b.push({
            id: `OBS-U${Math.floor(100 + Math.random() * 900)}`,
            name: f.name.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
            fileName: f.name,
            imageSrc: F,
            ..._,
            ageTicks: 0
          });
        }
        b.length > 0 && (i(v => [...b, ...v]), g(b[0].id));
        l(!1);
      },
      Fe = async a => {
        l(!0);
        let b = Ve(a),
          v = await qe(b.dataUrl, b.fileName, null, b.presetHint),
          f = b.sizeOverrideMb || v.rawSizeMb,
          F = Number((f * v.compressionRatio).toFixed(1)),
          _ = {
            id: `OBS-S${Math.floor(100 + Math.random() * 900)}`,
            name: b.name,
            fileName: b.fileName,
            imageSrc: b.dataUrl,
            ...v,
            rawSizeMb: f,
            compressedSizeMb: F,
            ageTicks: 0
          };
        i(E => [_, ...E]);
        g(_.id);
        l(!1);
      },
      ue = () => {
        if (n.length === 0) return;
        let a = kt(n, o, S),
          b = {};
        a.decisions.forEach(f => {
          b[f.id] = f;
        });
        let v = [];
        n.forEach(f => {
          let F = b[f.id];
          (!F || F.action === "DEFER") &&
            v.push({ ...f, ageTicks: f.ageTicks + 1 });
        });
        De({
          n: m,
          raw: a.decisions.filter(f => f.action === "TRANSMIT_RAW").length,
          compressed: a.decisions.filter(
            f => f.action === "TRANSMIT_COMPRESSED"
          ).length,
          deferred: v.length,
          usedMb: a.usedMb
        });
        i(v);
        v.length > 0 && !v.some(f => f.id === u) && g(v[0].id);
        c(f => f + 1);
        ne(null);
      };

    Se.current = ue;

    J(() => {
      if (!j) return;
      Y.current = X;
      Ae(X);
      let a = setInterval(() => {
        Y.current -= 1;
        Y.current <= 0 && (Se.current?.(), (Y.current = X));
        Ae(Y.current);
      }, 1e3);
      return () => clearInterval(a);
    }, [j, X]);

    let U = Ee(() => kt(n, o, S), [n, o, S]),
      P = Ee(() => Qt(n, o), [n, o]),
      be = Ee(() => Number(n.reduce((a, b) => a + b.rawSizeMb, 0).toFixed(1)), [n]),
      h = Ee(() => n.find(a => a.id === u) || n[0] || null, [n, u]),
      Xe = be > 0 ? Math.min(100, (o / be) * 100) : 0,
      q = S < 30,
      ze = U.totalUtility - P.totalUtility,
      Ke = P.totalUtility > 0 ? ((ze / P.totalUtility) * 100).toFixed(1) : "0.0",
      re = U.decisions.filter(a => a.action === "TRANSMIT_RAW").length,
      ie = U.decisions.filter(a => a.action === "TRANSMIT_COMPRESSED").length,
      Ye = U.decisions.filter(a => a.action === "DEFER").length;

    return e.createElement(
      "div",
      {
        className:
          "min-h-screen bg-[#171916] text-[#E8E7DF] font-sans antialiased selection:bg-[#D6A756]/30 selection:text-[#F4F3EC]"
      },
      e.createElement("input", {
        ref: Ne,
        type: "file",
        accept: "image/*",
        multiple: !0,
        onChange: a => {
          se(a.target.files);
          a.target.value = "";
        },
        className: "hidden"
      }),
      e.createElement(
        "header",
        {
          className:
            "sticky top-0 z-40 border-b border-[#393C35] bg-[#171916]/95 backdrop-blur-sm"
        },
        e.createElement(
          "div",
          {
            className:
              "flex flex-wrap items-center justify-between gap-4 px-4 py-2.5 max-w-[1920px] mx-auto"
          },
          e.createElement(
            "div",
            { className: "flex items-center gap-3" },
            e.createElement(
              "div",
              {
                className:
                  "flex h-7 w-7 items-center justify-center border border-[#A8843F] bg-[#6B5526]/20"
              },
              e.createElement(vt, { className: "w-3.5 h-3.5 text-[#D6A756]" })
            ),
            e.createElement(
              "div",
              { className: "flex items-baseline gap-2.5" },
              e.createElement(
                "span",
                { className: "text-sm font-semibold tracking-tight text-[#F4F3EC]" },
                "SpaceEdge",
                e.createElement("span", { className: "text-[#D6A756]" }, " AI")
              ),
              e.createElement(
                "span",
                {
                  className:
                    "hidden sm:inline text-[10px] font-mono uppercase tracking-[0.18em] text-[#9B9D91] border-l border-[#393C35] pl-2.5"
                },
                "Orbital Mission Control"
              )
            )
          ),
          e.createElement(
            "div",
            { className: "hidden lg:flex items-center gap-5" },
            e.createElement(
              "div",
              { className: "flex items-center gap-2" },
              e.createElement(Jt, { state: O, showPulse: O !== "nominal" }),
              e.createElement(Rt, { state: O, label: xe })
            ),
            e.createElement(
              "div",
              {
                className: "flex items-center gap-1.5 border-l border-[#393C35] pl-5"
              },
              e.createElement(ge, { className: "w-3 h-3 text-[#83A78A]" }),
              e.createElement(
                "span",
                {
                  className:
                    "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                },
                "Pass"
              ),
              e.createElement(
                "span",
                {
                  className:
                    "font-mono text-xs font-semibold text-[#E8E7DF] tabular-nums"
                },
                "#",
                m
              )
            ),
            e.createElement(
              "div",
              {
                className: "flex items-center gap-1.5 border-l border-[#393C35] pl-5"
              },
              e.createElement(
                "span",
                {
                  className:
                    "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                },
                "Buffer"
              ),
              e.createElement(
                "span",
                {
                  className:
                    "font-mono text-xs font-semibold text-[#E8E7DF] tabular-nums"
                },
                n.length,
                " obs"
              )
            ),
            $ &&
              e.createElement(
                "div",
                {
                  className:
                    "flex items-center gap-1.5 border-l border-[#393C35] pl-5",
                  title: `Result of pass #${$.n}`
                },
                e.createElement(
                  "span",
                  {
                    className:
                      "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                  },
                  "Last"
                ),
                e.createElement(
                  "span",
                  { className: "font-mono text-[10px] text-[#E8E7DF] tabular-nums" },
                  "#",
                  $.n,
                  " · ",
                  $.raw,
                  " full · ",
                  $.compressed,
                  " comp · ",
                  $.deferred,
                  " held · ",
                  $.usedMb,
                  " MB"
                )
              ),
            e.createElement(
              "div",
              {
                className: "flex items-center gap-1.5 border-l border-[#393C35] pl-5"
              },
              e.createElement(
                "span",
                {
                  className:
                    "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                },
                "UTC"
              ),
              e.createElement(
                "span",
                {
                  className:
                    "font-mono text-xs font-semibold text-[#E8E7DF] tabular-nums"
                },
                ae
              )
            )
          ),
          e.createElement(
            "div",
            { className: "flex items-center gap-2" },
            e.createElement(
              "button",
              {
                onClick: () => Pe(a => !a),
                title:
                  de === "offline"
                    ? "Watcher not reachable. Start it with: uvicorn server:app --port 8000"
                    : "Auto-ingest images dropped into the watched incoming/ folder. Click to pause or resume.",
                className:
                  "flex items-center gap-1.5 border border-[#474A42] bg-[#292C27] hover:bg-[#33362F] px-2.5 py-1.5 text-[11px] font-semibold text-[#E8E7DF] transition-colors cursor-pointer"
              },
              e.createElement("span", {
                className: "w-1.5 h-1.5 rounded-full",
                style: { backgroundColor: Ie }
              }),
              e.createElement("span", null, "Auto-Ingest: ", Oe)
            ),
            e.createElement(
              "button",
              {
                onClick: () => Ne.current?.click(),
                className:
                  "flex items-center gap-1.5 border border-[#474A42] bg-[#292C27] hover:bg-[#33362F] px-2.5 py-1.5 text-[11px] font-semibold text-[#E8E7DF] transition-colors cursor-pointer"
              },
              e.createElement(yt, { className: "w-3 h-3 text-[#D6A756]" }),
              e.createElement("span", null, "Upload Imagery")
            ),
            e.createElement(
              "div",
              { className: "flex items-stretch" },
              e.createElement(
                "button",
                {
                  onClick: () => Te(a => !a),
                  title: j
                    ? "Automatic passes ON. Click to switch to manual."
                    : "Automatic passes OFF. Click to enable.",
                  className: `relative overflow-hidden flex items-center gap-1.5 border px-2.5 py-1.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    j
                      ? "border-[#D6A756] text-[#D6A756] bg-[#2A271D]"
                      : "border-[#474A42] text-[#E8E7DF] bg-[#292C27] hover:bg-[#33362F]"
                  }`
                },
                j &&
                  n.length > 0 &&
                  e.createElement("span", {
                    className: "absolute inset-y-0 left-0 bg-[#D6A756]/20",
                    style: {
                      width: `${(1 - Me / X) * 100}%`,
                      transition: "width 1s linear"
                    }
                  }),
                e.createElement(ge, { className: "relative w-3 h-3" }),
                e.createElement(
                  "span",
                  { className: "relative tabular-nums" },
                  "Auto Pass: ",
                  j ? (n.length === 0 ? "Idle" : `${Me}s`) : "Off"
                )
              ),
              j &&
                e.createElement(
                  "button",
                  {
                    onClick: () => Ce(a => pt[(pt.indexOf(a) + 1) % pt.length]),
                    title: "Time between automatic passes. Click to change.",
                    className:
                      "border border-l-0 border-[#D6A756] bg-[#2A271D] px-2 py-1.5 text-[11px] font-mono text-[#D6A756] hover:bg-[#33301F] cursor-pointer tabular-nums"
                  },
                  X,
                  "s"
                )
            ),
            e.createElement(
              "button",
              {
                onClick: ue,
                disabled: n.length === 0,
                className:
                  "flex items-center gap-1.5 bg-[#D6A756] hover:bg-[#E4B667] disabled:opacity-40 disabled:cursor-not-allowed px-3 py-1.5 text-[11px] font-bold text-[#171916] transition-colors cursor-pointer"
              },
              e.createElement(Nt, { className: "w-3 h-3 fill-current" }),
              e.createElement("span", null, "Execute Pass")
            ),
            e.createElement(
              "button",
              {
                onClick: () => oe(!1),
                title: "Reset Default Sensor Batch",
                className:
                  "flex items-center gap-1 border border-[#393C35] bg-[#20231F] hover:border-[#5C5F55] px-2 py-1.5 text-[11px] font-medium text-[#9B9D91] hover:text-[#E8E7DF] transition-colors cursor-pointer"
              },
              e.createElement(wt, { className: "w-3 h-3" })
            ),
            L
              ? e.createElement(
                  "div",
                  {
                    className:
                      "flex items-center gap-1 border border-[#9E5249] bg-[#6B3A33]/25 px-2 py-1"
                  },
                  e.createElement(
                    "span",
                    { className: "text-[10px] font-mono text-[#C66F66]" },
                    "Purge Buffer?"
                  ),
                  e.createElement(
                    "button",
                    {
                      onClick: () => {
                        i([]);
                        g(null);
                        ne(null);
                        A(!1);
                      },
                      className:
                        "bg-[#C66F66] hover:bg-[#E08A80] px-2 py-0.5 text-[10px] font-bold text-[#171916] cursor-pointer"
                    },
                    "Confirm"
                  ),
                  e.createElement(
                    "button",
                    {
                      onClick: () => A(!1),
                      className:
                        "text-[#9B9D91] hover:text-[#E8E7DF] px-1 cursor-pointer"
                    },
                    e.createElement(St, { className: "w-3 h-3" })
                  )
                )
              : e.createElement(
                  "button",
                  {
                    onClick: () => A(!0),
                    title: "Purge Flight Buffer",
                    className:
                      "flex items-center gap-1 border border-[#393C35] bg-transparent hover:border-[#9E5249] hover:text-[#C66F66] px-2 py-1.5 text-[11px] font-medium text-[#9B9D91] transition-colors cursor-pointer"
                  },
                  e.createElement(Ct, { className: "w-3 h-3" })
                )
          )
        )
      ),
      e.createElement(
        "div",
        { className: "max-w-[1920px] mx-auto" },
        e.createElement(
          "div",
          {
            className:
              "grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-[#393C35] bg-[#1C1E1A] px-4 py-2.5"
          },
          e.createElement(he, {
            label: "Active Obs",
            value: n.length,
            icon: e.createElement(ke, { className: "w-3 h-3 text-[#D6A756]" })
          }),
          e.createElement(he, {
            label: "Onboard Buffer",
            value: be.toFixed(1),
            unit: "MB",
            icon: e.createElement(et, { className: "w-3 h-3 text-[#D6A756]" })
          }),
          e.createElement(he, {
            label: "Ground Link",
            value: o,
            unit: "MB",
            icon: e.createElement(ge, { className: "w-3 h-3 text-[#83A78A]" })
          }),
          e.createElement(he, {
            label: "EPS Battery",
            value: S,
            unit: "%",
            valueColor: q ? "text-[#C66F66]" : "text-[#83A78A]",
            icon: q
              ? e.createElement(lt, { className: "w-3 h-3 text-[#C66F66]" })
              : e.createElement(Mt, { className: "w-3 h-3 text-[#83A78A]" })
          }),
          e.createElement(he, {
            label: "Orbit Pass",
            value: `#${m}`,
            icon: e.createElement(it, { className: "w-3 h-3 text-[#D6A756]" })
          }),
          e.createElement(he, {
            label: "System Status",
            value:
              O === "nominal"
                ? "Nominal"
                : O === "warning"
                ? "Constrained"
                : "Critical",
            valueColor:
              O === "nominal"
                ? "text-[#83A78A]"
                : O === "warning"
                ? "text-[#D6A756]"
                : "text-[#C66F66]"
          })
        ),
        e.createElement(
          "div",
          {
            className:
              "flex flex-wrap items-center justify-between gap-3 px-4 py-2 bg-[#20231F] border-b border-[#393C35]"
          },
          e.createElement(
            "div",
            { className: "flex items-center gap-2.5" },
            e.createElement(Ft, {
              className: `w-3.5 h-3.5 ${
                H ? "text-[#C66F66] animate-bounce" : "text-[#D6A756]"
              }`
            }),
            e.createElement(
              "span",
              {
                className:
                  "text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#E8E7DF]"
              },
              "Orbital Radiation Fault Tolerance (SEU):"
            ),
            ye
              ? e.createElement(
                  "span",
                  {
                    className: "text-[10px] font-mono text-[#C66F66] animate-pulse"
                  },
                  ye
                )
              : e.createElement(
                  "span",
                  { className: "text-[10px] font-mono text-[#9B9D91]" },
                  "EDAC Memory Scrubbing Nominal · Zero Uncorrected Single-Event Upsets"
                )
          ),
          e.createElement(
            "button",
            {
              onClick: Ue,
              disabled: n.length === 0,
              className:
                "border border-[#9E5249] bg-[#6B3A33]/30 hover:bg-[#6B3A33]/50 disabled:opacity-40 px-2.5 py-1 text-[10px] font-mono text-[#E08A80] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            },
            "⚡ Inject SEU Radiation Error (Bit-Flip)"
          )
        ),
        e.createElement(
          "div",
          {
            className:
              "flex flex-wrap items-center justify-between gap-3 px-4 py-2 border-b border-[#393C35] bg-[#171916]"
          },
          e.createElement(
            "span",
            {
              className:
                "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
            },
            "Simulate Onboard Sensor Stream Ingestion"
          ),
          e.createElement(
            "div",
            { className: "flex flex-wrap items-center gap-1.5" },
            ea.map(a => {
              let b = a.icon;
              return e.createElement(
                "button",
                {
                  key: a.type,
                  onClick: () => Fe(a.type),
                  className:
                    "flex items-center gap-1.5 border border-[#393C35] bg-[#20231F] hover:border-[#5C5F55] hover:bg-[#292C27] px-2.5 py-1 text-[10px] font-mono text-[#D5D4C9] transition-colors cursor-pointer"
                },
                e.createElement(b, { className: `w-3 h-3 ${a.tone}` }),
                a.label
              );
            })
          )
        ),
        e.createElement(
          "div",
          {
            className:
              "px-4 py-3 space-y-3 border-b border-[#393C35] bg-[#171916]"
          },
          e.createElement(Ge, {
            icon: e.createElement(Dt, { className: "w-3.5 h-3.5" }),
            title: "Mission Constraints & Link Budget",
            meta: "Ground Segment Pass Parameters"
          }),
          e.createElement(
            "div",
            { className: "grid grid-cols-1 gap-6 lg:grid-cols-3" },
            e.createElement(
              "div",
              { className: "space-y-1.5" },
              e.createElement(
                "div",
                { className: "flex items-baseline justify-between" },
                e.createElement(
                  "div",
                  { className: "flex items-center gap-1.5" },
                  e.createElement(ge, { className: "w-3 h-3 text-[#83A78A]" }),
                  e.createElement(
                    "span",
                    {
                      className:
                        "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                    },
                    "Ground Pass Downlink Window"
                  )
                ),
                e.createElement(
                  "span",
                  {
                    className:
                      "font-mono text-xs font-bold text-[#83A78A] tabular-nums"
                  },
                  o,
                  " ",
                  e.createElement(
                    "span",
                    { className: "text-[#9B9D91] font-normal" },
                    "MB"
                  )
                )
              ),
              e.createElement("input", {
                type: "range",
                min: 40,
                max: 300,
                step: 10,
                value: o,
                onChange: a => r(Number(a.target.value)),
                className: "se-slider w-full"
              }),
              e.createElement(
                "div",
                {
                  className: "flex justify-between text-[9px] font-mono text-[#7A7D71]"
                },
                e.createElement("span", null, "40 MB"),
                e.createElement(
                  "span",
                  { className: "text-[#D5D4C9]" },
                  "Total Buffer Demand: ",
                  be.toFixed(1),
                  " MB"
                ),
                e.createElement("span", null, "300 MB")
              ),
              e.createElement(
                "div",
                { className: "pt-0.5" },
                e.createElement(ee, {
                  label: "Pass Capacity vs Buffer",
                  value: Xe,
                  color: "bg-[#83A78A]"
                })
              )
            ),
            e.createElement(
              "div",
              { className: "space-y-1.5" },
              e.createElement(
                "div",
                { className: "flex items-baseline justify-between" },
                e.createElement(
                  "div",
                  { className: "flex items-center gap-1.5" },
                  e.createElement(lt, {
                    className: `w-3 h-3 ${
                      q ? "text-[#C66F66]" : "text-[#83A78A]"
                    }`
                  }),
                  e.createElement(
                    "span",
                    {
                      className:
                        "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                    },
                    "EPS Battery Reserve"
                  )
                ),
                e.createElement(
                  "span",
                  {
                    className: `font-mono text-xs font-bold tabular-nums ${
                      q ? "text-[#C66F66]" : "text-[#83A78A]"
                    }`
                  },
                  S,
                  "%"
                )
              ),
              e.createElement("input", {
                type: "range",
                min: 10,
                max: 100,
                step: 5,
                disabled: x,
                value: S,
                onChange: a => p(Number(a.target.value)),
                className: "se-slider w-full"
              }),
              e.createElement(
                "div",
                {
                  className: "flex justify-between text-[9px] font-mono text-[#7A7D71]"
                },
                e.createElement("span", null, "10%"),
                e.createElement(
                  "span",
                  { className: q ? "text-[#C66F66]" : "text-[#D5D4C9]" },
                  q ? "LOW POWER — COMPRESSION FORCED" : "Nominal Bus Voltage"
                ),
                e.createElement("span", null, "100%")
              ),
              e.createElement(
                "div",
                { className: "pt-0.5" },
                e.createElement(ee, {
                  label: "Bus Charge Level",
                  value: S,
                  color: q ? "bg-[#C66F66]" : "bg-[#83A78A]"
                })
              )
            ),
            e.createElement(
              "div",
              { className: "space-y-1.5" },
              e.createElement(
                "div",
                { className: "flex items-center gap-1.5" },
                e.createElement(Be, {
                  className: `w-3 h-3 ${
                    x ? "text-[#C66F66]" : "text-[#D6A756]"
                  }`
                }),
                e.createElement(
                  "span",
                  {
                    className:
                      "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                  },
                  "Power Anomaly Simulation"
                )
              ),
              e.createElement(
                "div",
                { className: "pt-0.5" },
                e.createElement(
                  "button",
                  {
                    onClick: () => d(!x),
                    className: `w-full flex items-center justify-center gap-2 border px-3 py-2 text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      x
                        ? "border-[#C66F66] bg-[#6B3A33]/35 text-[#E08A80]"
                        : "border-[#474A42] bg-[#292C27] text-[#E8E7DF] hover:border-[#A8843F] hover:text-[#D6A756]"
                    }`
                  },
                  e.createElement(Be, {
                    className: `w-3.5 h-3.5 ${
                      x ? "text-[#C66F66] animate-pulse" : "text-[#D6A756]"
                    }`
                  }),
                  x ? "ANOMALY ACTIVE — 18% EPS CLAMP" : "TRIGGER ECLIPSE ANOMALY"
                ),
                e.createElement(
                  "p",
                  {
                    className:
                      "pt-1.5 text-[10px] font-mono text-[#9B9D91] leading-relaxed"
                  },
                  "Simulates solar array shadowing. Clamps EPS reserve to 18% and forces Shannon entropy lossy compression across all scheduled downlinks."
                )
              )
            )
          )
        ),
        e.createElement(
          "div",
          {
            className: "grid grid-cols-1 lg:grid-cols-12 border-b border-[#393C35]"
          },
          e.createElement(
            "div",
            {
              className:
                "lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#393C35] px-4 py-3 space-y-3"
            },
            e.createElement(Ge, {
              icon: e.createElement(et, { className: "w-3.5 h-3.5" }),
              title: "Onboard Flight Buffer",
              meta: `${n.length} observations queued`
            }),
            s && n.length === 0
              ? e.createElement(
                  "div",
                  { className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3" },
                  Array.from({ length: 6 }).map((a, b) =>
                    e.createElement(
                      "div",
                      {
                        key: b,
                        className: "border border-[#393C35] bg-[#20231F] animate-pulse"
                      },
                      e.createElement("div", { className: "h-24 bg-[#292C27]" }),
                      e.createElement(
                        "div",
                        { className: "p-2.5 space-y-2" },
                        e.createElement("div", {
                          className: "h-2 bg-[#33362F] w-2/3"
                        }),
                        e.createElement("div", {
                          className: "h-2 bg-[#33362F] w-1/2"
                        })
                      )
                    )
                  )
                )
              : n.length === 0
              ? e.createElement(
                  "div",
                  {
                    className:
                      "border border-dashed border-[#393C35] py-12 text-center"
                  },
                  e.createElement(je, {
                    className: "w-5 h-5 text-[#5C5F55] mx-auto mb-2"
                  }),
                  e.createElement(
                    "p",
                    { className: "text-[11px] font-mono text-[#9B9D91]" },
                    "Onboard flight buffer is empty."
                  ),
                  e.createElement(
                    "p",
                    { className: "text-[10px] font-mono text-[#7A7D71] mt-0.5" },
                    "Trigger a synthetic sensor stream above or upload satellite imagery to inspect."
                  )
                )
              : e.createElement(
                  "div",
                  { className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3" },
                  n.map(a => {
                    let b = h && a.id === h.id;
                    return e.createElement(
                      "button",
                      {
                        key: a.id,
                        onClick: () => g(a.id),
                        className: `group relative border bg-[#20231F] text-left transition-all cursor-pointer ${
                          b
                            ? "border-[#D6A756] bg-[#292C27]/70"
                            : "border-[#393C35] hover:border-[#5C5F55]"
                        }`
                      },
                      e.createElement(
                        "div",
                        {
                          className:
                            "relative h-24 overflow-hidden bg-[#131512] border-b border-[#393C35]"
                        },
                        e.createElement("img", {
                          src: a.imageSrc,
                          alt: a.name,
                          className:
                            "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        }),
                        e.createElement(
                          "span",
                          {
                            className:
                              "absolute top-1.5 left-1.5 bg-[#131512]/90 border border-[#393C35] px-1.5 py-px text-[9px] font-mono font-semibold text-[#E8E7DF]"
                          },
                          a.id
                        ),
                        a.ageTicks > 0 &&
                          e.createElement(
                            "span",
                            {
                              className:
                                "absolute top-1.5 right-1.5 bg-[#6B3A33]/90 border border-[#9E5249] px-1 py-px text-[9px] font-mono text-[#E08A80]"
                            },
                            "+",
                            a.ageTicks,
                            "t"
                          )
                      ),
                      e.createElement(
                        "div",
                        { className: "p-2.5 space-y-1.5" },
                        e.createElement(
                          "div",
                          { className: "flex items-center justify-between" },
                          e.createElement(
                            K,
                            { tone: It(a.eventType) },
                            e.createElement(
                              "span",
                              { className: "flex items-center gap-1" },
                              ta[a.eventType],
                              a.eventType
                            )
                          ),
                          e.createElement(
                            "span",
                            {
                              className:
                                "font-mono text-[10px] text-[#83A78A] tabular-nums"
                            },
                            (a.confidence * 100).toFixed(0),
                            "% AI"
                          )
                        ),
                        e.createElement(
                          "div",
                          {
                            className:
                              "text-[11px] font-medium text-[#E8E7DF] truncate",
                            title: a.name
                          },
                          a.name
                        ),
                        e.createElement(
                          "div",
                          { className: "flex items-center justify-between pt-0.5" },
                          e.createElement(Pt, { value: a.baseUrgency }),
                          e.createElement(
                            "span",
                            {
                              className:
                                "font-mono text-[10px] text-[#9B9D91] tabular-nums"
                            },
                            a.rawSizeMb,
                            " MB"
                          )
                        )
                      ),
                      b &&
                        e.createElement("div", {
                          className: "absolute left-0 top-0 h-full w-0.5 bg-[#D6A756]"
                        })
                    );
                  })
                )
          ),
          e.createElement(
            "div",
            { className: "lg:col-span-5 px-4 py-3 space-y-3 bg-[#1C1E1A]" },
            e.createElement(Ge, {
              icon: e.createElement(je, { className: "w-3.5 h-3.5" }),
              title: "Observation Intelligence",
              meta: h ? h.id : "NO SELECTION"
            }),
            h
              ? e.createElement(
                  "div",
                  { className: "space-y-3" },
                  e.createElement(
                    "div",
                    {
                      className:
                        "relative border border-[#393C35] bg-[#131512] overflow-hidden"
                    },
                    e.createElement(
                      "div",
                      { className: "aspect-[16/9] overflow-hidden" },
                      e.createElement("img", {
                        src: h.imageSrc,
                        alt: h.name,
                        className: "w-full h-full object-cover"
                      })
                    ),
                    e.createElement(
                      "div",
                      { className: "absolute top-2 left-2 flex items-center gap-1.5" },
                      e.createElement(
                        "span",
                        {
                          className:
                            "bg-[#131512]/90 border border-[#393C35] px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[#E8E7DF]"
                        },
                        h.id
                      ),
                      e.createElement(
                        "span",
                        {
                          className:
                            "bg-[#131512]/90 border border-[#393C35] px-1.5 py-0.5 text-[10px] font-mono text-[#D6A756]"
                        },
                        h.detectedSubclass
                      )
                    ),
                    e.createElement(
                      "div",
                      {
                        className:
                          "absolute bottom-0 left-0 right-0 bg-[#131512]/85 border-t border-[#393C35] px-2.5 py-1 flex items-center justify-between"
                      },
                      e.createElement(
                        "span",
                        { className: "text-[10px] font-mono text-[#D5D4C9] truncate pr-2" },
                        h.name
                      ),
                      e.createElement(
                        "span",
                        { className: "font-mono text-[10px] text-[#9B9D91] shrink-0" },
                        h.width,
                        "×",
                        h.height,
                        " px"
                      )
                    )
                  ),
                  e.createElement(
                    "div",
                    { className: "grid grid-cols-3 gap-2" },
                    e.createElement(
                      "div",
                      { className: "border border-[#393C35] bg-[#20231F] px-2.5 py-1.5" },
                      e.createElement(
                        "div",
                        {
                          className:
                            "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91] mb-1"
                        },
                        "Class"
                      ),
                      e.createElement(K, { tone: It(h.eventType) }, h.eventType),
                      e.createElement(
                        "div",
                        {
                          className:
                            "text-[10px] font-mono text-[#9B9D91] mt-1 truncate",
                          title: h.detectedSubclass
                        },
                        h.detectedSubclass
                      )
                    ),
                    e.createElement(
                      "div",
                      { className: "border border-[#393C35] bg-[#20231F] px-2.5 py-1.5" },
                      e.createElement(
                        "div",
                        {
                          className:
                            "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91] mb-0.5"
                        },
                        "Confidence"
                      ),
                      e.createElement(
                        "div",
                        {
                          className:
                            "font-mono text-sm font-bold text-[#83A78A] tabular-nums"
                        },
                        (h.confidence * 100).toFixed(1),
                        "%"
                      ),
                      e.createElement(
                        "div",
                        { className: "h-1 bg-[#393C35] mt-1.5" },
                        e.createElement("div", {
                          className: "h-full bg-[#83A78A]",
                          style: { width: `${h.confidence * 100}%` }
                        })
                      )
                    ),
                    e.createElement(
                      "div",
                      { className: "border border-[#393C35] bg-[#20231F] px-2.5 py-1.5" },
                      e.createElement(
                        "div",
                        {
                          className:
                            "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91] mb-1"
                        },
                        "Urgency"
                      ),
                      e.createElement(Pt, { value: h.baseUrgency }),
                      e.createElement(
                        "div",
                        { className: "text-[10px] font-mono text-[#9B9D91] mt-1" },
                        "Deadline: T-",
                        h.deadlineHours,
                        "h"
                      )
                    )
                  ),
                  e.createElement(
                    "div",
                    {
                      className:
                        "grid grid-cols-2 gap-x-5 gap-y-0 border border-[#393C35] bg-[#20231F]/70 px-3 py-2"
                    },
                    e.createElement(te, {
                      label: "Dimensions",
                      value: `${h.width}×${h.height}`
                    }),
                    e.createElement(te, {
                      label: "Shannon Entropy",
                      value: h.shannonEntropy,
                      unit: "bits/px"
                    }),
                    e.createElement(te, {
                      label: "Raw Size",
                      value: h.rawSizeMb,
                      unit: "MB"
                    }),
                    e.createElement(te, {
                      label: "Compressed",
                      value: h.compressedSizeMb,
                      unit: "MB"
                    }),
                    e.createElement(te, {
                      label: "Comp. Ratio",
                      value: h.compressionRatio,
                      unit: ":1"
                    }),
                    e.createElement(te, {
                      label: "Deadline",
                      value: h.deadlineHours,
                      unit: "hrs"
                    }),
                    e.createElement(te, {
                      label: "Age Ticks",
                      value: h.ageTicks,
                      unit: "passes"
                    }),
                    e.createElement(te, {
                      label: "Source Tile",
                      value: h.fileName
                    })
                  ),
                  e.createElement(
                    "div",
                    { className: "space-y-1.5" },
                    e.createElement(
                      "div",
                      {
                        className:
                          "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91] flex items-center gap-1.5"
                      },
                      e.createElement(ke, { className: "w-3 h-3 text-[#D6A756]" }),
                      "Onboard Spectral Feature Telemetry (Hover for sensor details)"
                    ),
                    e.createElement(
                      "div",
                      {
                        className:
                          "grid grid-cols-2 gap-x-5 gap-y-2.5 border border-[#393C35] bg-[#20231F]/70 px-3 py-2.5"
                      },
                      e.createElement(
                        ve,
                        {
                          content:
                            "8x8 sub-tile active thermal combustion & infrared glow fraction"
                        },
                        e.createElement(ee, {
                          label: "Thermal Hotspot",
                          value: h.spectral.hotspotPct,
                          max: 25,
                          color: "bg-[#C66F66]"
                        })
                      ),
                      e.createElement(
                        ve,
                        {
                          content:
                            "Pyro-convective moderate-albedo grey smoke plume coverage"
                        },
                        e.createElement(ee, {
                          label: "Smoke Plume",
                          value: h.spectral.smokePct,
                          color: "bg-[#9B9D91]"
                        })
                      ),
                      e.createElement(
                        ve,
                        {
                          content:
                            "Hydrological blue-channel dominant surface water inundation"
                        },
                        e.createElement(ee, {
                          label: "Surface Water",
                          value: h.spectral.waterPct,
                          color: "bg-[#5B8DB8]"
                        })
                      ),
                      e.createElement(
                        ve,
                        {
                          content:
                            "Chlorophyll green-band vegetation canopy reflectance"
                        },
                        e.createElement(ee, {
                          label: "Vegetation",
                          value: h.spectral.vegPct,
                          color: "bg-[#83A78A]"
                        })
                      ),
                      e.createElement(
                        ve,
                        {
                          content:
                            "Radial annular eyewall ring vs central eye contrast symmetry"
                        },
                        e.createElement(ee, {
                          label: "Cyclone Vortex",
                          value: h.spectral.vortexScorePct,
                          color: "bg-[#D6A756]"
                        })
                      ),
                      e.createElement(
                        ve,
                        {
                          content: "InSAR interferogram phase-fringe cycle density"
                        },
                        e.createElement(ee, {
                          label: "InSAR Fringe",
                          value: h.spectral.insarFringePct,
                          max: 50,
                          color: "bg-[#9B6B9E]"
                        })
                      )
                    )
                  )
                )
              : e.createElement(
                  "div",
                  { className: "py-16 text-center" },
                  e.createElement(je, {
                    className: "w-6 h-6 text-[#5C5F55] mx-auto mb-2"
                  }),
                  e.createElement(
                    "p",
                    { className: "text-[11px] font-mono text-[#9B9D91]" },
                    "No observation selected."
                  )
                )
          )
        ),
        e.createElement(
          "div",
          { className: "px-4 py-3.5 space-y-3 bg-[#171916]" },
          e.createElement(Ge, {
            icon: e.createElement(it, { className: "w-3.5 h-3.5" }),
            title: "Downlink Scheduling — FIFO Queue vs SpaceEdge AI Knapsack",
            meta: `Pass Window: ${o} MB · EPS Reserve: ${S}%`
          }),
          e.createElement(
            "div",
            {
              className:
                "flex flex-wrap items-center justify-between gap-3 border border-[#393C35] bg-[#20231F] px-3.5 py-2"
            },
            e.createElement(
              "div",
              { className: "flex items-center gap-4" },
              e.createElement(
                "div",
                { className: "flex items-center gap-2" },
                e.createElement(
                  "span",
                  {
                    className:
                      "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                  },
                  "Legacy FIFO Utility:"
                ),
                e.createElement(
                  "span",
                  {
                    className:
                      "font-mono text-sm font-bold text-[#C66F66] tabular-nums"
                  },
                  P.totalUtility.toFixed(2)
                )
              ),
              e.createElement(rt, { className: "w-3.5 h-3.5 text-[#7A7D71]" }),
              e.createElement(
                "div",
                { className: "flex items-center gap-2" },
                e.createElement(st, { className: "w-3.5 h-3.5 text-[#83A78A]" }),
                e.createElement(
                  "span",
                  {
                    className:
                      "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                  },
                  "SpaceEdge Knapsack Utility:"
                ),
                e.createElement(
                  "span",
                  {
                    className:
                      "font-mono text-sm font-bold text-[#83A78A] tabular-nums"
                  },
                  U.totalUtility.toFixed(2)
                )
              )
            ),
            e.createElement(
              "div",
              { className: "flex items-center gap-2" },
              e.createElement(
                K,
                { tone: "green" },
                e.createElement(
                  "span",
                  { className: "flex items-center gap-1" },
                  e.createElement(rt, { className: "w-2.5 h-2.5" }),
                  "+",
                  ze.toFixed(2),
                  " Mission Utility (",
                  Ke,
                  "% Gain)"
                )
              )
            )
          ),
          e.createElement(
            "div",
            { className: "grid grid-cols-1 gap-4 lg:grid-cols-2" },
            e.createElement(
              "div",
              { className: "flex flex-col border border-[#393C35] bg-[#20231F]/60" },
              e.createElement(
                "div",
                {
                  className:
                    "flex items-center justify-between px-3 py-2.5 border-b border-[#393C35]"
                },
                e.createElement(
                  "div",
                  { className: "flex items-center gap-2" },
                  e.createElement(ge, { className: "w-3.5 h-3.5 text-[#9B9D91]" }),
                  e.createElement(K, { tone: "red" }, "Legacy Baseline"),
                  e.createElement(
                    "span",
                    { className: "text-[11px] font-semibold text-[#E8E7DF]" },
                    "Standard FIFO Queue (Arrival Order)"
                  )
                ),
                e.createElement(
                  "div",
                  { className: "text-right" },
                  e.createElement(
                    "div",
                    {
                      className:
                        "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                    },
                    "Total Utility"
                  ),
                  e.createElement(
                    "div",
                    {
                      className:
                        "font-mono text-base font-bold text-[#C66F66] tabular-nums"
                    },
                    P.totalUtility.toFixed(2)
                  )
                )
              ),
              e.createElement(
                "div",
                { className: "px-3 py-2 border-b border-[#393C35] space-y-1" },
                e.createElement(
                  "div",
                  { className: "flex items-baseline justify-between" },
                  e.createElement(
                    "span",
                    {
                      className:
                        "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                    },
                    "Bandwidth Utilization"
                  ),
                  e.createElement(
                    "span",
                    { className: "font-mono text-[10px] text-[#D5D4C9] tabular-nums" },
                    P.usedMb,
                    " / ",
                    o,
                    " MB"
                  )
                ),
                e.createElement(
                  "div",
                  { className: "h-1.5 w-full bg-[#393C35] overflow-hidden" },
                  e.createElement("div", {
                    className: "h-full bg-[#C66F66] transition-all duration-300",
                    style: { width: `${Math.min(100, (P.usedMb / o) * 100)}%` }
                  })
                ),
                e.createElement(
                  "div",
                  {
                    className:
                      "flex justify-between text-[9px] font-mono text-[#7A7D71]"
                  },
                  e.createElement("span", null, "Allocated: ", P.usedMb, " MB"),
                  e.createElement("span", null, "Remaining: ", P.remainingMb, " MB")
                )
              ),
              e.createElement(
                "div",
                { className: "overflow-x-auto" },
                e.createElement(
                  "table",
                  { className: "w-full text-left border-collapse" },
                  e.createElement(
                    "thead",
                    { className: "bg-[#20231F] border-b border-[#393C35]" },
                    e.createElement(
                      "tr",
                      null,
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pl-3 pr-1 text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "#"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Obs ID / Class"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-right text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Raw MB"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-right text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Alloc MB"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-right text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Util"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-3 text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Decision"
                      )
                    )
                  ),
                  e.createElement(
                    "tbody",
                    null,
                    P.decisions.map((a, b) =>
                      e.createElement(
                        "tr",
                        {
                          key: a.id,
                          onClick: () => g(a.id),
                          className:
                            "border-b border-[#33362F]/50 last:border-0 hover:bg-[#292C27]/50 transition-colors cursor-pointer"
                        },
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pl-3 pr-1 font-mono text-[10px] text-[#9B9D91] tabular-nums"
                          },
                          b + 1
                        ),
                        e.createElement(
                          "td",
                          { className: "py-2 pr-2" },
                          e.createElement(
                            "div",
                            {
                              className:
                                "font-mono text-[10px] text-[#E8E7DF] font-medium"
                            },
                            a.id,
                            " · ",
                            a.name
                          ),
                          e.createElement(
                            "div",
                            { className: "text-[10px] font-mono text-[#9B9D91]" },
                            a.eventType
                          )
                        ),
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pr-2 font-mono text-[10px] text-[#D5D4C9] tabular-nums text-right"
                          },
                          a.rawSizeMb
                        ),
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pr-2 font-mono text-[10px] text-[#D5D4C9] tabular-nums text-right"
                          },
                          a.allocatedMb > 0 ? a.allocatedMb : "—"
                        ),
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pr-2 font-mono text-[10px] text-[#D5D4C9] tabular-nums text-right"
                          },
                          a.utility.toFixed(2)
                        ),
                        e.createElement(
                          "td",
                          { className: "py-2 pr-3" },
                          e.createElement(Tt, { action: a.action })
                        )
                      )
                    )
                  )
                )
              ),
              e.createElement(
                "div",
                {
                  className:
                    "mt-auto border-t border-[#393C35] px-3 py-2 text-[10px] font-mono text-[#9B9D91]"
                },
                "FIFO arrival-order transmission exhausts downlink bandwidth on routine imagery and drops critical disaster frames."
              )
            ),
            e.createElement(
              "div",
              { className: "flex flex-col border border-[#5E8567]/70 bg-[#1C1E1A]" },
              e.createElement(
                "div",
                {
                  className:
                    "flex items-center justify-between px-3 py-2.5 border-b border-[#393C35]"
                },
                e.createElement(
                  "div",
                  { className: "flex items-center gap-2" },
                  e.createElement(st, { className: "w-3.5 h-3.5 text-[#83A78A]" }),
                  e.createElement(K, { tone: "green" }, "Adaptive Knapsack"),
                  e.createElement(
                    "span",
                    { className: "text-[11px] font-semibold text-[#E8E7DF]" },
                    "SpaceEdge AI Value-Density Scheduler"
                  )
                ),
                e.createElement(
                  "div",
                  { className: "text-right" },
                  e.createElement(
                    "div",
                    {
                      className:
                        "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                    },
                    "Total Utility"
                  ),
                  e.createElement(
                    "div",
                    {
                      className:
                        "font-mono text-base font-bold text-[#83A78A] tabular-nums"
                    },
                    U.totalUtility.toFixed(2)
                  )
                )
              ),
              e.createElement(
                "div",
                { className: "px-3 py-2 border-b border-[#393C35] space-y-1" },
                e.createElement(
                  "div",
                  { className: "flex items-baseline justify-between" },
                  e.createElement(
                    "span",
                    {
                      className:
                        "text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                    },
                    "Bandwidth Utilization"
                  ),
                  e.createElement(
                    "span",
                    { className: "font-mono text-[10px] text-[#D5D4C9] tabular-nums" },
                    U.usedMb,
                    " / ",
                    o,
                    " MB"
                  )
                ),
                e.createElement(
                  "div",
                  { className: "h-1.5 w-full bg-[#393C35] overflow-hidden" },
                  e.createElement("div", {
                    className: "h-full bg-[#83A78A] transition-all duration-300",
                    style: { width: `${Math.min(100, (U.usedMb / o) * 100)}%` }
                  })
                ),
                e.createElement(
                  "div",
                  {
                    className:
                      "flex justify-between text-[9px] font-mono text-[#7A7D71]"
                  },
                  e.createElement("span", null, "Allocated: ", U.usedMb, " MB"),
                  e.createElement("span", null, "Remaining: ", U.remainingMb, " MB")
                )
              ),
              e.createElement(
                "div",
                { className: "overflow-x-auto" },
                e.createElement(
                  "table",
                  { className: "w-full text-left border-collapse" },
                  e.createElement(
                    "thead",
                    { className: "bg-[#20231F] border-b border-[#393C35]" },
                    e.createElement(
                      "tr",
                      null,
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pl-3 pr-1 text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "#"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Obs ID / Rationale"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-right text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Raw MB"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-right text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Alloc MB"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-2 text-right text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Util"
                      ),
                      e.createElement(
                        "th",
                        {
                          className:
                            "py-1.5 pr-3 text-[9px] font-mono uppercase tracking-[0.14em] text-[#9B9D91]"
                        },
                        "Decision"
                      )
                    )
                  ),
                  e.createElement(
                    "tbody",
                    null,
                    U.decisions.map((a, b) =>
                      e.createElement(
                        "tr",
                        {
                          key: a.id,
                          onClick: () => g(a.id),
                          className:
                            "border-b border-[#33362F]/50 last:border-0 hover:bg-[#292C27]/60 transition-colors cursor-pointer"
                        },
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pl-3 pr-1 font-mono text-[10px] text-[#9B9D91] tabular-nums"
                          },
                          b + 1
                        ),
                        e.createElement(
                          "td",
                          { className: "py-2 pr-2" },
                          e.createElement(
                            "div",
                            {
                              className:
                                "font-mono text-[10px] text-[#E8E7DF] font-medium"
                            },
                            a.id,
                            " · ",
                            a.name
                          ),
                          e.createElement(
                            "div",
                            {
                              className:
                                "text-[10px] font-mono text-[#9B9D91] truncate max-w-[240px]",
                              title: a.explanation
                            },
                            a.eventType,
                            " — ",
                            a.explanation
                          )
                        ),
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pr-2 font-mono text-[10px] text-[#D5D4C9] tabular-nums text-right"
                          },
                          a.rawSizeMb
                        ),
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pr-2 font-mono text-[10px] text-[#E8E7DF] font-semibold tabular-nums text-right"
                          },
                          a.allocatedMb > 0 ? a.allocatedMb : "—"
                        ),
                        e.createElement(
                          "td",
                          {
                            className:
                              "py-2 pr-2 font-mono text-[10px] text-[#83A78A] font-semibold tabular-nums text-right"
                          },
                          a.utility.toFixed(2)
                        ),
                        e.createElement(
                          "td",
                          { className: "py-2 pr-3" },
                          e.createElement(Tt, { action: a.action })
                        )
                      )
                    )
                  )
                )
              ),
              e.createElement(
                "div",
                {
                  className:
                    "mt-auto border-t border-[#393C35] px-3 py-2 flex items-center justify-between text-[10px] font-mono"
                },
                e.createElement(
                  "div",
                  { className: "flex items-center gap-4" },
                  e.createElement(
                    "span",
                    null,
                    "Raw TX: ",
                    e.createElement("strong", { className: "text-[#83A78A]" }, re)
                  ),
                  e.createElement(
                    "span",
                    null,
                    "Compressed TX: ",
                    e.createElement("strong", { className: "text-[#D6A756]" }, ie)
                  ),
                  e.createElement(
                    "span",
                    null,
                    "Deferred (+1t): ",
                    e.createElement("strong", { className: "text-[#9B9D91]" }, Ye)
                  )
                ),
                e.createElement(
                  "span",
                  { className: "text-[#9B9D91]" },
                  "Sorted by Utility-per-MB Density"
                )
              )
            )
          )
        ),
        e.createElement(
          "footer",
          {
            className:
              "border-t border-[#393C35] bg-[#131512] px-4 py-2.5 mt-4 flex flex-wrap items-center justify-between gap-2 text-[9px] font-mono text-[#7A7D71] uppercase tracking-wider"
          },
          e.createElement(
            "span",
            null,
            "SpaceEdge AI · On-Edge Computer Vision & Multi-Objective Knapsack Scheduler"
          ),
          e.createElement(
            "span",
            null,
            "Aerospace Mission Control Interface · Local HTML5 Canvas Telemetry"
          )
        )
      )
    );
  }

  // Fallback in-browser simulator when running static files (e.g. GitHub Pages)
  var aa = Et,
    Ze = [],
    _t = new Map(),
    mt = new Set(),
    xt = 0;

  function na(n) {
    let [i, o] = n.split(","),
      r = i.match(/data:(.*?);/)[1],
      t = atob(o),
      p = new Uint8Array(t.length);
    for (let x = 0; x < t.length; x++) p[x] = t.charCodeAt(x);
    return new Blob([p], { type: r });
  }

  function Wt(n, i, meta = {}) {
    xt += 1;
    Ze.push({
      seq: xt,
      fileName: n,
      sizeBytes: i.size,
      modified: Date.now() / 1e3,
      url: `/api/images/${encodeURIComponent(n)}`,
      presetHint: meta.presetHint || null,
      displayName: meta.displayName || null,
      sizeOverrideMb: meta.sizeOverrideMb || null
    });
    _t.set(n, i);
    mt.forEach(o => o());
  }

  var oa = window.fetch.bind(window);
  window.fetch = async (n, i) => {
    let o = typeof n == "string" ? n : n.url;
    // Try real backend first if not using the simulated in-memory store
    if (Ze.length === 0 && !o.includes("/api/")) {
      return oa(n, i);
    }
    if (o.includes("/api/observations") || o.includes("/api/images/")) {
      try {
        let realResp = await oa(n, i);
        if (realResp.ok) return realResp;
      } catch (_) {
        // Fall through to simulated in-browser watcher
      }
      await new Promise(t => setTimeout(t, 60));
      let r = new URL(o, "http://localhost:8000");
      if (r.pathname === "/api/observations") {
        let t = Number(r.searchParams.get("since") || 0);
        return new Response(
          JSON.stringify({ latest: xt, items: Ze.filter(p => p.seq > t) }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
      if (r.pathname.startsWith("/api/images/")) {
        let t = _t.get(decodeURIComponent(r.pathname.slice(12)));
        return t
          ? new Response(t)
          : new Response("not found", { status: 404 });
      }
    }
    return oa(n, i);
  };

  var Ot = [
      "wildfire",
      "cyclone",
      "flood",
      "earthquake_insar",
      "agriculture",
      "cloud"
    ],
    Ut = 0;

  function zt() {
    let n = Ot[Ut % Ot.length],
      i = Ve(n);
    Ut += 1;
    Wt(`frame_${String(Ut).padStart(4, "0")}.png`, na(i.dataUrl), {
      presetHint: i.presetHint,
      displayName: i.name,
      sizeOverrideMb: i.sizeOverrideMb
    });
  }

  function sa() {
    let [, n] = M(0),
      [i, o] = M(!0),
      [r, t] = M(!1),
      [p, x] = M(!1),
      d = R(null);

    J(() => {
      let s = () => n(l => l + 1);
      mt.add(s);
      return () => mt.delete(s);
    }, []);

    J(() => {
      if (!r) return;
      let s = setInterval(zt, 8e3);
      return () => clearInterval(s);
    }, [r]);

    let m = s => {
        [...s].forEach(l => {
          l.type.startsWith("image/") && Wt(l.name, l);
        });
      },
      c = {
        border: "1px solid #474A42",
        background: "#292C27",
        color: "#E8E7DF",
        padding: "6px 10px",
        fontSize: 11,
        fontWeight: 600,
        cursor: "pointer"
      };

    return e.createElement(
      "div",
      {
        style: {
          position: "fixed",
          right: 12,
          bottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
          width: "min(300px, calc(100vw - 24px))",
          zIndex: 50,
          background: "#171916",
          border: "1px solid #393C35",
          color: "#E8E7DF",
          fontFamily: "ui-monospace, Menlo, monospace",
          boxShadow: "0 8px 30px rgba(0,0,0,.5)"
        }
      },
      e.createElement(
        "div",
        {
          onClick: () => o(!i),
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 10px",
            cursor: "pointer",
            borderBottom: i ? "1px solid #393C35" : "none",
            fontSize: 10,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#D6A756"
          }
        },
        e.createElement("span", null, "incoming/ · simulated"),
        e.createElement("span", null, i ? "–" : "+")
      ),
      i &&
        e.createElement(
          "div",
          { style: { padding: 10, display: "grid", gap: 8 } },
          e.createElement(
            "div",
            { style: { display: "flex", gap: 6, flexWrap: "wrap" } },
            e.createElement(
              "button",
              { style: c, onClick: zt },
              "Drop sample tile"
            ),
            e.createElement(
              "button",
              {
                style: {
                  ...c,
                  color: r ? "#171916" : "#E8E7DF",
                  background: r ? "#D6A756" : "#292C27"
                },
                onClick: () => t(!r)
              },
              "Auto-drop ",
              r ? "ON" : "OFF"
            )
          ),
          e.createElement(
            "div",
            {
              onDragOver: s => {
                s.preventDefault();
                x(!0);
              },
              onDragLeave: () => x(!1),
              onDrop: s => {
                s.preventDefault();
                x(!1);
                m(s.dataTransfer.files);
              },
              onClick: () => d.current?.click(),
              style: {
                border: `1px dashed ${p ? "#D6A756" : "#5C5F55"}`,
                padding: "12px 8px",
                textAlign: "center",
                fontSize: 10,
                color: "#9B9D91",
                cursor: "pointer",
                background: p ? "#23251F" : "transparent"
              }
            },
            "Drop your own images here",
            e.createElement("input", {
              ref: d,
              type: "file",
              accept: "image/*",
              multiple: !0,
              style: { display: "none" },
              onChange: s => {
                m(s.target.files);
                s.target.value = "";
              }
            })
          ),
          e.createElement(
            "div",
            { style: { fontSize: 10, color: "#9B9D91", maxHeight: 96, overflow: "auto" } },
            Ze.length === 0 && e.createElement("div", null, "folder empty"),
            [...Ze]
              .reverse()
              .slice(0, 8)
              .map(s =>
                e.createElement(
                  "div",
                  {
                    key: s.seq,
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 8
                    }
                  },
                  e.createElement(
                    "span",
                    {
                      style: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }
                    },
                    s.fileName
                  ),
                  e.createElement(
                    "span",
                    null,
                    (s.sizeBytes / 1024).toFixed(0),
                    " KB"
                  )
                )
              )
          ),
          e.createElement(
            "div",
            { style: { fontSize: 9, lineHeight: 1.4, color: "#7A7D71" } },
            "Locally, this is the real folder watched by server.py. The dashboard polls it every 2.5 s."
          )
        )
    );
  }

  function Lt() {
    return e.createElement(
      e.Fragment,
      null,
      e.createElement(ct, null),
      e.createElement(sa, null)
    );
  }

  var $t = document.getElementById("root");
  window.ReactDOM.createRoot
    ? window.ReactDOM.createRoot($t).render(e.createElement(Lt, null))
    : window.ReactDOM.render(e.createElement(Lt, null), $t);
})(); 