/**
 Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

 */

const verificaTrinagulo  = function (a,b,c){
    if (a === b && a === c && b === c){
        return 'Equilátero'
    } else if (a === b || b == c || a === c){
        return 'Isósceles'
    } else{
        return 'Escaleno'
    }
}

console.log(verificaTrinagulo(3,1,2))