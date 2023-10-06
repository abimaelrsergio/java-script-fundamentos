// tipo de dado
// booleanos

const numero = 456;
const numeroString = "456";

// Conversão implicita

console.log(numero === numeroString); // compara tipo e valor
console.log(numero == numeroString);// compara o valor (converteu os dois em string para comparar)
console.log(numero + numeroString); // transformou os dois em string e concatenou

// Conversão explícita
   // usar Number() para transformar string em numero
   // user String() para transformar numero em string
console.log(numero + Number(numeroString));   

const nome = "Abimael21";
console.log(Number(nome)); // vai dar que não é um número NaN - not a number

// converter strings para números, colocando o sinal de + antes da variável
let largura = "10";
let altura = "5";
console.log(+largura * +altura);

let conectado = true;
console.log(Number(conectado));
conectado = false;
console.log(Number(conectado));