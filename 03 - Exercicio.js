/**
 * Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

const potencia = function (base, expoente){
    if (expoente === 0){
        return 1
    }else return base * potencia(base, expoente-1)
}

console.log(potencia(3,3))