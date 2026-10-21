import os

IMG_DIR = "/home/user/Test-ia-arena/studio-kronos/images"
os.makedirs(IMG_DIR, exist_ok=True)

def write_svg(filename, content):
    path = os.path.join(IMG_DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Created: {filename}")

# 1. Logo
write_svg("logo.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e3f794"/>
      <stop offset="100%" stop-color="#80e8a2"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#12151e" stroke="#252b3d" stroke-width="2"/>
  <path d="M28 24 L40 24 L40 76 L28 76 Z" fill="url(#logoGrad)"/>
  <path d="M44 48 L64 24 L78 24 L56 50 L80 76 L66 76 L44 52 Z" fill="#ffffff"/>
  <circle cx="72" cy="30" r="4" fill="#e3f794"/>
</svg>
""")

# 2. Hero 1: Metric Card "+142% Conversion"
write_svg("hero-1.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 140" width="240" height="140">
  <defs>
    <linearGradient id="bgH1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#191e2b" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#10131d" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="lineH1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#556b2f"/>
      <stop offset="100%" stop-color="#e3f794"/>
    </linearGradient>
  </defs>
  <rect width="240" height="140" rx="16" fill="url(#bgH1)" stroke="rgba(227,247,148,0.25)" stroke-width="1.5"/>
  <text x="20" y="34" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="11" font-weight="600" letter-spacing="1">CONVERSION BOOST</text>
  <text x="20" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="800">+142%</text>
  <path d="M20 115 Q 60 110, 90 95 T 160 75 T 220 50" fill="none" stroke="url(#lineH1)" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="220" cy="50" r="4.5" fill="#e3f794"/>
  <circle cx="220" cy="50" r="8" fill="#e3f794" fill-opacity="0.3"/>
</svg>
""")

# 3. Hero 2: 3D Chrome Sphere
write_svg("hero-2.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="25%" stop-color="#e3f794"/>
      <stop offset="60%" stop-color="#1f3b33"/>
      <stop offset="100%" stop-color="#070a0e"/>
    </radialGradient>
    <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <circle cx="80" cy="80" r="60" fill="url(#sphereGrad)" filter="url(#glow1)"/>
  <ellipse cx="60" cy="55" rx="20" ry="10" fill="#ffffff" fill-opacity="0.6" transform="rotate(-25 60 55)"/>
</svg>
""")

# 4. Hero 3: Award Badge
write_svg("hero-3.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 80" width="180" height="80">
  <rect width="180" height="80" rx="40" fill="#141824" stroke="#e3f794" stroke-width="1.5"/>
  <circle cx="40" cy="40" r="22" fill="#e3f794"/>
  <path d="M40 26 L43 35 L52 35 L45 41 L47 50 L40 44 L33 50 L35 41 L28 35 L37 35 Z" fill="#0d0f12"/>
  <text x="72" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">AWWWARDS</text>
  <text x="72" y="52" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="10" font-weight="600">Site of the Day</text>
</svg>
""")

# 5. Hero 4: 60 FPS Card
write_svg("hero-4.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90" width="200" height="90">
  <rect width="200" height="90" rx="14" fill="#131722" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <circle cx="28" cy="45" r="14" fill="none" stroke="#e3f794" stroke-width="3"/>
  <circle cx="28" cy="45" r="5" fill="#e3f794"/>
  <text x="52" y="38" fill="#e3f794" font-family="system-ui, sans-serif" font-size="15" font-weight="800">60 FPS PURE</text>
  <text x="52" y="58" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="10">Zero-lag Scrubbing</text>
</svg>
""")

# 6. Hero 5: Holographic UI Card
write_svg("hero-5.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 130" width="220" height="130">
  <defs>
    <linearGradient id="holoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1b2133" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0f121d" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="220" height="130" rx="16" fill="url(#holoBg)" stroke="#2b334d" stroke-width="1"/>
  <rect x="18" y="18" width="40" height="8" rx="4" fill="#e3f794"/>
  <rect x="64" y="18" width="80" height="8" rx="4" fill="#2d354e"/>
  <rect x="18" y="40" width="184" height="24" rx="6" fill="#141824"/>
  <rect x="24" y="48" width="80" height="8" rx="4" fill="#ffffff" fill-opacity="0.8"/>
  <rect x="18" y="74" width="56" height="38" rx="6" fill="#181e2e"/>
  <rect x="82" y="74" width="56" height="38" rx="6" fill="#181e2e"/>
  <rect x="146" y="74" width="56" height="38" rx="6" fill="#e3f794" fill-opacity="0.15" stroke="#e3f794" stroke-width="1"/>
</svg>
""")

# 7. Hero 6: Speed Emblem
write_svg("hero-6.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 70" width="170" height="70">
  <rect width="170" height="70" rx="35" fill="#121622" stroke="rgba(227,247,148,0.4)" stroke-width="1"/>
  <path d="M36 18 L24 38 L34 38 L28 54 L44 32 L34 32 Z" fill="#e3f794"/>
  <text x="56" y="33" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="800">0.2s FCP</text>
  <text x="56" y="49" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="10">Ultra-fast load</text>
</svg>
""")

# 8. Hero 7: Art Direction Compass
write_svg("hero-7.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="140" height="140">
  <rect width="140" height="140" rx="70" fill="#111520" stroke="#252d42" stroke-width="1.5"/>
  <circle cx="70" cy="70" r="50" fill="none" stroke="#e3f794" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="70" cy="70" r="32" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  <path d="M70 30 L74 66 L110 70 L74 74 L70 110 L66 74 L30 70 L66 66 Z" fill="#e3f794"/>
  <circle cx="70" cy="70" r="4" fill="#0d0f12"/>
</svg>
""")

# 9. Hero 8: Acid Energy Torus
write_svg("hero-8.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="150" height="150">
  <defs>
    <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e3f794"/>
      <stop offset="50%" stop-color="#6df0c2"/>
      <stop offset="100%" stop-color="#2a385b"/>
    </linearGradient>
  </defs>
  <ellipse cx="75" cy="75" rx="58" ry="32" fill="none" stroke="url(#torusGrad)" stroke-width="10" transform="rotate(-30 75 75)"/>
  <ellipse cx="75" cy="75" rx="32" ry="58" fill="none" stroke="#e3f794" stroke-width="2" stroke-opacity="0.6" transform="rotate(-30 75 75)"/>
</svg>
""")

# 10. Hero 9: Retention Pill
write_svg("hero-9.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 70" width="190" height="70">
  <rect width="190" height="70" rx="35" fill="#151a28" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <circle cx="34" cy="35" r="15" fill="#252e46"/>
  <circle cx="48" cy="35" r="15" fill="#364366"/>
  <circle cx="62" cy="35" r="15" fill="#e3f794"/>
  <text x="62" y="40" fill="#0d0f12" font-family="system-ui, sans-serif" font-size="12" font-weight="900" text-anchor="middle">✓</text>
  <text x="88" y="34" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="800">x3.4 Rétention</text>
  <text x="88" y="49" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="9.5">Temps de visite</text>
</svg>
""")

# 11. Hero 10: Soundwave Card
write_svg("hero-10.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 80" width="180" height="80">
  <rect width="180" height="80" rx="16" fill="#121622" stroke="#232a3e" stroke-width="1"/>
  <g fill="#e3f794">
    <rect x="24" y="32" width="4" height="16" rx="2"/>
    <rect x="34" y="24" width="4" height="32" rx="2"/>
    <rect x="44" y="16" width="4" height="48" rx="2"/>
    <rect x="54" y="28" width="4" height="24" rx="2"/>
    <rect x="64" y="20" width="4" height="40" rx="2"/>
    <rect x="74" y="35" width="4" height="10" rx="2"/>
  </g>
  <text x="92" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Design Sonore</text>
  <text x="92" y="52" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="9.5">Micro-feedback</text>
</svg>
""")

# 12. Cloud Particle Textures
write_svg("cloud-bg.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <radialGradient id="nebula1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e3f794" stop-opacity="0.18"/>
      <stop offset="40%" stop-color="#4a6382" stop-opacity="0.12"/>
      <stop offset="80%" stop-color="#14182b" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#090a0f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebula2" cx="30%" cy="40%" r="40%">
      <stop offset="0%" stop-color="#80e8a2" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#090a0f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="transparent"/>
  <circle cx="600" cy="400" r="450" fill="url(#nebula1)"/>
  <circle cx="400" cy="350" r="300" fill="url(#nebula2)"/>
  <circle cx="800" cy="480" r="280" fill="url(#nebula2)" opacity="0.7"/>
  <!-- Stars / Dust particles -->
  <circle cx="200" cy="180" r="2" fill="#ffffff" opacity="0.6"/>
  <circle cx="340" cy="520" r="1.5" fill="#e3f794" opacity="0.8"/>
  <circle cx="950" cy="220" r="2.5" fill="#ffffff" opacity="0.7"/>
  <circle cx="820" cy="620" r="2" fill="#80e8a2" opacity="0.8"/>
  <circle cx="600" cy="280" r="3" fill="#e3f794" opacity="0.9"/>
  <circle cx="150" cy="680" r="1.5" fill="#ffffff" opacity="0.5"/>
  <circle cx="1080" cy="550" r="2" fill="#e3f794" opacity="0.7"/>
</svg>
""")

# 13. Zoom Feature Project (Showcase Master Visual)
write_svg("zoom-showcase.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="1200" height="700">
  <defs>
    <linearGradient id="showcaseBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#151926"/>
      <stop offset="50%" stop-color="#0f121b"/>
      <stop offset="100%" stop-color="#08090d"/>
    </linearGradient>
    <linearGradient id="neonBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e3f794"/>
      <stop offset="100%" stop-color="#4fd1c5"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="700" rx="28" fill="url(#showcaseBg)"/>
  <rect width="1200" height="700" rx="28" fill="none" stroke="#252d42" stroke-width="2"/>
  
  <!-- Browser mockup bar -->
  <rect x="0" y="0" width="1200" height="54" rx="28" fill="#1c2233"/>
  <circle cx="36" cy="27" r="6" fill="#ff5f56"/>
  <circle cx="56" cy="27" r="6" fill="#ffbd2e"/>
  <circle cx="76" cy="27" r="6" fill="#27c93f"/>
  <rect x="420" y="14" width="360" height="26" rx="13" fill="#111520" stroke="#2e3852" stroke-width="1"/>
  <text x="600" y="31" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">kronos.design/case-study/vespera-chronos</text>
  
  <!-- Showcase 3D / UI layout -->
  <g transform="translate(60, 90)">
    <!-- Main showcase card -->
    <rect x="0" y="0" width="680" height="520" rx="20" fill="#141824" stroke="rgba(227,247,148,0.2)" stroke-width="1.5"/>
    <text x="40" y="60" fill="#e3f794" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="2">PROJET MAÎTRE</text>
    <text x="40" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="36" font-weight="900">VESPERA ARCHITECTURE</text>
    <text x="40" y="146" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="16">Expérience 3D temps réel & tunnel de vente haut de gamme</text>
    
    <!-- Visual graphic interior -->
    <rect x="40" y="180" width="600" height="290" rx="14" fill="#0d1017"/>
    <!-- Abstract 3D geometric grid -->
    <path d="M40 325 L640 325 M40 250 L640 250 M40 400 L640 400" stroke="#1f273b" stroke-width="1"/>
    <path d="M160 180 L160 470 M340 180 L340 470 M520 180 L520 470" stroke="#1f273b" stroke-width="1"/>
    
    <!-- Glowing ribbon -->
    <path d="M70 410 Q 200 230, 340 360 T 610 240" fill="none" stroke="url(#neonBar)" stroke-width="8" stroke-linecap="round"/>
    
    <!-- Floating tag in visual -->
    <rect x="420" y="210" width="160" height="48" rx="24" fill="#1b2234" stroke="#e3f794" stroke-width="1.5"/>
    <text x="500" y="240" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle">+210% REVENUE</text>
  </g>
  
  <!-- Right column stats -->
  <g transform="translate(770, 90)">
    <rect x="0" y="0" width="370" height="155" rx="18" fill="#141824" stroke="#252d42" stroke-width="1"/>
    <text x="30" y="44" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">TEMPS DE CHARGEMENT</text>
    <text x="30" y="95" fill="#e3f794" font-family="system-ui, sans-serif" font-size="42" font-weight="900">0.38s</text>
    <text x="30" y="128" fill="#58a6ff" font-family="system-ui, sans-serif" font-size="12">Score Lighthouse 100/100</text>
    
    <rect x="0" y="180" width="370" height="155" rx="18" fill="#141824" stroke="#252d42" stroke-width="1"/>
    <text x="30" y="224" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">QUALITÉ DES LEADS</text>
    <text x="30" y="275" fill="#ffffff" font-family="system-ui, sans-serif" font-size="42" font-weight="900">x 3.8</text>
    <text x="30" y="308" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12">Panier moyen multiplié</text>
    
    <rect x="0" y="360" width="370" height="150" rx="18" fill="#e3f794"/>
    <text x="30" y="415" fill="#0d0f12" font-family="system-ui, sans-serif" font-size="20" font-weight="900">RÉSULTAT DIRECT</text>
    <text x="30" y="448" fill="#1b2234" font-family="system-ui, sans-serif" font-size="14" font-weight="600">ROI atteint dès le 1er mois</text>
    <circle cx="320" cy="430" r="22" fill="#0d0f12"/>
    <path d="M312 430 L328 430 M322 424 L328 430 L322 436" stroke="#e3f794" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>
""")

# 14. Bento Tiles
# Tile 1: Big (Case Study 1)
write_svg("bento-1.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="b1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181e2d"/>
      <stop offset="100%" stop-color="#0f121d"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="20" fill="url(#b1Grad)" stroke="#263047" stroke-width="1.5"/>
  <rect x="30" y="30" width="90" height="26" rx="13" fill="#e3f794"/>
  <text x="75" y="47" fill="#0d0f12" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle">CASE STUDY</text>
  <text x="30" y="95" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900">Haute Horlogerie & Luxe</text>
  <text x="30" y="125" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="15">+210% de demandes qualifiées en 60 jours</text>
  
  <!-- Interactive visual UI mockup inside -->
  <g transform="translate(30, 150)">
    <rect width="540" height="210" rx="14" fill="#121622" stroke="#232a3e" stroke-width="1"/>
    <!-- Radial aura -->
    <circle cx="270" cy="105" r="80" fill="#e3f794" fill-opacity="0.08"/>
    <!-- Watch dial abstract -->
    <circle cx="270" cy="105" r="60" fill="#1a2030" stroke="#e3f794" stroke-width="2"/>
    <line x1="270" y1="105" x2="270" y2="65" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <line x1="270" y1="105" x2="300" y2="115" stroke="#e3f794" stroke-width="3" stroke-linecap="round"/>
    <!-- Tag -->
    <rect x="370" y="30" width="140" height="40" rx="20" fill="#1f273b"/>
    <text x="440" y="55" fill="#e3f794" font-family="system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="middle">5.2x ROI</text>
  </g>
</svg>
""")

# Tile 2: Tall (Lighthouse 99)
write_svg("bento-2.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" width="320" height="400">
  <rect width="320" height="400" rx="20" fill="#141824" stroke="#252d42" stroke-width="1.5"/>
  <text x="30" y="45" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">VÉLOCITÉ EXTRÊME</text>
  <text x="30" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="900">Score 99/100</text>
  
  <g transform="translate(160, 200)">
    <circle cx="0" cy="0" r="75" fill="none" stroke="#20273a" stroke-width="12"/>
    <circle cx="0" cy="0" r="75" fill="none" stroke="#e3f794" stroke-width="12" stroke-dasharray="470" stroke-dashoffset="30" stroke-linecap="round" transform="rotate(-90)"/>
    <text x="0" y="12" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="900" text-anchor="middle">99</text>
    <text x="0" y="36" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">PERFORMANCE</text>
  </g>
  
  <rect x="30" y="325" width="260" height="45" rx="10" fill="#1c2234"/>
  <text x="160" y="352" fill="#e3f794" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">0.4s de chargement net</text>
</svg>
""")

# Tile 3: Tall (Retention & Bounce Rate)
write_svg("bento-3.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" width="320" height="400">
  <rect width="320" height="400" rx="20" fill="#141824" stroke="#252d42" stroke-width="1.5"/>
  <text x="30" y="45" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="1">ENGAGEMENT CLIENT</text>
  <text x="30" y="80" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="900">4 min 30</text>
  <text x="30" y="105" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="13">Temps moyen par session</text>
  
  <g transform="translate(30, 140)">
    <rect width="260" height="150" rx="12" fill="#121622" stroke="#232a3e" stroke-width="1"/>
    <!-- Bar charts -->
    <rect x="30" y="80" width="30" height="50" rx="4" fill="#303b54"/>
    <rect x="80" y="60" width="30" height="70" rx="4" fill="#303b54"/>
    <rect x="130" y="40" width="30" height="90" rx="4" fill="#5b73a3"/>
    <rect x="180" y="20" width="30" height="110" rx="4" fill="#e3f794"/>
    <text x="195" y="15" fill="#e3f794" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle">+340%</text>
  </g>
  
  <rect x="30" y="325" width="260" height="45" rx="10" fill="#1c2234"/>
  <text x="160" y="352" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Taux de rebond divisé par 2</text>
</svg>
""")

# Tile 4: Big (Case Study 2)
write_svg("bento-4.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="b4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#191e2b"/>
      <stop offset="100%" stop-color="#0f121d"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="20" fill="url(#b4Grad)" stroke="#263047" stroke-width="1.5"/>
  <rect x="30" y="30" width="105" height="26" rx="13" fill="#303b54"/>
  <text x="82" y="47" fill="#e3f794" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle">SAAS & TECH</text>
  <text x="30" y="95" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="900">Écosystème Digital & SaaS</text>
  <text x="30" y="125" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="15">3.8M€ levés suite à la refonte de leur landing page</text>
  
  <!-- Interactive preview mockup -->
  <g transform="translate(30, 150)">
    <rect width="540" height="210" rx="14" fill="#121622" stroke="#232a3e" stroke-width="1"/>
    <!-- Dashboard Mock -->
    <rect x="25" y="25" width="220" height="160" rx="10" fill="#192030"/>
    <circle cx="50" cy="50" r="12" fill="#e3f794"/>
    <rect x="75" y="44" width="120" height="12" rx="6" fill="#ffffff" fill-opacity="0.8"/>
    <rect x="40" y="80" width="190" height="10" rx="5" fill="#2d3852"/>
    <rect x="40" y="102" width="150" height="10" rx="5" fill="#2d3852"/>
    <rect x="40" y="124" width="170" height="10" rx="5" fill="#2d3852"/>
    
    <g transform="translate(280, 45)">
      <text x="0" y="24" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12" font-weight="600">IMPACT SUR LE PITCH</text>
      <text x="0" y="60" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="900">« Le site a fait 80%</text>
      <text x="0" y="88" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="900">de la persuasion »</text>
    </g>
  </g>
</svg>
""")

# 15. Process Step Illustrations
write_svg("process-1.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <rect width="400" height="300" rx="16" fill="#121520" stroke="#252d42" stroke-width="1"/>
  <!-- Blueprint grid -->
  <path d="M40 50 L360 50 M40 100 L360 100 M40 150 L360 150 M40 200 L360 200 M40 250 L360 250" stroke="#1c2336" stroke-width="1"/>
  <path d="M80 30 L80 270 M160 30 L160 270 M240 30 L240 270 M320 30 L320 270" stroke="#1c2336" stroke-width="1"/>
  <rect x="90" y="70" width="220" height="150" rx="12" fill="#182030" stroke="#e3f794" stroke-width="2"/>
  <circle cx="200" cy="145" r="35" fill="none" stroke="#e3f794" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="160" y1="145" x2="240" y2="145" stroke="#ffffff" stroke-width="2"/>
  <line x1="200" y1="105" x2="200" y2="185" stroke="#ffffff" stroke-width="2"/>
</svg>
""")

write_svg("process-2.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="p2G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e3f794"/>
      <stop offset="100%" stop-color="#4fd1c5"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" rx="16" fill="#121520" stroke="#252d42" stroke-width="1"/>
  <!-- 3D polygon mesh wireframe -->
  <polygon points="200,40 330,110 330,220 200,280 70,220 70,110" fill="none" stroke="#2a354f" stroke-width="2"/>
  <line x1="200" y1="40" x2="200" y2="280" stroke="#2a354f" stroke-width="2"/>
  <line x1="330" y1="110" x2="70" y2="220" stroke="#2a354f" stroke-width="2"/>
  <line x1="70" y1="110" x2="330" y2="220" stroke="#2a354f" stroke-width="2"/>
  <polygon points="200,80 280,125 280,195 200,240 120,195 120,125" fill="url(#p2G)" fill-opacity="0.15" stroke="url(#p2G)" stroke-width="2"/>
  <circle cx="200" cy="160" r="14" fill="#e3f794"/>
</svg>
""")

write_svg("process-3.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <rect width="400" height="300" rx="16" fill="#121520" stroke="#252d42" stroke-width="1"/>
  <!-- Terminal / Launch UI -->
  <rect x="50" y="50" width="300" height="200" rx="12" fill="#0d1017" stroke="#232c42" stroke-width="1.5"/>
  <circle cx="75" cy="72" r="5" fill="#ff5f56"/>
  <circle cx="92" cy="72" r="5" fill="#ffbd2e"/>
  <circle cx="109" cy="72" r="5" fill="#27c93f"/>
  <text x="75" y="120" fill="#e3f794" font-family="monospace" font-size="14">&gt; build --production</text>
  <text x="75" y="150" fill="#8c97b8" font-family="monospace" font-size="12">✓ Zero layout shift</text>
  <text x="75" y="175" fill="#8c97b8" font-family="monospace" font-size="12">✓ 60 FPS verified</text>
  <text x="75" y="205" fill="#27c93f" font-family="monospace" font-size="14" font-weight="bold">DEPLOYED TO PRODUCTION (100% READY)</text>
</svg>
""")

# 16. Cursor Trail Preview Cards (Objection Popups)
write_svg("trail-1.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="240" height="150">
  <rect width="240" height="150" rx="14" fill="#182030" stroke="#e3f794" stroke-width="2"/>
  <text x="24" y="38" fill="#e3f794" font-family="system-ui, sans-serif" font-size="11" font-weight="800">TRANSPARENCE TOTALE</text>
  <text x="24" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="900">Devis Ferme & Définitif</text>
  <rect x="24" y="90" width="192" height="36" rx="8" fill="#101522"/>
  <text x="36" y="113" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12">0€ de surcoût imprévu</text>
</svg>
""")

write_svg("trail-2.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="240" height="150">
  <rect width="240" height="150" rx="14" fill="#182030" stroke="#e3f794" stroke-width="2"/>
  <text x="24" y="38" fill="#e3f794" font-family="system-ui, sans-serif" font-size="11" font-weight="800">100% ARTISANAT DIGITAL</text>
  <text x="24" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="900">Zéro Template Préfait</text>
  <rect x="24" y="90" width="192" height="36" rx="8" fill="#101522"/>
  <text x="36" y="113" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12">Identité unique sur le marché</text>
</svg>
""")

write_svg("trail-3.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="240" height="150">
  <rect width="240" height="150" rx="14" fill="#182030" stroke="#e3f794" stroke-width="2"/>
  <text x="24" y="38" fill="#e3f794" font-family="system-ui, sans-serif" font-size="11" font-weight="800">VITESSE RECORD</text>
  <text x="24" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="900">Score 99+ Mobile & Web</text>
  <rect x="24" y="90" width="192" height="36" rx="8" fill="#101522"/>
  <text x="36" y="113" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12">Chargement instantané</text>
</svg>
""")

write_svg("trail-4.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="240" height="150">
  <rect width="240" height="150" rx="14" fill="#182030" stroke="#e3f794" stroke-width="2"/>
  <text x="24" y="38" fill="#e3f794" font-family="system-ui, sans-serif" font-size="11" font-weight="800">LIBERTÉ COMPLÈTE</text>
  <text x="24" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="900">Propriété Intégrale</text>
  <rect x="24" y="90" width="192" height="36" rx="8" fill="#101522"/>
  <text x="36" y="113" fill="#8c97b8" font-family="system-ui, sans-serif" font-size="12">Aucun abonnement captif</text>
</svg>
""")

# 17. Testimonial Avatar
write_svg("avatar-client.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="avGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2d3752"/>
      <stop offset="100%" stop-color="#141824"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#avGrad)" stroke="#e3f794" stroke-width="2"/>
  <!-- Silhouette -->
  <circle cx="50" cy="38" r="18" fill="#8c97b8"/>
  <path d="M22 82 C22 62, 36 58, 50 58 C64 58, 78 62, 78 82 Z" fill="#8c97b8"/>
  <circle cx="76" cy="76" r="12" fill="#e3f794"/>
  <path d="M72 76 L75 79 L81 73" fill="none" stroke="#0d0f12" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
""")

print("All assets successfully generated!")
