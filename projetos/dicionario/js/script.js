let lista = [
  {
    nome: "Homem Aranha",
    ano: 2013,
    categoria: "aventura",
  },
  {
    nome: "Hulk",
    ano: 2002,
    categoria: "Ação",
  },
  {
    nome: "Homem de Ferro",
    ano: 2013,
    categoria: "Ação/Aventura",
  },
];

document.querySelector("#btn").onclick = () => {
  document.querySelector("#nomes").innerHTML = lista[0].nome;
};
