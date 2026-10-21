/**
 * STUDIO KRONOS - MOTEUR DE DÉFILEMENT SCRUBÉ & RENDU IMMERSIF (PURE JS)
 * Conçu sans aucune bibliothèque externe pour une vélocité maximale (60 FPS).
 */

(function () {
  "use strict";

  const C = window.SITE_CONTENT;
  if (!C) {
    console.error("Erreur critique : window.SITE_CONTENT est introuvable.");
    return;
  }

  // --- ÉTAT DU MOTEUR ---
  const state = {
    scrollY: 0,
    viewportHeight: window.innerHeight,
    viewportWidth: window.innerWidth,
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
    targetMouseX: window.innerWidth / 2,
    targetMouseY: window.innerHeight / 2,
    isLoaded: false,
    theme: C.meta.theme || "dark",
    trailIndex: 0,
    lastTrailTime: 0
  };

  // --- INITIALISATION DU DOM ---
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(state.theme);
    renderApp();
    setupPinnedSections();
    initLoader();
    setupEventListeners();
    setupObjectionsAccordion();
    setupCursorTrail();
    requestAnimationFrame(renderLoop);
  });

  // --- GESTION DU THÈME ---
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty("--lime", C.meta.accentColor || "#e3f794");
    document.documentElement.style.setProperty("--lime-ink", C.meta.accentInk || "#0c0e14");
  }

  // --- RENDU DYNAMIQUE DE TOUT LE SITE ---
  function renderApp() {
    const root = document.getElementById("app");
    if (!root) return;

    root.innerHTML = `
      <!-- 1. LOADER -->
      <div id="sceneLoader" class="scene-loader">
        <div class="loader-center">
          <div id="loaderBrandText" class="loader-brand">${C.loader.brandName}</div>
          <div class="loader-subtext">${C.loader.subtext}</div>
          <div class="loader-bar-wrap">
            <div id="loaderBarFill" class="loader-bar-fill"></div>
          </div>
          <div class="loader-status">
            <span>${C.loader.loadingText}</span>
            <span id="loaderPercent">0%</span>
          </div>
        </div>
      </div>

      <!-- HEADER / NAVIGATION -->
      <header id="siteHeader" class="site-header">
        <a href="#" class="header-brand">
          <img src="images/logo.svg" alt="${C.navigation.brandName} Logo" width="32" height="32" />
          <span id="headerBrandTarget">${C.navigation.brandName}</span>
        </a>
        <nav class="header-nav">
          ${C.navigation.links.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <button id="themeToggleBtn" class="theme-toggle-btn" aria-label="Changer de thème">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          <a href="${C.navigation.ctaButton.href}" class="btn-primary" style="padding: 10px 20px; font-size: 0.85rem;">
            ${C.navigation.ctaButton.label}
          </a>
        </div>
      </header>

      <!-- 2. SCÈNE HERO AVEC 10 VISUELS FLOTTANTS -->
      <section id="sceneHero" class="scene-hero">
        <div class="hero-floating-container" id="heroFloatingContainer">
          ${C.hero.floatingVisuals.map((v, idx) => `
            <div class="floating-item" id="floating-${v.id}" data-speed="${v.speed}" data-depth="${v.depth}" style="left: ${v.x}; top: ${v.y};">
              <img src="${v.src}" alt="${v.alt}" loading="eager" />
            </div>
          `).join("")}
        </div>

        <div class="hero-content">
          <div class="hero-badge-wrap">
            <span class="badge-pill">
              <span class="badge-dot"></span>
              ${C.hero.badge}
            </span>
          </div>
          <h1 class="hero-title">
            <span>${C.hero.titleLine1}</span>
            <span class="highlight-line">${C.hero.titleLine2}</span>
          </h1>
          <p class="hero-subheadline">${C.hero.subheadline}</p>
          <div class="hero-cta-group">
            <a href="${C.hero.primaryCta.href}" class="btn-primary">${C.hero.primaryCta.label}</a>
            <a href="${C.hero.secondaryCta.href}" class="btn-secondary">${C.hero.secondaryCta.label}</a>
          </div>
          <div class="hero-scroll-indicator">
            <div class="scroll-mouse-icon">
              <div class="scroll-mouse-dot"></div>
            </div>
            <span>${C.hero.scrollIndicator}</span>
          </div>
        </div>
      </section>

      <!-- 3. SCÈNE TRAVERSÉE DU NUAGE (PINNED SECTION) -->
      <section class="pinned-section-track" id="trackCloud" data-pin="2.5">
        <div class="pinned-sticky-frame">
          <div class="cloud-traverse-wrap">
            <div class="cloud-layer-bg" id="cloudLayer" style="background-image: url('${C.cloudTraverse.bgImage}');"></div>
            <div class="cloud-center-copy" id="cloudCopy">
              <span class="section-tag">${C.cloudTraverse.tagline}</span>
              <h2 class="cloud-headline">${C.cloudTraverse.headline}</h2>
              <p class="cloud-subtext">${C.cloudTraverse.subtext}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. SCÈNE TITRE + ZOOM DE L'IMAGE ENTRE LES MOTS (PINNED SECTION) -->
      <section class="pinned-section-track" id="trackZoom" data-pin="3">
        <div class="pinned-sticky-frame">
          <div class="zoom-scene-wrap">
            <div class="zoom-title-layout" id="zoomTitleLayout">
              <span>${C.zoomTitle.prefixText}</span>
              <div class="zoom-image-slot" id="zoomImageSlot" style="width: 160px; height: 60px;">
                <img src="${C.zoomTitle.image.src}" alt="${C.zoomTitle.image.alt}" id="zoomImageEl" />
              </div>
              <span>${C.zoomTitle.suffixText}</span>
            </div>
            <div class="zoom-expanded-caption" id="zoomCaption">
              ${C.zoomTitle.image.caption}
            </div>
          </div>
        </div>
      </section>

      <!-- 5. SCÈNE MANIFESTE ENCRÉ AVEC OVALE DESSINÉ -->
      <section id="manifesto" class="scene-manifesto">
        <div class="manifesto-container">
          <span class="section-tag">${C.manifesto.sectionTag}</span>
          <h2 class="section-headline">${C.manifesto.headline}</h2>
          <div class="manifesto-body" id="manifestoText">
            ${renderManifestoWords()}
          </div>
          <p class="manifesto-subtext">${C.manifesto.subtext}</p>
        </div>
      </section>

      <!-- 6. SCÈNE PREUVE (4-TILE BENTO GRID) -->
      <section id="proof" class="scene-proof">
        <span class="section-tag">${C.proof.sectionTag}</span>
        <h2 class="section-headline">${C.proof.headline}</h2>
        <p class="section-subheadline">${C.proof.subheadline}</p>

        <div class="bento-grid">
          ${C.proof.bentoGrid.map(card => `
            <div class="bento-card type-${card.type}">
              <div class="bento-header">
                <div class="bento-category">${card.category}</div>
                <h3 class="bento-title">${card.title}</h3>
                <div class="bento-stat-wrap">
                  <div class="bento-stat-number">${card.stat}</div>
                  <div class="bento-stat-label">${card.statLabel}</div>
                </div>
                <p class="bento-description">${card.description}</p>
              </div>
              <div class="bento-visual">
                <img src="${card.image}" alt="${card.title}" loading="lazy" />
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- 7. SCÈNE DEVISE / MOTTO -->
      <section class="scene-motto">
        <div class="motto-content">
          <div class="motto-author">${C.motto.author}</div>
          <h2 class="motto-quote">« ${C.motto.quote} »</h2>
          <p class="motto-subtext">${C.motto.subtext}</p>
        </div>
      </section>

      <!-- 8. SCÈNE PROCESSUS EN 3 ÉTAPES (RIDEAU DE LAMES / PINNED SLATS) -->
      <section class="pinned-section-track" id="trackProcess" data-pin="3.5">
        <div class="pinned-sticky-frame">
          <div class="process-sticky-container">
            <div class="process-header">
              <span class="section-tag">${C.process.sectionTag}</span>
              <h2 class="section-headline" style="margin-bottom: 8px;">${C.process.headline}</h2>
              <p class="section-subheadline" style="margin-bottom: 0;">${C.process.subheadline}</p>
            </div>
            
            <div class="process-cards-stack" id="processCardsStack">
              ${C.process.steps.map((step, idx) => `
                <div class="process-slat-card" id="processSlat-${idx}" style="z-index: ${idx + 1};">
                  <div class="process-slat-left">
                    <div class="process-giant-number">${step.number}</div>
                    <div class="process-friction-tag">✕ ${step.frictionSolved}</div>
                    <h3 class="process-step-title">${step.title}</h3>
                    <p class="process-step-body">${step.body}</p>
                    <div style="margin-top: 24px;">
                      <span class="badge-pill">${step.badge}</span>
                    </div>
                  </div>
                  <div class="process-slat-right">
                    <img src="${step.image}" alt="${step.title}" />
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <!-- 9. SCÈNE TÉMOIGNAGE -->
      <section class="scene-testimonial">
        <div class="testimonial-card">
          <span class="testimonial-notice">${C.testimonial.notice}</span>
          <div style="display: flex; justify-content: center; gap: 4px; color: var(--lime); margin-bottom: 20px;">
            ${"★".repeat(C.testimonial.rating)}
          </div>
          <p class="testimonial-quote">${C.testimonial.quote}</p>
          <div class="testimonial-footer">
            <img src="${C.testimonial.avatar}" alt="${C.testimonial.authorName}" class="testimonial-avatar" />
            <div class="testimonial-author-meta">
              <div class="testimonial-name">${C.testimonial.authorName}</div>
              <div class="testimonial-role">${C.testimonial.authorRole}</div>
            </div>
            <div class="testimonial-badge">${C.testimonial.keyMetric}</div>
          </div>
        </div>
      </section>

      <!-- 10. SCÈNE OBJECTIONS AVEC TRAÎNÉE D'IMAGES SOUS LA SOURIS -->
      <section id="objections" class="scene-objections">
        <span class="section-tag">${C.objections.sectionTag}</span>
        <h2 class="section-headline">${C.objections.headline}</h2>
        <p class="section-subheadline">${C.objections.subheadline}</p>

        <div class="objections-list" id="objectionsList">
          ${C.objections.items.map((item, idx) => `
            <div class="objection-item ${idx === 0 ? "is-open" : ""}" data-preview="${item.previewImage}">
              <div class="objection-header">
                <div class="objection-title-group">
                  <h3 class="objection-title">${item.title}</h3>
                  <span class="objection-subtitle">${item.subtitle}</span>
                </div>
                <div class="objection-toggle-icon">+</div>
              </div>
              <div class="objection-detail">${item.detail}</div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- 11. FOOTER AVEC NOM GÉANT -->
      <footer id="footer" class="scene-footer">
        <div class="footer-top-cta">
          <span class="section-tag">${C.footer.tagline}</span>
          <h2 class="footer-headline">${C.footer.headline}</h2>
          <p class="footer-subheadline">${C.footer.subheadline}</p>
          <div class="footer-cta-group">
            <a href="${C.footer.ctaPrimary.href}" class="btn-primary" style="font-size: 1.1rem; padding: 18px 36px;">
              ${C.footer.ctaPrimary.label}
            </a>
            <a href="${C.footer.ctaSecondary.href}" class="btn-secondary">
              ${C.footer.ctaSecondary.label}
            </a>
          </div>
          <div class="footer-availability-badge">
            <span class="badge-dot"></span>
            ${C.footer.availabilityBadge}
          </div>
        </div>

        <div class="footer-giant-name-wrap">
          <div class="footer-giant-name">${C.footer.giantBrandText}</div>
        </div>

        <div class="footer-bottom-bar">
          <div class="footer-nav-links">
            ${C.footer.links.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}
          </div>
          <div>${C.footer.copyright}</div>
          <a href="#" class="back-to-top-btn" id="backToTop">
            ↑ Retour en haut
          </a>
        </div>
      </footer>

      <!-- CONTENEUR GLOBAL DE LA TRAÎNÉE D'IMAGES -->
      <div id="cursorTrailContainer"></div>
    `;
  }

  // --- RENDU DU MANIFESTE AVEC OVALES SVG ANIMÉS ---
  function renderManifestoWords() {
    return C.manifesto.textSegments.map(segment => {
      if (segment.highlight) {
        // Enlève les crochets [[ ... ]]
        const cleanText = segment.text.replace(/\[\[|\]\]/g, "");
        return `
          <span class="highlight-oval-wrap">
            <span class="highlight-word-content">${cleanText}</span>
            <svg class="oval-svg" viewBox="0 0 260 90" preserveAspectRatio="none">
              <path class="oval-path" d="M 15 45 C 10 15, 120 8, 240 22 C 265 26, 255 75, 140 82 C 40 86, 12 65, 20 42 C 24 28, 65 14, 110 16" />
            </svg>
          </span>
        `;
      }
      return `<span>${segment.text}</span>`;
    }).join("");
  }

  // --- GESTION DES HAUTEURS DE PISTE DES SECTIONS PINNED ---
  function setupPinnedSections() {
    const tracks = document.querySelectorAll(".pinned-section-track[data-pin]");
    tracks.forEach(track => {
      const pinMultiplier = parseFloat(track.getAttribute("data-pin")) || 2;
      track.style.height = `${pinMultiplier * 100}vh`;
    });
  }

  // --- 1. INITIALISATION DU LOADER ET TRANSITION FLIP ---
  function initLoader() {
    const loader = document.getElementById("sceneLoader");
    const bar = document.getElementById("loaderBarFill");
    const percentEl = document.getElementById("loaderPercent");
    const brand = document.getElementById("loaderBrandText");
    const headerBrand = document.getElementById("headerBrandTarget");

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 14) + 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        bar.style.width = "100%";
        percentEl.textContent = "100%";

        setTimeout(() => {
          // Transition fluide du logo / nom vers le header
          if (brand && headerBrand) {
            const bRect = brand.getBoundingClientRect();
            const hRect = headerBrand.getBoundingClientRect();
            const dx = hRect.left - bRect.left;
            const dy = hRect.top - bRect.top;
            const scale = hRect.height / (bRect.height || 1);

            brand.style.transform = `translate(${dx}px, ${dy}px) scale(${scale || 0.4})`;
            brand.style.opacity = "0";
          }

          loader.classList.add("is-done");
          state.isLoaded = true;
          document.body.style.overflow = "auto";
        }, 350);
      } else {
        bar.style.width = `${progress}%`;
        percentEl.textContent = `${progress}%`;
      }
    }, 45);
  }

  // --- ACCORDÉON DES OBJECTIONS ---
  function setupObjectionsAccordion() {
    const list = document.getElementById("objectionsList");
    if (!list) return;

    list.addEventListener("click", e => {
      const item = e.target.closest(".objection-item");
      if (!item) return;

      const isOpen = item.classList.contains("is-open");
      list.querySelectorAll(".objection-item").forEach(i => i.classList.remove("is-open"));
      if (!isOpen) {
        item.classList.add("is-open");
      }
    });
  }

  // --- TRAÎNÉE D'IMAGES SOUS LA SOURIS (CURSOR IMAGE TRAIL) ---
  function setupCursorTrail() {
    const container = document.getElementById("cursorTrailContainer");
    const objectionsSection = document.getElementById("objections");
    if (!container || !objectionsSection) return;

    let activeSrc = null;

    objectionsSection.addEventListener("mouseenter", () => {
      const firstOpen = objectionsSection.querySelector(".objection-item.is-open") || objectionsSection.querySelector(".objection-item");
      if (firstOpen) activeSrc = firstOpen.getAttribute("data-preview");
    });

    objectionsSection.querySelectorAll(".objection-item").forEach(item => {
      item.addEventListener("mouseenter", () => {
        activeSrc = item.getAttribute("data-preview");
      });
    });

    window.addEventListener("mousemove", e => {
      state.targetMouseX = e.clientX;
      state.targetMouseY = e.clientY;

      // Déclenche l'apparition d'une miniature si la souris bouge au-dessus de la section objections
      const rect = objectionsSection.getBoundingClientRect();
      const inObjections = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );

      const now = performance.now();
      if (inObjections && activeSrc && (now - state.lastTrailTime > 80)) {
        spawnTrailImage(e.clientX, e.clientY, activeSrc);
        state.lastTrailTime = now;
      }
    });
  }

  function spawnTrailImage(x, y, src) {
    const container = document.getElementById("cursorTrailContainer");
    if (!container) return;

    const img = document.createElement("img");
    img.src = src;
    img.className = "cursor-trail-image";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    const randomRot = (Math.random() - 0.5) * 16;
    img.style.transform = `translate(-50%, -50%) scale(0.6) rotate(${randomRot}deg)`;

    container.appendChild(img);

    // Active
    requestAnimationFrame(() => {
      img.classList.add("active");
      img.style.transform = `translate(-50%, -50%) scale(1) rotate(${randomRot}deg)`;
    });

    // Fade out
    setTimeout(() => {
      img.classList.add("fade");
      setTimeout(() => {
        if (img.parentNode) img.parentNode.removeChild(img);
      }, 600);
    }, 400);
  }

  // --- ÉCOUTEURS D'ÉVÉNEMENTS GLOBAUX ---
  function setupEventListeners() {
    window.addEventListener("scroll", () => {
      state.scrollY = window.scrollY || window.pageYOffset;
    }, { passive: true });

    window.addEventListener("resize", () => {
      state.viewportHeight = window.innerHeight;
      state.viewportWidth = window.innerWidth;
      setupPinnedSections();
    });

    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        applyTheme(state.theme);
      });
    }

    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      backToTop.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // --- CALCUL DU PROGRÈS D'UNE SECTION PINNED (0.0 à 1.0) ---
  function calculateSectionProgress(trackEl) {
    if (!trackEl) return 0;
    const rect = trackEl.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable <= 0) return 0;
    const current = -rect.top;
    const progress = Math.max(0, Math.min(1, current / totalScrollable));
    return progress;
  }

  // --- BOUCLE D'ANIMATION PRINCIPALE 60 FPS (REQUEST ANIMATION FRAME) ---
  function renderLoop() {
    // 1. Interpolation fluide de la souris pour le parallax
    state.mouseX += (state.targetMouseX - state.mouseX) * 0.08;
    state.mouseY += (state.targetMouseY - state.mouseY) * 0.08;

    const normMouseX = (state.mouseX / state.viewportWidth - 0.5) * 2; // -1 à +1
    const normMouseY = (state.mouseY / state.viewportHeight - 0.5) * 2;

    // 2. HERO: Parallax & Dispersion des 10 visuels flottants
    const heroSection = document.getElementById("sceneHero");
    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.bottom > 0 && heroRect.top < state.viewportHeight) {
        const heroScrollProgress = Math.max(0, -heroRect.top / (heroRect.height || 1));

        C.hero.floatingVisuals.forEach(v => {
          const el = document.getElementById(`floating-${v.id}`);
          if (el) {
            const parallaxX = normMouseX * 25 * v.depth;
            const parallaxY = normMouseY * 25 * v.depth + heroScrollProgress * v.speed * 200;
            const rotate = normMouseX * 8 * v.speed;
            const scale = Math.max(0.7, 1 - heroScrollProgress * 0.4);
            el.style.transform = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scale}) rotate(${rotate}deg)`;
            el.style.opacity = Math.max(0, 1 - heroScrollProgress * 1.5);
          }
        });
      }
    }

    // 3. CLOUD TRAVERSE: Traversée du nuage / Zoom de particules
    const trackCloud = document.getElementById("trackCloud");
    if (trackCloud) {
      const p = calculateSectionProgress(trackCloud);
      const cloudLayer = document.getElementById("cloudLayer");
      const cloudCopy = document.getElementById("cloudCopy");

      if (cloudLayer) {
        // Le nuage commence à échelle 1 et zoome jusqu'à 2.8 en s'estompant
        const scale = 1 + p * 2.2;
        const opacity = Math.max(0, 1 - Math.pow(p, 2) * 1.2);
        cloudLayer.style.transform = `scale(${scale})`;
        cloudLayer.style.opacity = opacity;
      }

      if (cloudCopy) {
        // Le texte apparaît au milieu puis s'écarte
        const textOpacity = p < 0.2 ? p * 5 : (p > 0.8 ? (1 - p) * 5 : 1);
        const textY = (0.5 - p) * 80;
        cloudCopy.style.opacity = textOpacity;
        cloudCopy.style.transform = `translateY(${textY}px)`;
      }
    }

    // 4. ZOOM SCENE: Titre puis expansion de l'image entre les mots
    const trackZoom = document.getElementById("trackZoom");
    if (trackZoom) {
      const p = calculateSectionProgress(trackZoom);
      const zoomSlot = document.getElementById("zoomImageSlot");
      const zoomTitle = document.getElementById("zoomTitleLayout");
      const zoomCaption = document.getElementById("zoomCaption");

      if (zoomSlot && zoomTitle) {
        // Largeur initiale : 160px -> Largeur max : 88vw
        // Hauteur initiale : 60px -> Hauteur max : 75vh
        const maxW = Math.min(1100, state.viewportWidth * 0.88);
        const maxH = Math.min(650, state.viewportHeight * 0.72);

        const currentW = 160 + (maxW - 160) * Math.min(1, p * 1.4);
        const currentH = 60 + (maxH - 60) * Math.min(1, p * 1.4);

        zoomSlot.style.width = `${currentW}px`;
        zoomSlot.style.height = `${currentH}px`;
        zoomSlot.style.borderRadius = p > 0.4 ? "24px" : "14px";

        if (zoomCaption) {
          zoomCaption.style.opacity = p > 0.7 ? "1" : "0";
          zoomCaption.style.transform = `translateY(${(1 - Math.min(1, p * 1.2)) * 20}px)`;
        }
      }
    }

    // 5. MANIFESTE: Déclenchement de l'ovale SVG dessiné
    const manifestoSec = document.getElementById("manifesto");
    if (manifestoSec) {
      const mRect = manifestoSec.getBoundingClientRect();
      const inView = mRect.top < state.viewportHeight * 0.6 && mRect.bottom > 0;
      const ovals = manifestoSec.querySelectorAll(".oval-path");
      ovals.forEach(path => {
        if (inView) {
          path.classList.add("drawn");
        }
      });
    }

    // 8. PROCESSUS: Rideau de lames (Pinned Slats)
    const trackProcess = document.getElementById("trackProcess");
    if (trackProcess) {
      const p = calculateSectionProgress(trackProcess);
      const slats = [
        document.getElementById("processSlat-0"),
        document.getElementById("processSlat-1"),
        document.getElementById("processSlat-2")
      ];

      // Slat 0: Toujours actif au début (0.0 -> 0.33)
      // Slat 1: Glisse sur Slat 0 (0.33 -> 0.66)
      // Slat 2: Glisse sur Slat 1 (0.66 -> 1.0)
      if (slats[0] && slats[1] && slats[2]) {
        // Slat 1 progress
        const p1 = Math.max(0, Math.min(1, (p - 0.28) / 0.32));
        slats[1].style.transform = `translateY(${(1 - p1) * 100}%)`;
        slats[1].style.opacity = p1 > 0 ? "1" : "0";

        // Slat 2 progress
        const p2 = Math.max(0, Math.min(1, (p - 0.62) / 0.32));
        slats[2].style.transform = `translateY(${(1 - p2) * 100}%)`;
        slats[2].style.opacity = p2 > 0 ? "1" : "0";
      }
    }

    requestAnimationFrame(renderLoop);
  }

})();
