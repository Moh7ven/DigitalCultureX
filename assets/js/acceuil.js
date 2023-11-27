const session = localStorage.getItem("sessionToken");
console.log(session);

const userInfo = document.querySelector("#userInfo");

async function getUserInfos() {
  try {
    const res = await fetch("http://localhost:3000/api/user/userConnected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });

    if (res.ok) {
      const resData = await res.json();
      userInfo.textContent = `${resData.prenom} ${resData.nom}`;
      console.log(resData);
    } else {
      const resData = await res.json();
      console.log(
        "Erreur survenue lors de la recupération des informations ",
        resData
      );
    }
  } catch (error) {
    console.log(error);
  }
}

getUserInfos();
