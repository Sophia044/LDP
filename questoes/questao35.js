// Questão 35 — Ano bissexto
let ano = 2024;
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`O ano ${ano} É bissexto.`);
} else {
  console.log(`O ano ${ano} NÃO é bissexto.`);
}