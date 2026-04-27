// Questão 44 — Desconto progressivo
let valor = 350;
let desconto = 0;
if (valor <= 100) {
  desconto = 0;
} else if (valor <= 300) {
  desconto = valor * 0.05;
} else if (valor <= 500) {
  desconto = valor * 0.10;
} else {
  desconto = valor * 0.20;
}
let valorFinal = valor - desconto;
console.log(`Valor original: R$${valor.toFixed(2)} — Desconto: R$${desconto.toFixed(2)} — Valor final: R$${valorFinal.toFixed(2)}.`);