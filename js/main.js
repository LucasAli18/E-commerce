function renderProducto(){
  let productos = obtenerProductosLS();
  let catalogo = "";

    for (let prenda of productos)
    {
      catalogo += `<div class="col-md-4>"
      <div class="card" style="width: 18rem;">
      <img src="${prenda.imagen}" class="card-img" alt="${prenda.nombre}">
      <article class="card-body">
        <h5 class="card-title">${prenda.nombre}</h5>
        <p class="card-text">$${prenda.precio}</p>
        <a href="#" class="btn btn-info" onclick="agregarCarrito(${prenda.id})">Añadir</a>
      </article>
      </div>
      </div>`
    }
  
  document.getElementById("productos").innerHTML = catalogo;
}

guardarProductosLS(productos);
actualizarBotonCarrito();
renderProducto();