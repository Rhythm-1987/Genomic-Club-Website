/* ═══════════════════════════════════════════════════
   js/main.js  –  App bootstrap & UI logic  (v2)
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ════════════════════════════════
     1. INJECT DYNAMIC CONTENT
  ════════════════════════════════ */
  const D = window.SITE_DATA

  // Activities
  const actGrid = document.getElementById('act-grid')
  if (actGrid) {
    actGrid.innerHTML = D.activities.map((a, i) => `
      <div class="glass rounded-2xl p-6 relative overflow-hidden rv-scale"
           style="transition-delay:${(i % 4) * .07}s; cursor:default;">
        <span class="act-n">${a.n}</span>
        <div class="icon-wrap w-11 h-11 rounded-xl flex items-center justify-center mb-4"
             style="background:var(--glow);border:1px solid var(--border);color:var(--accent);">
          ${a.icon}
        </div>
        <h3 class="font-bold text-sm mb-2 leading-tight"
            style="font-family:'Syne',sans-serif;color:var(--tx);">${a.title}</h3>
        <p class="text-xs leading-relaxed" style="color:var(--tx-m);">${a.desc}</p>
      </div>`).join('')
  }

  // Benefits
  const benGrid = document.getElementById('ben-grid')
  if (benGrid) {
    benGrid.innerHTML = D.benefits.map((b, i) => `
      <div class="glass rounded-2xl p-6 rv-scale"
           style="transition-delay:${(i % 3) * .08}s;">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0"
               style="background:var(--glow);border:1px solid var(--border);color:var(--accent);font-family:'Syne',sans-serif;">${b.n}</div>
          <h3 class="font-bold text-sm leading-tight"
              style="font-family:'Syne',sans-serif;color:var(--tx);">${b.title}</h3>
        </div>
        <p class="text-xs leading-relaxed" style="color:var(--tx-m);">${b.desc}</p>
      </div>`).join('')
  }

  // Team
  const teamGrid = document.getElementById('team-grid')
  if (teamGrid) {
    teamGrid.innerHTML = D.team.map((m, i) => `
      <div class="glass rounded-2xl p-5 text-center rv-scale"
           style="transition-delay:${i * .07}s;">
        <div class="avatar" style="background:${m.g};">${m.i}</div>
        <h3 class="font-bold text-sm leading-tight"
            style="font-family:'Syne',sans-serif;color:var(--tx);">${m.name}</h3>
        <div class="text-xs mt-1 font-bold tracking-widest uppercase"
             style="color:var(--accent);font-family:'JetBrains Mono',monospace;">Coordinator</div>
        <div class="text-xs mt-0.5" style="color:var(--tx-m);">Bioinformatics</div>
      </div>`).join('')
  }

  /* ════════════════════════════════
     2. THEME TOGGLE
  ════════════════════════════════ */
  const html = document.documentElement
  const tt   = document.getElementById('tt')
  if (tt) {
    tt.addEventListener('click', () => {
      html.classList.toggle('dark')
      // Restart canvases so colours update immediately
      if (window.drawDNA)   window.drawDNA()
      if (window.drawHelix) window.drawHelix()
    })
  }

  /* ════════════════════════════════
     3. MOBILE MENU
  ════════════════════════════════ */
  const hb = document.getElementById('hb')
  const mm = document.getElementById('mm')
  if (hb && mm) {
    hb.addEventListener('click', () => {
      const isOpen = !mm.classList.contains('hidden')
      if (isOpen) {
        mm.classList.add('hidden'); mm.classList.remove('flex')
      } else {
        mm.classList.remove('hidden'); mm.classList.add('flex')
      }
    })
    // Close on link click
    mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mm.classList.add('hidden'); mm.classList.remove('flex')
    }))
  }

  /* ════════════════════════════════
     4. ACTIVE NAV HIGHLIGHT (scroll-spy)
  ════════════════════════════════ */
  const sections  = ['home','about','science','activities','benefits','team','join']
  const navLinks  = document.querySelectorAll('.nav-link[data-section]')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id)
        })
      }
    })
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 })

  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  /* ════════════════════════════════
     5. BACK TO TOP (circle)
  ════════════════════════════════ */
  const btt = document.getElementById('btt')
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('show', window.scrollY > 400)
    })
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  /* ════════════════════════════════
     6. CURSOR GLOW (desktop only)
  ════════════════════════════════ */
  if (window.matchMedia('(pointer:fine)').matches) {
    const cg = document.getElementById('cursor-glow')
    if (cg) {
      let mx = 0, my = 0, cx2 = 0, cy2 = 0
      window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })
      ;(function animCursor() {
        cx2 += (mx - cx2) * .08; cy2 += (my - cy2) * .08
        cg.style.left = cx2 + 'px'; cg.style.top = cy2 + 'px'
        requestAnimationFrame(animCursor)
      })()
    }
  }

  /* ════════════════════════════════
     7. CARD HOVER — tilt + lift
        Fixed: only apply to non-mobile, prevent conflicts
  ════════════════════════════════ */
  if (window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.glass').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.willChange = 'transform'
      })
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width  - .5) * 8
        const y = ((e.clientY - r.top)  / r.height - .5) * 8
        card.style.transform  = `translateY(-5px) perspective(900px) rotateX(${-y}deg) rotateY(${x}deg)`
        card.style.transition = 'transform .08s linear'
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform  = ''
        card.style.transition = 'background .3s, border-color .3s, box-shadow .3s, transform .4s cubic-bezier(.34,1.56,.64,1)'
        card.style.willChange = ''
      })
    })
  }

  /* ════════════════════════════════
     8. NAV SHRINK ON SCROLL
  ════════════════════════════════ */
  const navbar = document.getElementById('navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60)
    })
  }

  /* ════════════════════════════════
     9. COUNTERS — show immediately on load (no scroll trigger)
  ════════════════════════════════ */
  function runCounters() {
    document.querySelectorAll('.stat-n[data-target]').forEach(el => {
      const target = +el.dataset.target
      let current = 0
      const step = target / 40
      const timer = setInterval(() => {
        current = Math.min(current + step, target)
        el.textContent = Math.round(current) + '+'
        if (current >= target) clearInterval(timer)
      }, 30)
    })
  }
  // Run counters immediately after a tiny delay so they animate on page load
  setTimeout(runCounters, 400)

  /* ════════════════════════════════
     10. GSAP SCROLL REVEALS
  ════════════════════════════════ */
  if (window.initGSAP) window.initGSAP()

})
