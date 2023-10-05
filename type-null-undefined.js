let input = null;
let input2;

console.log(input); //null
console.log(input2); //unndefined

// Obs.: undefined também é o valor retornado por uma função que não tem cláusula return.

// É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, 
//os operadores de comparação do JavaScript podem ou não diferenciá-los:
console.log(null == undefined); // true
console.log(null === undefined); // false