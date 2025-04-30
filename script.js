// Questão 1

var tarefaConcluida = false;

if (tarefaConcluida === true) {
  console.log("A tarefa está concluída!");
} else {
  console.log("A tarefa não foi concluída.");
}

// [OK]

// Questão 2

var prioridade = 2;

if (prioridade === 1) {
  console.log("Prioridade Baixa");
} else if (prioridade === 2) {
  console.log("Prioridade Média");
} else if (prioridade === 3) {
  console.log("Prioridade Alta");
} else {
  console.log("Nenhuma Prioridade");
}

// [OK]

// Questão 3

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

// [OK]

// Questão 4

for (var i = 0; i <= 9; i++) {
  console.log(i);
}

// [OK]

// Questão 5

var i = 1;
var total = 0;

while (i <= 5) {
  total += i;
  i++;
}

console.log("A soma dos números de 1 a 5 é igual a:", total);

// [OK]

// Questão 6

var i = 3;

do {
  i--;
} while (i >= 1);

console.log("FIM");

// Comentário: O valor 3 não é exibido antes do decremento.
// Implementação correta:
// var j = 3;
// do {
//   console.log(j);
//   j--;
// } while (j >= 1);
// console.log("FIM");

// [Parcialmente correto]

// Questão 7

let idade = 70;

function verificarIdade(idade) {
  if (idade < 18) {
    console.log("Menor de idade");
  } else if (idade >= 18 && idade < 60) {
    console.log("Maior de idade");
  } else if (idade >= 60) {
    console.log("Idoso");
  }
}

verificarIdade(idade);

// [OK]

// Questão 8

let temSenhaCorreta = true;
let temBiometriaAutenticada = false;
let acessoPermitido = true;

if (temSenhaCorreta || temBiometriaAutenticada == true) {
  console.log(acessoPermitido);
} else {
  console.log(!acessoPermitido);
}

// Comentário: A variável `acessoPermitido` deveria depender da condição,
// mas foi definida como `true` diretamente. A lógica funciona, mas não está correta.
// Implementação ideal:
// let acesso = temSenhaCorreta || temBiometriaAutenticada;
// console.log("Acesso permitido?", acesso);
// console.log("Acesso negado?", !acesso);

// [Parcialmente correto]

// Questão 9

let tarefas = "Trabalho,Academia,Estudar,Bar,Dormir";
let tarefasArray = tarefas.split(",");
let tarefasFormatadas = tarefasArray.join(" | ");
let contemEstudar = tarefasArray.includes("Estudar");

console.log("Array de tarefas:", tarefasArray);
console.log("Tarefas formatadas:", tarefasFormatadas);
console.log("Contém 'Estudar'?", contemEstudar);

// [OK]

// Questão 10

function calcularAreaAleatoria() {
  const raio = Math.random() * (15 - 5) + 5;
  const area = Math.PI * Math.pow(raio, 2);

  console.log(`Raio: ${raio}`);
  console.log(`Área do círculo: ${area.toFixed(2)}`);
}

calcularAreaAleatoria();

// Comentário: A função está correta, mas o valor do raio deveria ser um número inteiro.
// Implementação ideal:
// function calcularAreaCorreta() {
//   const raio = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
//   const area = Math.PI * Math.pow(raio, 2);
//   console.log(`Raio inteiro: ${raio}`);
//   console.log(`Área correta: ${area.toFixed(2)}`);
// }

// calcularAreaCorreta();

// [Parcialmente correto]
