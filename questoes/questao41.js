// Questão 41 — Três números em ordem crescente (apenas if/else)
let a = 15, b = 7, c = 11;
let x, y, z;
if (a <= b && a <= c) {
  x = a;
  if (b <= c) { y = b; z = c; }
  else         { y = c; z = b; }
} else if (b <= a && b <= c) {
  x = b;
  if (a <= c) { y = a; z = c; }
  else         { y = c; z = a; }
} else {
  x = c;
  if (a <= b) { y = a; z = b; }
  else         { y = b; z = a; }
}
console.log(`Ordem crescente: ${x}, ${y}, ${z}.`);