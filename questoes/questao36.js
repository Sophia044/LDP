// Questão 36 — Desconto de 10% em compras acima de R$100
let compra = 150;
if (compra > 100) {
  let desconto = compra * 0.10;
  let valorFinal = compra - desconto;
  console.log(`Compra de R$${compra.toFixed(2)} — Desconto de 10%: -R$${desconto.toFixed(2)} — Valor final: R$${valorFinal.toFixed(2)}.`);
} else {
  console.log(`Compra de R$${compra.toFixed(2)} — Sem desconto. Valor final: R$${compra.toFixed(2)}.`);
}