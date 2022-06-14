function calcular() {
  let peso = document.querySelector(".peso").value;
  let altura = document.querySelector(".altura").value;
  let texto = document.querySelector(".resultado");
  let resultado = (peso / altura ** 2).toFixed(2);

  document.querySelector(".resultado").innerHTML =
    "O resultado do seu IMC é: " + resultado;

  if (resultado < 18.5) {
    texto.innerHTML = "Você está abaixo do peso ideal " + resultado;
  } else if (resultado > 18.5 && resultado < 24.9) {
    texto.innerHTML = "Você está com o peso normal " + resultado;
  } else if (resultado > 25 && resultado < 29.9) {
    texto.innerHTML = "Você está com excesso de peso " + resultado;
  } else if (resultado > 30 && resultado < 34.9) {
    texto.innerHTML = "Você está com obesidade grau 1 " + resultado;
  } else if (resultado > 35 && resultado < 39.9) {
    texto.innerHTML = "Você está com obesidade grau 2 " + resultado;
  } else if (resultado >= 40) {
    texto.innerHTML =
      "Voê está com obesidade morbida, procure um médico " + resultado;
  }
}
