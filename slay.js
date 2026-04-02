/* ═══════════════════════════════════════════════
   SOCIAL SLAY — slay.js  v2
   Progress bar, 3D tilt cards, extra particles,
   floating wireframe shapes, cursor glow
═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── SCROLL PROGRESS BAR ── */
  const bar = document.getElementById('slay-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  /* ── CURSOR COLOR SYNC WITH THEME ── */
  const cursor   = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  function syncCursorTheme() {
    const isLight = document.body.classList.contains('light');
    if (cursor) {
      cursor.style.background     = isLight ? '#b8860b' : '#c9a84c';
      cursor.style.boxShadow      = isLight ? '0 0 10px rgba(184,134,11,0.5)' : '0 0 12px rgba(201,168,76,0.6)';
    }
    if (cursorRing) {
      cursorRing.style.borderColor = isLight ? 'rgba(109,40,217,0.35)' : 'rgba(201,168,76,0.4)';
    }
  }
  syncCursorTheme();

  /* Watch for theme changes */
  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      requestAnimationFrame(syncCursorTheme);
    });
  }

  /* ── 3D TILT on cards ── */
  function addTilt(selector, maxTilt = 10) {
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('mousemove', e => {
        const r  = card.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width  - 0.5;
        const cy = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${cx * maxTilt}deg) rotateX(${-cy * maxTilt}deg) translateY(-6px)`;
        card.style.transition = 'transform 0.08s ease';
        /* Mouse-follow glow */
        const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
        const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
        card.style.background = card.dataset.origBg || '';
        card.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,0.07) 0%, transparent 55%)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform  = '';
        card.style.transition = 'transform 0.5s cubic-bezier(.23,1,.32,1)';
        card.style.backgroundImage = '';
      });
    });
  }
  addTilt('.price-card', 8);
  addTilt('.proof-card', 7);
  addTilt('.ann-small', 6);
  addTilt('.contact-card', 8);

  /* ── ENHANCED PARTICLES (more colors) ── */
  function spawnParticle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const p    = document.createElement('div');
    const size = Math.random() * 5 + 1.5;
    const isLight = document.body.classList.contains('light');
    const colors = isLight
      ? ['rgba(201,168,76,0.35)', 'rgba(109,40,217,0.25)', 'rgba(34,211,238,0.20)']
      : ['rgba(201,168,76,0.40)', 'rgba(168,85,247,0.30)', 'rgba(34,211,238,0.25)', 'rgba(244,63,94,0.20)'];
    const col  = colors[Math.floor(Math.random() * colors.length)];
    p.className = 'particle';
    p.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `bottom:-20px`,
      `background:${col}`,
      `animation-duration:${Math.random() * 12 + 8}s`,
      `animation-delay:-${Math.random() * 12}s`,
      `box-shadow:0 0 ${size * 2}px ${col}`,
    ].join(';');
    hero.appendChild(p);
  }
  // Spawn extra particles
  for (let i = 0; i < 14; i++) spawnParticle();

  /* ── FLOATING 3D WIREFRAME SHAPES (Three.js or CSS fallback) ── */
  function initFloatingShapes() {
    if (typeof THREE === 'undefined') return;

    function makeShapeCanvas(containerId, color1, color2, color3) {
      const wrap = document.querySelector(containerId);
      if (!wrap) return;
      const W = 300, H = 300;
      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.z = 4;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setClearColor(0, 0);
      wrap.appendChild(renderer.domElement);
      renderer.domElement.style.cssText = 'width:100%;height:100%;position:absolute;inset:0;pointer-events:none;';

      const meshes = [];

      const g1 = new THREE.OctahedronGeometry(0.5, 0);
      const m1 = new THREE.MeshBasicMaterial({ color: color1, wireframe: true, opacity: 0.4, transparent: true });
      const s1 = new THREE.Mesh(g1, m1);
      scene.add(s1); meshes.push({ m: s1, rx: 0.6, ry: 0.9 });

      const g2 = new THREE.IcosahedronGeometry(0.32, 0);
      const m2 = new THREE.MeshBasicMaterial({ color: color2, wireframe: true, opacity: 0.35, transparent: true });
      const s2 = new THREE.Mesh(g2, m2);
      s2.position.set(0.9, 0.6, 0); scene.add(s2); meshes.push({ m: s2, rx: -0.7, ry: 1.1 });

      const g3 = new THREE.TetrahedronGeometry(0.28, 0);
      const m3 = new THREE.MeshBasicMaterial({ color: color3, wireframe: true, opacity: 0.30, transparent: true });
      const s3 = new THREE.Mesh(g3, m3);
      s3.position.set(-0.8, -0.5, 0); scene.add(s3); meshes.push({ m: s3, rx: 1.0, ry: -0.5 });

      let t = 0;
      function animate() {
        requestAnimationFrame(animate);
        t += 0.008;
        meshes.forEach(({ m, rx, ry }) => {
          m.rotation.x = t * rx;
          m.rotation.y = t * ry;
          m.position.y += Math.sin(t + m.position.x) * 0.001;
        });
        renderer.render(scene, camera);
      }
      animate();
    }

    const isDark = !document.body.classList.contains('light');
    makeShapeCanvas('.hero-shape-canvas',
      isDark ? 0xc9a84c : 0xb8860b,
      isDark ? 0xa855f7 : 0x7c3aed,
      isDark ? 0x22d3ee : 0x0891b2
    );
  }
  setTimeout(initFloatingShapes, 500);

  /* ── SERVICE TILE MOUSE GLOW ── */
  document.querySelectorAll('.service-tile').forEach(tile => {
    tile.addEventListener('mousemove', e => {
      const r = tile.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
      const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
      tile.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,0.06) 0%, transparent 50%)`;
    });
    tile.addEventListener('mouseleave', () => {
      tile.style.backgroundImage = '';
    });
  });

  /* ── PLATFORM CARD BAR ANIMATION FIX ── */
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.pc-bar-fill').forEach(b => {
          const w = b.getAttribute('data-width') || b.style.getPropertyValue('--target-width') || '75%';
          b.style.width = w;
        });
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.platform-card').forEach(c => barObserver.observe(c));

  /* ── ACTIVE NAV LINK HIGHLIGHT ── */
  const allSections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  const activeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => a.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--gold)';
      }
    });
  }, { threshold: 0.4 });
  allSections.forEach(s => activeObs.observe(s));

  /* ── PARALLAX on hero orb circles ── */
  const heroBgCircles = document.querySelectorAll('.hero-bg-circle');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBgCircles.forEach((c, i) => {
      const speed = [0.06, 0.10, 0.04][i] || 0.06;
      c.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });

  /* ── STEP NUMBER COUNTER ANIMATION ── */
  function animateValue(el, target, suffix, duration) {
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const statObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const txt = el.textContent.trim();
      const num = parseFloat(txt.replace(/[^0-9.]/g, ''));
      const sfx = txt.replace(/[0-9.]/g, '');
      if (!isNaN(num) && num > 0) animateValue(el, num, sfx, 1600);
      statObs.unobserve(el);
    });
  }, { threshold: 0.7 });
  document.querySelectorAll('.hero-stat-num, .why-badge-num').forEach(el => statObs.observe(el));

  /* ── PROCESS STEP HOVER LINE ANIMATION ── */
  document.querySelectorAll('.process-step').forEach((step, i) => {
    step.addEventListener('mouseenter', () => {
      step.querySelector('.step-num').style.transform = 'scale(1.08)';
    });
    step.addEventListener('mouseleave', () => {
      step.querySelector('.step-num').style.transform = '';
    });
  });

  /* ── HERO TAG GLOW ON HOVER ── */
  const heroTag = document.querySelector('.hero-tag');
  if (heroTag) {
    heroTag.addEventListener('mouseenter', () => {
      heroTag.style.boxShadow = '0 0 30px rgba(201,168,76,0.25), 0 0 60px rgba(201,168,76,0.10)';
    });
    heroTag.addEventListener('mouseleave', () => {
      heroTag.style.boxShadow = '';
    });
  }

  /* ── RIPPLE ON CTA BUTTONS ── */
  document.querySelectorAll('.btn-primary, .form-submit, .price-cta').forEach(btn => {
    btn.addEventListener('click', e => {
      const ripple = document.createElement('span');
      const r = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2;
      ripple.style.cssText = `
        position:absolute;
        width:${size}px; height:${size}px;
        left:${e.clientX - r.left - size/2}px;
        top:${e.clientY - r.top - size/2}px;
        border-radius:50%;
        background:rgba(255,255,255,0.15);
        transform:scale(0);
        animation:slayRipple 0.5s ease forwards;
        pointer-events:none;
        z-index:10;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Ripple keyframe
  if (!document.getElementById('slay-ripple-style')) {
    const st = document.createElement('style');
    st.id = 'slay-ripple-style';
    st.textContent = '@keyframes slayRipple { to { transform: scale(1); opacity: 0; } }';
    document.head.appendChild(st);
  }

  /* ── MAGNETIC BUTTON EFFECT ── */
  document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const cx = e.clientX - r.left - r.width  / 2;
      const cy = e.clientY - r.top  - r.height / 2;
      btn.style.transform = `translateY(-3px) translate(${cx * 0.08}px, ${cy * 0.08}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

})();
