// Questão 50 — Conta de energia com bandeiras tarifárias
let consumo = 150; // em kWh
let tarifa, bandeira;
if (consumo <= 100) {
  tarifa = 0.50;
  bandeira = "Verde";
} else if (consumo <= 200) {
  tarifa = 0.65;
  bandeira = "Amarela";
} else {
  tarifa = 0.85;
  bandeira = "Vermelha";
}
let valorConta = consumo * tarifa;
console.log(`Consumo: ${consumo} kWh — Bandeira: ${bandeira} (R$${tarifa.toFixed(2)}/kWh) — Valor total a pagar: R$${valorConta.toFixed(2)}.`);