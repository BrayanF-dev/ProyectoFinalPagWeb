# Proyecto Final - Creacion pagin web Tienda de Videojuegos

Como proyecto web, decidimos crear una pagina web estática de una tienda de videojuegos, desarrollado como trabajo final. Este trabajo incluye:

- Página HTML: Inicio, Catálogo (con opciones), Carrito(con detalle del juego e imagen), Contacto y Login.
- Estilos CSS personalizados para diseño y atractivo.
- Funcionalidad básica con JavaScript para filtrar productos y agregar al carrito usando `localStorage`.

# Aplicativos(entornos) usados

- HTML
- CSS3
- JS
- Python
- Git y GitHub para repositorio remoto.

# Cómo usar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir el archivo `html/index.html` en un navegador web.
3. Navegar entre las páginas para ver el catálogo, agregar productos al carrito y otros.
4. pruebas automatizadas python modificar el scrip en ruta de donde se encuentra el index

# 🎮 Tienda de Videojuegos

Este es un proyecto web de una tienda de videojuegos desarrollado con HTML, CSS y JavaScript. Además, incluye pruebas automatizadas utilizando **Python** y **Selenium**.

## 📁 Estructura del Proyecto

- `html/` — Archivos HTML del sitio.
- `css/` — Archivo de estilos CSS.
- `img/` — Imágenes usadas en el proyecto.
- `js/` — Scripts Java funciones
- `Python/` — Archivo prueba automatizada


## 🚀 Funcionalidades

- Página de inicio con bienvenida.
- Sistema de login simple.
- Catálogo de videojuegos.
- Carrito de compras con opción de vaciar y finalizar compra.
- Formulario de contacto.
- Botones de navegación entre páginas.

## 🧪 Pruebas Automatizadas con Selenium

El archivo `SeleniumTests.py` realiza las siguientes pruebas automáticamente:

1. Ingresa al `login.html` con usuario `cris` y contraseña `1234`.
2. Redirige al inicio (`index.html`).
3. Entra al catálogo y añade un juego al carrito (acepta la alerta tras 5 segundos).
4. Entra al carrito, lo vacía y vuelve a añadir el mismo juego desde el catálogo.
5. Finaliza la compra desde el carrito (acepta la alerta).
6. Navega al formulario de contacto y lo llena con los siguientes datos:
   - Nombre: **Andres**
   - Correo: **Andres@example.com**
   - Mensaje: **La página está muy bonita**
7. Envía el formulario (acepta la alerta).

## ⚙️ Requisitos

- Python 3.x
- Google Chrome instalado
- Paquetes de Python:
- 
```bash
pip install selenium webdriver-manager


 **Autores**

Brayan Fuentes.
Cristian Castelbalnco.

---

¡Gracias  
