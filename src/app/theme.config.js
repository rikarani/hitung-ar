// cek tema
let defaultTheme = localStorage.getItem("tema");

// kalo blom ada, kasih tema light
if (!defaultTheme) {
  localStorage.setItem("tema", "Light");
}

// fungsi buat ubah tema jadi dark
const darkSwitch = () => {
  const html = document.querySelector("html");

  html.classList.add("dark");
  localStorage.setItem("tema", "Dark");
};

// fungsi buat ubah tema jadi light
const lightSwitch = () => {
  const html = document.querySelector("html");

  html.classList.remove("dark");
  localStorage.setItem("tema", "Light");
};

// tangkap toggle tema nya
const darkToggle = document.getElementById("dark-toggle");

// kalau dari awal udah darkmode, pertahanin tetap darkmode
if (defaultTheme === "Dark") {
  darkToggle.checked = true;
  darkSwitch();
}

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    darkSwitch();
  } else {
    lightSwitch();
  }
});
