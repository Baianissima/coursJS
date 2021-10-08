// JS pour la page operateurs logiques

// page if else

//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de



alert('BOM DIA!');

//Les 3 operateurs logiques : ET, OU ou NON

let x = 5, y = -20;
console.log(x, y);


// ET : &&
// ET, noté && : dans cet exemple chaque condition doit être vraie

if (x >= 0 && x >= 10) {
    document.getElementById ('p1').innerHTML = ' x vaut ' + x + ' et est compris entre 0 et 10';
} 


// OU : ||
//  les 2 barres droites avec raccourci ALT GR + 6 

if ( y < 10 || y > 10) {
    document.getElementById ('p2').innerHTML = ' y vaut ' + y + ' et une valeur plus petite que - 10 ou plus grande que 10';
}



// NO : ! 
// Opérateur inversé : ce n'est pas vrai, 5 n'est pas inférieur ou égal à 2. autrement dit, si le test est FALSE, l'opérateur inversé (la négation !) renvoie TRUE/VRAI, donc on éxécute

// !( x <= 2) = vrai, il y a toujours un vrai qd c'est OU

// On peut dire : "c'est vrai que c'est faux"


if(!(x <= 2)){
    document.getElementById('p3').innerHTML =
    'x contient ' + x +' une valeur strictement supérieure à 2';
}

