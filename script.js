//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

/*-------------------------------------------------------------*/

//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 19;

if (idade > 18){
    console.log("A sua idade é maior que 18")
}else{
    console.log("Sua idade é menor que 18")
};

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let MaiorDeIdade = 19;

let humano = true;

if (MaiorDeIdade > 18 && humano == true){
    console.log("Você é humano e maior de idade")
}else{
    console.log("Você não é humano e é menor de idade")
};

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


let niver = "dezembro";

if (niver == "janeiro"){
    console.log("você faz aniversári em janeiro")
}else{
    console.log("você faz aniversário em dezembro")
};

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = "P"

if (nome === "R"){
    console.log("Meu nome começa com R")
}else{
    console.log("Meu nome não começa com R")
}

