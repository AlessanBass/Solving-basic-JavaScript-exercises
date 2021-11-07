/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

 */

function jurosimples (capitalInicial, taxa, tempo){
    let juros = capitalInicial * taxa * tempo

    return capitalInicial + juros
}

console.log(`Resultado em juros simples: ${jurosimples(20000, 0.10, 2)}`)

const jurosCompostos = function (capitalInicial, taxa, tempo){
    let juros = capitalInicial * (Math.pow(1+taxa, tempo))
    return juros.toFixed(2)
}
console.log(`Resultado em juros compostos: ${jurosCompostos(10000, 0.007, 12)}`)