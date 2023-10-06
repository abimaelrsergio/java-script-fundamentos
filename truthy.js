// boolean
const loggedUser = true;
const account = false;

// truthy or falsy
// 0 - false
// 1 - true

// dois sinais de igual (==) compara somente o valor (não compara o tipo)
console.log(0 == false);
console.log('' == false);
console.log("" == false);
console.log(1 == true);

// null
// undefined
let myVariable;
let myVarNull = null;

console.log(myVariable);
console.log(myVarNull);

let numero = 3;
let texto = 'Alura';

console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(myVariable));
console.log(typeof(myVarNull));
