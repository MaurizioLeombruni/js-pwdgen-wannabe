let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colore = prompt("Inserisci il tuo colore preferito");
let primo = prompt("Inserisci il primo numero");
let secondo = prompt("Inserisci il secondo numero");
let numero = 0;

if (secondo !== 0){
    console.log("All clear, dividing");
    numero = Math.floor(primo/secondo);
} else {
    console.log("How about no KEKW");
    numero = primo;
}

console.log(numero);
document.getElementById("p-nome").innerHTML = nome;
document.getElementById("p-cognome").innerHTML = cognome;
document.getElementById("p-colore").innerHTML = colore;
document.getElementById("p-primo").innerHTML = primo;
document.getElementById("p-secondo").innerHTML = secondo;
document.getElementById("p-password").innerHTML = nome+cognome+colore+numero;