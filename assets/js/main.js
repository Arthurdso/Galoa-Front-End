function leiaMais(){
    const pontos = document.getElementById("pontos");
    const maisTexto = document.getElementById("mais");
    const botao = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        botao.innerHTML = "<strong>ver mais</strong>";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        botao.innerHTML = "<strong>ver menos</strong>";
    }
}

