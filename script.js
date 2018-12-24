var secaoEsquerda, secaoDireita, tituloEsquerda, tituloDireita;
var pageWidth, pageHeight, headerHeight;

window.addEventListener("load", function(){
    secaoEsquerda = document.getElementById("secao-esquerda");
    secaoDireita = document.getElementById("secao-direita");

    tituloEsquerda = document.getElementById("titulo-esquerda");
    tituloDireita = document.getElementById("titulo-direita");

    headerHeight = 53;
    sizes();
});

window.addEventListener("resize", sizes);

function sizes(){
    secaoEsquerda.style.transition = "";
    secaoDireita.style.transition = "";

    pageWidth = window.innerWidth + 1;
    pageHeight = window.innerHeight - headerHeight;

    secaoEsquerda.style.borderTopWidth = pageHeight + "px";
    secaoEsquerda.style.borderRightWidth = pageWidth + "px";
    
    secaoDireita.style.borderBottomWidth = pageHeight + "px";
    secaoDireita.style.borderLeftWidth = pageWidth + "px";
     
    var menu = document.getElementById("menu");
    
    menu.style.height = "";
    var menuHeight = menu.offsetHeight;
    menu.style.height = menuHeight + "px";
    
    var b1 = pageHeight;
    var l1 = pageWidth;
    
    var b2 = tituloEsquerda.children[0].offsetHeight;
    var l2 = (b2 * l1)/b1;
    
    var pontoMedioX = pageWidth/2;
    var pontoMedioY = pageHeight/2;

    diffTitEsquerda = tituloEsquerda.offsetWidth - l2/2;

    tituloEsquerda.style.height = b2 + "px";
    tituloEsquerda.style.paddingRight = l2 + "px";
    tituloEsquerda.style.top  = - (pontoMedioY + b2/3) + "px";
    tituloEsquerda.style.left = + ( (pontoMedioX - l2 - 3) - (diffTitEsquerda) ) + "px";

    tituloEsquerda.children[1].style.borderBottomWidth = (b2) + "px";
    tituloEsquerda.children[1].style.borderLeftWidth = l2 + "px";
    
    tituloDireita.style.height = b2 + "px";
    tituloDireita.style.paddingLeft = l2 + "px"; 
    tituloDireita.style.top  = + (pontoMedioY) + "px";
    tituloDireita.style.left = - (pontoMedioX + l2 + 3) + "px";

    tituloDireita.children[0].style.borderBottomWidth = b2 + "px";
    tituloDireita.children[0].style.borderLeftWidth = l2 + "px";

    secaoEsquerda.style.transition = ".6s all";
    secaoDireita.style.transition = ".5s all";
}

function showSection(show, hide){

    document.getElementById("content-" + show).style.display = "block";
    document.getElementById("content-" + hide).style.display = "none";

    secaoEsquerda.style.borderTopWidth = "40px"; 
    secaoDireita.style.borderLeftWidth = "8500px";

    tituloEsquerda.style.opacity = 0;
    tituloDireita.style.opacity = 0;

    setTimeout(hideSection, 2000);
}

function hideSection(){
    secaoEsquerda.style.borderTopWidth = pageHeight + "px";
    secaoDireita.style.borderLeftWidth = pageWidth + "px";

    tituloEsquerda.style.opacity = 1;
    tituloDireita.style.opacity = 1;
}