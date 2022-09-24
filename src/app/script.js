import { Theme, keepTheme } from "./utils/theme/theme.checker.js"; // cek tema
import { darkSwitch, lightSwitch } from "./utils/theme/theme.config.js"; // theme changer
import { showDaily, hideDaily } from "./utils/theme/daily.form.js"; // daily form

// cek tema
Theme();
keepTheme();

// theme changer
const toggle = document.getElementById("dark-toggle");

toggle.addEventListener("click", function () {
  toggle.checked ? darkSwitch() : lightSwitch();
});

const dailyToggle = document.getElementById("daily-toggle");

dailyToggle.addEventListener("click", function () {
  dailyToggle.checked ? showDaily() : hideDaily();
});

// hitung
