// Generare un numero random da 1 a 6, 
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// var playIt = "dado";
// var startTheGame = prompt("scrivi 'dado' per iniziare a giocare")
// if(playIt !== stratTheGame){
//     alert("sei sicuro che hai scitto 'dado'?")
// }

var player = Math.ceil(Math.random()*6);
var computer = Math.ceil(Math.random()*6);
console.log("l'umano lancia " + player, "il computer lancia " + computer )



if (player > computer){
    console.log( "l'umano vince con " + player, "il computer perde con " + computer);
    document.getElementById("player-win").innerHTML = "Complimenti hai vinto";
} else if (computer > player){
    console.log( "il computer vince con " + computer, "l'umano perde con " + player);
    document.getElementById("player-lose").innerHTML = "Hai perso, ricarica la pagina per ritentare la fortuna";
} else {
    document.getElementById("null").innerHTML = "stesso numero! Ricarica la pagina per tentare la rifortuna"
}