function soma(numero1, numero2) {
    return numero1 + numero2;
}

let numero1 = 10;
let numero2 = 5;

console.log(soma(numero1, numero2));

function multiplicacao(numero1 = 0, numero2 = 0) {
    return numero1 * numero2;
}

console.log(multiplicacao(10,5));

console.log(multiplicacao(545));