/* ═══════════════════════════════════════════════════
   js/gsap-animations.js  –  Scroll & entry animations
   ═══════════════════════════════════════════════════ */

function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)

  /* ── Hero entry sequence ── */
  const heroTl = gsap.timeline({ delay: .15 })
  heroTl
    .to('#hero .stag',                      { opacity:1, y:0, duration:.7, ease:'power3.out' })
    .to('#hero h1',                         { opacity:1, y:0, duration:.8, ease:'power3.out' }, '-=.45')
    .to('#hero .hero-sub',                  { opacity:1, y:0, duration:.7, ease:'power3.out' }, '-=.5')
    .to('#hero .hero-btns .btn-p, #hero .hero-btns .btn-g',
                                            { opacity:1, y:0, duration:.6, ease:'power3.out', stagger:.09 }, '-=.4')
    .to('#hero .stat-n',                    { opacity:1, y:0, duration:.6, ease:'power3.out', stagger:.09 }, '-=.35')
    .to('#hero .rv-right',                  { opacity:1, x:0, duration:.9, ease:'power3.out' }, '-=.6')

  /* ── Counter animation ── */
  document.querySelectorAll('.stat-n[data-target]').forEach(el => {
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.to({ v: 0 }, {
          v: +el.dataset.target, duration: 1.6, ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(this.targets()[0].v) + '+' }
        })
      }
    })
  })

  /* ── Scroll reveals ── */
  gsap.utils.toArray('.rv-up').forEach(el => {
    if (el.closest('#hero')) return
    gsap.fromTo(el,
      { opacity: 0, y: 44 },
      { opacity: 1, y: 0, duration: .72, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
    )
  })

  gsap.utils.toArray('.rv-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -55 },
      { opacity: 1, x: 0, duration: .8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true } }
    )
  })

  gsap.utils.toArray('.rv-right').forEach(el => {
    if (el.closest('#hero')) return
    gsap.fromTo(el,
      { opacity: 0, x: 55 },
      { opacity: 1, x: 0, duration: .8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true } }
    )
  })

  gsap.utils.toArray('.rv-scale').forEach(el => {
    const delay = parseFloat(el.style.transitionDelay || 0)
    gsap.fromTo(el,
      { opacity: 0, scale: .86 },
      { opacity: 1, scale: 1, duration: .65, ease: 'back.out(1.4)', delay,
        scrollTrigger: { trigger: el, start: 'top 89%', once: true } }
    )
  })
}

window.initGSAP = initGSAP
