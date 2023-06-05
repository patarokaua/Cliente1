const url = "http://localhost:3000/perfil"

const carregando = document.querySelector("#carregando")
const postDescricao = document.querySelector("#postComentarios")


function enviarComentario() {
  document.getElementById("Comentarios").click();
}

function escolherFoto() {
  document.getElementById("escolher-foto").click();
}

// atualiza a imagem de perfil com a nova foto escolhida
document.getElementById("escolher-foto").addEventListener("change", function () {
  var imagemPerfil = document.getElementById("profile-pic");
  var novaImagem = this.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    imagemPerfil.setAttribute("src", e.target.result);
  }
  reader.readAsDataURL(novaImagem);
});


function editarDescricao() {
  // esconde o botão "Editar"
  document.querySelector("button:nth-of-type(1)").style.display = "none";
  // exibe o botão "Salvar"
  document.querySelector("button:nth-of-type(2)").style.display = "block";

  // transforma o texto da descrição em um campo editável
  const descricao = document.getElementById("descricao");
  descricao.contentEditable = "true";
  descricao.focus();
}

async function salvarDescricao() {
  // exibe o botão "Editar"
  document.querySelector("button:nth-of-type(1)").style.display = "block";
  // esconde o botão "Salvar"
  document.querySelector("button:nth-of-type(2)").style.display = "none";

  // obtém a descrição editada
  const descricaoEditada = document.getElementById("descricao").innerText;

commentform.addEventListener("submit", (e)=> {
  e.preventDefault();

  let descricao = {
    descricao : descricaoEditada.value,
  }

  descricao=JSON.stringify(descricao);

  postDescricao(descricao)
});
}