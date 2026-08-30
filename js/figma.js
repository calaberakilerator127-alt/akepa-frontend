const filtrarDispositivo = (tipo, btn) => {
      document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'))
      if (btn) btn.classList.add('active')

      const pcs = document.querySelectorAll('.shell-pc')
      const tablets = document.querySelectorAll('.shell-tablet')
      const mobiles = document.querySelectorAll('.shell-mobile')

      if (tipo === 'all') {
        pcs.forEach(el => el.style.display = 'flex')
        tablets.forEach(el => el.style.display = 'flex')
        mobiles.forEach(el => el.style.display = 'flex')
      } else if (tipo === 'pc') {
        pcs.forEach(el => el.style.display = 'flex')
        tablets.forEach(el => el.style.display = 'none')
        mobiles.forEach(el => el.style.display = 'none')
      } else if (tipo === 'tablet') {
        pcs.forEach(el => el.style.display = 'none')
        tablets.forEach(el => el.style.display = 'flex')
        mobiles.forEach(el => el.style.display = 'none')
      } else if (tipo === 'mobile') {
        pcs.forEach(el => el.style.display = 'none')
        tablets.forEach(el => el.style.display = 'none')
        mobiles.forEach(el => el.style.display = 'flex')
      }
    }

    const irASeccion = (secId, btn) => {
      document.querySelectorAll('.interface-nav-btn').forEach(b => b.classList.remove('active'))
      if (btn) btn.classList.add('active')

      const target = document.getElementById(secId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const toggleLayoutGrids = () => {
      document.querySelectorAll('.frame-pc, .frame-tablet, .frame-mobile').forEach(f => {
        f.classList.toggle('grid-active')
      })
      document.getElementById('btnGridToggle').classList.toggle('active')
    }