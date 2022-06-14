document.querySelector("#btnAdd").onclick = () => {
  let textInput = document.querySelector("#inputTarefa").value;
  let novaTarefa = `<div id="tarefa">
                        <span>${textInput}</span>
                        <button id="deletar" >
                        <i class="fa-solid fa-delete-left"></i>
                        </button>
                    </div>`;

  if (textInput.length == 0) {
    alert("Você precisa digitar uma nova tarefa");
  } else {
    document.querySelector("#novasTarefas").innerHTML += novaTarefa;
  }

  let numeroDeTarefas = document.querySelectorAll("#deletar");
  for (let i = 0; i < numeroDeTarefas.length; i++) {
    numeroDeTarefas[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};

function del() {
  document.querySelector("#deletar").parentNode.remove();
}
