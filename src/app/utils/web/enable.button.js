export function enableButton() {
  const tombol = document.getElementById("tombol");

  tombol.disabled = false;
}

export function disableButton() {
  const tombol = document.getElementById("tombol");

  tombol.disabled = true;
}
