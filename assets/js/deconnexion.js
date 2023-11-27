const sessionToken = localStorage.getItem("sessionToken");
const decoBtn = document.querySelector("#deco");

decoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (sessionToken) {
    localStorage.removeItem("sessionToken");
    window.location.href = "./connexion.html";
  } else {
    console.log("Token inexistent !");
  }
});
