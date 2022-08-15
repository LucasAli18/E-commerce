


//Local Storage

  function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
  }
        //Carrito

  function obtenerProductosCarrito(){
      return JSON.parse(localStorage.getItem("carrito")) || [];
    }
    
    function guardarProductosCarrito(productos){
      localStorage.setItem("carrito", JSON.stringify(productos));
    }

  // --------------------------------------------------------------

  // Buscar la prenda del array

  function buscarPrenda(id){
    let ropa = obtenerProductosLS()
    return ropa.find(prenda => prenda.id == id);
  }

  // --------------------------------------------------------------

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
      contenido = `<div class="sticky-top"><button type="button" class="btn btn-danger position-relative">
      <img src="../img/carrito.png" width="24">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${total}</span></button></div>`;
    }
    
    document.getElementById("carritoShop").innerHTML = contenido;
  
  }

   function agregarCarrito(id){
    let producto_carrito = obtenerProductosCarrito();
    let ropa = buscarPrenda(id);
    let posicion = producto_carrito.findIndex(prenda=> prenda.id === id);
    if(posicion > -1){       
      producto_carrito[posicion].cantidad += 1;
    } else {
      
      let producto = buscarPrenda(id);
      producto.cantidad = 1;
      producto_carrito.push(producto);
    }
    
    Toastify({
      text: `Agregaste ${ropa.nombre} al carrito`,
      className: "info",
      duration: 1500,
      style: {
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
      }
    }).showToast();

    guardarProductosCarrito(producto_carrito);
    actualizarBotonCarrito();
  }