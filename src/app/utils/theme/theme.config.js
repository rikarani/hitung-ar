export function darkSwitch() {
  const html = document.querySelector("html");

  html.classList.add("dark");
  localStorage.setItem("tema", "Dark");
}

export function lightSwitch() {
  const html = document.querySelector("html");

  html.classList.remove("dark");
  localStorage.setItem("tema", "Light");
}
