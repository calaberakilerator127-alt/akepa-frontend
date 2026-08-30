const productosBase = [
      {
        id: 1,
        sku: 'AK-TSH-01',
        nombre: 'Camiseta Oversize Akepa Carbón',
        categoria: 'Camisetas',
        precio: 28.00,
        precioAnterior: 32.00,
        tallas: ['S', 'M', 'L', 'XL'],
        tallasAgotadas: ['XS'],
        color: 'Negro Carbón',
        stock: 35,
        destacado: true,
        imagen: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Confeccionada en 100% algodón peinado 24/1 de 220 GSM de alto gramaje con cuello reforzado de 3cm y hombro caído auténtico.'
      },
      {
        id: 2,
        sku: 'AK-HD-02',
        nombre: 'Hoodie Heavyweight Acid Wash',
        categoria: 'Buzos',
        precio: 55.00,
        precioAnterior: null,
        tallas: ['M', 'L', 'XL'],
        tallasAgotadas: ['S'],
        color: 'Gris Desgastado',
        stock: 22,
        destacado: true,
        imagen: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Buzo con capucha afelpado interior térmico con tratamiento de lavado ácido artesanal único y cordones de algodón grueso.'
      },
      {
        id: 3,
        sku: 'AK-CRG-03',
        nombre: 'Pantalón Cargo Táctico Asphalt',
        categoria: 'Pantalones',
        precio: 48.00,
        precioAnterior: 54.00,
        tallas: ['S', 'M', 'L', 'XL'],
        tallasAgotadas: [],
        color: 'Verde Oliva',
        stock: 18,
        destacado: true,
        imagen: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Pantalón resistente con seis bolsillos funcionales reforzados, bota ajustable con cordón elástico y pretina ergonómica.'
      },
      {
        id: 4,
        sku: 'AK-CAP-04',
        nombre: 'Gorra Urbana 6-Panel Akepa',
        categoria: 'Accesorios',
        precio: 22.00,
        precioAnterior: null,
        tallas: ['Única'],
        tallasAgotadas: [],
        color: 'Negro Mate',
        stock: 40,
        destacado: false,
        imagen: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Gorra de visera curva con broche metálico regulable y bordado frontal en relieve de alta densidad de identidad Akepa.'
      },
      {
        id: 5,
        sku: 'AK-BM-05',
        nombre: 'Chaqueta Bomber Street Classic',
        categoria: 'Chaquetas',
        precio: 65.00,
        precioAnterior: 75.00,
        tallas: ['M', 'L'],
        tallasAgotadas: ['S', 'XL'],
        color: 'Azul Marino',
        stock: 8,
        destacado: false,
        imagen: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Chaqueta bomber ligera impermeable con forro interior de malla transpirable y bolsillos con cremalleras invisibles.'
      },
      {
        id: 6,
        sku: 'AK-BAG-06',
        nombre: 'Mochila Roll-Top Impermeable',
        categoria: 'Accesorios',
        precio: 45.00,
        precioAnterior: null,
        tallas: ['Única'],
        tallasAgotadas: [],
        color: 'Negro Profundo',
        stock: 15,
        destacado: false,
        imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Capacidad de 22 litros con cierre enrollable antifiltraciones, lona reforzada y compartimento acolchado para laptop de 16 pulgadas.'
      },
      {
        id: 7,
        sku: 'AK-TSH-07',
        nombre: 'Camiseta Boxy Fit Sand Dunes',
        categoria: 'Camisetas',
        precio: 29.00,
        precioAnterior: null,
        tallas: ['S', 'M', 'L'],
        tallasAgotadas: ['XL'],
        color: 'Arena Beige',
        stock: 25,
        destacado: false,
        imagen: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Corte boxy cuadrado con cuello cerrado y tejido texturizado premium en tono arena natural.'
      },
      {
        id: 8,
        sku: 'AK-HD-08',
        nombre: 'Buzo Minimalist Core Fleece',
        categoria: 'Buzos',
        precio: 52.00,
        precioAnterior: null,
        tallas: ['S', 'M', 'L', 'XL'],
        tallasAgotadas: [],
        color: 'Blanco Crudo',
        stock: 19,
        destacado: false,
        imagen: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop&q=80',
        descripcion: 'Buzo cuello redondo sin capucha confeccionado en felpa francesa suave de máximo abrigo y confort.'
      }
    ]

    
    let inventario = JSON.parse(localStorage.getItem('akepa_inventory_v3')) || productosBase
    let carrito = JSON.parse(localStorage.getItem('akepa_cart_v3')) || []
    let descuentoPorcentaje = 0
    let categoriaFiltroActiva = 'todos'
    let tallaFiltroActiva = null
    let precioMaximoActivo = 70
    let ordenActual = 'populares'
    let ultimoItemEliminado = null

    
    const navegarA = (vistaId, parametro = null) => {
      document.querySelectorAll('.view-interface').forEach(el => el.classList.remove('active'))
      document.querySelectorAll('nav.desktop-nav button').forEach(el => el.classList.remove('active-nav'))

      const target = document.getElementById('view-' + vistaId)
      if (target) {
        target.classList.add('active')
      }

      const navBtn = document.getElementById('nav-' + vistaId)
      if (navBtn) {
        navBtn.classList.add('active-nav')
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })

      if (vistaId === 'inicio') renderHomeFeatured()
      if (vistaId === 'catalogo') renderCatalogo()
      if (vistaId === 'producto') renderDetallePrenda(parametro)
      if (vistaId === 'carrito') renderPaginaCarrito()
      if (vistaId === 'checkout') renderPaginaCheckout()
      if (vistaId === 'admin') renderAdminDashboard()
    }

    
    const renderCardHTML = (prod) => {
      const tieneDescuento = prod.precioAnterior !== null && prod.precioAnterior > prod.precio
      const stockBajo = prod.stock <= 10

      return `
        <article class="tarjeta-prenda" tabindex="0" aria-label="${prod.nombre}, Precio: $${prod.precio.toFixed(2)}">
          <div class="card-img-box">
            <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
            <div class="card-badges-container">
              <span class="card-badge">${prod.categoria}</span>
              ${stockBajo ? `<span class="card-badge badge-stock-low">Stock: ${prod.stock} unid.</span>` : ''}
              ${tieneDescuento ? `<span class="card-badge badge-promo">Oferta</span>` : ''}
            </div>
            <button class="btn-quick-view" onclick="navegarA('producto', ${prod.id})" aria-label="Ver detalle de ${prod.nombre}">
              👁️ Vista Rápida
            </button>
          </div>
          <div class="card-body">
            <div class="card-meta-line">
              <span>${prod.color}</span>
              <span style="color: var(--verde-urbano)">Disponible</span>
            </div>
            <h3 class="card-title">${prod.nombre}</h3>
            <div class="card-price-row">
              <span class="card-price">$${prod.precio.toFixed(2)}</span>
              ${tieneDescuento ? `<span class="card-price-old">$${prod.precioAnterior.toFixed(2)}</span>` : ''}
            </div>
            <div class="card-sizes">
              ${prod.tallas.map(t => `<span class="size-tag">${t}</span>`).join('')}
              ${(prod.tallasAgotadas || []).map(t => `<span class="size-tag out-of-stock" title="Talla ${t} agotada">${t}</span>`).join('')}
            </div>
            <button class="card-btn" onclick="navegarA('producto', ${prod.id})">
              Ver Ficha y Comprar
            </button>
          </div>
        </article>
      `
    }

    
    const renderHomeFeatured = () => {
      const cont = document.getElementById('homeFeaturedGrid')
      const destacados = inventario.filter(p => p.destacado).slice(0, 4)
      cont.innerHTML = (destacados.length > 0 ? destacados : inventario.slice(0, 4)).map(p => renderCardHTML(p)).join('')
    }

    const filtrarCategoriaDesdeHome = (cat) => {
      categoriaFiltroActiva = cat
      navegarA('catalogo')
      
      document.querySelectorAll('.filter-pills button').forEach(b => {
        if (b.textContent.trim().includes(cat)) {
          document.querySelectorAll('.filter-pills button').forEach(x => x.classList.remove('active'))
          b.classList.add('active')
        }
      })
    }

    const renderCatalogo = () => {
      const cont = document.getElementById('fullCatalogGrid')
      const query = (document.getElementById('searchBar')?.value || '').toLowerCase()

      let resultado = inventario.filter(p => {
        const matchCat = categoriaFiltroActiva === 'todos' || p.categoria === categoriaFiltroActiva
        const matchTalla = !tallaFiltroActiva || p.tallas.includes(tallaFiltroActiva)
        const matchPrecio = p.precio <= precioMaximoActivo
        const matchQuery = p.nombre.toLowerCase().includes(query) || p.color.toLowerCase().includes(query) || p.categoria.toLowerCase().includes(query)
        return matchCat && matchTalla && matchPrecio && matchQuery
      })

      
      if (ordenActual === 'menor-precio') resultado.sort((a, b) => a.precio - b.precio)
      if (ordenActual === 'mayor-precio') resultado.sort((a, b) => b.precio - a.precio)
      if (ordenActual === 'nombre') resultado.sort((a, b) => a.nombre.localeCompare(b.nombre))

      if (resultado.length === 0) {
        cont.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; background-color: var(--superficie); border-radius: var(--radio-md); border: 1px dashed var(--borde-fuerte)">
            <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem">🔍</span>
            <h3 style="color: var(--azul-puce); margin-bottom: 0.5rem">No encontramos prendas con esos filtros</h3>
            <p style="color: var(--texto-secundario); margin-bottom: 1rem">Prueba restableciendo los filtros o ampliando el presupuesto.</p>
            <button class="btn-icon-action" style="margin: 0 auto" onclick="limpiarFiltros()">Restablecer Filtros</button>
          </div>
        `
        return
      }

      cont.innerHTML = resultado.map(p => renderCardHTML(p)).join('')
    }

    const ejecutarBusqueda = () => {
      renderCatalogo()
    }

    const aplicarOrdenamiento = () => {
      ordenActual = document.getElementById('catalogSort').value
      renderCatalogo()
    }

    const filtrarCategoria = (cat, btn) => {
      categoriaFiltroActiva = cat
      if (btn) {
        btn.parentElement.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
      }
      renderCatalogo()
    }

    const filtrarTalla = (talla, btn) => {
      if (tallaFiltroActiva === talla) {
        tallaFiltroActiva = null
        btn.classList.remove('active')
      } else {
        tallaFiltroActiva = talla
        btn.parentElement.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
      }
      renderCatalogo()
    }

    const filtrarPorPrecio = (val) => {
      precioMaximoActivo = parseFloat(val)
      document.getElementById('priceValLabel').textContent = `$${val}`
      renderCatalogo()
    }

    const limpiarFiltros = () => {
      categoriaFiltroActiva = 'todos'
      tallaFiltroActiva = null
      precioMaximoActivo = 70
      if (document.getElementById('searchBar')) document.getElementById('searchBar').value = ''
      if (document.getElementById('priceRange')) document.getElementById('priceRange').value = 70
      if (document.getElementById('priceValLabel')) document.getElementById('priceValLabel').textContent = '$70'
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'))
      const btnTodos = document.querySelector('.filter-pill')
      if (btnTodos) btnTodos.classList.add('active')
      renderCatalogo()
    }

    
    const renderDetallePrenda = (id) => {
      const prod = inventario.find(p => p.id === id) || inventario[0]
      window.prendaSeleccionadaActual = prod
      window.tallaElegida = prod.tallas[0]
      window.cantidadElegida = 1

      const cont = document.getElementById('productDetailContainer')
      cont.innerHTML = `
        <div class="detail-gallery">
          <div class="main-image-container">
            <img src="${prod.imagen}" alt="${prod.nombre}">
          </div>
        </div>
        <div class="detail-info">
          <div class="detail-badge-row">
            <span class="card-badge">${prod.categoria}</span>
            <span class="card-badge" style="background-color: var(--verde-urbano)">100% Algodón Peinado</span>
          </div>
          <h2>${prod.nombre}</h2>
          <div class="detail-price-box">
            <span class="detail-price">$${prod.precio.toFixed(2)}</span>
            <span class="detail-price-badge">Stock: ${prod.stock} unidades</span>
          </div>

          <div class="detail-meta-box">
            <p>${prod.descripcion}</p>
            <p><strong>SKU Oficial:</strong> ${prod.sku} | <strong>Color:</strong> ${prod.color}</p>
            <p><strong>Corte:</strong> Oversize relajado con caída recta contemporánea.</p>
          </div>

          <div class="size-selector-group">
            <div class="size-header-row">
              <label>Selecciona tu Talla:</label>
              <button class="btn-link-sizes" onclick="abrirModal('sizeGuideModal')">📏 Ver Guía de Medidas (cm)</button>
            </div>
            <div class="size-btn-row">
              ${prod.tallas.map((t, idx) => `
                <button class="size-choice-btn ${idx === 0 ? 'active' : ''}" onclick="seleccionarTallaFicha(this, '${t}')" aria-label="Talla ${t}">
                  ${t}
                </button>
              `).join('')}
              ${(prod.tallasAgotadas || []).map(t => `
                <button class="size-choice-btn talla-agotada" disabled title="Talla ${t} agotada">
                  ${t}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="action-row-detail">
            <div class="qty-picker">
              <button onclick="ajustarCantidadFicha(-1)" aria-label="Disminuir cantidad">-</button>
              <span id="fichaQty">${window.cantidadElegida}</span>
              <button onclick="ajustarCantidadFicha(1)" aria-label="Aumentar cantidad">+</button>
            </div>
            <button class="btn-main-action" onclick="agregarAlCarritoDesdeFicha()">
              🛍️ Añadir a la Bolsa de Compras
            </button>
          </div>
        </div>
      `
    }

    const seleccionarTallaFicha = (btn, talla) => {
      document.querySelectorAll('.size-choice-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      window.tallaElegida = talla
    }

    const ajustarCantidadFicha = (delta) => {
      window.cantidadElegida = Math.max(1, (window.cantidadElegida || 1) + delta)
      document.getElementById('fichaQty').textContent = window.cantidadElegida
    }

    const agregarAlCarritoDesdeFicha = () => {
      const prod = window.prendaSeleccionadaActual
      const talla = window.tallaElegida || prod.tallas[0]
      const cant = window.cantidadElegida || 1

      const existente = carrito.find(i => i.id === prod.id && i.talla === talla)
      if (existente) {
        existente.cantidad += cant
      } else {
        carrito.push({
          id: prod.id,
          sku: prod.sku,
          nombre: prod.nombre,
          precio: prod.precio,
          talla: talla,
          color: prod.color,
          imagen: prod.imagen,
          cantidad: cant
        })
      }
      guardarCarrito()
      mostrarToast(`"${prod.nombre} (${talla})" añadida a tu bolsa.`)
      abrirDrawerCarrito()
    }

    
    const guardarCarrito = () => {
      localStorage.setItem('akepa_cart_v3', JSON.stringify(carrito))
      actualizarBadgesCarrito()
    }

    const actualizarBadgesCarrito = () => {
      const totalItems = carrito.reduce((acc, i) => acc + i.cantidad, 0)
      document.getElementById('cartCount').textContent = totalItems
    }

    const renderDrawerCarrito = () => {
      const cont = document.getElementById('cartDrawerBody')
      if (carrito.length === 0) {
        cont.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem">
            <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem">🛍️</span>
            <p style="color: var(--texto-secundario); margin-bottom: 1rem">Tu bolsa de compras está vacía.</p>
            <button class="btn-icon-action" style="margin: 0 auto" onclick="cerrarDrawerCarrito(); navegarA('catalogo');">Explorar Prendas</button>
          </div>
        `
        document.getElementById('drawerSubtotal').textContent = '$0.00'
        return
      }

      let subtotal = 0
      let html = '<div style="display: flex; flex-direction: column; gap: 1rem">'
      carrito.forEach((item, idx) => {
        subtotal += item.precio * item.cantidad
        html += `
          <div style="display: flex; gap: 0.75rem; align-items: center; border-bottom: 1px solid var(--borde); padding-bottom: 0.75rem">
            <img src="${item.imagen}" style="width: 54px; height: 54px; object-fit: cover; border-radius: var(--radio-sm)">
            <div style="flex: 1">
              <h5 style="font-size: 0.88rem; font-weight: 700">${item.nombre}</h5>
              <p style="font-size: 0.75rem; color: var(--texto-secundario)">Talla: ${item.talla} | Cant: ${item.cantidad}</p>
              <span style="font-weight: 800; color: var(--azul-puce); font-size: 0.9rem">$${(item.precio * item.cantidad).toFixed(2)}</span>
            </div>
            <button style="background: none; border: none; color: var(--error); cursor: pointer; font-size: 1.1rem" onclick="eliminarDelCarrito(${idx})" aria-label="Eliminar prenda">🗑️</button>
          </div>
        `
      })
      html += '</div>'
      cont.innerHTML = html
      document.getElementById('drawerSubtotal').textContent = `$${subtotal.toFixed(2)}`
    }

    const renderPaginaCarrito = () => {
      const cont = document.getElementById('cartTableContainer')
      if (carrito.length === 0) {
        cont.innerHTML = `
          <div style="text-align: center; padding: 4rem 1rem">
            <span style="font-size: 3rem; display: block; margin-bottom: 0.75rem">🛍️</span>
            <h3 style="color: var(--azul-puce); margin-bottom: 0.5rem">Tu bolsa de compras está vacía</h3>
            <p style="color: var(--texto-secundario); margin-bottom: 1.5rem">Descubre nuestras camisetas oversize y accesorios de corte urbano.</p>
            <button class="btn-main-action" style="max-width: 260px; margin: 0 auto" onclick="navegarA('catalogo')">
              Ir a Explorar Catálogo
            </button>
          </div>
        `
        calcularTotalesCarrito()
        return
      }

      let html = '<div>'
      carrito.forEach((item, idx) => {
        html += `
          <div class="cart-item-row">
            <img src="${item.imagen}" class="cart-item-img" alt="${item.nombre}">
            <div class="cart-item-info">
              <h4>${item.nombre}</h4>
              <p>SKU: ${item.sku} | Talla: <strong>${item.talla}</strong> | Color: ${item.color}</p>
              <div class="cart-item-price">$${item.precio.toFixed(2)} c/u</div>
            </div>
            <div class="qty-picker">
              <button onclick="cambiarCantidadCarrito(${idx}, -1)">-</button>
              <span>${item.cantidad}</span>
              <button onclick="cambiarCantidadCarrito(${idx}, 1)">+</button>
            </div>
            <div class="cart-item-subtotal">
              $${(item.precio * item.cantidad).toFixed(2)}
            </div>
            <button class="btn-remove-item" onclick="eliminarDelCarrito(${idx})">Eliminar</button>
          </div>
        `
      })
      html += '</div>'
      cont.innerHTML = html
      calcularTotalesCarrito()
    }

    const cambiarCantidadCarrito = (idx, delta) => {
      carrito[idx].cantidad += delta
      if (carrito[idx].cantidad <= 0) {
        eliminarDelCarrito(idx)
        return
      }
      guardarCarrito()
      renderPaginaCarrito()
      renderDrawerCarrito()
    }

    const eliminarDelCarrito = (idx) => {
      ultimoItemEliminado = { item: carrito[idx], index: idx }
      carrito.splice(idx, 1)
      guardarCarrito()
      renderPaginaCarrito()
      renderDrawerCarrito()
      mostrarToastConDeshacer('Prenda retirada de la bolsa')
    }

    const deshacerEliminacion = () => {
      if (ultimoItemEliminado) {
        carrito.splice(ultimoItemEliminado.index, 0, ultimoItemEliminado.item)
        ultimoItemEliminado = null
        guardarCarrito()
        renderPaginaCarrito()
        renderDrawerCarrito()
        mostrarToast('Prenda restaurada en tu bolsa.')
      }
    }

    const aplicarCupon = () => {
      const input = document.getElementById('couponInput')
      const msg = document.getElementById('couponMsg')
      const code = (input.value || '').trim().toUpperCase()

      if (code === 'AKEPA10') {
        descuentoPorcentaje = 0.10
        msg.textContent = '✓ Cupón AKEPA10 aplicado: 10% de descuento.'
        msg.style.color = 'var(--exito)'
      } else if (code === 'PUCE2026') {
        descuentoPorcentaje = 0.15
        msg.textContent = '✓ Cupón Universitario PUCE2026: 15% de descuento.'
        msg.style.color = 'var(--exito)'
      } else if (code === 'ENVIOGRATIS') {
        descuentoPorcentaje = 0.05
        msg.textContent = '✓ Cupón aplicado: Descuento equivalente a envío gratis.'
        msg.style.color = 'var(--exito)'
      } else {
        descuentoPorcentaje = 0
        msg.textContent = '✕ Cupón no válido o vencido.'
        msg.style.color = 'var(--error)'
      }
      calcularTotalesCarrito()
    }

    const calcularTotalesCarrito = () => {
      const subtotal = carrito.reduce((acc, i) => acc + (i.precio * i.cantidad), 0)
      const desc = subtotal * descuentoPorcentaje
      const total = subtotal - desc

      if (document.getElementById('cartSubtotalText')) document.getElementById('cartSubtotalText').textContent = `$${subtotal.toFixed(2)}`
      if (document.getElementById('cartDiscountText')) document.getElementById('cartDiscountText').textContent = `-$${desc.toFixed(2)}`
      if (document.getElementById('cartTotalText')) document.getElementById('cartTotalText').textContent = `$${total.toFixed(2)}`
    }

    
    const renderPaginaCheckout = () => {
      if (carrito.length === 0) {
        navegarA('carrito')
        return
      }
      calcularTotalesCheckout()
    }

    const calcularTotalesCheckout = () => {
      const subtotal = carrito.reduce((acc, i) => acc + (i.precio * i.cantidad), 0)
      const desc = subtotal * descuentoPorcentaje
      const prov = document.getElementById('c_provincia').value
      
      let envio = 3.50
      if (prov === 'Guayas' || prov === 'Azuay' || prov === 'Manabi') envio = 5.00
      if (prov === 'Tungurahua') envio = 4.50
      if (prov === 'Otras') envio = 5.50

      const totalFinal = subtotal - desc + envio
      document.getElementById('co_subtotal').textContent = `$${subtotal.toFixed(2)}`
      document.getElementById('co_discount').textContent = `-$${desc.toFixed(2)}`
      document.getElementById('co_shipping').textContent = `$${envio.toFixed(2)}`
      document.getElementById('co_total').textContent = `$${totalFinal.toFixed(2)}`
    }

    const confirmarPedidoFinal = (e) => {
      e.preventDefault()
      const code = 'AK-' + Math.floor(1000 + Math.random() * 9000)
      const client = document.getElementById('c_nombres').value
      const prov = document.getElementById('c_provincia').value
      const pago = document.getElementById('c_pago').value
      const total = document.getElementById('co_total').textContent

      document.getElementById('tr_code').textContent = code
      document.getElementById('tr_client').textContent = client
      document.getElementById('tr_location').textContent = prov
      document.getElementById('tr_payment').textContent = pago
      document.getElementById('tr_total').textContent = total

      carrito = []
      descuentoPorcentaje = 0
      guardarCarrito()
      navegarA('tracking')
      mostrarToast('¡Orden emitida exitosamente!')
    }

    
    const calcularTallaRecomendada = () => {
      const alt = parseFloat(document.getElementById('calc_altura').value) || 170
      const peso = parseFloat(document.getElementById('calc_peso').value) || 70
      const res = document.getElementById('calc_result')

      let tallaSugerida = 'M'
      if (alt < 165 && peso < 60) tallaSugerida = 'S'
      else if (alt <= 176 && peso <= 74) tallaSugerida = 'M'
      else if (alt <= 185 && peso <= 85) tallaSugerida = 'L'
      else tallaSugerida = 'XL'

      res.innerHTML = `✨ Tu talla recomendada para corte oversize es: <span style="background:var(--azul-puce);color:#fff;padding:0.2rem 0.6rem;border-radius:4px">${tallaSugerida}</span>`
    }

    
    const renderAdminDashboard = () => {
      const totalUnits = inventario.reduce((acc, p) => acc + p.stock, 0)
      const lowStockCount = inventario.filter(p => p.stock <= 10).length

      document.getElementById('adm_total_models').textContent = inventario.length
      document.getElementById('adm_total_stock').textContent = totalUnits
      document.getElementById('adm_low_stock').textContent = lowStockCount

      
      const categoriasMap = {}
      inventario.forEach(p => {
        categoriasMap[p.categoria] = (categoriasMap[p.categoria] || 0) + p.stock
      })
      const maxUnits = Math.max(...Object.values(categoriasMap), 1)

      const chartCont = document.getElementById('adminBarChart')
      chartCont.innerHTML = Object.entries(categoriasMap).map(([cat, qty]) => {
        const pct = Math.round((qty / maxUnits) * 100)
        return `
          <div class="bar-row">
            <span class="bar-label">${cat}</span>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${pct}%"></div>
            </div>
            <span class="bar-val">${qty} u.</span>
          </div>
        `
      }).join('')

      
      const tbody = document.getElementById('adminTableBody')
      tbody.innerHTML = inventario.map((p, idx) => `
        <tr>
          <td><strong>${p.sku}</strong></td>
          <td>${p.nombre}</td>
          <td><span class="size-tag">${p.categoria}</span></td>
          <td>$${p.precio.toFixed(2)}</td>
          <td>${p.tallas.join(', ')}</td>
          <td>
            <input type="number" value="${p.stock}" style="width: 64px; padding: 0.3rem; border: 1px solid var(--borde); border-radius: 4px; font-weight: 700" onchange="actualizarStockAdmin(${idx}, this.value)">
          </td>
          <td>
            <button style="background: none; border: none; color: var(--error); cursor: pointer; font-weight: 700; font-size: 0.82rem" onclick="eliminarPrendaAdmin(${idx})">
              Dar de Baja
            </button>
          </td>
        </tr>
      `).join('')
    }

    const actualizarStockAdmin = (idx, nuevo) => {
      inventario[idx].stock = parseInt(nuevo, 10) || 0
      localStorage.setItem('akepa_inventory_v3', JSON.stringify(inventario))
      mostrarToast('Stock actualizado')
    }

    const eliminarPrendaAdmin = (idx) => {
      if (confirm(`¿Dar de baja la prenda "${inventario[idx].nombre}" del catálogo?`)) {
        inventario.splice(idx, 1)
        localStorage.setItem('akepa_inventory_v3', JSON.stringify(inventario))
        renderAdminDashboard()
        mostrarToast('Prenda retirada del inventario')
      }
    }

    const abrirModalNuevoProducto = () => {
      abrirModal('adminProductModal')
    }

    const guardarNuevaPrenda = (e) => {
      e.preventDefault()
      const img = document.getElementById('adm_imagen').value.trim() || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80'
      const nueva = {
        id: Date.now(),
        sku: 'AK-NEW-' + Math.floor(10 + Math.random() * 89),
        nombre: document.getElementById('adm_nombre').value,
        categoria: document.getElementById('adm_categoria').value,
        precio: parseFloat(document.getElementById('adm_precio').value),
        precioAnterior: null,
        tallas: ['S', 'M', 'L', 'XL'],
        tallasAgotadas: [],
        color: document.getElementById('adm_color').value,
        stock: parseInt(document.getElementById('adm_stock').value, 10),
        destacado: false,
        imagen: img,
        descripcion: 'Prenda urbana de reciente incorporación al catálogo oficial de Akepa.'
      }
      inventario.unshift(nueva)
      localStorage.setItem('akepa_inventory_v3', JSON.stringify(inventario))
      cerrarModal('adminProductModal')
      renderAdminDashboard()
      mostrarToast('Nueva prenda registrada exitosamente.')
    }

    const exportarInventarioJSON = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inventario, null, 2))
      const downloadAnchor = document.createElement('a')
      downloadAnchor.setAttribute("href", dataStr)
      downloadAnchor.setAttribute("download", "akepa_inventario.json")
      document.body.appendChild(downloadAnchor)
      downloadAnchor.click()
      downloadAnchor.remove()
      mostrarToast('Archivo JSON descargado')
    }

    
    const abrirMenuMovil = () => {
      document.getElementById('mobileDrawerOverlay').classList.add('active')
      document.getElementById('mobileDrawer').classList.add('active')
    }
    const cerrarMenuMovil = () => {
      document.getElementById('mobileDrawerOverlay').classList.remove('active')
      document.getElementById('mobileDrawer').classList.remove('active')
    }

    const abrirDrawerCarrito = () => {
      renderDrawerCarrito()
      document.getElementById('cartDrawerOverlay').classList.add('active')
      document.getElementById('cartDrawer').classList.add('active')
    }
    const cerrarDrawerCarrito = () => {
      document.getElementById('cartDrawerOverlay').classList.remove('active')
      document.getElementById('cartDrawer').classList.remove('active')
    }

    const abrirModal = (id) => {
      const modal = document.getElementById(id)
      if (modal) modal.classList.add('active')
    }
    const cerrarModal = (id) => {
      const modal = document.getElementById(id)
      if (modal) modal.classList.remove('active')
    }

    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        cerrarMenuMovil()
        cerrarDrawerCarrito()
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'))
      }
    })

    
    const mostrarToast = (mensaje) => {
      const cont = document.getElementById('toastContainer')
      const toast = document.createElement('div')
      toast.className = 'toast-card'
      toast.innerHTML = `<span>${mensaje}</span>`
      cont.appendChild(toast)
      setTimeout(() => {
        toast.style.opacity = '0'
        toast.style.transform = 'translateY(10px)'
        setTimeout(() => toast.remove(), 300)
      }, 3200)
    }

    const mostrarToastConDeshacer = (mensaje) => {
      const cont = document.getElementById('toastContainer')
      const toast = document.createElement('div')
      toast.className = 'toast-card'
      toast.innerHTML = `
        <span>${mensaje}</span>
        <button class="toast-undo-btn" onclick="deshacerEliminacion(); this.parentElement.remove();">Deshacer</button>
      `
      cont.appendChild(toast)
      setTimeout(() => {
        if (toast.parentElement) {
          toast.style.opacity = '0'
          toast.style.transform = 'translateY(10px)'
          setTimeout(() => toast.remove(), 300)
        }
      }, 4500)
    }

    
    const toggleGridInspector = () => {
      document.body.classList.toggle('grid-inspector-active')
      const activo = document.body.classList.contains('grid-inspector-active')
      mostrarToast(activo ? '📐 Modo Inspector CSS Grid Activado' : 'Modo Inspector Desactivado')
    }

    
    renderHomeFeatured()
    actualizarBadgesCarrito()