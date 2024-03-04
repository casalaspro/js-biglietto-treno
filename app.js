/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.
*/


// VARIABILI PROMPT
let richiestaKm = "Buongiorno! Inserisca il numeri di chilometri da percorrere con i nostri treni."; //string
let richiestaAnni = "Inserisca la sua età."; //string
let dichiarazionePrezzo = "Il prezzo del suo biglietto è di " + prezzoFinale + ".";

//VARIABILI UTENTE DA PROMPT
let chilometriUtente = parseFloat(prompt(richiestaKm)); //number
let anniUtente =  parseFloat(prompt(richiestaAnni)); //number

//PREZZI E SCONTISTICA
let costoKm = 0.21; //float
let scontoMinorenni = 20; //number
let scontoMaggiorenni = 0;  //number
let scontoOver65 = 40;  //number
let sconto;
let prezzoIntero = chilometriUtente * costoKm;

//CALCOLO SCONTO
if(anniUtente < 18){
  sconto = (prezzoIntero / 100) * scontoMinorenni;
}else if(anniUtente >= 65){
  sconto = (prezzoIntero / 100) * scontoOver65;
}else{
  sconto = (prezzoIntero / 100) * scontoMaggiorenni;
}

//CALCOLO PREZZO FINALE E COUNICAZIONE PROMPT
let prezzoFinale = prezzoIntero - parseFloat(sconto);

console.log(dichiarazionePrezzo);