window.addEventListener('DOMContentLoaded', () => {
  const items = [
    { id: 1, name: "FIFA 24", price: 330000, img: "../img/FIFA24.jpg", categoria: "deporte" },
    { id: 2, name: "Ghost of Tsushima", price: 140000, img: "../img/Ghost.jpg", categoria: "accion" },
    { id: 3, name: "God of War Ragnarök", price: 175200, img: "../img/GodWar.jpg", categoria: "accion" },
    { id: 4, name: "Hogwarts Legacy", price: 50000, img: "../img/Hogwarts.jpg", categoria: "accion" },
    { id: 5, name: "Silent Hill 2 Remake", price: 210000, img: "../img/SilentHill.jpg", categoria: "terror" },
    { id: 6, name: "The Last of Us Part I", price: 184000, img: "../img/THElou.jpg", categoria: "terror" }
  ];
  function renderizarProductos(filtro = 'todos') {
    const cont = document.getElementById('productList'); cont.innerHTML = '';
    const filt = filtro === 'todos' ? items : items.filter(p => p.categoria === filtro);
    filt.forEach(p => {
      const d = document.createElement('div'); d.className = 'producto';
      d.innerHTML = `
        <img src="${p.img}" alt="${p.name}" class="banner">
        <h3>${p.name}</h3>
        <p>Precio: $${p.price.toLocaleString('es-ES')}</p>
        <button class="addToCart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">Agregar al carrito</button>
      `;
      cont.appendChild(d);
    });
    document.querySelectorAll('.addToCart').forEach(btn => btn.addEventListener('click', () => {
      const prod = { id: btn.dataset.id, name: btn.dataset.name,
        price: parseFloat(btn.dataset.price), img: btn.dataset.img };
      let c = JSON.parse(localStorage.getItem('carrito')) || [];
      c.push(prod); localStorage.setItem('carrito', JSON.stringify(c));
      alert(`${prod.name} agregado al carrito`);
    }));
  }
  window.filtrarProductos = renderizarProductos;
  renderizarProductos();
});
