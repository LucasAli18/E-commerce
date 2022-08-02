fetch("./js/stock.json")
.then((res) => res.json())
.then((data) => {
  const contenedor = document.getElementById("productos");

    data.forEach((prenda) =>
    {
      let card = document.createElement("figure");
      let imagen = document.createElement("img");
      imagen.src= `${prenda.imagen}`;
      imagen.alt = `${prenda.nombre}`;
      let nombre = document.createElement("figcaption");
      nombre.innerHTML =`${prenda.nombre}`;
      let parrafo = document.createElement("p");
      parrafo.innerHTML = `${prenda.precio}`;
      let borrar = document.createElement("a");
      borrar.innerHTML = `<a href="#" class="btn btn-info" onclick="agregarCarrito(${prenda.id})">Añadir</a>`;
      card.appendChild(imagen);
      card.appendChild(nombre);
      card.appendChild(parrafo);
      card.appendChild(borrar);
      contenedor.appendChild(card)
    });
    guardarProductosLS(data);
});
actualizarBotonCarrito();