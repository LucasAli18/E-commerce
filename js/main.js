// Defino los productos
let stock = [
  {
      id: 1,
      nombre: "Campera",
      imagen:"./img/SW_lanilla_A.jpg",
  },
  {
      id: 2,
      nombre: "Sweatter",
      imagen:"./img/SW_lanilla_B.jpg",
  },
  {
      id: 3,
      nombre: "Jogger",
      imagen:"./img/SW_lanilla_G.jpg",
  },
  {
      id: 4,
      nombre: "Bermuda",
      imagen:"./img/SW_lanilla_N.jpg",
  },
  {
      id: 5,
      nombre: "Basica",
      imagen:"./img/SW_lanilla_V.jpg",
  },
  {
    id: 6,
    nombre: "Botones",
    imagen:"./img/SW_lanilla_V.jpg",
}
  
]

// Evento

let boton = document.getElementById("button");
boton.onclick = () => {
let abrigo = document.getElementById("abrigo");
let precio1 = parseInt(abrigo.options[abrigo.selectedIndex].value);
let pantalon = document.getElementById("pantalon");
let precio2 = parseInt(pantalon.options[pantalon.selectedIndex].value);
let remera = document.getElementById("remera");
let precio3 = parseInt(remera.options[remera.selectedIndex].value);
boton.innerHTML= `<button type="button" id="button" class="text-success" value="Calcular total">Gracias</button>`
let suma = `Total a pagar es $ ${precio1 + precio2 + precio3}`;
document.getElementById("resultado").value = suma;
};