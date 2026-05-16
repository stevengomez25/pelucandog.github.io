// 1. Referencia al contenedor que ya creamos en el HTML (id="products-grid")
const grid = document.getElementById('products-grid');

// 2. Datos de los productos (Enfocados en Spa & Beauty Care)
const productos = [
    {
        nombre: "Champú de Avena Orgánico",
        precio: 35000,
        cantidad: 15,
        desc: "Ideal para piel sensible. Aporta brillo y suavidad natural.",
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=500" // Mockup botella de cuidado
    },
    {
        nombre: "Perfume Relax Lavanda",
        precio: 28000,
        cantidad: 12,
        desc: "Aromaterapia en spray para usar después del cepillado.",
        img: "https://images.unsplash.com/photo-1595535873420-a59915cdb7bf?q=80&w=500" // Mockup botella de spray/perfume
    },
    {
        nombre: "Snacks Premium Salmón",
        precio: 15000,
        cantidad: 30,
        desc: "Ricos en Omega 3 para fortalecer el pelaje desde adentro.",
        img: "https://images.unsplash.com/photo-1589924691106-073b69a59b8b?q=80&w=500" // Mockup alimento premium
    },
    {
        nombre: "Cepillo de Bambú Spa",
        precio: 42000,
        cantidad: 8,
        desc: "Cerdas naturales que masajean la piel mientras desenredan.",
        img: "https://images.unsplash.com/photo-1598453147852-b13c32174fcb?q=80&w=500" // Mockup cepillo estético
    }
];

// 3. Función para crear el componente de la tarjeta
function renderizarProductos(lista) {
    // Limpiamos el grid por si acaso
    grid.innerHTML = '';

    lista.forEach(prod => {
        // Creamos la columna
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3 mb-4';

        // Estructura de la tarjeta (Template String)
        col.innerHTML = `
            <div class="card h-100 border-0 shadow-sm product-card">
                <img src="${prod.img}" class="card-img-top p-4" alt="${prod.nombre}" style="height: 220px; object-fit: cover; border-radius: 30px;">
                <div class="card-body text-center d-flex flex-column pt-0">
                    <h6 class="fw-bold mb-2">${prod.nombre}</h6>
                    <p class="text-muted small mb-3">${prod.desc}</p>
                    <p class="small text-secondary mb-1">Stock disponible: ${prod.cantidad}</p>
                    <h5 class="text-primary-custom fw-bold mt-auto mb-3">$${prod.precio.toLocaleString()}</h5>
                    <div class="d-grid gap-2">
                        <button class="btn btn-secondary-custom btn-sm py-2" onclick="agregarAlCarrito('${prod.nombre}')">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

// 4. Función de ejemplo para el botón
function agregarAlCarrito(nombre) {
    alert(`${nombre} ha sido agregado a tu bolsa de compras 🐾✨`);
}

// 5. Ejecutar al cargar
renderizarProductos(productos);