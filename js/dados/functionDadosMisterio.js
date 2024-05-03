let puntuacionTotal1 = 0;
let puntuacionTotal2 = 0;


function numeroDados(idJugador, idSeccion, idPuntuacion) {
    let sumaDados = 0;
    let cantidadDados = document.getElementById(idJugador).value;   //Leer cantidad seleccionada por jugador
    cantidadDados = parseInt(cantidadDados);    //pasar cantidadDados a entero

    document.getElementById(idSeccion).innerHTML = "";//Limpiar dados
    for (let i = 0; i < cantidadDados; i++){
        let numeroAleatorio;
        numeroAleatorio = generaNumRandom();

        generaDado(idSeccion, numeroAleatorio);

        sumaDados += numeroAleatorio;
        alert(sumaDados);
    }

    document.getElementById(idPuntuacion).innerHTML = sumaDados;    //Escribir resultado de la suma de dados
    
}

function generaNumRandom(){
    let numRandom = Math.floor(Math.random() * 6 + 1);
    alert(numRandom);
    return numRandom;
}

function generaDado(idSeccion, numeroAleatorio){
    let imgOutput = document.createElement('img');

    imgOutput.src = "../../img/dados/dadosMisterio/d" + numeroAleatorio + ".png";
    imgOutput.setAttribute('class', )
}