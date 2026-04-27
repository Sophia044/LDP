// Questão 48 — Calculadora básica com verificação de divisão por zero
let num1 = 10, num2 = 0, operacao = "/";
if (operacao === "+") {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operacao === "-") {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operacao === "*") {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
} else if (operacao === "/") {
  if (num2 === 0) {
    console.log("Erro: divisão por zero não é permitida.");
  } else {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  }
} else {
  console.log("Operação inválida.");
}