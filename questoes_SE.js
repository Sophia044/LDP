// ============================================================
//   50 QUESTÕES — ESTRUTURA SE (if/else) — JavaScript
// ============================================================

// ────────────────────────────────────────────────────────────
//  NÍVEL FÁCIL
// ────────────────────────────────────────────────────────────

// Questão 1 — Número positivo
console.log("=== Questão 1 ===");
let numero1 = 8;
if (numero1 > 0) {
  console.log(`O número ${numero1} é positivo.`);
}

// Questão 2 — Número negativo
console.log("=== Questão 2 ===");
let numero2 = -3;
if (numero2 < 0) {
  console.log(`O número ${numero2} é negativo.`);
}

// Questão 3 — Número zero
console.log("=== Questão 3 ===");
let numero3 = 0;
if (numero3 === 0) {
  console.log(`O número ${numero3} é zero.`);
}

// Questão 4 — Maior de idade
console.log("=== Questão 4 ===");
let idade4 = 20;
if (idade4 >= 18) {
  console.log(`Com ${idade4} anos, a pessoa é maior de idade.`);
} else {
  console.log(`Com ${idade4} anos, a pessoa é menor de idade.`);
}

// Questão 5 — Número par
console.log("=== Questão 5 ===");
let numero5 = 14;
if (numero5 % 2 === 0) {
  console.log(`O número ${numero5} é par.`);
} else {
  console.log(`O número ${numero5} não é par.`);
}

// Questão 6 — Número ímpar
console.log("=== Questão 6 ===");
let numero6 = 7;
if (numero6 % 2 !== 0) {
  console.log(`O número ${numero6} é ímpar.`);
} else {
  console.log(`O número ${numero6} não é ímpar.`);
}

// Questão 7 — Maior entre dois números
console.log("=== Questão 7 ===");
let a7 = 15, b7 = 9;
if (a7 > b7) {
  console.log(`O maior número é ${a7}.`);
} else if (b7 > a7) {
  console.log(`O maior número é ${b7}.`);
} else {
  console.log(`Os dois números são iguais.`);
}

// Questão 8 — Menor entre dois números
console.log("=== Questão 8 ===");
let a8 = 15, b8 = 9;
if (a8 < b8) {
  console.log(`O menor número é ${a8}.`);
} else if (b8 < a8) {
  console.log(`O menor número é ${b8}.`);
} else {
  console.log(`Os dois números são iguais.`);
}

// Questão 9 — Maior que 10
console.log("=== Questão 9 ===");
let numero9 = 12;
if (numero9 > 10) {
  console.log(`O número ${numero9} é maior que 10.`);
} else {
  console.log(`O número ${numero9} não é maior que 10.`);
}

// Questão 10 — Entre 0 e 100
console.log("=== Questão 10 ===");
let numero10 = 55;
if (numero10 >= 0 && numero10 <= 100) {
  console.log(`O número ${numero10} está entre 0 e 100.`);
} else {
  console.log(`O número ${numero10} está fora do intervalo entre 0 e 100.`);
}

// ────────────────────────────────────────────────────────────
//  NÍVEL BÁSICO INTERMEDIÁRIO
// ────────────────────────────────────────────────────────────

// Questão 11 — Pode votar?
console.log("=== Questão 11 ===");
let idade11 = 17;
if (idade11 >= 16) {
  console.log(`Com ${idade11} anos, a pessoa pode votar.`);
} else {
  console.log(`Com ${idade11} anos, a pessoa não pode votar.`);
}

// Questão 12 — Voto obrigatório
console.log("=== Questão 12 ===");
let idade12 = 25;
if (idade12 >= 18 && idade12 <= 70) {
  console.log(`Com ${idade12} anos, o voto é obrigatório.`);
} else {
  console.log(`Com ${idade12} anos, o voto não é obrigatório.`);
}

// Questão 13 — Múltiplo de 5
console.log("=== Questão 13 ===");
let numero13 = 25;
if (numero13 % 5 === 0) {
  console.log(`O número ${numero13} é múltiplo de 5.`);
} else {
  console.log(`O número ${numero13} não é múltiplo de 5.`);
}

// Questão 14 — Dois números iguais
console.log("=== Questão 14 ===");
let a14 = 10, b14 = 10;
if (a14 === b14) {
  console.log(`Os números ${a14} e ${b14} são iguais.`);
} else {
  console.log(`Os números ${a14} e ${b14} são diferentes.`);
}

// Questão 15 — Maior entre três números
console.log("=== Questão 15 ===");
let a15 = 8, b15 = 15, c15 = 11;
if (a15 >= b15 && a15 >= c15) {
  console.log(`O maior número é ${a15}.`);
} else if (b15 >= a15 && b15 >= c15) {
  console.log(`O maior número é ${b15}.`);
} else {
  console.log(`O maior número é ${c15}.`);
}

// Questão 16 — Menor entre três números
console.log("=== Questão 16 ===");
let a16 = 8, b16 = 15, c16 = 11;
if (a16 <= b16 && a16 <= c16) {
  console.log(`O menor número é ${a16}.`);
} else if (b16 <= a16 && b16 <= c16) {
  console.log(`O menor número é ${b16}.`);
} else {
  console.log(`O menor número é ${c16}.`);
}

// Questão 17 — Entre 10 e 50
console.log("=== Questão 17 ===");
let numero17 = 30;
if (numero17 >= 10 && numero17 <= 50) {
  console.log(`O número ${numero17} está entre 10 e 50.`);
} else {
  console.log(`O número ${numero17} está fora do intervalo entre 10 e 50.`);
}

// Questão 18 — Está frio?
console.log("=== Questão 18 ===");
let temperatura18 = 15;
if (temperatura18 < 20) {
  console.log(`Com ${temperatura18}°C, está frio.`);
} else {
  console.log(`Com ${temperatura18}°C, não está frio.`);
}

// Questão 19 — Está quente?
console.log("=== Questão 19 ===");
let temperatura19 = 35;
if (temperatura19 > 30) {
  console.log(`Com ${temperatura19}°C, está quente.`);
} else {
  console.log(`Com ${temperatura19}°C, não está quente.`);
}

// Questão 20 — Divisível por 2 e por 3
console.log("=== Questão 20 ===");
let numero20 = 12;
if (numero20 % 2 === 0 && numero20 % 3 === 0) {
  console.log(`O número ${numero20} é divisível por 2 e por 3.`);
} else {
  console.log(`O número ${numero20} não é divisível por 2 e por 3 ao mesmo tempo.`);
}

// ────────────────────────────────────────────────────────────
//  NÍVEL MÉDIO
// ────────────────────────────────────────────────────────────

// Questão 21 — Positivo, negativo ou zero
console.log("=== Questão 21 ===");
let numero21 = -5;
if (numero21 > 0) {
  console.log(`O número ${numero21} é positivo.`);
} else if (numero21 < 0) {
  console.log(`O número ${numero21} é negativo.`);
} else {
  console.log(`O número ${numero21} é zero.`);
}

// Questão 22 — Qual é maior ou se são iguais
console.log("=== Questão 22 ===");
let a22 = 18, b22 = 22;
if (a22 > b22) {
  console.log(`O número ${a22} é maior que ${b22}.`);
} else if (b22 > a22) {
  console.log(`O número ${b22} é maior que ${a22}.`);
} else {
  console.log(`Os números ${a22} e ${b22} são iguais.`);
}

// Questão 23 — Aprovado?
console.log("=== Questão 23 ===");
let nota23 = 8.5;
if (nota23 >= 7) {
  console.log(`Nota ${nota23}: Aluno APROVADO.`);
} else {
  console.log(`Nota ${nota23}: Aluno não aprovado.`);
}

// Questão 24 — Em recuperação?
console.log("=== Questão 24 ===");
let nota24 = 6.0;
if (nota24 >= 5 && nota24 <= 6.9) {
  console.log(`Nota ${nota24}: Aluno em RECUPERAÇÃO.`);
} else {
  console.log(`Nota ${nota24}: Aluno não está em recuperação.`);
}

// Questão 25 — Reprovado?
console.log("=== Questão 25 ===");
let nota25 = 3.5;
if (nota25 < 5) {
  console.log(`Nota ${nota25}: Aluno REPROVADO.`);
} else {
  console.log(`Nota ${nota25}: Aluno não foi reprovado.`);
}

// Questão 26 — Fora do intervalo de 10 a 20
console.log("=== Questão 26 ===");
let numero26 = 25;
if (numero26 < 10 || numero26 > 20) {
  console.log(`O número ${numero26} está FORA do intervalo de 10 a 20.`);
} else {
  console.log(`O número ${numero26} está dentro do intervalo de 10 a 20.`);
}

// Questão 27 — Deve pagar imposto?
console.log("=== Questão 27 ===");
let salario27 = 2500;
if (salario27 > 2000) {
  console.log(`Salário R$${salario27.toFixed(2)}: deve pagar imposto.`);
} else {
  console.log(`Salário R$${salario27.toFixed(2)}: isento de imposto.`);
}

// Questão 28 — Par e maior que 10
console.log("=== Questão 28 ===");
let numero28 = 16;
if (numero28 % 2 === 0 && numero28 > 10) {
  console.log(`O número ${numero28} é par e maior que 10.`);
} else {
  console.log(`O número ${numero28} NÃO é par e maior que 10 ao mesmo tempo.`);
}

// Questão 29 — Mensagem pelo sexo
console.log("=== Questão 29 ===");
let sexo29 = "F";
if (sexo29 === "M" || sexo29 === "m") {
  console.log("Seja bem-vindo, senhor!");
} else if (sexo29 === "F" || sexo29 === "f") {
  console.log("Seja bem-vinda, senhora!");
} else {
  console.log("Sexo não reconhecido.");
}

// Questão 30 — Múltiplo de 3 ou de 7
console.log("=== Questão 30 ===");
let numero30 = 21;
if (numero30 % 3 === 0 || numero30 % 7 === 0) {
  console.log(`O número ${numero30} é múltiplo de 3 ou de 7.`);
} else {
  console.log(`O número ${numero30} não é múltiplo de 3 nem de 7.`);
}

// ────────────────────────────────────────────────────────────
//  NÍVEL MÉDIO AVANÇADO
// ────────────────────────────────────────────────────────────

// Questão 31 — Forma triângulo?
console.log("=== Questão 31 ===");
let la31 = 3, lb31 = 4, lc31 = 5;
if (la31 + lb31 > lc31 && la31 + lc31 > lb31 && lb31 + lc31 > la31) {
  console.log(`Os lados ${la31}, ${lb31} e ${lc31} FORMAM um triângulo.`);
} else {
  console.log(`Os lados ${la31}, ${lb31} e ${lc31} NÃO formam um triângulo.`);
}

// Questão 32 — Triângulo equilátero
console.log("=== Questão 32 ===");
let la32 = 5, lb32 = 5, lc32 = 5;
if (la32 === lb32 && lb32 === lc32) {
  console.log(`Triângulo com lados ${la32}, ${lb32} e ${lc32}: EQUILÁTERO.`);
} else {
  console.log(`Triângulo com lados ${la32}, ${lb32} e ${lc32}: não é equilátero.`);
}

// Questão 33 — Triângulo isósceles
console.log("=== Questão 33 ===");
let la33 = 5, lb33 = 5, lc33 = 8;
if (la33 === lb33 || la33 === lc33 || lb33 === lc33) {
  console.log(`Triângulo com lados ${la33}, ${lb33} e ${lc33}: ISÓSCELES.`);
} else {
  console.log(`Triângulo com lados ${la33}, ${lb33} e ${lc33}: não é isósceles.`);
}

// Questão 34 — Triângulo escaleno
console.log("=== Questão 34 ===");
let la34 = 3, lb34 = 4, lc34 = 5;
if (la34 !== lb34 && la34 !== lc34 && lb34 !== lc34) {
  console.log(`Triângulo com lados ${la34}, ${lb34} e ${lc34}: ESCALENO.`);
} else {
  console.log(`Triângulo com lados ${la34}, ${lb34} e ${lc34}: não é escaleno.`);
}

// Questão 35 — Ano bissexto
console.log("=== Questão 35 ===");
let ano35 = 2024;
if ((ano35 % 4 === 0 && ano35 % 100 !== 0) || ano35 % 400 === 0) {
  console.log(`O ano ${ano35} É bissexto.`);
} else {
  console.log(`O ano ${ano35} NÃO é bissexto.`);
}

// Questão 36 — Desconto de 10% em compras acima de R$100
console.log("=== Questão 36 ===");
let compra36 = 150;
if (compra36 > 100) {
  let desconto36 = compra36 * 0.10;
  let valorFinal36 = compra36 - desconto36;
  console.log(`Compra de R$${compra36.toFixed(2)} — Desconto de 10%: -R$${desconto36.toFixed(2)} — Valor final: R$${valorFinal36.toFixed(2)}.`);
} else {
  console.log(`Compra de R$${compra36.toFixed(2)} — Sem desconto. Valor final: R$${compra36.toFixed(2)}.`);
}

// Questão 37 — Multa por velocidade
console.log("=== Questão 37 ===");
let velocidade37 = 95;
if (velocidade37 > 80) {
  console.log(`Velocidade de ${velocidade37} km/h: MULTA aplicada! Limite é 80 km/h.`);
} else {
  console.log(`Velocidade de ${velocidade37} km/h: dentro do limite. Sem multa.`);
}

// Questão 38 — Peso acima do ideal
console.log("=== Questão 38 ===");
let peso38 = 85;
if (peso38 > 80) {
  console.log(`Peso de ${peso38} kg: acima do peso ideal (80 kg).`);
} else {
  console.log(`Peso de ${peso38} kg: dentro ou abaixo do peso ideal.`);
}

// Questão 39 — Altura abaixo de 1,60 m
console.log("=== Questão 39 ===");
let altura39 = 1.55;
if (altura39 < 1.60) {
  console.log(`Altura de ${altura39.toFixed(2)} m: abaixo de 1,60 m.`);
} else {
  console.log(`Altura de ${altura39.toFixed(2)} m: igual ou acima de 1,60 m.`);
}

// Questão 40 — Validação de login e senha
console.log("=== Questão 40 ===");
let login40 = "admin";
let senha40 = "1234";
if (login40 === "admin" && senha40 === "1234") {
  console.log("Acesso PERMITIDO! Bem-vindo, admin.");
} else {
  console.log("Acesso NEGADO! Login ou senha incorretos.");
}

// ────────────────────────────────────────────────────────────
//  NÍVEL DESAFIADOR
// ────────────────────────────────────────────────────────────

// Questão 41 — Três números em ordem crescente (apenas if/else)
console.log("=== Questão 41 ===");
let a41 = 15, b41 = 7, c41 = 11;
let x41, y41, z41;
if (a41 <= b41 && a41 <= c41) {
  x41 = a41;
  if (b41 <= c41) { y41 = b41; z41 = c41; }
  else             { y41 = c41; z41 = b41; }
} else if (b41 <= a41 && b41 <= c41) {
  x41 = b41;
  if (a41 <= c41) { y41 = a41; z41 = c41; }
  else             { y41 = c41; z41 = a41; }
} else {
  x41 = c41;
  if (a41 <= b41) { y41 = a41; z41 = b41; }
  else             { y41 = b41; z41 = a41; }
}
console.log(`Ordem crescente: ${x41}, ${y41}, ${z41}.`);

// Questão 42 — Maior e menor entre três números
console.log("=== Questão 42 ===");
let a42 = 20, b42 = 5, c42 = 13;
let maior42, menor42;
if (a42 >= b42 && a42 >= c42) { maior42 = a42; }
else if (b42 >= a42 && b42 >= c42) { maior42 = b42; }
else { maior42 = c42; }

if (a42 <= b42 && a42 <= c42) { menor42 = a42; }
else if (b42 <= a42 && b42 <= c42) { menor42 = b42; }
else { menor42 = c42; }

console.log(`Entre ${a42}, ${b42} e ${c42} — Maior: ${maior42} | Menor: ${menor42}.`);

// Questão 43 — Número primo
console.log("=== Questão 43 ===");
let numero43 = 17;
let ehPrimo43 = true;
if (numero43 < 2) {
  ehPrimo43 = false;
} else if (numero43 === 2) {
  ehPrimo43 = true;
} else if (numero43 % 2 === 0) {
  ehPrimo43 = false;
} else if (numero43 % 3 === 0) {
  ehPrimo43 = false;
} else if (numero43 % 5 === 0) {
  ehPrimo43 = false;
} else if (numero43 % 7 === 0) {
  ehPrimo43 = false;
} else if (numero43 % 11 === 0) {
  ehPrimo43 = false;
} else if (numero43 % 13 === 0) {
  ehPrimo43 = false;
}
// Nota: esta verificação cobre primos até ~196. Para valores maiores, use um laço.

if (ehPrimo43) {
  console.log(`O número ${numero43} É primo.`);
} else {
  console.log(`O número ${numero43} NÃO é primo.`);
}

// Questão 44 — Desconto progressivo
console.log("=== Questão 44 ===");
let valor44 = 350;
let desconto44 = 0;
if (valor44 <= 100) {
  desconto44 = 0;
} else if (valor44 <= 300) {
  desconto44 = valor44 * 0.05;
} else if (valor44 <= 500) {
  desconto44 = valor44 * 0.10;
} else {
  desconto44 = valor44 * 0.20;
}
let valorFinal44 = valor44 - desconto44;
console.log(`Valor original: R$${valor44.toFixed(2)} — Desconto: R$${desconto44.toFixed(2)} — Valor final: R$${valorFinal44.toFixed(2)}.`);

// Questão 45 — Classificação por idade
console.log("=== Questão 45 ===");
let idade45 = 15;
if (idade45 >= 0 && idade45 <= 12) {
  console.log(`Com ${idade45} anos, a pessoa é uma CRIANÇA.`);
} else if (idade45 >= 13 && idade45 <= 17) {
  console.log(`Com ${idade45} anos, a pessoa é um(a) ADOLESCENTE.`);
} else if (idade45 >= 18) {
  console.log(`Com ${idade45} anos, a pessoa é um(a) ADULTO(A).`);
} else {
  console.log("Idade inválida.");
}

// Questão 46 — Período do dia
console.log("=== Questão 46 ===");
let hora46 = 14;
if (hora46 >= 6 && hora46 <= 11) {
  console.log(`Às ${hora46}h é MANHÃ.`);
} else if (hora46 >= 12 && hora46 <= 17) {
  console.log(`Às ${hora46}h é TARDE.`);
} else if ((hora46 >= 18 && hora46 <= 23) || (hora46 >= 0 && hora46 <= 5)) {
  console.log(`Às ${hora46}h é NOITE.`);
} else {
  console.log("Hora inválida.");
}

// Questão 47 — Classificação por intervalo
console.log("=== Questão 47 ===");
let numero47 = 75;
if (numero47 < 0) {
  console.log(`O número ${numero47} é MENOR QUE 0.`);
} else if (numero47 >= 0 && numero47 <= 10) {
  console.log(`O número ${numero47} está ENTRE 0 e 10.`);
} else if (numero47 >= 11 && numero47 <= 50) {
  console.log(`O número ${numero47} está ENTRE 11 e 50.`);
} else if (numero47 >= 51 && numero47 <= 100) {
  console.log(`O número ${numero47} está ENTRE 51 e 100.`);
} else {
  console.log(`O número ${numero47} é MAIOR QUE 100.`);
}

// Questão 48 — Calculadora básica com verificação de divisão por zero
console.log("=== Questão 48 ===");
let num1_48 = 10, num2_48 = 0, operacao48 = "/";
if (operacao48 === "+") {
  console.log(`${num1_48} + ${num2_48} = ${num1_48 + num2_48}`);
} else if (operacao48 === "-") {
  console.log(`${num1_48} - ${num2_48} = ${num1_48 - num2_48}`);
} else if (operacao48 === "*") {
  console.log(`${num1_48} * ${num2_48} = ${num1_48 * num2_48}`);
} else if (operacao48 === "/") {
  if (num2_48 === 0) {
    console.log("Erro: divisão por zero não é permitida.");
  } else {
    console.log(`${num1_48} / ${num2_48} = ${num1_48 / num2_48}`);
  }
} else {
  console.log("Operação inválida.");
}

// Questão 49 — Cálculo de aumento salarial
console.log("=== Questão 49 ===");
let salario49 = 1500;
let aumento49 = 0;
if (salario49 <= 1000) {
  aumento49 = salario49 * 0.20;
} else if (salario49 <= 3000) {
  aumento49 = salario49 * 0.15;
} else {
  aumento49 = salario49 * 0.10;
}
let novoSalario49 = salario49 + aumento49;
console.log(`Salário atual: R$${salario49.toFixed(2)} — Aumento: R$${aumento49.toFixed(2)} — Novo salário: R$${novoSalario49.toFixed(2)}.`);

// Questão 50 — Conta de energia com bandeiras tarifárias
console.log("=== Questão 50 ===");
let consumo50 = 150; // em kWh
let tarifa50, bandeira50;
if (consumo50 <= 100) {
  tarifa50 = 0.50;
  bandeira50 = "Verde";
} else if (consumo50 <= 200) {
  tarifa50 = 0.65;
  bandeira50 = "Amarela";
} else {
  tarifa50 = 0.85;
  bandeira50 = "Vermelha";
}
let valorConta50 = consumo50 * tarifa50;
console.log(`Consumo: ${consumo50} kWh — Bandeira: ${bandeira50} (R$${tarifa50.toFixed(2)}/kWh) — Valor total a pagar: R$${valorConta50.toFixed(2)}.`);
