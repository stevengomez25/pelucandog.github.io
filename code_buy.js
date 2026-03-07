// 1. Referencia al contenedor que ya creamos en el HTML (id="products-grid")
const grid = document.getElementById('products-grid');

// 2. Datos de los productos (Más fácil de manejar que variables sueltas)
const productos = [
    {
        nombre: "Alimento NutreCan",
        precio: 45000,
        cantidad: 15,
        desc: "Nutrición completa para adultos.",
        img: "https://images.unsplash.com/photo-1589924691106-073b69a59b8b?q=80&w=500"
    },
    {
        nombre: "Juguete Kong",
        precio: 25000,
        cantidad: 8,
        desc: "Resistente para mordidas fuertes.",
        img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=500"
    },
    {
        nombre: "Shampoo Antipulgas",
        precio: 18000,
        cantidad: 20,
        desc: "Protección y brillo para el pelaje.",
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=500"
    }
];

// 3. Función para crear el componente de la tarjeta
function renderizarProductos(lista) {
    // Limpiamos el grid por si acaso
    grid.innerHTML = '';

    lista.forEach(prod => {
        // Creamos la columna
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-3 mb-4';

        // Estructura de la tarjeta (Template String)
        col.innerHTML = `
            <div class="card h-100 border-0 shadow-sm product-card">
                <img src="${prod.img}" class="card-img-top p-3" alt="${prod.nombre}" style="height: 180px; object-fit: contain;">
                <div class="card-body text-center d-flex flex-column">
                    <h6 class="fw-bold mb-1">${prod.nombre}</h6>
                    <p class="text-muted small mb-2">${prod.desc}</p>
                    <p class="small text-secondary">Stock: ${prod.cantidad}</p>
                    <h5 class="text-primary-custom fw-bold mt-auto">$${prod.precio.toLocaleString()}</h5>
                    <div class="d-grid gap-2 mt-3">
                        <button class="btn btn-secondary-custom btn-sm" onclick="agregarAlCarrito('${prod.nombre}')">
                            Agregar
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
    alert(`${nombre} ha sido agregado al carrito 🐾`);
}

// 5. Ejecutar al cargar
renderizarProductos(productos);