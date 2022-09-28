import { AREXP } from "../math/hitungAR.js";

export function applyEXP(hasil, target) {
  const spanAR = document.getElementById("spanAR");
  const spanTarget = document.getElementById("spanTarget");

  spanAR.textContent = hasil;
  spanTarget.textContent = target;
}

export function applyProgress(arSekarang, expSekarang, expTarget) {
  // tulisan diatas
  const spanPersen = document.getElementById("persen");
  const spanPer = document.getElementById("per");

  let persen = Math.floor((expSekarang / (AREXP[expTarget] - AREXP[arSekarang])) * 100);

  spanPersen.textContent = `Progress : ${persen}%`;
  spanPer.textContent = `${expSekarang}/${AREXP[expTarget] - AREXP[arSekarang]}`;

  // ubah progress bar nya sesuai persenan
  const bar = document.getElementById("progress-fill");

  bar.style.width = `${persen}%`;
}
