//type conversion

//conversao de variaveis

/*console.log('9' + 24)
console.log(Number('9') + 24)
console.log(typeof String(9) + ' Converteu para string');

//contar caracteres

let oneWord = "Moacir"

console.log(oneWord.length)

//Maiúsculas e minúsculas

let phrase = "Olha o bonde da PayLivre"

console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//conversao de números
let decimalNumber = 32.4
console.log(parseInt(decimalNumber))

let niceNumber = 3.6565954
console.log(niceNumber.toFixed(2))

console.log(niceNumber.toFixed(2).replace('.',','))

let otherNumber = 129/32
console.log(Number(otherNumber.toPrecision()))*/

//manipulando string

/*let newPhrase = "Fala meus queridos e queridas"

console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

let phraseModify = phraseToArray.join(" ").toUpperCase()
console.log(phraseModify)

//verificar se existem palavras ou letras

let stringInclude = "vem ne mim PayLivre"
console.log(stringInclude.includes("PayLivre"))

//objetos
let ArrayInclude = [
    "PayLivre",
    "Vem",
    "ne mim",
    "novamente",
    {
        firstName: "Pay",
        lastName: "Livre"
    }
]

console.log(ArrayInclude.includes("novamente"))

console.log(stringInclude.startsWith("ve"))
console.log(stringInclude.endsWith("Livre"))

let wordToArray = "quem esta gostando diz oi"

console.log(Array.from(wordToArray))*/

const animals = ["elefante", "girrafa", "Leao","gaivota","cachorro"]

console.log(animals)
//adicionando no final
console.log(animals.push("barata"))
console.log(animals)

//adicionando no final
console.log(animals.unshift("porco"))
console.log(animals)

//remover do final

console.log(animals.pop())
console.log(animals)

//remover do inicio
console.log(animals.shift())
console.log(animals)

//pegar somente alguns itens
console.log(animals.slice(0,2))
console.log(animals)

//remover 1 ou mais elementos
//console.log(animals.splice(1,3))
console.log(animals)


//encontra a posiçao do array
let index = animals.indexOf("Leao")
console.log(index)

animals.splice(index,1)
console.log(animals)