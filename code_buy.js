// 1. Referencia al contenedor HTML
const grid = document.getElementById('products-grid');

// 2. Número de WhatsApp del negocio
const numeroWhatsApp = "573013432483";

// 3. Datos de los productos (Enfocados en Spa & Beauty Care)
const productos = [
    {
        nombre: "Champú de Avena Orgánico",
        precio: 35000,
        cantidad: 15,
        desc: "Ideal para piel sensible. Aporta brillo y suavidad natural.",
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=500"
    },
    {
        nombre: "Perfume Relax Lavanda",
        precio: 28000,
        cantidad: 12,
        desc: "Aromaterapia en spray para usar después del cepillado.",
        img: "https://images.unsplash.com/photo-1595535873420-a59915cdb7bf?q=80&w=500"
    },
    {
        nombre: "Snacks Premium Salmón",
        precio: 15000,
        cantidad: 30,
        desc: "Ricos en Omega 3 para fortalecer el pelaje desde adentro.",
        img: "https://images.unsplash.com/photo-1589924691106-073b69a59b8b?q=80&w=500"
    },
    {
        nombre: "Cepillo de Bambú Spa",
        precio: 42000,
        cantidad: 8,
        desc: "Cerdas naturales que masajean la piel mientras desenredan.",
        img: "https://images.unsplash.com/photo-1598453147852-b13c32174fcb?q=80&w=500"
    }
];

// 4. Función para renderizar los productos en el grid
function renderizarProductos(lista) {
    grid.innerHTML = '';
    
    // Variable para escalonar la animación AOS (efecto cascada)
    let delayAnimacion = 100;

    lista.forEach(prod => {
        // Creamos el mensaje predeterminado y lo codificamos para URL
        const mensajeTexto = `¡Hola! Me interesa adquirir ${prod.nombre} contigo!`;
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeTexto)}`;

        // Creamos la columna
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3 mb-4';
        col.setAttribute('data-aos', 'fade-up');
        col.setAttribute('data-aos-delay', delayAnimacion.toString());
        delayAnimacion += 150;

        // Estructura de la tarjeta
        col.innerHTML = `
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style="background-color: #ffffff;">
                <img src="${prod.img}" class="card-img-top p-3" alt="${prod.nombre}" style="height: 220px; object-fit: cover; border-radius: 25px;">
                <div class="card-body text-center d-flex flex-column pt-0">
                    <h6 class="fw-bold mb-2 text-cyan" style="color: var(--cyan-dark);">${prod.nombre}</h6>
                    <p class="text-muted small mb-3 fw-medium" style="color: #6c757d;">${prod.desc}</p>
                    <p class="small text-secondary mb-1 fw-medium">Stock: ${prod.cantidad}</p>
                    <h5 class="fw-bold mt-auto mb-3" style="color: var(--cyan-dark);">$${prod.precio.toLocaleString()}</h5>
                    
                    <div class="d-grid gap-2">
                        <a href="${linkWhatsApp}" target="_blank" class="btn btn-organic py-2 d-flex align-items-center justify-content-center gap-2">
                            <i class="fab fa-whatsapp fs-5"></i> Lo quiero
                        </a>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });

    // Refrescamos AOS para que detecte los elementos que acabamos de inyectar con JS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// 5. Ejecutar la renderización al cargar
renderizarProductos(productos);