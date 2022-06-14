// if and else

let num = 10
let num2 = 20

if (num >= 5 && num2 <=20 ) {
    console.log('verdade')
} else {
    console.log('falso')
}

if (num <= 11 || num2 <=20 ) {
    console.log('verdade')
} else {
    console.log('falso')
}

//switch

let myExpression = 'x'

switch (myExpression) {
    case 'a':
        console.log('apertou a')
        break
    case 'b':
        console.log('apertou b')
        break
    case 'c':
        console.log('pertou c')
        break
    default:
        console.log('você apertou outra tecla')
        break
}

//calculadora

function calc (num, operator, num2) {
    let result

    switch(operator){
        case "+":
            result = num + num2
            break
        case "-":
            result = num - num2
            break
        case "*":
            result = num * num2
            break
        case "/":
            result = num / num2
            break
        default:
            console.log('nao entendi')
            break
    }
    return result
}


console.log(calc(12, '/', 12))


//throw e try catch

function myAge (myage) {
    if (!myage){
        throw 'você precisa informar a idade'
    } 
    console.log('Eu continuei executando')
}

try {
    myAge(1)
    console.log('ja tratei')
    
} catch(error){
    console.log(error)
    
}