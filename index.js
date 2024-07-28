function encriptar(){
    let texto =document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "oin")
        .replace(/i/gi, "shh")
        .replace(/a/gi, "vee")
        .replace(/o/gi, "gua")
        .replace(/u/gi, "mi");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;  
        tituloMensaje.textContent= "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.png";
     }else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar"
        swal("Ooops!","Debes ingresar algún texto","warning")
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco"); 

    let textoCifrado = texto
    .replace(/oin/gi, "e")
    .replace(/shh/gi, "i")
    .replace(/vee/gi, "a")
    .replace(/gua/gi, "o")
    .replace(/mi/gi, "u");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;  
        tituloMensaje.textContent= "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptando.png";
    }else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar"
        swal("Ooops!","Debes ingresar algún texto","warning")
    }
}
