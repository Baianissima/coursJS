// js pour la page if

//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// pour tester la console, creer un alerte :
// alert('coucou');


let x = 4;
let y = 0;


// if(TEST) si test est évalué à true
// 1er if

if(x > 1) {
    alert('1/ x contient ' + x + ' et cette valeur est supérieur à 1');
    // on exécute ce bloc de code
}

// 2e

if(y < 1) {
    alert('2/ y contient ' + y + ' et cette valeur est inférieur à 1');
}

// lecture : "SI" y est égal ou plus grand que "1", le code est exécuté, car c'est VRAI. Si c'est FAUX, l'alerte n'est pas déclenché !

console.log(x, y);


//3e

if(x == y) {
  alert('3/ x = ' + x + ', et y = ' + y + ' les deux variables contienent la même valeur');
}

// alert('x et y contiennent la même valeur');

console.log(x, y);


// 4e
//l'alerte ne s'affiche pas car la valeur de y, qui contient 0,0 est une des valeurs qui renvoie false - zero c'est forcément FAUX = false : 0 = faux

if(y) {
    alerte('4/ la valeur de y est éaluée à "true"');
}
// 0 renvoie toujours false


// 5e
if(false) {
    alert('5/ true /// vrai');
}
// on n'a pas les alertes qd sont evalu"e a FALSE, ce que TRUE qu apparait en alerte

// OU les autres exemples :

// let chaine = '';
// if(chaine) {
//     alert('5/ true /// vrai');
// }

// if(null) {
//     alert('5/ true /// vrai');
// }

// if(NaN {
//     alert('5/ true /// vrai');
// }



// 6e
// Au lieu de vérifier que le test est vrai, on va vérifier qu'il est faux (false) == false
// Si c'est bien faux, le code s'éxecute

if((x > 1) == false){
    alert('6/ x qui contient ' + x + ' est supérieur à 1');
}



// Autre exemple pour test faux - le code s execute, avec x =  -5
// let x = -5;
// let y = 0;

// if((x > 1) == false){
//     alert('6/ x qui contient ' + x + ' est supérieur à 1');
// }



// 7e
if(x == y) {
    alert('7  x et y ne contiennent pas la même valeur');
}