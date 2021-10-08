// page if else, if else


//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de



// EXEMPLE 1 :

// let x = 1;
// console.log(x);

// if (x > 1) {
//     alert('VRAI x contient une valeur strictement supérieure à 1');
// } else if (x == 1) {
//     // sinon, si c'est vrai
//     alert('SINON VRAI x contient une valeur égale à 1');
// } else {
//     alert('FAUX x contient une valeur strictement inférieure à 1');
// }



// EXEMPLE 2 :

let x = -10;
console.log(x);


if ( x > 1) {
    alert('1/ x contient une valeur strictement supérieure à 1');
} else if ( x == 1 ) {
    alert('2/ x est égal à 1');
} else if ( x < 1 ) {
    alert('3/ x contient une valeur strictement inférieure à 1');
} else if ( x < 0 ) {
    alert('4/ x contient une valeur strictement inférieure à 0');
} else if (x < -2 ) {
    alert('5/ x contient une valeur strictement inférieure à -2');
} else {
    alert('6/ la valeur de x n\'a pas pu être comparée à un nombre');
}