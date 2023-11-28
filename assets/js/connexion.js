let form = document.querySelector(".form");
document.querySelector("#loader").style.display = "none";

function validateForm() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let message = document.querySelector(".message");

  if (email === "") {
    message.textContent = "Veuillez entrer votre email !";
    return false;
  } else if (!email.includes("@")) {
    message.textContent = "Veuillez entrer une adresse email valide !";
    return false;
  }

  if (password === "") {
    message.textContent = "Veuillez entrer votre mot de passe !";
    return false;
  }

  return true;
}

async function logIn() {
  if (validateForm() === true) {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let message = document.querySelector(".message");

    let data = {
      email: email,
      password: password,
    };

    try {
      document.querySelector("#loader").style.display = "block";

      const response = await fetch(
        "https://digitalculturex.onrender.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log(response);
      if (response.ok) {
        const responseData = await response.json();

        message.style.color = "green";
        message.textContent = "Bienvenue !";

        localStorage.setItem("sessionToken", responseData.token);

        console.log(responseData);

        setTimeout(() => {
          // document.querySelector("#loader").style.display = "none";
          window.location.href = "./acceuil.html";
        }, 3000);
      } else {
        const responseData = await response.json();
        message.textContent = responseData.message;
        console.log("Erreur lors de l'enregistrement ", responseData);

        document.querySelector("#loader").style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn();
});
