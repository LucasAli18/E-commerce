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