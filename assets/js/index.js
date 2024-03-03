let precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const precioTotal = document.querySelector(".valor-total");

const buttonPlus = document.querySelector(".button-add");
const buttonMinus = document.querySelector(".button-subtract");

const cantidad = document.querySelector(".cantidad");

// Nota al revisor: En oposición a lo mostrado en la guia, se ha optado por escribir todo el codigo de javascript en este archivo (.js), buscando seguir al máximo las recomendaciones de mejores prácticas.

buttonPlus.onclick = function(){
    cantidad.innerHTML = Number(cantidad.innerHTML)+1
    precioTotal.innerHTML = Number(cantidad.innerHTML)*precio
};
buttonMinus.onclick = function(){
    cantidad.innerHTML = Number(cantidad.innerHTML)-1
    precioTotal.innerHTML = Number(cantidad.innerHTML)*precio
};
