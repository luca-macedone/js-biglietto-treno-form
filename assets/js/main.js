/* 

Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

*/

// Variabile contente il fattore di moltiplicazione del prezzo
const priceFactor = .21;
// Variabili contenti gli sconti per i minorenni e gli anziani
const discountUnder18 = 20;
const discountOver65 = 40;
// Variabile contenente il prezzo finale
let price;
// Variabile per definire il tipo di biglietto
let ticketType;

const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");

// Se il bottone di invio viene premuto...
submitBtn.addEventListener("click", function(){
    // Aquisizione dei dati inseriti dall'utente
    const userName = document.querySelector("#input-username").value;
    const distance = document.querySelector("#input-distance").value;
    const userAge = document.querySelector("#input-age").value;

    // Check dei dati inseriti
    // se viene inserita una distanza negativa, manda un alert
    if(isNaN(distance) || distance <= 0) alert("ERRORE: Iserire una distanza corretta.");
    // altrimenti puoi continuare
    else{
        // calcolo il prezzo reale
        price = distance * priceFactor;
        // verifico se l'utente può accedere a degli sconti
        switch(userAge){
            case "1":
                // se l'utente è minorenne..
                // calcolo il prezzo applicando lo sconto per minorenni
                price = price - ((price * discountUnder18) / 100);
                ticketType = "Biglietto Under 18";
                break;
            case "3":
                // altrimenti, se è un anziano
                // calcolo il prezzo applicando lo sconto per anziani
                price = price - ((price * discountOver65) / 100);
                ticketType = "Biglietto Over 65";
                break;
            default: 
                ticketType = "Biglietto Standard";
        }
        // se non è uno dei casi precedenti posso stampare il risultato senza sconti
        // raccolgo gli elementi per         
        const targetNameEl = document.querySelector("#target-name");
        const targetTicketEl = document.querySelector("#target-ticket-type");
        const targetCarriageEl = document.querySelector("#target-carriage");
        const targetCpEl = document.querySelector("#target-carriage-code");
        const targetPriceEl = document.querySelector("#target-price");
        // il risultato lo stampo normalizzato con due decimali
        //resultBox.innerHTML = `Ciao ${userName} il prezzo del tuo biglietto sarà di €${price.toFixed(2)}`;
        targetNameEl.innerHTML = userName;
        targetTicketEl.innerHTML = ticketType;
        targetCarriageEl.innerHTML = Math.floor(Math.random()*15);
        targetCpEl.innerHTML = Math.floor(Math.random()*100000);
        targetPriceEl.innerHTML = `€${price.toFixed(2)}`;
    }
});

// Se il bottone di reset viene premuto...
resetBtn.addEventListener("click", function(){
    // Raccolgo i campi di input
    const userName = document.querySelector("#input-username");
    const distance = document.querySelector("#input-distance");
    const userAge = document.querySelector("#input-age");
    // Li resetto
    userName.value = "";
    userAge.value = "0";
    distance.value = "";
});
