function apresentar(nome) {
    return `Olá ${nome}`;
}
console.log(apresentar('Abimael'));

// Arrow function - use com variável const, é anônima, se tiver mais de uma linha use chaves e return.
const apresentarArrow = nome => `Olá da arrow ${nome}`;
console.log(apresentarArrow('Abimael'));

const soma = (num1, num2) => num1 + num2;
console.log(soma(23,4));

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    }
    let resultado = num1 + num2;
    return resultado;
}
console.log(somaNumerosPequenos(1,5));
console.log(somaNumerosPequenos(10,45));