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

let diaSemana = new Date("04-20-2025").getDay();

console.log(diaSemana);

switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("Segunda-feira");
    break;

  case 2:
    console.log("Terça-feira");
    break;

  case 3:
    console.log("Quarta-feira");
    break;

  case 4:
    console.log("Quinta-feira");
    break;

  case 5:
    console.log("Sexta-feira");
    break;

  case 6:
    console.log("Sábado");
    break;

  default:
    console.log("Dia Inválido");
    break;
}
