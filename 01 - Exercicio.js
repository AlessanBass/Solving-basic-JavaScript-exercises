/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
   multiplicação e divisão desses valores.
 */

const calculadora = function (a = 1, b =1){
    console.log(`Soma: ${a+b}`)
    console.log(`Subtração: ${a-b}`)
    console.log(`Multiplicação: ${a*b}`)
    console.log(`Divisão: ${a/b}`)
}

calculadora(10,2)