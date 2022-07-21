function renderProductosCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<p class="text-end"><a href="#" class="btn btn-danger" onclick="vaciarCarrito()"
    title="Vaciar Carrito">Vaciar Carrito<img src="../img/wombatlogo.png" width="24"></a></p>
    <table class="table">`;
  
    for (let producto of productos){
      contenido += `<tabla>
      <tr>
      <td><img src="${producto.imagen}" width="60px" height="80px" alt=${producto.nombre}</td>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td class="text-end"><a href="#" class="btn btn-danger"><img src="../img/wombatlogo.png" width="24" onclick="eliminarCarrito(${producto.id})"></a></td>
      </tr>`;
    }
    contenido += `</tabla>`;
    document.getElementById("productosCarrito").innerHTML = contenido;
  }

  function agregarCarrito(id){
    let producto = buscarProducto(id);
    let producto_carrito = obtenerProductosCarrito();
    producto.cantidad = 1;
    producto_carrito.push(producto);
    guardarProductosCarrito(producto_carrito);
    actualizarBotonCarrito();
  }
  
  function eliminarCarrito(id){
    let producto = buscarProducto(id);
    let producto_carrito = obtenerProductosCarrito();
    let pos = producto_carrito.findIndex(x=> x.id == id);
    producto_carrito[pos].cantidad -= 1;
  
    if(producto_carrito[pos].cantidad == 0){
      producto_carrito.splice(pos,1);
    }
    guardarProductosCarrito(producto_carrito);
    actualizarBotonCarrito();
    renderProductosCarrito();
  }

  function vaciarCarrito(){
    localStorage.removeItem("carrito");
    actualizarBotonCarrito()
    renderProductosCarrito();
  }

  function buscarProducto(id){
    let productos = obtenerProductosLS()
    return productos.find(x => x.id == id);
  }

  renderProductosCarrito();