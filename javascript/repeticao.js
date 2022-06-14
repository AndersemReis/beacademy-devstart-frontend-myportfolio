//for

/*for (let i = 10; i>=1; i--){
    console.log(i)
}*/

/*for (let i = 1; i<=10; i++){
    if(i === 5){
        //break
        continue
    }
    console.log(i)
}

//while

let interator = 1

while (interator <= 20 ){
    console.log(interator)
    interator++
}*/



//for of

let number = ['Maria','Pedro','Joao','Jenifer','Luan']

for (num of number){
    console.log(num)
}

let animals = {
    name: "Leao",
    wieght: 200,
    age: 4
}

for (item in animals){
    console.log(animals[item])
}

let arrayName = [
    'Jenifer',
    'Luan',
    'Regis',
    'Moacir'
]

for (item in arrayName){
    console.log(arrayName[item])
}
