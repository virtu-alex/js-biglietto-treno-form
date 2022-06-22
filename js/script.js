// PRIMO PROMPT, KM DA PERCORRERE

const kilometers = parseInt(prompt('Quanti kilometri devi percorrere?', "379"));
console.log(`I kilometri da percorrere sono ${kilometers}`);
// SECONDO PROMPT, ETA'

const userAge = parseInt(prompt('Quanti anni hai?'))
console.log(`l'eta' che hai scelto e' ${userAge}`);

const nomeCognome = document.getElementById('name-surname')

const passangerName = document.getElementById('passanger')

const genButton = document.getElementById('button-generator')

genButton.addEventListener ('click'), function(){
    console.log(genButton)
passangerName = nomeCognome
}
// VALIDATOR + ALERT NaN
if (!isNaN(kilometers) && !isNaN(userAge)) {

} else {
    alert("Puoi inserire solo numeri interi e che siano maggiori di zero")
    console.log(alert)
}

let prezzo = kilometers * 0.21

if (userAge < 18) {
    prezzo = (prezzo - prezzo * 0.2).toFixed(2);
    console.log(`lo sconto applicato e' ${prezzo}`);
} else if (userAge >= 65) {
    prezzo = (prezzo - prezzo * 0.4).toFixed(2);
    console.log(`lo sconto applicato e' ${prezzo}`);
}



//STAMPO IN PAGINA

const discountTicket = document.getElementById('difference');
discountTicket.innerHTML = prezzo;

const scontoMinori = prezzo * 0.2;
const scontoAnziani = prezzo * 0.4;
let discount;

if (userAge < 18) {
    discount = scontoMinori.toFixed(2);

} else if (userAge > 65) {
    discount = scontoAnziani.toFixed(2);
}



const sconto1 = document.getElementById('conto-scontato');
sconto1.innerHTML = scontoMinori.toFixed(2);
