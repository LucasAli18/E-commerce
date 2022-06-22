function solicitarNombre(){
  let nombre = prompt("Ingrese su nombre");

  while (nombre === ""){
    nombre = prompt("Ingrese su nombre");
  }

  return nombre
}


function mostrarProductos(){
  let producto = prompt("Que prenda de ropa elegis \n1)Sweater \n2)Jogger \n3)Remera \n4)Campera \n5) Ver carrito \n6) Finalizar compra \n7) Salir");
  while(producto<1 || producto>8){
    producto = prompt("Que prenda de ropa elegis \n1)Sweater \n2)Jogger \n3)Remera \n4)Campera \n5) Ver carrito \n6) Finalizar compra \n7) Salir")
  }
  switch(producto){
    case "1":
      total += sweater;
      carrito += "Sweater \n";
      alert("Se agrego: sweater al carrito");
      alert("Su carrito es:\n" +carrito + "\nTotal de $"+total)
      mostrarProductos();
    break
    case "2":
      total += jogger;
      carrito += "jogger \n";
      alert("Se agrego: jogger al carrito");
      alert("Su carrito es:\n" +carrito + "\nTotal de $"+total)
      mostrarProductos();
    break
    case "3":
      total += remera;
      carrito += "remera \n";
      alert("Se agrego: remera al carrito");
      alert("Su carrito es:\n" +carrito + "\nTotal de $"+total)
      mostrarProductos();
      break
    case "4":
      total +=  campera;
      carrito += "campera \n";
      alert("Se agrego: campera  al carrito");
      alert("Su carrito es:\n" +carrito + "\nTotal de $"+total)
      mostrarProductos();
      break
    case "5":
      alert("Su carrito es:\n" + carrito + "\nTotal de $"+total);
      mostrarProductos();
      break
    case "6":
      alert("Gracias por su compra");
      alert("Su carrito es:\n" + carrito + "\nTotal de $"+total);
      carrito = "";
      total = 0;
      break
      case "7":
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

//Declaro las variables
let total = 0;
let carrito = "";
let sweater = 4000;
let jogger = 4700;
let campera = 5000;
let remera = 2000;

//Llamo la funcion de solicitarNombre
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