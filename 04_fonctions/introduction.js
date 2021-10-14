/* Page fonctions : random, replace...

CARACTERES A UTILISER :

barre bolique opposée \
== veut dire : equivaut à, égal à
= veut dire : contient
+= veut dire :
typeof : c'est NUMBER, des chiffres
string : c'est une chaîne de caractères, entre des quotes simples ' '
!= veut dire : différent de
* multiplier
*= ???
€ = altGr + E

*/


// alert('Bom dia!');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();
//Ici on exécute le code "caché" derrière la fonction, on appelle la fonction ou on l'invoque

// ici la fonction est RANDOM et l'objet est MATH

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// https://beautifytools.com/javascript-validator.php

// Une fonction doit toujours être appellée après avoir été déclarée, sinon elle ne s'affiche pas !!!


// La fonction replace

let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné !';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;


// création de fonctions

// 1er exemple : multiplier le résultat de random() par 100
// return veut dire "renvoie"

function randomFois100() {
    return Math.random() * 100;
}
console.log(randomFois100);
document.getElementById('p3').innerHTML = randomFois100;


// 2nd exemple : une multiplication

// mot-clé + nom de la fonction

function multiplier(nbr1,nbr2) { // les parametres de la function
    // return (nbr1 * nbr2); // la function simplement
    /* sur function entre parentheses ce sont les arguments */
    // la virgule des parentheses sépare les paramètres et les arguments

    // ci-dessous on a return en version améliorée :
    return ('Multiplication : ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2)); // bloc de code qui renvoie une string avec le calcul
}

//Ici on "appele" la fonction
// Un appel de fonction
/* Ci-dessous on dit de multiplier les 2 chiffres = on voit 6 sur la console */

console.log(multiplier(2,56));  // la fonction avec les arguments


// Ci-dessous, exemple pour p4, entre parantheses on a les paramètres entre parantheses et virgule
document.getElementById('p4').innerHTML = multiplier (56, 9);



// EXO : Faites une fonction pour soustraire un nombre d'un autre

// Soustraction
function soustraire(nbr1,nbr2) {
    // return (nbr1 - nbr2);
    return ('Soustraction : ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2));
}
console.log(soustraire(10,54));
document.getElementById('p5').innerHTML = soustraire(56,9);


// Division
function diviser(nbr1,nbr2) {
    // return (nbr1 / nbr2);
    return ('Division : ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 / nbr2));
}
console.log(diviser(10,54));
document.getElementById('p6').innerHTML = diviser(56,9);


// Addition
function additionner(nbr1,nbr2) {
    // return (nbr1 + nbr2);
    return ('Additionner : ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1 + nbr2));
}
console.log(additionner(10,54));
document.getElementById('p7').innerHTML = additionner(56,9);


// A COMPLETER MODULO : chercher correction, car mon résultat n'est pas bon sur la console :-(
// Modulo
function leModulo(nbr1,nbr2) {
    // return (nbr1 % nbr2);
    return ('Le modulo (le reste de la division) : ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 % nbr2));
}
console.log(leModulo(10,54));
document.getElementById('p8').innerHTML = leModulo(10, 54);

