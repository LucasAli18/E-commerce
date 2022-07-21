// Defino el stock de productos

const productos = [
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
        imagen: "../img/SW_lanilla_B.jpg",
        stock: 5
    }
    
  ];
  
  // Funciones
  
  function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  function buscarProducto(id){
    let productos = obtenerProductosLS()
    return productos.find(x => x.id == id);
  }