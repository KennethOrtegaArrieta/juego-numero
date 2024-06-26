function saludo(){
    console.log("¡Hola Mundo!");
}
mostrarHola();

function parametronombre(nombre){
console.log(`¡Hola ${nombre}`);
}
parametronombre("Alice");

function numerodoble(numero){
    return numero * 2;    
}
let resul=numerodoble(5);
console.log(resul);

function promedio(a,b,c){
    return (a+b+c)/3;
}
console.log(promedio);

function encontrarMayor(a,b){
    return  a>b ? a:b;
}let numeroMayor =encontrarMayor (15,9);
console.log (numeroMayor);

function multiplicacion(a){
    return a*a;
} let resultado=multiplicacion(20);
console.log(resultado);
function calcularIMC(altura,peso){
    var imc=peso/(altura*altura);
    return imc;
}
function calcularFactorial(numero){
    if (numero===0||numero==1){
        return 1;
    }else{
        return numero* calcularFactorial(numero-1);
    }
}
let numero=5;
let resulta =calcularFactorial(numero);
console.log(`El factorial de${numero} es ${resulta}`);

function convertirDolaresAReales(dolares){
    var cotizacionDolar=530;
    var reales=dolares*cotizacionDolar;
    return reales;
}
let valorEnDolar=50;
let valorEnReales= convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dolares es R${valorEnReales}`);
function calcularAyPRectangulo(base,altura){
    var area=base*altura;
    var perimetro1=2*(base+altura);
    console.log("Area:"+area);
    console.log("Perimetro:"+perimetro1);
}
let altura =35;
let base=65;
calcularAyPRectangulo(base,altura);
function calcularAyPCircular(radio){
    var pi=3.14;
    var area =pi*radio*radio;
    var perimetro=2*pi*radio;
    console.log("Area:"+area);
    console.log("Perimetro"+perimetro);
}
let radio=4;
calcularAyPCircular(radio);
function CalTMulti(nume);
for (var i=1;i<=10;i++){
    var resultado1=nume*i;
    console.log(nume+"x"+i+"="+resultado)
}
let nume=12;
CalTMulti(nume);
// desafio 4
let listaGesnerica= [];
let lenguajesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin' y 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby' y 'GoLang');
function mostrarLenguajesSeparados(){
    for(let i=0;i<lenguajesDeProgramacion.length;i ++);{
        console.log(lenguajesDeProgramacion[i]);   
    }
}mostrarLenguajesSeparados();
function calcularMedia(){
    let suma=0;
    for (let i=0;lista.length;i++){
        suma += lista[i];
    }
}
let numeros=[10.20.30.40.50];
let media = calcularMedia(numeros);
console.log('Média:', media);
function    encontrarMayorMenor (){
    let mayor=lista[0];
let menor =lista[0];
for (let i=1;i<lista.length;i++){
    if (lista[i]>mayor){
        mayor=lista[i];
}
    if(lista[i]<menor){
        menor=lista[i]:
    }
}
console.log('Mayor:', mayor);
console.log('Menor:', menor);
}
let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);
funtion calcularsuma(lista){//8
    let suma=0;
    for(let i=0;i<lista.length;i++){
        suma+= lista[i];
    }
    return suma;
}
let numeros=[15,8,35,3,12];
let suma=calcularsuma(numeros);
console.log('suma',suma
    
function encontrarindiceElemento ( lista,elemento){
    for(let i=0;i<lista.length,i++){
        if (lista[i]===elemento){
            return i;
        }
    }
    return -1



    ,
}   
