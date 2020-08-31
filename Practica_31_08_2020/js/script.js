//Codigo realizado por:
//  Edgar Antonio Reyes Ceron
//  Carnet: RC18050
function Juego(){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    if(dado1 > dado2){
        document.getElementById("ganador").innerHTML = "🏆 Jugador 1 gana!"
    }
    else if(dado1 == dado2){
        document.getElementById("ganador").innerHTML = "Hay un empate! ⚔️"
    }
    else{
        document.getElementById("ganador").innerHTML = "Jugador 2 gana! 🏆"
    }
    
    colocarPuntosDado(dado1,"D1");
    colocarPuntosDado(dado2,"D2");
}

function colocarPuntosDado(puntosDado,dado){
    if(puntosDado == 1){
        document.getElementsByClassName("punto1"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto2"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto3"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto4"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto5"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto6"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("puntoCentral"+dado)[0].classList.remove("ocultarPunto");
    }
    else if(puntosDado == 2){
        document.getElementsByClassName("punto1"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto2"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto3"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto4"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto5"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto6"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("puntoCentral"+dado)[0].classList.add("ocultarPunto");
    }
    else if(puntosDado == 3){
        document.getElementsByClassName("punto1"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto2"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto3"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto4"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto5"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto6"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("puntoCentral"+dado)[0].classList.remove("ocultarPunto");
    }
    else if(puntosDado == 4){
        document.getElementsByClassName("punto1"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto2"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto3"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto4"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto5"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto6"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("puntoCentral"+dado)[0].classList.add("ocultarPunto");
    }
    else if(puntosDado == 5){
        document.getElementsByClassName("punto1"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto2"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto3"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto4"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto5"+dado)[0].classList.add("ocultarPunto");
        document.getElementsByClassName("punto6"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("puntoCentral"+dado)[0].classList.remove("ocultarPunto");
    }
    else if(puntosDado == 6){
        document.getElementsByClassName("punto1"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto2"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto3"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto4"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto5"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("punto6"+dado)[0].classList.remove("ocultarPunto");
        document.getElementsByClassName("puntoCentral"+dado)[0].classList.add("ocultarPunto");
    }
}