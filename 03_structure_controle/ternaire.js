// pour la page opérateur ternaire

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
    document.getElementById('p1').innerHTML = 'Pour x qui vaut ' + x + ', x est supérieure ou égale à 10';
   alert('x >= 10');
}  else {
   document.getElementById('p1').innerHTML = 'Pour x qui vaut ' + x + ', x est inférieur à 10';
}
