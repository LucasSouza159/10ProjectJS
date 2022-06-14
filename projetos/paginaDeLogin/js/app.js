let user = "refribr1@gmail.com";
let passwd = "36852119@Zx";

function checkLogin() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#senha").value;

  if (user == email && passwd == password) {
    document.location.href = "login.html";
  } else {
    alert("Você digitou uma senha inválida. Verifique e tente novamente!");
    document.querySelector(".forget").style.display = "flex";
  }
}
