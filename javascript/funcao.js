/*function myFirtsFunction(){
	
	console.log("olha a função")

}

myFirtsFunction()

//função com parâmetros e arqumentos
function sum(number1, number2){
	
	console.log(number1 + number2)
}

sum(32,24)

//função com retorno

function myFirtsFunctionWithReturn(num1, num2){
	let total = num1 + num2
	return total
}

console.log(myFirtsFunctionWithReturn(20, 20))

function meuPratoDeComida(comida1, comida1, comida3, comida4){
	return ` Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`
}

const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata frita')

console.log(prato)

const myFirtsFunction = (number1, number2) =>{
	let total = number1 + number2
	return total
}

const result = myFirtsFunction(20, 20)

console.log(result)

(function(){
	console.log('Paylivre S2')
})()

setTimeout(function(){
	console.log('Vou levar 3 segundos para executar')
},3000)*/

/*let assunto

function criarAssunto(assunto){
	return assunto
}

console.log(criarAssunto());*/

/*let assunto = 'Estudar'

function criarAssunto(assunto){
	return assunto
}
console.log(assunto);
console.log(criarAssunto(assunto));*/


/*let assunto = 'Estudar'

function criarAssunto(assunto){
	assunto = 'Escutar música'
	return assunto
}
console.log(assunto);
console.log(criarAssunto(assunto));*/

/*let assunto = 'Estudar'

function criarAssunto(){
	assunto = 'Escutar música'
	return assunto
}
console.log(assunto);
console.log(criarAssunto(assunto));*/


/*digaMinhaIdade()

function digaMinhaIdade(){
	return console.log(30)
}*/

/*function minhaFuncao(callback){
	console.log('Inicio da minha funçao')

	callback(15, 15)
	console.log('Final da minha funçao')
}

// funçao callback
minhaFuncao(
	(num1, num2) => {
		return console.log(num1 + num2)
	}
)*/

function Sum (){
	this.num1,
	this.num2,
	this.calc = function (num1, num2) {
		return total = num1 + num2
	}
}

/*const math = new Sum()
const num1 = math.num1 = 24
const num2 = math.num2 = 50

console.log(num1)
console.log(num2)
console.log(math.calc(num1, num2))

const math2 = new Sum()
const number1 = math2.num1 = 30
const number2 = math2.num2 = 50
console.log(math2.calc(number1, number2))*/

const math = new Sum().calc(45,45)

console.log(math)

const data = new Date().getFullYear();
console.log(data)
