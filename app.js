let numeroSecreto = 0;
let intentos = 0;
let listadoNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

}

function verificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

if (numeroDeUsuario === numeroSecreto){
asignarTextoElemento ('p',`Acertaste al número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
document.getElementById('reiniciar').removeAttribute('disabled');


//El usuario no acertó
} else {
if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento ('p','el número secreto es menor');
} else {
    asignarTextoElemento ('p','el número secreto es mayor');
}
intentos ++;

}



return;
}


function limpiarCaja (){
document.querySelector ('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listadoNumerosSorteados);
   //Si ya tenemos el máximo de números

   if (listadoNumerosSorteados.length == numeroMaximo){
asignarTextoElemento ('p','Se acabaron los números');


   }else{

    //Si el número generado está en la lista
    if (listadoNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    } else {
    listadoNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }

    }
}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
            numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}



function reiniciarJuego() {
//Limpiar la caja
limpiarCaja ();

//Indicar mensaje de inicio
//Generar el número aleatorio
//Reset a intentos
condicionesIniciales();



//Deshabilitar el botón
document.getElementById ('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
