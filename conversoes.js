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
