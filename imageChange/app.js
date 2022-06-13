let numberImg = 1;

function imgChanger_add() {
  let img = document.querySelector(".imagem");

  if (numberImg < 3) {
    numberImg += 1;
  } else {
    numberImg = 3;
  }

  img.src = "./img/img" + numberImg + ".png";
}

function imgChanger_sub() {
  let img = document.querySelector(".imagem");

  if (numberImg > 1) {
    numberImg -= 1;
  } else {
    numberImg = 1;
  }

  img.src = "./img/img" + numberImg + ".png";
}
