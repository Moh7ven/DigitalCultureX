const token = localStorage.getItem("sessionToken");
const pathName = location.href;
if (
  token &&
  (pathName.endsWith("inscription.html") || pathName.endsWith("connexion.html"))
) {
  window.location.href = "./acceuil.html";
} else if (!token && pathName.endsWith("acceuil.html")) {
  window.location.href = "./connexion.html";
}
