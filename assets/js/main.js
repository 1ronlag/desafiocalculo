window.onload =function () {
let boton= document.querySelector("#button");
boton.addEventListener("click", ()=>{
let cantidad = document.querySelector('#cantidad')
let total = document.querySelector('#total')
let unidad = document.getElementById('unidad')
total.innerHTML = 400000*cantidad.value;
unidad.innerHTML = cantidad.value;
})
}