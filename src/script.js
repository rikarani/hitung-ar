// Variable
const html = document.querySelector("html"); // Variable buat Dark Mode
const darkMode = document.querySelector("#dark-toggle"); // Checkbox buat Dark Mode

// Variable Buat Muncul Munculin apalah
const formDaily = document.querySelector(".form-daily");
const checkboxDaily = document.querySelector("#daily-toggle");
const hasilDaily = document.querySelector(".hasil-daily");

// Dark Mode Setter & Default Theme
let defaultTheme = localStorage.getItem("tema");

if (!defaultTheme) {
  localStorage.setItem("tema", "Light");
}

const darkSwitch = () => {
  html.classList.add("dark");
  localStorage.setItem("tema", "Dark");
};

const lightSwitch = () => {
  html.classList.remove("dark");
  localStorage.setItem("tema", "Light");
};

if (defaultTheme === "Dark") {
  darkSwitch();
  darkMode.checked = true;
}

darkMode.addEventListener("click", function () {
  if (darkMode.checked) {
    darkSwitch();
  } else {
    lightSwitch();
  }
});

// Tap Anywhere to Close

// Form Daily Progress
checkboxDaily.addEventListener("click", function () {
  checkboxDaily.checked ? formDaily.classList.remove("hidden") : formDaily.classList.add("hidden");
});

// Kalau Hitung Perkiraan Hari aktif, munculin
checkboxDaily.addEventListener("click", function () {
  checkboxDaily.checked ? hasilDaily.classList.remove("hidden") : hasilDaily.classList.add("hidden");
});

// Array buat AR EXP

// Hitung Hitungan

// DOM Manipulation
