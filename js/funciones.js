// Funciones que comparten las dos paginas

function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  function guardarProductosCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
  }

  function actualizarBotonCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<button type="button" class="btn btn-danger position-relative">
    <img src="../img/carrito.png" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span></button>`;
    
    let total = 0;
    
     if(productos.length > 0){
      for(let producto of productos){
        total += producto.cantidad;
      }
      contenido = `<button type="button" class="btn btn-danger position-relative">
      <img src="../img/carrito.png" width="24">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${total}</span></button>`;
    }
    
    document.getElementById("carritoShop").innerHTML = contenido;
  
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