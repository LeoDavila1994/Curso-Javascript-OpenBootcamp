const firstName = "Leo";
const lastName = "Dávila";

const persona = {
  username: firstName,
  lastName
};

sessionStorage.setItem("persona", JSON.stringify(persona));

localStorage.setItem("personaLocal", JSON.stringify(persona));

document.cookie = "NeWCookie=Leokie;expires=" + new Date(2023, 0, 20, 17, 59).toUTCString();
