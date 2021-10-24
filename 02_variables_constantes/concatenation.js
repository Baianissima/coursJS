//scripts pour la page concaténation

// ici la barre oblique contraire : \
// Toujours travailler avec la console ouverte (inspecteur)

// ici un test pour voir si mon JS est bien lié à mon html :
// alert('coucou');

// alert('coucou');

// une variable dans laquelle on met notre âge avec un calcul

let monAge = 19 + 1;
console.log(monAge);

// utilisation du caractere d'echapement
let phrase = 'Bonjour j\'ai';

// let phrase2 = "Bonjour j\'ai faim";

// let test = '4 + 5';

console.log(phrase);

console.log(monAge, phrase);

// MINI EXO : faire une alerte et mettre dans l'alerte "Bonjour, J'ai 20 ans";

alert(phrase + ' ' + monAge + ' ans.');




// MINI EXO : écrire dans une alerte  x contient 501, y contient 99 : leur somme est égaleà 600.


let x = 501;

let y = 99;

// console.log(x, y);
// console.log(x + y);

// console.log(' x contient ' + x + ' y contient ' + y + ' leur somme est égale à ' + (x+y));

alert(' x contient ' + x + ' y contient ' + y + ' leur somme est égale à ' + (x+y));

// en littéraux de gabarits avec l'accent grave, sans le + : raccourci ALT GR + 7
alert(`x contient ${x}`);

alert(`y contient ${y}`);

alert(`x contient ${x}`);

alert(`x contient ${x}, y contient ${y}, leur somme est égale à ${x +y}`);
console.log(`x contient ${x}, y contient ${y}, leur somme est égale à ${x +y}`);

// Ici on met la phrase à la ligne
alert(`x contient ${x}
y contient ${y}
leur somme est égale à ${x +y}`);
