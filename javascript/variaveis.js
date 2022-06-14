/*var name
let name1
const name3 = 20*/
/*var name

console.log('Variavel name existe aqui', name)

{
    name = "Luan"
}

console.log('Variavel name existe aqui', name)*/

/*let name = "Luan"

console.log("Meu nome chegou aqui como", name)

{
    let name = "Jennifer"
    console.log("Meu nome chegou aqui", name)
}

console.log("Meu nome chegou aqui", name)*/

// aula de array

const human = {
    name: "Luan Monteiro",
    age: 30,
    weigth: 90,
    isAthlete: true,
    walk: function walking() {
        console.log('Eu ando bastante')
    }

}
/*
console.log(human.name)
console.log(human.age)
console.log(human.walk())*/

console.log("O Humano " + human.name + " tem a idade de " + human.age)
console.log(`O humano ${human.name} tem a idade de ${human.age}`)


const animais = [
    "Elefante",
    "Gato",
    "Leao",
    "Cachorro",

    {
        name: "Moacir",
        age: 30,
        weight:4
    }
]

console.log(animais[3])
console.log(animais[4].name)