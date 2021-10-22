// Exo comparer 2 nombres avec if else

// Version de Vanusa

let x = 100;
let y = 200;
    if (x < y) { 
alert('x contient ' + x + ' et cette valeur est inférieur à ' + y + '.');
}   else if (x > y) { 
alert('x contient ' + x + ' et cette valeur est supérieur à ' + y + '.');
}   else {
    alert('x contient ' + x + ' et cette valeur est égale à ' + y + '.');
}
console.log (typeof x,y);

document.getElementById('p1').innerHTML = 'Votre premier numéro, ' + x + ' est inférieur à votre second numéro ' + y + '!';

// let a = prompt('Tapez un premier nombre ici !');


// Version de Patrick

let nbr1 = prompt('Saisissez un 1er nombre.');
let nbr2 = prompt('Saississez un 2nd nombre');

console.log(typeof nbr1, nbr2);
console.log(typeof nbr2, nbr2 );

// Faisons le if else if qui compare deux nombres en sup, inférieur ou égal

if (nbr1 < nbr2) {
    document.getElementById('p2').innerHTML = 'Votre 1er ombre : ' + nbr1 + ' est plus petit que votre 2nd nombre : ' + nbr2;
} else if  (nbr1 > nbr2) {
    document.getElementById('p2').innerHTML = 'Votre 1er ombre : ' + nbr1 + ' est plus grand que votre 2nd nombre : ' + nbr2;
} else  
    document.getElementById('p2').innerHTML = 'Votre 1er ombre : ' + nbr1 + ' est égal à votre 2nd nombre : ' + nbr2;


// isNan() nous dit "ce n'est pas un nombre"
// !isNan() pour e contraire de isNan

// On doit vérifier d'abord que ce sont des nombres qui son saisis par l'utilisateur dans un if else
// Si ce sont des nombres on fera le test de comparaison
// Sinon on dira ce ne sont pas des nombres

if ( (!isNaN(nbr1)) && (!isNaN(nbr2)) ) {
    if (nbr1 < nbr2) {
        document.getElementById('p2').innerHTML = 'Votre 1er ombre : ' + nbr1 + ' est plus petit que votre 2nd nombre : ' + nbr2;
    } else if  (nbr1 > nbr2) {
        document.getElementById('p2').innerHTML = 'Votre 1er ombre : ' + nbr1 + ' est plus grand que votre 2nd nombre : ' + nbr2;
    } else  
        document.getElementById('p2').innerHTML = 'Votre 1er ombre : ' + nbr1 + ' est égal à votre 2nd nombre : ' + nbr2;
} 
    else {
    document.getElementById('p3').innerHTML  = 'Vous n avez pas saisi de nombre(s)';
}