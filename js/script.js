//chiedo il nome e creo la variabile con il risultato
const varName = prompt("Ciao utente quale è il tuo nome?"); //string
// verifico il dato
console.log(varName, typeof varName);

// chiedo il cognome e creo la variabile con il risultato
const varSurname = prompt(`Bene ${varName}, ora quale è il tuo cognome?`); //string
//verifico il dato
console.log(varSurname, typeof varSurname);

//chiedo il colore preferito e creo la variabile con il risultato
const varColor = prompt(`Perfetto ${varName}, un'ultima domanda, quale è il tuo colore preferito? (possibilmente in inglese)`); //string
//verifico il dato
console.log(varColor, typeof varColor);

//genero il numero random
let randomNumber = Math.floor((Math.random() * 99)); //number
console.log(randomNumber, typeof randomNumber);

// concateno password
const password = varName + varSurname + varColor + randomNumber; // string
//verifico il dato
console.log(password, typeof randomNumber);

// passiamo alla stampa
document.getElementById("welcome").innerHTML ="Benvenuto";

document.getElementById("user").innerHTML = ` ${varName},`;

document.getElementById("text").innerHTML = "ti consiglio questa password:";

document.getElementById("password").innerHTML = `${password}`;

document.getElementById("password").style.color= `${varColor}`;



