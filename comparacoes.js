const numero = 5;
const texto = '5';

// == (comparação implicita) - converte numero para string e faz a comparação dos valores
console.log(numero == texto);

// === (comparação explicita) - Compara valores e tipo de dado
console.log(numero === texto);

// typeof(var) qual o tipo de dado sendo salvo na variável
console.log(typeof(numero));
console.log(typeof(texto));

// == só compara o valor
// === compara o valor e o tipo de dado

// Conversão explicita deve ser feita com:
// Number()
// String()