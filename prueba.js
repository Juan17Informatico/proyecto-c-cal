/**
 * Declaración de Variables
 */ 
let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');
let result = document.getElementById('result');
/**
 * Declaración de variables de botones
 */ 
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');

/**
 * Creacion de addEventListener para las funciones sumar, restar, dividir, multiplicar
*/
sumar.addEventListener('click', sumarN);
restar.addEventListener('click', restaN);
multiplicar.addEventListener('click', multiplicarN);
dividir.addEventListener('click', dividirN)

/**
 * Creacion de funciones
*/
function sumarN(){
    let suma = Number(num1.value) + Number(num2.value);
    return result.innerText = 'Suma: ' + suma;
}

function restaN(){
    let resta = Number(num1.value) - Number(num2.value);
    return result.innerText = 'Resta: ' + resta; 
}

function multiplicarN(){
    let multiplicacion = Number(num1.value) * Number(num2.value);
    return result.innerText = 'Multiplicación: ' + multiplicacion;
}

function dividirN(){
    let division = Number(num1.value) / Number(num2.value);
    return result.innerText = 'División: ' + division;
}