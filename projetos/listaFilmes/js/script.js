window.onload = () => {
  for (let i = 0; i < listaFilmes.length; i++) {
    let filmes = `<a href="${listaFilmes[i].trailer}">
                <div class="movie">
                    <img
                        src="${listaFilmes[i].img}"
                    />
                    <p>${listaFilmes[i].nome}</p>
                </div>
            </a>`;
    document.querySelector("#movies").innerHTML += filmes;
  }
};
