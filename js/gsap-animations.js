/* ═══════════════════════════════════════════════════
   js/gsap-animations.js  –  Scroll & entry animations (v2)
   Bug fixes: hero elements revealed immediately; scroll reveals
   use fromTo properly; no stacking conflicts with tilt.
   ═══════════════════════════════════════════════════ */

function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)

  /* ── Immediately set all rv-* to visible so they don't stay hidden
        if GSAP fails or is slow ── */
  const safeReveal = el => {
    gsap.set(el, { clearProps: 'all' })
  }

  /* ── Hero entry — fires once on load ── */
  window.addEventListener('load', () => {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // All hero elements start hidden via CSS (.rv-up etc) — animate them in
    heroTl
      .to('#home .stag',           { opacity:1, y:0, duration:.6 }, 0.1)
      .to('#home h1',              { opacity:1, y:0, duration:.75 }, 0.2)
      .to('#home .hero-sub',       { opacity:1, y:0, duration:.65 }, 0.35)
      .to('#home .hero-btns',      { opacity:1, y:0, duration:.6  }, 0.48)
      .to('#home .hero-stats',     { opacity:1, y:0, duration:.6  }, 0.55)
      .to('#home .rv-right',       { opacity:1, x:0, duration:.85 }, 0.3)
  })

  /* ── Generic scroll reveals (everything outside hero) ── */
  gsap.utils.toArray('.rv-up').forEach(el => {
    if (el.closest('#home')) return
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: .7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }
    )
  })

  gsap.utils.toArray('.rv-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: .75, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    )
  })

  gsap.utils.toArray('.rv-right').forEach(el => {
    if (el.closest('#home')) return
    gsap.fromTo(el,
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: .75, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    )
  })

  // rv-scale — used for cards; delay comes from inline style
  gsap.utils.toArray('.rv-scale').forEach(el => {
    const delay = parseFloat(el.style.transitionDelay || 0)
    gsap.fromTo(el,
      { opacity: 0, scale: .88 },
      {
        opacity: 1, scale: 1, duration: .6, ease: 'back.out(1.3)', delay,
        scrollTrigger: { trigger: el, start: 'top 92%', once: true }
      }
    )
  })
}

window.initGSAP = initGSAP
