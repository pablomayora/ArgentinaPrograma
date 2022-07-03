function cambiarParrafo(){
     document.getElementById("editador").style.display="Inline";     
    let texto= document.getElementById("parrafo").innerText;
    console.log(texto)
}

 function cambiarParrafo2(valor){
    document.getElementById("parrafo").innerText=valor
}

function logMessage(mensaje){
    console.log(mensaje+"<br>")   // enviando a consola las teclas
}

let textarea=document.getElementById("editador")
textarea.addEventListener("keyup", (e)=>{


    logMessage( `key ${e.key} released [event:keyup]`); // DETECTANDO LAS TECLAS 
    if(e.key=="Enter"){
        document.getElementById("editador").style.display="none" // Si detectas la tecla enter desaparece
    }
});
console.log("LO QUE SEA")

// TRABAJANDO SOBRE EL INPUT QUE ESTA EN LA CARD

function MostrarArchivo(input){
    let file=input.file[0];
    alert(`NOMBRE DE ARCHIVO AGREGADO ${file.name} `);
    alert(`ULTIMA FECHA DE MODIFICACION ${file.lastModified} `);


    // CREACION DE VARIABLE QUE CREA UN OBJETO DEL TIPO FileReader --- Todo dentro de la misma Funcion 


let reader= new FileReader();
reader.readAsText(file);
alert(FileReader.readyState)


    
}




