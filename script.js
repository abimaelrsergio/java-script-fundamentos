// var - funciona em qualquer parte do código. Mas pode-se usar a variável antes de declarar

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;*/

// let
/*let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
let test;
console.log(test)*/

// const
let area;
const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area);