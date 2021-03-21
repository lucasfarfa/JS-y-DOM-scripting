// Formas de seleccionar contenido HTML en JS
// APUNTES
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

// console.log(1);

// //window es un nivel mas alto que document, referencia a toddas las funciones. todo el JS
// window.addEventListener('load', function () { // load espera a que JS y los archivos que dependen del
//     // HTML esten listos
//     console.log(2);
// }) // significa que hay un evento y cuando ocurrse continua con el codigo

// window.onload = function () {
//     console.log(3); //realiza lo mismo pero solo con load obviamente
// } // load espera a que descargue HTML CSS e img

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4)
// }) // DOMContentLoaded, espera a que descargue el HTML, por eso se ejecuta antes que el LOAD
// es el mas usado porque es el mas rapido

//console.log(5);

// window.onscroll = function (event) {
//     console.log(event) //ejecuta cadad vez que scrolleo
// }

// REGISTRAR EVENTO A UN ELEMENTO EN HTML
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) {
//     console.log(evento);
//     evento.preventDefault();// no se me recarga la pagina al tocar enviar.
//     // eso si NO ENVIA EL FORMULARIO. SIRVE PARA VALIDAR QUE ESTEN TODOS LOS CAMPOS LLENOS
//     // PERO HAY QUE AGREGAR MAS CODIGO.
//     console.log('Enviando formulario'); // imprime esto al tocar el boton.
// })

// LO COMENTO SINO NO ME FUNCIONA EL EVENTO SUBMIT
// EN FORMULARIOS SE USA EVENT SUBMIT, CLICK SE USA EN BOTONES


// Eventos de los INPUTS y TEXTAREAS
// Agregaremos un event listener al formulario para que revise lo que el usuario escribe

// objeto global
const datos = { //objeto para validadr formulario
    nombre: '',
    email: '',
    mensaje: ''
}

// organizacion de codigo. 1 vars
const nombre = document.querySelector('#nombre'); //formulario nombre
const email = document.querySelector('#email'); //formulario nombre
const mensaje = document.querySelector('#mensaje'); //formulario nombre
const formulario = document.querySelector('.formulario');

// event listeners
nombre.addEventListener('input', leerTexto); // el evento change es cuando se produdce un cambio
// input es mejor que change, cadda vez que se escribe.
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// EN FORMULARIOS SE USA EVENT SUBMIT, CLICK SE USA EN BOTONES
// EVENTO DE SUBMIT
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Valido formulario. Si algun campo quedda vacio, mensaje que indique al usuario lo suceddido
    //destructuring ddde objeto
    const {nombre, email, mensaje} = datos; // viene de ddatos

    if(nombre === '' || email === '' || mensaje === '') { // si no se lleno el campo NOMBRE o EMAIL o MENSAJE
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // corta la ejecucion del codigo/
        // no se va a ejecutar  console.log('Enviando Formulario'); si se accede a este IF
    }
    // Envio formulario
    mostrarAlerta('Formulario Enviado.');
    console.log('Enviando Formulario');
})

// funciones
function leerTexto (event) {
    //console.log(event.target.value); // va mostrando que se escribe en cada campo letra a letra.
    datos[event.target.id] = event.target.value;
    //console.log(event.target); // imprime los datos del event
    //console.log(datos);
    // nos llena con los datos ingresados el OBJETO DATOS SEGUN CORRESPONDE.
}// ASI LEVANTO DDATA DDEL TECLADDO

// muestra error en pantalla del form
function mostrarError (mensaje) {
    //console.log(mensaje); // la idea seria que se lo muestre al usuario en html, no en consola.
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    // hacer que la alerta desaparezca luego de unos seg
    setTimeout(() => {
        error.remove();// saca el elemento del HTML
    }, 2000);
}

// muestra alerta si se envio correctamente
function correcto (mensaje) {
    //console.log(mensaje); // la idea seria que se lo muestre al usuario en html, no en consola.
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto);

    // hacer que la alerta desaparezca luego de unos seg
    setTimeout(() => {
        correcto.remove();// saca el elemento del HTML
    }, 2000);
}


// opcion para hacer las ddos funciones en una.

function mostrarAlerta (mensaje, error = null) { // valorpor ddedfault de error = null
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();// saca el elemento del HTML
    }, 2000);

} // ahora con esta funcion podriamos elminar las funciones de CORRECTO Y ERROR.

