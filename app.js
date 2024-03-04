/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.
*/


// VARIABILI PROMPT
const richiestaKm = "Buongiorno! Inserisca il numeri di chilometri da percorrere con i nostri treni."; //string
const richiestaAnni = "Inserisca la sua età."; //string

//VARIABILI UTENTE DA PROMPT
const chilometriUtente = parseInt(prompt(richiestaKm)); //number
const anniUtente =  parseInt(prompt(richiestaAnni)); //number

//PREZZI E SCONTISTICA
const costoKm = 0.21; //float
const scontoMinorenni = 20; //number
const scontoMaggiorenni = 0;  //number
const scontoOver65 = 40;  //number
let sconto;
let prezzoIntero = chilometriUtente * costoKm;

//CALCOLO SCONTO
if(anniUtente < 18){
  sconto = (prezzoIntero / 100) * scontoMinorenni; //float
}else if(anniUtente >= 65){
  sconto = (prezzoIntero / 100) * scontoOver65; //float
}else{
  sconto = (prezzoIntero / 100) * scontoMaggiorenni; //float
}

//CALCOLO PREZZO FINALE
let prezzoFinale = prezzoIntero - sconto; //float

// VARIABILE PROMPT PIÙ COUNICAZIONE PROMPT
let dichiarazionePrezzo = "Il prezzo del suo biglietto è di € " + prezzoFinale.toFixed(2) + ".";
console.log(dichiarazionePrezzo);