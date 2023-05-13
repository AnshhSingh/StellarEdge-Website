const spinner = document.querySelector(".spinner-use");
window.addEventListener("load", () => {
  spinner.style.opacity = "0";

  setTimeout(() => {
    spinner.style.display = "none";
  }, 200);
});