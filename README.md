# 🐾 PeluCanDog | Pet Beauty Spa & Boutique

![PeluCanDog Banner](https://img.shields.io/badge/Status-Updated-success?style=for-the-badge) ![Version](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)

Bienvenidos al repositorio oficial de **PeluCanDog**, una plataforma web diseñada para ofrecer la mejor experiencia en estética, bienestar y relajación canina. 

## 🚀 Novedades de esta Actualización (V 2.0)

Esta versión representa un **rebranding completo y una mejora estructural** respecto a la página anterior. Hemos transformado el concepto de una "clínica veterinaria tradicional" a un **Pet Spa & Boutique Exclusivo**, logrando:

* **🐾 Mayor Armonía Conceptual:** Transición visual hacia colores cálidos, orgánicos y amigables (Cyan vibrante y Durazno pastel), apoyados por la tipografía redondeada *Fredoka*.
* **📱 100% Responsividad Garantizada:** Reestructuración de la cuadrícula con Bootstrap 5 para una perfecta adaptación en dispositivos móviles, tablets y monitores de escritorio sin desbordamientos (sin *overflow* horizontal).
* **✨ Experiencia Fluida (UI/UX):** Implementación de ondas divisorias SVG (Shape Dividers), botones orgánicos y animaciones de entrada suaves al hacer scroll.
* **💬 Conversión Directa:** Integración de enlaces dinámicos hacia WhatsApp con mensajes predefinidos para agendar citas o comprar productos fácilmente.

---

## 📁 Composición del Proyecto

El proyecto está construido bajo una arquitectura limpia de *HTML, CSS y Vanilla JS*, dividida en las siguientes vistas:

### 🏠 Vistas Principales (HTML)
* `index.html`: La página de inicio (Hero Section). Presenta el concepto 100% Spa, el manejo profesional veterinario y la promesa de valor con formas orgánicas (Blobs) animadas por CSS.
* `our_services.html`: Catálogo de servicios enfocado en la relajación (Grooming, Spa Termal, Cuidado Facial, Tratamientos Capilares).
* `buy.html`: La Boutique interactiva. Funciona como un contenedor limpio que recibe los productos inyectados dinámicamente mediante JavaScript.
* `contact.html`: Formulario de contacto funcional (conectado vía Formspree) y canales de comunicación directa.
* `found_us.html`: Vista de ubicación estratégica con un mapa embebido de Google Maps y rutas de acceso a Floridablanca.

### 🎨 Estilos y Lógica
* `styles.css`: Archivo principal de hojas de estilo. Contiene las variables de color, el diseño de botones orgánicos, la configuración de los Shape Dividers (ondas) y la corrección global del *overflow*.
* `code_buy.js`: Lógica de la boutique. Contiene un arreglo de productos (JSON) que se inyecta dinámicamente en el DOM (`buy.html`). Además, procesa dinámicamente el carrito de compras generando links hacia WhatsApp con variables de texto codificadas (`encodeURIComponent`).

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica del sitio.
* **CSS3:** Estilizado personalizado, CSS Grid/Flexbox y animaciones de fotogramas clave (*keyframes*).
* **JavaScript (ES6):** Renderizado dinámico de tarjetas de productos.
* **Bootstrap 5:** Framework principal para el sistema de cuadrículas (grids) y responsividad móvil.
* **AOS (Animate On Scroll):** Librería JS/CSS para las animaciones suaves al bajar por la página.
* **FontAwesome:** Iconografía vectorial.
* **Google Fonts:** Tipografía *Fredoka* para un aspecto más amigable.

---

## 💻 Cómo ejecutar el proyecto

Este proyecto no requiere instalación de dependencias pesadas ni servidores de desarrollo complejos.

1. Clona este repositorio o descarga el código fuente.
2. Abre la carpeta del proyecto.
3. Haz doble clic en el archivo `index.html` para abrirlo en tu navegador predeterminado.
4. ¡Disfruta de la experiencia Spa!

---
*Diseñado y desarrollado por **Steven Gómez**.*