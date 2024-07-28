function encriptar(){
    let texto =document.getElementById("texto").value;
    //let tituloMensaje= document.getElementById("titulo-mensaje");
    //let parrafo = document.getElementById("parrafo");
    //let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "oin")
        .replace(/i/gi, "shhhh")
        .replace(/a/gi, "veeee")
        .replace(/o/gi, "guao")
        .replace(/u/gi, "miau")

    if (document.getElementById("texto").value!= 0){
        document.getElementById("texto").value = textoCifrado;  
        document.getElementById("titulo-mensaje").textContent= "Texto encriptado con éxito";
        document.getElementById("parrafo") = "";
        document.getElementById("muñeco").src = "./img/encriptado.png";
     }else{
        document.getElementById("muñeco").src = "./img/muñeco.png";
        alert("Debes ingresar algún texto");
    }
}

