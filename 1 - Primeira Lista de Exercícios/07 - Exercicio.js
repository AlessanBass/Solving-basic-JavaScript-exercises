/**
 * Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

 */

function Bhaskara (a, b,c ){
    let delta = Math.pow(b,2) - 4 * a * (c)
    console.log(delta)
    if (delta <0){
        return 'Delta é negativo'
    }
    let x1 = (-b + Math.sqrt(delta)) / (2*a)
    let x2 = (-b - Math.sqrt(delta)) / (2*a)
    /*console.log(`>>>Valores das raízes<<<<`)
    console.log(`X1 = ${x1.toFixed(2)} e X2 = ${x2.toFixed(2)}`)*/
    let vetor = []
    return vetor = [x1,x2]
        
}
console.log(Bhaskara(2,9,7))
console.log(Bhaskara(1,-2,1))