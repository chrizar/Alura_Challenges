//Challenge Amigo Secreto

let amigosIngresados = [];
let contieneLetras;

function agregarAmigo(){
    let valorIngresado = document.getElementById("amigo").value.trim();
    let texto = "";
    // contieneLetras = /[a-zA-Z]/.test(valorIngresado);
    // console.log(contieneLetras);
    if(valorIngresado == "" || !contieneLetras){
        alert("Ingrese un nombre válido");
    }else{
        amigosIngresados.push(valorIngresado);
        console.log(amigosIngresados);
    }
    for(i=0; i<amigosIngresados.length; i++){
        texto = texto + `${amigosIngresados[i]}<br>`;
    }
    limpiarCaja();
    asignarTextoAElemento("listaAmigos", texto);
    return;
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    if(amigosIngresados.length === 0){
        alert("No ha agregado ningún amigo para sortear.");        
    }else{
        if(amigosIngresados.length === 1){
            alert("Se requiere más de un amigo para realizar el sorteo.");            
        }else{
            let indice = Math.floor(Math.random()*amigosIngresados.length);
            asignarTextoAElemento("resultado", `Amigo sorteado: ${amigosIngresados[indice]}`);
            asignarTextoAElemento("listaAmigos", "");
            asignarTextoAElemento("titulo", "RESULTADO");
            document.getElementById("amigo").style.display = "none";
            document.getElementById("botonAñadir").style.display = "none";
            document.getElementById("botonSortear").style.display = "none";
        }
    }
    return;    
}

function asignarTextoAElemento(elementoID, texto){
    let elementoAAsignarID = document.getElementById(elementoID);
    elementoAAsignarID.innerHTML = texto;
    return;
}