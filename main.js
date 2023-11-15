/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Creare la griglia in html
// rifaccio la griglia con js

// creazione bottone 'genera'

const play = document.getElementById('play');

play.addEventListener('click', function () {
  griglia.classList.remove('hidden');
});

function creazioneCelle(tag, classe, contenuto) {
  const cell = document.createElement(tag);
  cell.classList.add(classe);
  cell.append(contenuto);

  return cell;
}

const griglia = document.querySelector('.griglia');

for (let i = 1; i <= 100; i++) {
  const numeriCelle = creazioneCelle('div', 'casella', i);
  griglia.append(numeriCelle);

  // al click in una cella fai comparire il relativo numero in console
  // aggiungi la classe con il nuovo colore
  numeriCelle.addEventListener('click', function () {
    numeriCelle.classList.add('blue');
    console.log(i);
  });
}
