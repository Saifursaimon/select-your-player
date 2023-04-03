const buttons = document.querySelectorAll(".btn-select");
for (const button of buttons) {
  button.addEventListener("click", function () {
    button.setAttribute("disabled", true);
  });
}
