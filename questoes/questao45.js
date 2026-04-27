// Questão 45 — Classificação por idade
let idade = 15;
if (idade >= 0 && idade <= 12) {
  console.log(`Com ${idade} anos, a pessoa é uma CRIANÇA.`);
} else if (idade >= 13 && idade <= 17) {
  console.log(`Com ${idade} anos, a pessoa é um(a) ADOLESCENTE.`);
} else if (idade >= 18) {
  console.log(`Com ${idade} anos, a pessoa é um(a) ADULTO(A).`);
} else {
  console.log("Idade inválida.");
}