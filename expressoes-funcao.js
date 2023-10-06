// declaraçaõ de função
// Pode chamar esta função nas linhas anteriores
function minhaFuncao(param) {
    console.log(`Olá ${param}`);
}

minhaFuncao('Abimael');

// expressão de função - prefira tudo em uma linha só - são funções anômimas (não tem nome)
// precisa ser criada a variável primeiro antes de usar, ou seja, não pode chamar esta variável nas linhas anteriores.
// Sempre use const.
const soma = function(num1, num2) { return num1 + num2;}

console.log(soma(1,2));


