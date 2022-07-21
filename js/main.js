// Defino el stock de productos

/* const productos = [
  {
      id: 1,
      nombre: "Jogger Azul",
      precio: 5100,
      imagen:"../img/SW_lanilla_G.jpg",
      stock:5
  },
  {
      id: 2,
      nombre: "Jogger Azul",
      precio: 5100,
      imagen:"../img/SW_lanilla_N.jpg",
      stock:5
  },
  {
      id: 3,
      nombre: "Jogger Azul",
      precio: 5100,
      imagen:"../img/SW_lanilla_G.jpg",
      stock:5
  },
  {
      id: 4,
      nombre: "Jogger Azul",
      precio: 5100,
      imagen:"../img/SW_lanilla_N.jpg",
      stock:5
  },
  {
      id: 5,
      nombre: "Jogger Azul",
      precio: 5100,
      imagen:"../img/SW_lanilla_B.jpg",
      stock:5
  }
  
];

// Funciones

function obtenerProductosLS(){
  return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos){
  localStorage.setItem("productos", JSON.stringify(productos));
}
 */

/* function obtenerProductosCarrito(){
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos){
  localStorage.setItem("carrito", JSON.stringify(productos));
} */

function renderProducto(){
  let productos = obtenerProductosLS();
  let catalogo = "";

    for (let prenda of productos)
    {
      catalogo += `<div class="col-md-4>"
      <div class="card" style="width: 18rem;">
      <img src="${prenda.imagen}" class="card-img-top m-3" alt="${prenda.nombre}">
      <div class="card-body">
        <h5 class="card-title">${prenda.nombre}</h5>
        <p class="card-text">$${prenda.precio}</p>
        <a href="#" class="btn btn-primary" onclick="agregarCarrito(${prenda.id})">Añadir</a>
      </div>
      </div>
      </div>`
    }
  
  document.getElementById("productos").innerHTML = catalogo;
}

/* function actualizarBotonCarrito(){

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

} */

/* function buscarProducto(id){
  let productos = obtenerProductosLS()
  return productos.find(x => x.id == id);
} */

/* function agregarCarrito(id){
  let producto = buscarProducto(id);
  let producto_carrito = obtenerProductosCarrito();
  producto.cantidad = 1;
  producto_carrito.push(producto);
  guardarProductosCarrito(producto_carrito);
  actualizarBotonCarrito();
} */

/* function eliminarCarrito(id){
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
} */

/* function renderProductosCarrito(){
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
} */

/* function vaciarCarrito(){
  localStorage.removeItem("carrito");
  actualizarBotonCarrito()
  renderProductosCarrito();
} */

guardarProductosLS(productos);
actualizarBotonCarrito();
renderProducto();
