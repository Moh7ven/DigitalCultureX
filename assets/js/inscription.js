let form = document.querySelector(".form");
document.querySelector("#loader").style.display = "none";

function validateForm() {
  let nom = document.querySelector("#nom").value;
  let prenom = document.querySelector("#prenom").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confPassword = document.querySelector("#confPassword").value;

  let message = document.querySelector(".message");

  if (nom === "") {
    message.textContent = "Veuillez entrer votre nom s'il vous plait ";
    return false;
  }

  if (prenom === "") {
    message.textContent = "Veuillez entrer votre prenom s'il vous plait";
    return false;
  }

  if (email === "") {
    message.textContent = "Veuillez entrer votre email s'il vous plait";
    return false;
  } else if (!email.includes("@")) {
    message.textContent = "Veuillez entrer une adresse email valide !";
    return false;
  }

  if (password === "") {
    message.textContent = "Veuillez entrer un mot de passe s'il vous plait ";
    return false;
  }

  if (confPassword === "") {
    message.textContent = "Veuillez Confirmer votre mot de passe";
    return false;
  } else if (password !== confPassword) {
    message.textContent = "Veuillez deux mot de passe ne correspondent pas !";
    return false;
  }

  return true;
}

async function register() {
  if (validateForm() === true) {
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    // let confPassword = document.querySelector("#confPassword").value;
    let message = document.querySelector(".message");

    let data = {
      nom: nom,
      prenom: prenom,
      email: email,
      password: password,
    };
    console.log(data);

    try {
      document.querySelector("#loader").style.display = "block";

      const response = await fetch(
        "https://digitalculturex.onrender.com/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        message.style.color = "green";
        message.textContent = "Félicitation, vous avez bien été enregistré !";
        setTimeout(() => {
          document.querySelector("#loader").style.display = "none";
          window.location.href = "./connexion.html";
        }, 3000);
      } else {
        const responseData = await response.json();
        console.log(responseData.error.errors.email.message);
        message.textContent = responseData.error.errors.email.message;

        document.querySelector("#loader").style.display = "none";

        console.log("Error lors de l'enregistrement: ", responseData);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});
