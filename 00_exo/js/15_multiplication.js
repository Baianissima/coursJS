// Dossier : 00 EXO - 15 Multiplication - boucle for

// coucou();


// <h2>Consignes</h2>
// Ecrivez à l'aide d'une boucle for un programme multiplication js qui fait saisir un nombre à l'utilisateur puis affiche la table de multiplication de ce nombre (Resultats pour la consigne 1 - ici Number avec majuscule express, mais pourquoi ?) :


var nombre1 = Number(prompt('Faisons la table de multiplication d un nombre.'));
// var nombre1 = parseInt(prompt('Choisissez un premier nombre'));
console.log(typeof nombre1, nombre1);

for (var i = 1; i <= 10; i++) {
    var resultat = nombre1 * i;
    document.getElementById("p1").innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';
}


// Ensuite, améliorez votre programme pour vérifier que le nombre saisi soit compris entre 2 et 9, en vous inspirant de l'exercice précédent (avec la boucle for ci-dessus dans le if else) :

var nombre2 = Number(prompt('Et maintenant un nombre entre 2 et 9.'));
console.log(typeof nombre2, nombre2);

if(nombre2 >= 2 && nombre2 <= 9) {
    for (var i = 1; i <= 10; i++) {
        var resultat = nombre2 * i;
        document.getElementById("p2").innerHTML += nombre2 + ' x ' + i + ' = ' + resultat + '<br>';
    } 
} else {
    documentdocument.getElementById("p2").innerHTML = "Le nombre doit être compris entre 2 et 9 !";
}























// console.log('**********');


// EXO 2 : autre manière de le faire
// for (let for3 = 0; for3 <= 10; for3++) {
//     console.info('for3');

//     if (for3 < 10) {
//     document.write('for3 contient ' + for3 + ' <br>');
//     } else {
//     document.write('Et la boucle se termine là car for3 arrive à ' + for3);
//     } /* fin du else */
// } /* fin du for */

// for (let for2 = 0; for2 <= 10; for2++) {
//     console.info('for2');

//     if (for2 == 10) {
//     document.write('Et la boucle se termine là ! ' + for2);
//     } else {
//     document.write('for2 contient ' + for2 + ' <br>');
//     } /* fin du else */
// }


// let multiplication = 0;
// console.log(typeof multiplication, multiplication);

// for (let multiplication =)

// avec la boucle while

// while ((tableMatiere < 50) || (tableMatiere > 100)) {
//     numberUser = prompt('Entrez un nombre compris entre 50 et 100 !');
//     console.log(typeof numberUser);
// }
// document.write('<p>Vous avez rentré le chiffre ' + numberUser + '. La variable récuperée est bien comprise entre 50 et 100.</p>');
































// let numberUser = 0;
// console.log(typeof numberUser, numberUser);

// console.log('************ WHILE **********');

// // Pour la while ici on lit "entre 50 et 100"
// while ((numberUser < 50) || (numberUser > 100)) {
//      numberUser = prompt('Entrez entrez un nombre compris entre 50 et 100 !');
//      console.log(typeof numberUser);
// }

// document.write('<p>Vous avez rentré le chiffre ' + numberUser + '. La variable récuperée est bien comprise entre 50 et 100.</p>');





















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