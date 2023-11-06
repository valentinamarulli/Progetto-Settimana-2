/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
  
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort ();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log (pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift();
console.log(pets);
pets.push ('redfish');
console.log (pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i] = Object.assign(cars[i], { licensePlate: Math.floor(Math.random() * 4) })
  console.log (cars[i]);
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: 'tesla',
  model: 'model s',
  color: 'black',
  trims: ['P100D', 'plaid', 'performance'],
};
cars.push (newCar);
console.log (cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice(cars[i].trims.length - 1, 1);
}

console.log(cars);



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
     justTrims.push(cars[i].trims[0]);
}
console.log(justTrims)


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  
  
  let letter =cars[i].color.charAt(0);
 
  if (letter === 'b') {
    
    console.log('Fizz');
  } else {
    console.log('Buzz'); 
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/




const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while (numericArray[i] !== 32) {
  
  console.log(numericArray[i]); 
   i++;

}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/


let charactersArray = ['g', 'n', 'u', 'z', 'd'];

for (let character of charactersArray) {
  switch (character) {
  case 'a': console.log('1'); break;
  case 'b': console.log('2'); break;
  case 'c': console.log('3'); break;
  case 'd': console.log('4'); break;
  case 'e': console.log('5'); break;
  case 'f': console.log('6'); break;
  case 'g': console.log('7'); break;
  case 'h': console.log('8'); break;
  case 'i': console.log('9'); break;
  case 'l': console.log('10'); break;
  case 'm': console.log('11'); break;
  case 'n': console.log('12'); break;
  case 'o': console.log('13'); break;
  case 'p': console.log('14'); break;
  case 'q': console.log('15'); break;
  case 'r': console.log('16'); break;  
  case 's': console.log('17'); break;
  case 't': console.log('18'); break;
  case 'u': console.log('19'); break;
  case 'v': console.log('20'); break;
  case 'z': console.log('21'); break;
  
  default:
    console.log ('non è un carattere italiano')
    break;
}
}