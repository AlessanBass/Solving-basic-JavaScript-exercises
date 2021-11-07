/**
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

 */

function verificaDia(dia){
    if (dia > 7 || dia <= 0){
        console.log('Dia inválido')
    }

    switch(dia){
        case 1:
        case 7:
        console.log('Final de semana')
        break

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia Útil') 
        break
    }
}

verificaDia(0)