// Defino el stock de productos

const productos = [
    {
        id: 1,
        nombre: "Lanilla Gris",
        precio: 4000,
        imagen:"../img/SW_lanilla_G.jpg",
        cantidad:0,
        
    },
    {
        id: 2,
        nombre: "Lanilla Negro",
        precio: 4000,
        imagen:"../img/SW_lanilla_N.jpg",
        cantidad:0,
        
    },
    {
        id: 3,
        nombre: "Lanilla Blanco",
        precio: 4000,
        imagen:"../img/SW_lanilla_B.jpg",
        cantidad:0,
        
    },
    {
        id: 4,
        nombre: "Remera Azul",
        precio: 2000,
        imagen:"../img/Rem_boton_A.jpg",
        cantidad:0,
        
    },
    {
        id: 5,
        nombre: "Remera Bordo",
        precio: 2000,
        imagen: "../img/Rem_boton_B.jpg",
        cantidad:0,
        
    },
    {
        id: 5,
        nombre: "Sweatter Morado",
        precio: 4800,
        imagen: "../img/SW_algodon_M.jpg",
        cantidad:0,
        
    },
    {
        id: 5,
        nombre: "Sweatter Naranja",
        precio: 4800,
        imagen: "../img/SW_algodon_N.jpg",
        cantidad:0,
        
    },
    {
        id: 5,
        nombre: "Sweatter Celeste",
        precio: 4800,
        imagen: "../img/SW_algodon_C.jpg",
        cantidad:0,
        
    }
    
  ];
  
  // FUNCIONES
  
  function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  function buscarPrenda(id){
    let ropa = obtenerProductosLS()
    return ropa.find(prenda => prenda.id == id);
  }

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
  }