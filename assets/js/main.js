window.onload =function () {
let boton= document.querySelector("#button");
boton.addEventListener("click", ()=>{
let cantidad = document.querySelector('#cantidad');
let selectorTotal = document.querySelector('#total');
let totalApagar = 400000*cantidad.value;
const totalformateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(totalApagar);
selectorTotal.innerHTML = totalformateado;
let unidad = document.getElementById('unidad');
unidad.innerHTML = cantidad.value;
let colorLaptop = document.querySelector ('#colorlaptop');
let elementoCirculo = document.getElementById ('circleId')
elementoCirculo.style.background = colorLaptop.value;
})
}   