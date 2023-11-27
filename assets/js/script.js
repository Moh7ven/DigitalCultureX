const insBtn = document.querySelector("#insBtn");
const connBtn = document.querySelector("#connBtn");

insBtn.addEventListener("click", (e) => {
  window.location.href = "./pages/inscription.html";
});

connBtn.addEventListener("click", (e) => {
  window.location.href = "./pages/connexion.html";
});
