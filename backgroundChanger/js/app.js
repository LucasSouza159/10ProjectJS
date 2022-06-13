let btn = document.querySelector("#btn");

let darkTheme = false;

function changeBackground() {
  if (darkTheme == false) {
    darkTheme = true;
    document.body.style.background = "white";
    btn.style.background = "black";
    btn.style.color = "white";
  } else {
    darkTheme = false;
    document.body.style.background = "#333";
    btn.style.background = "crimson";
    btn.style.color = "white";
  }
}
