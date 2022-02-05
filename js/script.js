

const titulo = document.getElementById("tituloP");

titulo.style.cursor = "pointer";


titulo.addEventListener("mouseover", function(event){
    titulo.classList.remove("mouseout-titulo");
    titulo.classList.add("mouseenter-titulo");
});
titulo.addEventListener("mouseout", function(event){
    titulo.classList.remove("mouseenter-titulo");
    titulo.classList.add("mouseout-titulo");
});
titulo.addEventListener("click",(event) => {
    alert("Creado por Alonso Sebatián");
});
