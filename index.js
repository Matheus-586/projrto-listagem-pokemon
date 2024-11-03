const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "https://i.postimg.cc/0NYHsTcf/sun.png");
    } else {
        body.classList.add("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "https://i.postimg.cc/cCHDfrZ9/moon.png")
    }
});

