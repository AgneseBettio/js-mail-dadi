/* Chiedi all’utente la sua email,
 controlla che sia nella lista di chi può accedere, 
 stampa un messaggio appropriato sull’esito del controllo.*/
 
var richiestaEmail = prompt("inserisci il tuo indirizzo email per accedere all'area riservata");
console.log(richiestaEmail);
var emailAutorizzate = ["studente01@boolean.it", "studente04@boolean.it", "studente12@boolean.it", "studente21@boolean.it", "studente22@boolean.it", "studente32@boolean.it"];
console.log(emailAutorizzate);


if(richiestaEmail === emailAutorizzate){
    var accessoAutorizzato;
    console.log("l'utente" + richiestaEmail +"è autorizzato  ad accedere all'area riservata");
} 



// else{
//     alert("l'utente" + richiestaEmail +"non è autorizzato ad accedere all'area riservata");
// }