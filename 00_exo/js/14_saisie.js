// Dossier : 00 EXO - 14 saisie d'un nombre : boucle while

// coucou();
console.log('**********');

// Ecrivez à l'aide d'une boucle while, un programme qui invite l'utilisateur à saisir un nombre jusqu'à ce que ce nombre soit supérieur à 50 ET inférieur à 100. 

// Pensez à initialiser la variable de départ à 0 pour entrer dans la boucle

// Réfléchissez bien à la condition de cette boucle : quel est l'inverse de "compris entre 50 et 100" ?

document.write('<p>************** EXO 14 ************ </p>');


//la condition : tant que... continue à meetre le prompt jusqua que l user mette un chiffre entre 50 et 100. Pour le while, il faut initialiser la variable avant de faire le prompt.

let numberUser = 0;
console.log(typeof numberUser, numberUser);

console.log('************ WHILE **********');

// Pour la while ici on lit "entre 50 et 100"
while ((numberUser < 50) || (numberUser > 100)) {
     numberUser = prompt('Entrez entrez un nombre compris entre 50 et 100 !');
     console.log(typeof numberUser);
}

document.write('<p>Vous avez rentré le chiffre ' + numberUser + '. La variable récuperée est bien comprise entre 50 et 100.</p>');





















// Ex boucle while
// let manege2 = 0;
// while (manege2 < nbrTours1) {
//     manege2++;// si j'incrémente avant le bloc de code le compte démarre à 1 et s'arrête à nbrTours1
//     console.info(manege2);
//     document.getElementById('p2').innerHTML += 'while 1 ; c\'est le tour n° ' + manege2 + '<br>';
	// manege2++;// si j'incrémente après le bloc de code le compte démarre à 0 et s'arrête à nbrTours1 - 1
// } 

// let nbrTours1 = parseInt(prompt('WHILE / Combien de tours de manège voulez faire ? ', 'saisissez un nombre, svp'));
// console.log(typeof nbrTours1, nbrTours1);


// 
// let nbrTours2 = parseInt(prompt('FOR / Combien de tours à faire ?')); 
// for (let i = 1; i <= nbrTours2; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
//     console.info(nbrTours2);
//     document.getElementById('p4').innerHTML += 'FOR /  Avec une boucle for ; c\'est le tour n°' + nbrTours2 + '<br>';
// }