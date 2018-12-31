var menuEsquerda, menuDireita, tituloEsquerda, tituloDireita;
var pageWidth, pageHeight, headerHeight, pontoMedioX, pontoMedioY;

window.addEventListener("load", function(){
    
    menuEsquerda    = document.getElementById("menu-esquerda");
    menuDireita     = document.getElementById("menu-direita");
    tituloEsquerda  = document.getElementById("titulo-esquerda");
    tituloDireita   = document.getElementById("titulo-direita");
    contentEsquerda = document.getElementById("content-esquerda");    
    contentDireita  = document.getElementById("content-direita");

    headerHeight = 53;
    sizes();
});

window.addEventListener("resize", sizes);

function sizes(){
    menuEsquerda.style.transition   = "";
    tituloEsquerda.style.transition = "";
    menuDireita.style.transition    = "";

    pageWidth = window.innerWidth + 1;
    pageHeight = window.innerHeight - 1 - headerHeight;

    menuEsquerda.style.borderTopWidth = pageHeight + "px";
    menuEsquerda.style.borderRightWidth = pageWidth + "px";
    
    menuDireita.style.borderBottomWidth = pageHeight + "px";
    menuDireita.style.borderLeftWidth = pageWidth + "px";
     
    var menu = document.getElementById("menu");
    var content = document.getElementById("content");
    
    menu.style.height = "";
    content.style.height = "";
    var menuHeight = menu.offsetHeight;
    menu.style.height = menuHeight + "px";
    content.style.height = menuHeight + "px";

    var b1 = pageHeight;
    var l1 = pageWidth;
    var b2 = tituloEsquerda.children[0].offsetHeight / 1.5;
    var b3 = tituloDireita.children[1].offsetHeight;
    var l2 = (b2 * l1)/b1;
    var l3 = (b3 * l1)/b1;

    pontoMedioX = pageWidth/2;
    pontoMedioY = pageHeight/2;

    tituloEsquerda.style.height = b3 + "px";
    tituloEsquerda.style.paddingRight = l3 + "px";
    tituloEsquerda.style.top  = - (pontoMedioY + b2 - 2) + "px";
    tituloEsquerda.style.left = pontoMedioX - tituloEsquerda.offsetWidth + l2 + "px";
    
    tituloEsquerda.children[1].style.borderBottomWidth = b3 + "px";
    tituloEsquerda.children[1].style.borderLeftWidth = l3 + "px";
    
    tituloDireita.style.height = b3 + "px";
    tituloDireita.style.paddingLeft = l3 + "px"; 
    tituloDireita.style.top  = + (pontoMedioY) + "px";
    tituloDireita.style.left = - (pontoMedioX + l3 + 3)  + "px";

    tituloDireita.children[0].style.borderBottomWidth = b3 + "px";
    tituloDireita.children[0].style.borderLeftWidth = l3 + "px";

    menuEsquerda.style.transition   = ".6s all";
    tituloEsquerda.style.transition = ".6s all";
    menuDireita.style.transition    = ".5s all";
}

function showSection(show, hide){
    
    menu.style.background = "transparent"; 
    
    document.getElementById("content-" + show).style.visibility = "visible";
    document.getElementById("content-" + hide).style.visibility = "hidden";
    
    var b1 = 0;
    var l1 = pageWidth*5;
    var b2 = tituloEsquerda.children[0].offsetHeight / 1.5;
    var l2 = (b2 * l1)/b1;
    
    menuEsquerda.style.borderTopWidth = b1 + "px"; 
    tituloEsquerda.style.top  = "0px";
    tituloEsquerda.style.left = pontoMedioX - tituloEsquerda.offsetWidth + l2 + "px";
    
    menuDireita.style.borderLeftWidth = l1 + "px";
    
    menuEsquerda.style.opacity  = 0;
    menuDireita.style.opacity   = 0
    tituloEsquerda.style.opacity = 0;
    tituloDireita.style.opacity  = 0;
    
    setTimeout(function(){ menu.style.visibility = "hidden" }, 600);
}

function hideSection(){
    menu.style.visibility = "visible";
    menu.style.background = "#fff"; 
    
    var b1 = pageHeight;
    var l1 = pageWidth;
    var b2 = tituloEsquerda.children[0].offsetHeight / 1.5;
    var l2 = (b2 * l1)/b1;
    
    menuEsquerda.style.borderTopWidth = b1 + "px";
    tituloEsquerda.style.top  = - (pontoMedioY + b2 - 2) + "px";
    tituloEsquerda.style.left = pontoMedioX - tituloEsquerda.offsetWidth + l2 + "px";
    
    menuDireita.style.borderLeftWidth = pageWidth + "px";

    menuEsquerda.style.opacity  = 1;
    menuDireita.style.opacity   = 1;
    tituloEsquerda.style.opacity = 1;
    tituloDireita.style.opacity  = 1;
}