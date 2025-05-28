window.addEventListener('DOMContentLoaded', () => {
  function mostrarCarrito() {
    const c = JSON.parse(localStorage.getItem('carrito')) || [];
    const cont = document.getElementById('cartItems'); cont.innerHTML = '';
    let total = 0;
    c.forEach((p, i) => {
      const d = document.createElement('div'); d.className = 'producto-carrito';
      d.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="producto-info">
          <span>${p.name}</span>
          <p>Precio: $${p.price.toLocaleString('es-ES')}</p>
        </div>
        <button data-index="${i}">Eliminar</button>
      `;
      cont.appendChild(d); total += p.price;
    });
    document.getElementById('total').textContent = `Total: $${total.toLocaleString('es-ES')}`;
  }
  mostrarCarrito();
  document.getElementById('cartItems').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      let c = JSON.parse(localStorage.getItem('carrito')) || [];
      c.splice(parseInt(e.target.dataset.index, 10), 1);
      localStorage.setItem('carrito', JSON.stringify(c));
      mostrarCarrito();
    }
  });
  document.getElementById('vaciar').addEventListener('click', () => { localStorage.removeItem('carrito'); mostrarCarrito(); });
  document.getElementById('finalizar').addEventListener('click', () => {
    const c = JSON.parse(localStorage.getItem('carrito')) || [];
    if (!c.length) return alert('Tu carrito está vacío.');
    alert('¡Gracias por tu compra! Se ha generado tu pedido.');
    localStorage.removeItem('carrito'); mostrarCarrito();
  });
});
