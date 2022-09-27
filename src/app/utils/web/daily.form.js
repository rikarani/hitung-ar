export function showDailyForm() {
  const formDaily = document.querySelector(".form-daily");

  formDaily.classList.remove("hidden");
}

export function hideDailyForm() {
  // set 2 inputnya jadi 0
  const fieldKomisi = (document.getElementById("commission").value = 0);
  const fieldResin = (document.getElementById("resin").value = 0);

  // sembunyikan hasil daily nya
  const hasilDaily = document.querySelector(".hasil-daily");

  const formDaily = document.querySelector(".form-daily");

  formDaily.classList.add("hidden");
  hasilDaily.classList.add("hidden");
}
