const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = 'senhaSuperSegura@1334!**';
const stringDeNumeros = '123432432';

console.log(texto1);
console.log(texto2);
console.log(senha);
console.log(stringDeNumeros);

const citacao = 'O Abima disse "oi"';

console.log(citacao);

const citacao2 = "A Gigi disse 'tchau'";
console.log(citacao2);

// template string ou template literal
const templateString = `olá: ${citacao2}`;
console.log(templateString);

//concatenação (+)
const citacao3 = 'Meu nome é ';
const nome = 'Abimael';
const frase = citacao3 + nome;
console.log(frase);

const cifrao = '\u0024';
console.log(cifrao);
const aMaiusculo = '\u0041';
console.log(aMaiusculo);
const tique = '\u2705';
console.log(tique);
const hiragana = '\u3041';
console.log(hiragana);

const cidade = 'belo horizonte';
const input = 'Belo Horizonte';
const inputMinusculo = input.toLocaleLowerCase();

console.log(cidade === input);
console.log(cidade === inputMinusculo);

const senha2 = 'minhaSenha1234';
console.log(senha2.length);