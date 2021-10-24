//pour la page types.js

// 1 - STRING

// let presentation = "Je m'appelle Michaël."

let presentation = 'Je m\'appelle Michaël.'
console.log(typeof(presentation));

let age = 25;
let age2 = 56;

// ici on injecte la phrase(un contenu) dans le HTML
// 1 - récupérer dans le doc un élément dont l'id est XX
// 2 - remplacer le contenu d'un élément identifié par son id
// 3 - puis on concatène (avec +) une string et le résultat de la fonction typeof()
// 4 - le résultat s'affiche dans la page
// innerHTML veut dire "injecter dans le HTML"

document.getElementById('p1').innerHTML = 'Type de données pour la variable presentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'Type de données pour la variable age : ' + typeof age;


document.getElementById('p3').innerHTML = 'Type de données pour la variable age2 : ' + typeof age2;

let monFilm1 = 'Mon film préferé est "20 000 lieux sous les mers" avec Kirk Douglas';

console.log(monFilm1);

// ICI, on voit qu'il faut echapper avec antislash s on utilise les simples quotes pour le titre du film 
let monFilm2 = 'Mon film préferé est \'20 000 lieux sous les mers\' avec Kirk Douglas';

console.log(monFilm2);


// 2 - NUMBER

let x = 10;
let y = -20000;
let z = 3.14;

console.log(z);

// on peut passer 2 arguments dans la console
console.log(typeof z, z);

document.getElementById('p4').innerHTML = 'Type de données pour la variable x : ' + typeof x;


// 3 - BOOLEAN

// boolean ne contient que 2 valeurs : true ou false
// true = vrai
// false : faux

let test = 8 > 4;
console.log(typeof test, test);
// console.log(typeof(test), test); ICI la réponse sur la console est TRUE, car 8 est > que 4 (et c est la variable TEST)



//4 et 5 NULL et UNDEFINED

let nul = null;
let indefini;

console.log(typeof nul);

document.getElementById('p5').innerHTML = 'Le type de la variable nul est : ' + typeof nul;

document.getElementById('p6').innerHTML = 'Le type de la variable indefini est : ' + typeof indefini;


// ACTIVITE 1 - Web Force
let maVar = "Bonjour";
console.log(maVar);


