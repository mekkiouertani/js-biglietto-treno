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

if (age < 18){
    prezzoPerChilometro = prezzoPerChilometro - (prezzoPerChilometro * 20/100);
    console.log('prezzoPerChilometro €', prezzoPerChilometro);
} else if (age > 65){
    prezzoPerChilometro = prezzoPerChilometro - (prezzoPerChilometro * 40/100);
    console.log('prezzoPerChilometro €', prezzoPerChilometro);
} else{
    console.log(prezzoPerChilometro);
}
