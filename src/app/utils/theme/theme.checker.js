import { darkSwitch } from "./theme.config.js";

export function Theme() {
  let theme = localStorage.getItem("tema");

  if (!theme) {
    localStorage.setItem("tema", "Light");
  }
}

export function keepTheme() {
  const toggle = document.getElementById("dark-toggle");

  if (localStorage.getItem("tema") === "Dark") {
    toggle.checked = true;
    darkSwitch();
  }
}
