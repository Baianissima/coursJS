// Page fonctions : random, replace...


//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// += veut dire :
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de
// * multiplier
// *= ???
// € = altGr + E



// alert('Bom dia!');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();
//Ici on éxecute le code "caché" derrière la focntion, on appelle la focntion ou on l'invoque
// ici la focntion est MATH et l'objet est RANDOM


// replace

let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné !';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

