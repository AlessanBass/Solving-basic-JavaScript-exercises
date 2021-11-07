/**
 * Faça um algoritmo que calcule o fatorial de um número
 * 
 */

function fatorial (valor){
    if (valor == 0){
        return 1
    } else return valor * fatorial(valor -1)
}

console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(4))
console.log(fatorial(7))
