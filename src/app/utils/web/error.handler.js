export function showError() {
  // munculin kotak error nya
  const kotakError = document.querySelector(".kotak-error");
  kotakError.classList.remove("hidden");

  // sembunyiin segmen hasilnya
  const segmenHasil = document.querySelector(".hasil");
  segmenHasil.classList.add("hidden");
  segmenHasil.classList.add("sm:invisible");
}

export function hideError() {
  // sembunyiin kotak error nya
  const kotakError = document.querySelector(".kotak-error");
  kotakError.classList.add("hidden");

  // tampilkan segmen hasilnya
  const segmenHasil = document.querySelector(".hasil");
  segmenHasil.classList.remove("hidden");
  segmenHasil.classList.remove("sm:invisible");
}
