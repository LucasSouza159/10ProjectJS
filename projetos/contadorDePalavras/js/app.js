function calcular() {
  let text = document.querySelector("#textarea").value;
  let result = text.split(" ").length;

  document.querySelector("#resultado").innerHTML =
    "Você tem: " + result + " palavras";
}
