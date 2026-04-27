// Questão 46 — Período do dia
let hora = 14;
if (hora >= 6 && hora <= 11) {
  console.log(`Às ${hora}h é MANHÃ.`);
} else if (hora >= 12 && hora <= 17) {
  console.log(`Às ${hora}h é TARDE.`);
} else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora <= 5)) {
  console.log(`Às ${hora}h é NOITE.`);
} else {
  console.log("Hora inválida.");
}