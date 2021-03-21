// Formas de seleccionar contenido HTML en JS

// querySelector

//const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elementos. dentro va el selector css
const heading = document.querySelector('#heading'); // forma mas optima con IDS
// el h2 dentro de header__texto
heading.textContent = 'Nuevo Heading'; // MODIFIQUE EL HTML CON JS
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //los enlaces de .navegacion
//console.log(enlaces[0]); //trae el primer enlace. QUERYSELECTORALL se maneja como arrays
enlaces[0].textContent = 'Nuevo texto enlace' // modifico solo el texto ddel primer elemento
//enlaces[0].href = 'https://google.com'; //cambiar href de enlaace
//enlaces[0].classList.remove ('navegacion__enlace'); //borra la clase por js

// getElementById NO SE USA
//const heading2 = document.getElementById('heading'); //busca id con este nombre
//console.log(heading2)

// CREAR NUEVO ELEMENTO EN EL DOCUMENTO HTML. EJEMPLO NUEVO ENLACE
const nuevoEnlace = document.createElement('A') // entre comillas y mayus va el elemento a crear
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
//agregra text
nuevoEnlace.textContent = 'Enlace nuevo con JS';
//agregar class
nuevoEnlace.classList.add('navegacion__enlace');
// agregar nuevo elemento al DOCUMENTO
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); // queda agregado al codigo


// EVENTOS

console.log(1);

//window es un nivel mas alto que document, referencia a toddas las funciones. todo el JS
window.addEventListener('load', function () { // load espera a que JS y los archivos que dependen del
    // HTML esten listos
    console.log(2);
}) // significa que hay un evento y cuando ocurrse continua con el codigo

window.onload = function () {
    console.log(3); //realiza lo mismo pero solo con load obviamente
} // load espera a que descargue HTML CSS e img

document.addEventListener('DOMContentLoaded', function() {
    console.log(4)
}) // DOMContentLoaded, espera a que descargue el HTML, por eso se ejecuta antes que el LOAD
// es el mas usado porque es el mas rapido

console.log(5);

window.onscroll = function (event) {
    console.log(event) //ejecuta cadad vez que scrolleo
}

// REGISTRAR EVENTO A UN ELEMENTO EN HTML
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();// no se me recarga la pagina al tocar enviar.
    // eso si NO ENVIA EL FORMULARIO. SIRVE PARA VALIDAR QUE ESTEN TODOS LOS CAMPOS LLENOS
    // PERO HAY QUE AGREGAR MAS CODIGO.
    console.log('Enviando formulario'); // imprime esto al tocar el boton.
})