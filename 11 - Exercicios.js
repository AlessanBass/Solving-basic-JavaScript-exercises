/**
 *  As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que receebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.

 */

function verificaAno (ano){
    if (ano % 4 != 0){
        return false
    } else if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0){
        return true
    } else if (ano % 4 == 0 && ano % 100 == 0 ){
        if (ano % 400 == 0){
            return true
        } else { 
            return false
        }
        
    } else return true

}

console.log(verificaAno(1992))
console.log(verificaAno(1108))
console.log(verificaAno(1900))
console.log(verificaAno(2025))
console.log(verificaAno(2020))