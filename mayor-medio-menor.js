const prompt = require('prompt-sync')();

let primer_numero = prompt("Por favor, ingresa el primer número:");
primer_numero = Number(primer_numero);
let segundo_numero = prompt("Por favor, ingresa el segundo número:");
segundo_numero = Number(segundo_numero);
let tercer_numero = prompt("Por favor, ingresa el tercer número:");
tercer_numero = Number(tercer_numero);

if (primer_numero >= segundo_numero && primer_numero >= segundo_numero && segundo_numero >= tercer_numero) {
    console.log(primer_numero, segundo_numero, tercer_numero);
    console.log(tercer_numero, segundo_numero, primer_numero);
} else if (segundo_numero >= primer_numero && segundo_numero >= primer_numero && primer_numero >= tercer_numero) {
    console.log(segundo_numero, primer_numero, tercer_numero);
    console.log(tercer_numero, primer_numero, segundo_numero);
} else if (tercer_numero >= primer_numero && tercer_numero >= segundo_numero && primer_numero >= segundo_numero ) {
    console.log(tercer_numero, primer_numero, segundo_numero);
    console.log(segundo_numero, primer_numero, tercer_numero);
} else {
    console.log(tercer_numero, segundo_numero, primer_numero);
    console.log(primer_numero, segundo_numero, tercer_numero);
}

if (primer_numero == segundo_numero || primer_numero == tercer_numero || segundo_numero == tercer_numero) {
    console.log("Algunos numero ingresados son iguales"); 
}