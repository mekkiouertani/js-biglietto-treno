let myTxt = document.getElementById("txt");
console.log(myTxt);
let prezzoAlChilometro = 0.21;


let chilometri = parseInt(prompt("Hey, quanti chilometri vuoi percorrere?"));
console.log(chilometri);
let age = parseInt(prompt('Bene! Qual è la tua età?'));
console.log(age);

if (isNaN(age) || isNaN(chilometri)) {
    console.log('Inserisci solamente caratteri numerici!');
    location.reload();
}


let prezzoPerChilometro = chilometri * prezzoAlChilometro;
console.log(prezzoPerChilometro);

