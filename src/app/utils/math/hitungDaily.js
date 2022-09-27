const komisi = 250;
const resin = 100;

export function hitungDailyEXP(kelar, habis) {
  let hasil;

  if (kelar >= 4) {
    hasil = komisi * 4 + 500 + resin * (habis / 20);
  } else {
    hasil = komisi * kelar + resin * (habis / 20);
  }

  return hasil;
}
