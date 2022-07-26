function renderProductosCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<p class="text-end"><a href="#" class="btn btn-danger" onclick="vaciarCarrito()"
    title="Vaciar Carrito">Vaciar Carrito<img src="../img/basura.png" width="24"></a></p>
    <table class="table">`;
    contenido += `<tr><td></td><td>Producto</td><td>Precio</td><td>Cantidad</td></tr>`
    for (let prenda of productos){
      let precio = prenda.precio * prenda.cantidad;
      contenido += `
      <tr>
      <td><img src="${prenda.imagen}" width="60px" height="80px"</td>
      <td>${prenda.nombre}</td>
      <td>$ ${precio}</td>
      <td><a href="#" onclick="eliminarItemCarrito(${prenda.id})"><img src="../img/menos.png" width="15px" height="15px"></a>${prenda.cantidad}<a href="#" onclick="agregarCarrito(${prenda.id})"><img src="../img/mas.png" width="20px" height="20px"></a></td>
      <td class="text-end"><a href="#" class="btn btn-danger"><img src="../img/basura.png" width="24" onclick="eliminarItemCarrito(${prenda.id})"></a></td>
      </tr>
      `;
    }
    contenido += `</table>`;
    document.getElementById("productosCarrito").innerHTML = contenido ;
  }

  function agregarCarrito(id){
    let producto_carrito = obtenerProductosCarrito();
    let posicion = producto_carrito.findIndex(prenda=> prenda.id == id);

    if(posicion > -1){       
        producto_carrito[posicion].cantidad += 1;
    } else {

        let producto = buscarPrenda(id);
        producto.cantidad = 1;
        producto_carrito.push(producto);
    }

    guardarProductosCarrito(producto_carrito);
    actualizarBotonCarrito();
    renderProductosCarrito();
  }


  function eliminarItemCarrito(id){
    let producto = buscarPrenda(id);
    let producto_carrito = obtenerProductosCarrito();
    let posicion = producto_carrito.findIndex(ropa=> ropa.id == id);
    producto_carrito[posicion].cantidad -= 1;
    if(producto_carrito[posicion].cantidad == 0){
      producto_carrito.splice(posicion,1);
    }
    guardarProductosCarrito(producto_carrito);
    actualizarBotonCarrito();
    renderProductosCarrito();
  }

   function vaciarCarrito(){
    Swal.fire({
      title: 'Seguro quieres vaciar el carrito🙁?',
      text: "Se borrara todo lo cargado en el carrito",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("carrito");
        actualizarBotonCarrito();
        renderProductosCarrito();
        Swal.fire(
          'Vacio!',
          'Tu carrito fue vaciado.',
          'success'
        )
      }
    })
  }


  function buscarPrenda(id){
    let productos = obtenerProductosLS()
    return productos.find(prenda => prenda.id == id);
  }

  function comprarCarrito(){
  contenido = `` 
    document.getElementById("main_carrito").innerText = contenido;

    alerta = `<div class="alert alert-success" role="alert">
    Gracias por su compra, esperamos verlo de nuevo
    </div>`

    document.getElementById("alerta").innerHTML = alerta;
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
  }
  
  renderProductosCarrito();
  