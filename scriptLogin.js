function visualizarSenha() {
    let imagem = document.getElementById("imagem");
    let input = document.getElementById("senha");
    if (imagem.getAttribute("src") == "./assets/eye-svgrepo-com.svg") {
        imagem.setAttribute("src", "assets/eye-closed-svgrepo-com.svg");
        input.setAttribute("type", "text");
    } else if (
        imagem.getAttribute("src") == "assets/eye-closed-svgrepo-com.svg"
    ) {
        imagem.setAttribute("src", "./assets/eye-svgrepo-com.svg");
        input.setAttribute("type", "password");
    }
}

function ValidarSenha() {
    let senha = document.getElementById("senha").value;
    let validar = undefined;
    if ((senha.length != 0 && senha.length < 6) || senha.length > 6) {
        senha.toString();
        alert("Senha Inválida");
    }
}

addEventListener("click", visualizarSenha());
addEventListener("click", ValidarSenha());
