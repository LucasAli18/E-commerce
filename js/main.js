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
      alert(carrito)
      mostrarProductos();
    break
    case "2":
      total += jogger;
      carrito += "jogger \n";
      alert("Se agrego: jogger al carrito");
      alert(carrito)
      mostrarProductos();
    break
    case "3":
      total += remera;
      carrito += "remera \n";
      alert("Se agrego: remera al carrito");
      alert(carrito)
      mostrarProductos();
      break
    case "4":
      total +=  campera;
      carrito += "campera \n";
      alert("Se agrego: campera  al carrito");
      alert(carrito)
      alert(total)
      mostrarProductos();
      break
    case "5":
      alert("Su carrito es:\n" + carrito +"\n" + "$"+ total);
      mostrarProductos();
      break
    case "6":
      alert("Gracias por su compra");
      alert("Su carrito es:\n" + carrito +"\n" + "$"+ total);
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
  while(decision === ""){
    decision = prompt("Estas con ganas de renovar tu outfit "+ nombre +"? \n Si \n No ");
  }
    return decision
}


let total = 0;
let carrito = "";
let sweater = 4000;
let jogger = 4700;
let campera = 5000;
let remera = 2000;
let nombre = solicitarNombre()
let decision = decidir()
    if((decision==="Si") || (decision==="si")|| (decision==="sI") || (decision==="SI")){
    mostrarProductos()
    }
    else if((decision==="No") || (decision==="no")|| (decision==="nO") || (decision==="NO")){
      alert("Gracias vuelva pronto")
    }


























/* function AñadirCarrito(){
  if ((producto==="1")&&(opcion==="1")){
    alert("Añadiste al carrito sweater escote V " + "con un costo de "+ sweater);
    Total = Total + sweater;
  }

}

function CompraProd(){
let producto = prompt("Que estas pensando comprar? \n 1: Sweater \n 2: Jogger \n 3: Campera")

      switch (producto){
        case "1":

          alert("Nada mal! Nuestros sweaters son exelente calidad")
          opcion=prompt("Contamos de dos tipos de sweater escote V y cuello redondo, selecciona uno: \n 1:Escote V \n 2:Cuello redondo")

          if (opcion==="1"){
            alert("Añadiste al carrito sweater escote V, una buena opcion para combinarlo con tus camisas")
            carrito += "sweaterV"
            Total += sweaterV
            alert("Tu carrito es: "+ carrito + Total);

          }

          else if(opcion==="2"){
            alert("Seleccionaste el sweater escote redondo, una buena opcion para combinarlo con remeras");
            alert("Añadiste al carrito sweater cuello redondo, una buena opcion para combinarlo con remera");
            carrito += "sweaterC";
            Total += sweaterC;
            alert("Tu carrito es: "+ carrito);
          }

          break;

          case "2":

            alert("Excelente decision, nuestros joggers son de lo mejor");

            break;

          case "3":

            alert("Increible, elegiste nuestras camperas, no te vas a arrepentir, contamos con una amplia variedad de colores")

            break;
          }
      } */

  
      













/*       //Variables
      let campera = 5500
      let jogger = 4700
      let sweaterV = 4000
      let sweaterC = 4000
      let carrito = ""
      let Total = 0

      SolicitarNombr()

      let decision = prompt("Estas con ganas de renovar tu outfit "+ nombre +"? \n Si \n No ");

if((decision==="Si") || (decision==="si")|| (decision==="sI") || (decision==="SI")){
  CompraProd()
    }
    else if((decision==="No") || (decision==="no")|| (decision==="nO") || (decision==="NO")){
      alert("Gracias vuelva pronto")
    }

    decision = prompt("Excelente decision! como seguimos? \n1:Desea seguir comprando \n2:Ver carrito \n 3:Finalizar")
    switch (decision){
      case "1":
      CompraProd();
      break;

      case "2":
        alert("Carrito: \n{carrito} \n${Total}")
        break;

      case "3":
        alert("Gracias por la compra su total es \n${Total}")
        Total=0;
        carrito="";
        break;
    } */
