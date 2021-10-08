// pour la page opérateur ternaire (à découvrir seulement, Patrick ne la pratique pas)

// page if else

//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// alert('BOM DIA!');

let x = 15;
let y = -20;
console.log(x,y);

// EXO : Faire un if else pour vérifier si x est supérieur ou égal à 10
// Puis et on inject le résultat dans "p1"

// Chemins pour commencer a repondre l exo :

//A) if (x >= y) {
//     document.getElementById('p1').innerHTML = 'vrai';
//     alert(x >= y);
// } else {
//     document.getElementById('p1').innerHTML = 'faux';
// }


// B) if (x >= y) {
//     document.getElementById('p1').innerHTML = 'vrai';
//     alert(x >= y);
// } else {
//     document.getElementById('p1').innerHTML = 'faux';
// }


//C) if (x >= y) {
//     document.getElementById('p1').innerHTML = 'x est supérieure ou égale à 10';
//     alert(x >= y);
// } else {
//     document.getElementById('p1').innerHTML = 'x est inférieur à 10';
// }


// Réponse :

if (x >= 10) {
    document.getElementById('p1').innerHTML = 'x qui vaut ' + x + ', x est supérieure ou égale à 10';
   alert('x >= 10');
}  else {
   document.getElementById('p1').innerHTML = 'x qui vaut ' + x + ', x est inférieur à 10';
}

// La même condition en ternaire
// ? équivaut à if : équivaut à else



// test ? /if ' bloc de code ' : /else : 'bloc de code' (:  à la place de else)

document.getElementById('p2').innerHTML = x >=10 ? 'x est supérieur ou égal à 10' : 'x est inférieur à 10';

// let x = 15;
// let y = -20;
// console.log(x,y);


// EXO :
// tester si y est supérieur à 10

// if else p3

if(y > 10) {
    document.getElementById('p3').innerHTML = 'y qui vaut ' + y + ' est supérieur à 10';
   
} else {
    document.getElementById('p3').innerHTML =  'y qui vaut ' + y + ' est  inférieur à 10';
}

// La même en ternaire p4

document.getElementById('p4').innerHTML = y > 10 ? 'y est supérieur à 10 ' : 'y est inférieur à 10';

// ici sur ternaire du p4, les : remplace ELSE




