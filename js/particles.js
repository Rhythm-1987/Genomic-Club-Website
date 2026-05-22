/* ═══════════════════════════════════════════════════
   js/particles.js  –  Floating particle background
   ═══════════════════════════════════════════════════ */

;(function initParticles() {
  const cv  = document.getElementById('pc')
  if (!cv) return
  const ctx = cv.getContext('2d')
  let W, H, pts = []

  function resize() {
    W = cv.width  = window.innerWidth
    H = cv.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', () => { resize(); spawn() })

  class Particle {
    constructor() { this.reset() }
    reset() {
      this.x   = Math.random() * W
      this.y   = Math.random() * H
      this.r   = Math.random() * 1.4 + .3
      this.vx  = (Math.random() - .5) * .28
      this.vy  = (Math.random() - .5) * .28
      this.life = 0
      this.max = Math.random() * 200 + 100
      this.a   = 0
    }
    tick() {
      this.x += this.vx; this.y += this.vy; this.life++
      const h = this.max / 2
      this.a = this.life < h
        ? (this.life / h) * .55
        : ((this.max - this.life) / h) * .55
      if (this.life >= this.max) this.reset()
    }
    draw() {
      const dk = document.documentElement.classList.contains('dark')
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fillStyle = dk
        ? `rgba(0,232,130,${this.a})`
        : `rgba(0,155,80,${this.a * .7})`
      ctx.fill()
    }
  }

  function spawn() {
    pts = Array.from({ length: 80 }, () => new Particle())
    pts.forEach(p => { p.life = Math.random() * p.max })
  }
  spawn()

  ;(function tick() {
    ctx.clearRect(0, 0, W, H)
    pts.forEach(p => { p.tick(); p.draw() })
    requestAnimationFrame(tick)
  })()
})()
