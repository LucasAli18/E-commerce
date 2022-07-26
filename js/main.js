function renderProducto(){
  let productos = obtenerProductosLS();
  let catalogo = "";

    for (let prenda of productos)
    {
      catalogo +=
      `<figure>
       <img src="${prenda.imagen}" alt="${prenda.nombre}">
           <figcaption>${prenda.nombre}</figcaption>
           <p>$${prenda.precio}</p>
           <a href="#" class="btn btn-info" onclick="agregarCarrito(${prenda.id})">Añadir</a>
      </figure>`
    }
  
  document.getElementById("productos").innerHTML = catalogo;
}

guardarProductosLS(productos);
actualizarBotonCarrito();
renderProducto();