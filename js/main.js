// Funciones
function solicitarNombre(){

  let nombre = prompt("Ingrese su nombre");


  while ((nombre == "") || (nombre == null)) {
    nombre = prompt("Ingresá tu nombre por favor.");
  }
  alert("Bienvenido a Wombat Shorwoom "+ nombre);

  return nombre;
}

function mostrarProductos(){
  let producto = prompt("Que prenda de ropa elegis \n1)Sweater \n2)Jogger \n3)Remera \n4) Ver carrito \n5) Finalizar compra \n6) Salir");
  while(producto<1 || producto>7){
    producto = prompt("Que prenda de ropa elegis \n1)Sweater \n2)Jogger \n3)Remera \n4) Ver carrito \n5) Finalizar compra \n6) Salir")
  }
  switch(producto){
    case "1":
      total += prenda3.precio;
      carrito.push(prenda3.tipo);
      alert("Se agrego:" + prenda3.tipo +" al carrito de la marca "+prenda3.marca);
      alert(carrito + "\n" + total)
      mostrarProductos();
    break
    case "2":
      total += total += prenda1.precio;
      carrito.push(prenda1.tipo);
      alert("Se agrego:" + prenda1.tipo +" al carrito de la marca "+prenda1.marca);
      alert(carrito + "\n" + total)
      mostrarProductos();
    break
    case "3":
      total += prenda2.precio;
      carrito.push(prenda2.tipo);
      alert("Se agrego:" + prenda2.tipo +" al carrito de la marca "+prenda2.marca);
      alert(carrito + "\n" + total)
      mostrarProductos();
      break
    case "4":
      alert(carrito + "\n\n$" + total)
      console.log(carrito);
      mostrarProductos();
      break
    case "5":
      alert("Gracias por su compra");
      break
      case "6":
        alert("Gracias vuelva pronto");
        break
    default:
      alert("Elija una opción");
      mostrarProductos();
      break
  }
}

function decidir(){
  let decision = prompt("Estas con ganas de renovar tu outfit "+ nombre +"? \n Si \n No ");
  while(decision === "") {
    decision = prompt("Estas con ganas de renovar tu outfit "+ nombre +"? \n Si \n No ");
  }
    return decision
}

// Array
const RopaEnVenta = [];
const carrito = [];

//Declaro las variables
let sweater = 4000;
let jogger = 5000;
let remera = 2000;
let total = 0;

// Objetos
class Prenda {
  constructor(id, tipo, marca, precio) {
      this.id = id;
      this.tipo = tipo
      this.marca = marca;
      this.precio = precio;
  }
}

const prenda1 = new Prenda(1, " Jogger ", "Kevingstone", 5000);
const prenda2 = new Prenda(2," Remera ", "Orso Bianco", 2000);
const prenda3 = new Prenda(3, " Sweater ", "Hollister" , 4000);

RopaEnVenta.push(prenda1);
RopaEnVenta.push(prenda2);
RopaEnVenta.push(prenda3);

console.log(RopaEnVenta);


//Comenzamos
let nombre = solicitarNombre()
//Llamo la funcion de decidir
let decision = decidir()
    if((decision==="Si") || (decision==="si")|| (decision==="sI") || (decision==="SI")){
      //Llamo la funcion de mostrar productos
       mostrarProductos()

    }

    else if((decision==="No") || (decision==="no")|| (decision==="nO") || (decision==="NO")){
      alert("Gracias vuelva pronto")
    }