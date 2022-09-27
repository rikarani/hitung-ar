import { Theme, keepTheme } from "./utils/theme/theme.checker.js"; // cek tema
import { darkSwitch, lightSwitch } from "./utils/theme/theme.config.js"; // theme changer
import { showDailyForm, hideDailyForm } from "./utils/web/daily.form.js"; // daily form
import { enableButton, disableButton } from "./utils/web/enable.button.js"; // biar tombol hitungnya bisa diklik
import { showError, hideError } from "./utils/web/error.handler.js"; // cek apkh input valid
import { hitungAR } from "./utils/math/hitungAR.js"; // buat hitung AR EXP yang dibutuhkan
import { applyEXP, applyProgress } from "./utils/web/exp.result.js"; // buat munculin hasilnya
import { hitungDailyEXP } from "./utils/math/hitungDaily.js"; // hitung berapa hari yang dibutuhkan
import { applyDaily, showDaily } from "./utils/web/daily.result.js";

// cek tema
Theme();

// kalo dari awal tema nya udah dark. pertahanin tetap dark
keepTheme();

// theme changer
const toggle = document.getElementById("dark-toggle");

toggle.addEventListener("click", function () {
  toggle.checked ? darkSwitch() : lightSwitch();
});

// munculin form hitung daily
const dailyToggle = document.getElementById("daily-toggle");

dailyToggle.addEventListener("click", function () {
  dailyToggle.checked ? showDailyForm() : hideDailyForm();
});

// biar tombol hitungnya bisa diklik
const fieldARSekarang = document.getElementById("currentAR") || 0;

fieldARSekarang.addEventListener("input", function () {
  parseInt(fieldARSekarang.value) > 0 ? enableButton() : disableButton();
});

// pas tombol hitung di-klik, cek apakah inputnya valid atau ndak
const tombolHitung = document.getElementById("tombol");

tombolHitung.addEventListener("click", function () {
  // 3 field data akun
  const fieldARSekarang = parseInt(document.getElementById("currentAR").value) || 0;
  const fieldAREXP = parseInt(document.getElementById("expAR").value) || 0;
  const fieldTargetAR = parseInt(document.getElementById("targetAR").value) || 0;

  // 2 field progress daily
  const fieldKomisi = parseInt(document.getElementById("commission").value) || 0;
  const fieldResin = parseInt(document.getElementById("resin").value) || 0;

  // kalo inputan ndak valid
  if (fieldARSekarang >= fieldTargetAR || fieldTargetAR > 60) {
    // munculin error
    showError();
  } else {
    // sembunyiin error
    hideError();

    // hitung EXP yang dibutuhkan
    let neededEXP = hitungAR(fieldARSekarang, fieldAREXP, fieldTargetAR);

    // tampilkan hasilnya
    applyEXP(neededEXP, fieldTargetAR);

    // ubah bar progress nya
    applyProgress(fieldARSekarang, fieldAREXP, fieldTargetAR);

    // hitung exp yang didapatkan per hari
    let expPerHari = hitungDailyEXP(fieldKomisi, fieldResin);

    // munculin hasil daily kalo bener dihitung
    if (fieldKomisi !== 0 || fieldResin !== 0) {
      showDaily();

      applyDaily(expPerHari, neededEXP, fieldTargetAR);
    }
  }
});
