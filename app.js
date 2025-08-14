
let amigosSecretos = [];

// aqui es donde se agregan los nombres de los amigos
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (!nombre){
        alert("Favor de poner un nombre");
    } else {
        amigosSecretos.push(nombre);
        document.getElementById("amigo").value = "";
        listaPantalla();
        console.log(amigosSecretos);
    }
}
// esta funcion nos ayuda a agilizar el asignar textoa en los elementos del HTML a lo largo del codigo
function asignarTexto(parte, texto){
    let parteHTML = document.getElementById(parte);
    parteHTML.innerHTML = texto;
    return;
}

// esta funcion nos ayuda a mostrtar los nombres de los amigos en pantalla y a la vez a ponerlos de manera ordenada 
function listaPantalla(){
    let listahtml = "";
    for (let i = 0; i < amigosSecretos.length; i++){
        listahtml += `<li>${amigosSecretos[i]}</li>`;
    }
    asignarTexto("listaAmigos", listahtml);
}
//aqui se genera un numero de de la lista, para que este sea sorteado de manera pseudo aleatoria
function seleccionarAmigo(){
    let totalAmigos = amigosSecretos.length;
    let amigoAlt = Math.floor(Math.random() * totalAmigos);
    return amigosSecretos[amigoAlt];
}
//esta e sl alogica del juego en si, donde ya los nombres puestos, se sortean y se elige uno
function sortearAmigo(){
   let amigoSecreto = seleccionarAmigo();
    if (!amigoSecreto){
        alert("No hay amigos para sortear");
        return;
    }if (amigosSecretos.length === 1){
        alert("Solo hay un amigo, favor de agregar mas amigos");
        return;
    }
    asignarTexto("listaAmigos", "");
    asignarTexto("resultado", "tu amigo secreto es " + amigoSecreto);
    asignarTexto("textoBoton", "Reintentar");

}

//con esto ponemos todos los valores del principio para que se pueda repetir
function reiniciar(){
    amigosSecretos = [];
    listahtml = "";
    asignarTexto("listaAmigos", "");
    asignarTexto("textoBoton", "Sortear amigo");
    asignarTexto("resultado", "");

}

//esto nos permite que el entorno sea un poco mas didactico, ya que si ya se sorteo el amigo se puede reiniciar o sino se ha sorteado se sortee 
function estadoBoton(){
    let textoEnBoton = document.getElementById("textoBoton").textContent;
    if (textoEnBoton === "Sortear amigo"){
        sortearAmigo();
    }else {
        reiniciar();
    }
}