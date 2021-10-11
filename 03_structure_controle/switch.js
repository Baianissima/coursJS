// pour la page switch

// une alternative au if... else if...

//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// alert('BOM DIA!');


let x = 15;
console.log(typeof x, x);

// switch(), case break, case, break, default

// x = 2 ? ou 5 ? ou 10 ? ou 15 ? ou 20 ?

// on va switcher, on va commiter sur la variable, il faut toujours choisir où on met le break, sinon le résultat peut être erroné
// break sort du switch si c est vrai

switch(x) {
    case 2:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break;
    case 5:
        document.getElementById('p1').innerHTML = 'x contient la valeur 5';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x contient la valeur 10'; 
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x contient la valeur 15'; 
        break;
    case 20:
        document.getElementById('p1').innerHTML = 'x contient la valeur 20'; 
        break;
    default:
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni, 5, ni 10, ni 15, ni 20 !!!';
}
// fin switch après l'accolade




