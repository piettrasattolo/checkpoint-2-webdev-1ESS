//Questão 1

//var tarefaConcluida = false;
//
//if (tarefaConcluida === true) {
//  console.log("A tarefa está concluída!");
//
//} else {
//  console.log("A tarefa não foi concluída.");
//}

//------------------------------

//Questão 2

//var prioridade = 2;
//
//if (prioridade === 1) {
//  console.log("Prioridade Baixa");
//
//} else if (prioridade === 2) {
//  console.log("Prioridade Média");
//
//} else if (prioridade === 3) {
//  console.log("Prioridade Alta");
//
//} else {
//  console.log("Nenhuma Prioridade");
//}

//------------------------------

//Questão 3

//let diaSemana = new Date("04-20-2025").getDay();
//
//console.log(diaSemana);
//
//switch (diaSemana) {
//  case 0:
//    console.log("Domingo");
//    break;
//
//  case 1:
//    console.log("Segunda-feira");
//    break;
//
//  case 2:
//    console.log("Terça-feira");
//    break;
//
//  case 3:
//    console.log("Quarta-feira");
//    break;
//
//  case 4:
//    console.log("Quinta-feira");
//    break;
//
//  case 5:
//    console.log("Sexta-feira");
//    break;
//
//  case 6:
//    console.log("Sábado");
//    break;
//
//  default:
//    console.log("Dia Inválido");
//    break;
//}

//------------------------------

//Questão 4

//for (var i = 0; i <= 9; i++){
//    console.log(i)
//}

//------------------------------

//Questão 5

//var i = 1;
//var total = 0;

//while (i <= 5) {
//total += i;
//i++;
//}

//console.log("A soma dos números de 1 a 5 é igual a:", total);

//Questão 6

//var i = 3;

//do {
// i--;
//} while (i >= 1)

//console.log("FIM");

//------------------------------

//Questão 7

//let idade = 70

//function verificarIdade (idade) {
//if (idade < 18) {
//  console.log ("Menor de idade")
//}
// else if (idade >= 18 && idade < 60) {
//console.log ("Maior de idade")
//}
// else if (idade >= 60) {
//console.log ("Idoso")
//}
//}
//
//verificarIdade (idade)

//------------------------------

//Questão 8

//let temSenhaCorreta = true
//let temBiometriaAutenticada = false
//let acessoPermitido = true
//
//if (temSenhaCorreta || temBiometriaAutenticada == true) {
//  console.log(acessoPermitido)
//}
//else {
//  console.log(!acessoPermitido)
//}

//------------------------------

//Questão 9

let tarefas = "Trabalho,Academia,Estudar,Bar,Dormir"
let tarefasArray = tarefas.split(",")
let tarefasFormatadas = tarefasArray.join(" | ")
let contemEstudar = tarefasArray.includes("Estudar");

console.log("Array de tarefas:", tarefasArray);
console.log("Tarefas formatadas:", tarefasFormatadas);
console.log("Contém 'Estudar'?", contemEstudar);

//------------------------------