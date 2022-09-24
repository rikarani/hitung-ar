export function showDaily() {
  const formDaily = document.querySelector(".form-daily");
  const hasilDaily = document.querySelector(".hasil-daily");

  formDaily.classList.remove("hidden");
  hasilDaily.classList.remove("hidden");
}

export function hideDaily() {
  const formDaily = document.querySelector(".form-daily");
  const hasilDaily = document.querySelector(".hasil-daily");

  formDaily.classList.add("hidden");
  hasilDaily.classList.add("hidden");
}
