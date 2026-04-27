// Questão 42 — Maior e menor entre três números
let a = 20, b = 5, c = 13;
let maior, menor;
if (a >= b && a >= c) { maior = a; }
else if (b >= a && b >= c) { maior = b; }
else { maior = c; }

if (a <= b && a <= c) { menor = a; }
else if (b <= a && b <= c) { menor = b; }
else { menor = c; }

console.log(`Entre ${a}, ${b} e ${c} — Maior: ${maior} | Menor: ${menor}.`);