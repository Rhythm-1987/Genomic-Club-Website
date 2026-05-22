/* ═══════════════════════════════════════════════════
   js/canvas.js  –  DNA background & helix canvas
   ═══════════════════════════════════════════════════ */

let dnaId, helixId

/* ── DNA Background Canvas ── */
function drawDNA() {
  const cv = document.getElementById('dna-canvas')
  if (!cv) return
  const ctx = cv.getContext('2d')
  let t = 0

  // DNA sequence to display as base labels
  const DNA_SEQ = 'ATGGCCATTGTAAT'

  function resize() {
    cv.width  = cv.offsetWidth || cv.parentElement.offsetWidth || window.innerWidth
    cv.height = cv.offsetHeight || cv.parentElement.offsetHeight || window.innerHeight
  }
  resize()
  window.addEventListener('resize', () => { resize() })

  if (dnaId) cancelAnimationFrame(dnaId)

  function draw() {
    const W = cv.width, H = cv.height
    if (!W || !H) { dnaId = requestAnimationFrame(draw); return }
    const dk = document.documentElement.classList.contains('dark')
    ctx.clearRect(0, 0, W, H)

    const strands = 3
    for (let s = 0; s < strands; s++) {
      const xo  = (W / (strands + 1)) * (s + 1)
      const amp = 50
      const f   = .019
      // ✅ SLOWER speed: was .007 + s*.002, now .003 + s*.001
      const sp  = .003 + s * .001
      const ph  = Math.PI

      const alpha1 = dk ? (.16 + s * .05) : (.08 + s * .025)
      ctx.strokeStyle = dk ? `rgba(0,232,130,${alpha1})` : `rgba(0,155,80,${alpha1})`
      ctx.lineWidth = 1.5

      // Strand A
      ctx.beginPath()
      for (let y = 0; y < H; y += 2) {
        const x = xo + Math.sin(y * f + t * sp) * amp
        y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Strand B
      ctx.beginPath()
      for (let y = 0; y < H; y += 2) {
        const x = xo + Math.sin(y * f + t * sp + ph) * amp
        y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Rungs + sequence labels
      const rungStep = 36
      let labelIdx = 0
      for (let y = rungStep; y < H; y += rungStep) {
        const x1   = xo + Math.sin(y * f + t * sp) * amp
        const x2   = xo + Math.sin(y * f + t * sp + ph) * amp
        const fade = Math.sin(y / H * Math.PI)

        ctx.strokeStyle = dk ? `rgba(0,232,130,${.28 * fade})` : `rgba(0,155,80,${.15 * fade})`
        ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke()

        const al = dk ? .4 : .25
        ctx.fillStyle = dk ? `rgba(0,232,130,${al})` : `rgba(0,155,80,${al})`
        ctx.beginPath(); ctx.arc(x1, y, 1.8, 0, Math.PI * 2); ctx.fill()
        ctx.beginPath(); ctx.arc(x2, y, 1.8, 0, Math.PI * 2); ctx.fill()

        // Draw DNA sequence base letter on every rung
        const base = DNA_SEQ[labelIdx % DNA_SEQ.length]
        const comp = { A:'T', T:'A', G:'C', C:'G' }[base] || 'N'
        ctx.font = `500 9px "JetBrains Mono", monospace`
        ctx.fillStyle = dk ? `rgba(0,232,130,${.55 * fade})` : `rgba(0,130,60,${.4 * fade})`
        ctx.fillText(base, x1 - 4, y - 5)
        ctx.fillText(comp, x2 - 4, y - 5)
        labelIdx++
      }
    }
    t++
    dnaId = requestAnimationFrame(draw)
  }
  draw()
}

/* ── Helix Card Canvas ── */
function drawHelix() {
  const cv = document.getElementById('hx')
  if (!cv) return
  const ctx = cv.getContext('2d')
  const W = cv.width, H = cv.height
  let t = 0

  if (helixId) cancelAnimationFrame(helixId)

  const bases  = [['#00e882','#00b870'],['#00c470','#009e58'],['#00b870','#008844'],['#00d488','#00a860']]
  // sequence shown in helix card
  const SEQ    = ['A','T','G','G','C','C','A','T','T','G','T','A','A','T']
  const COMP   = { A:'T', T:'A', G:'C', C:'G' }

  function draw() {
    const dk = document.documentElement.classList.contains('dark')
    ctx.clearRect(0, 0, W, H)

    const cx = W / 2, amp = 72, f = .024
    // ✅ SLOWER helix too
    const sp = .012, ph = Math.PI

    ctx.strokeStyle = dk ? 'rgba(0,232,130,.72)' : 'rgba(0,155,80,.58)'
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let y = 0; y < H; y += 2) {
      const x = cx + Math.sin(y * f + t * sp) * amp
      y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let y = 0; y < H; y += 2) {
      const x = cx + Math.sin(y * f + t * sp + ph) * amp
      y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()

    const step = 16
    let si = 0
    for (let y = step; y < H; y += step) {
      const x1   = cx + Math.sin(y * f + t * sp) * amp
      const x2   = cx + Math.sin(y * f + t * sp + ph) * amp
      const pair = bases[Math.floor(y / step) % 4]

      const grd = ctx.createLinearGradient(x1, y, x2, y)
      grd.addColorStop(0,   pair[0] + 'CC')
      grd.addColorStop(.5,  pair[1] + 'FF')
      grd.addColorStop(1,   pair[0] + 'CC')
      ctx.strokeStyle = grd; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke()

      const al = dk ? .92 : .7
      ctx.fillStyle = `rgba(0,232,130,${al})`
      ctx.beginPath(); ctx.arc(x1, y, 3.5, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = `rgba(0,196,110,${al})`
      ctx.beginPath(); ctx.arc(x2, y, 3.5, 0, Math.PI * 2); ctx.fill()

      ctx.fillStyle = dk ? 'rgba(0,232,130,.12)' : 'rgba(0,155,80,.08)'
      ctx.beginPath(); ctx.arc(x1, y, 7, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.arc(x2, y, 7, 0, Math.PI * 2); ctx.fill()

      // Sequence labels from ATGGCCATTGTAAT
      const base = SEQ[si % SEQ.length]
      const comp = COMP[base] || 'N'
      ctx.font = '600 8px "JetBrains Mono", monospace'
      ctx.fillStyle = dk ? 'rgba(0,232,130,.8)' : 'rgba(0,100,50,.6)'
      ctx.fillText(base, x1 - 4, y - 6)
      ctx.fillText(comp, x2 - 4, y - 6)
      si++
    }

    t++
    helixId = requestAnimationFrame(draw)
  }
  draw()
}

window.drawDNA   = drawDNA
window.drawHelix = drawHelix
