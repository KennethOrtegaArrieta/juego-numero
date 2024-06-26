let numeroSecreto=0;
let intentos = 0;
console.log (numeroSecreto);
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);   
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else{

        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
  
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';

   }

function generarNumeroSecreto() {
   let numerogenerado= Math.floor (Math.random() * 10) + 1; 
  console.log(numerogenerado);
  console.log(listaNumerosSorteados);
  if ( listaNumerosSorteados.length === numeroMaximo){
asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
  }else {
       if (listaNumerosSorteados.includes(numerogenerado)){
        return generarNumeroSecreto();
       }else{
          listaNumerosSorteados.push(numerogenerado);
          return numerogenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento ('p',`Indica un numero del 1 al 10 (${intentos} ${intentos===1 ? 'intento' : 'intentos'} restantes)`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}
condicionesIniciales();
