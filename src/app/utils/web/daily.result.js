export function showDaily() {
  const hasilDaily = document.querySelector(".hasil-daily");

  hasilDaily.classList.remove("hidden");
}

export function applyDaily(expPerHari, expYangDibutuhkan, targetAR) {
  // tulisan yang mau diedit
  let spanHari = document.getElementById("spanHari");
  let spanTarget = document.getElementById("spanTargetDaily");

  // hasil perhitungan
  let hasil = Math.ceil(expYangDibutuhkan / expPerHari);

  // tempelin
  spanHari.innerHTML = `&PlusMinus;${hasil}`;
  spanTarget.innerHTML = targetAR;
}
