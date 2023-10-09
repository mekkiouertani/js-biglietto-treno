let myTxt = document.getElementById("txt");
console.log(myTxt);
let prezzoAlChilometro = 0.21;


let chilometri = prompt("Hey, quanti chilometri vuoi percorrere?");
console.log(chilometri);
let age = prompt('Bene! Qual è la tua età?')
console.log(age);

let prezzoPerChilometro = chilometri * prezzoAlChilometro;
console.log(prezzoPerChilometro);
myTxt.hinnerHTML = prezzoPerChilometro;