// Dossier : 00 EXO
// 13 parité

// coucou();

// Exo 1 : Modifiez le programme, dans une boucle for, afin qu'il affiche dans la console les nombres impairs.
// <p id="p1"></p>
                
// Exo 2 : Puis modifiez le programme, toujours dans une boucle for afin que le nombre initial soit saisi par l'utilisateur.

// ATTENTION : le nombre saisi par l'utilisateur peut être n'importe lequel, limitez dans une nouvelle variable ce nombre en lui ajoutant 10 afin que le test "inférieur à" puisse être "testé"....

// Exo 3 : Faites la même boucle, en demandant un second nombre, avec while. //


// Des exemples :
console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1
console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2


console.log('*********** DEMO FOR ********');
// Pour la boucle for avec if else pour afficher les pairs

for (var i = 1; i<=10; i++) {
    if (i % 2 === 0) {
       console.log(i + ' est pair.');
    }
}

// Brouillon pour la boucle for avec if else pour afficher les impairs :
for (var i = 1; i <= 10; i++) { // i = 1 car on chercher les nombres impairs
    if ( i % 2 === 1)
    console.log(i + ' est impair');
}
console.log('*********');


// EXO 1 **************
console.log('********* EXO 1 **********'); 
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
       console.log(i + ' est pair.');
    } else {
        console.log(i + ' est impair');
    }
}

// EXO 2 ************** boucle FOR (if... else)
 document.write('<p> ******** EXO 2 ******** </p>');

 var nbrUtilisateur1 = parseInt(prompt('Exo 2 : rentrez un nombre entier, merci '));
 console.log(typeof nbrUtilisateur1, nbrUtilisateur1);

 var nbrUtilisteurMax = (nbrUtilisateur1 + 10);
 console.log(typeof nbrUtilisteurMax, nbrUtilisteurMax);

 for (var i = nbrUtilisateur1; i<=nbrUtilisteurMax; i++) {
    if (i % 2 === 0) {
       document.write('<p class="stabilo"> ' + i + ' est pair.</p>');
    } else {
        document.write('<p> ' + i + ' est impair.</p>');
    }
}

// EXO 3 ************* boucle WHILE
document.write('<p> ******* EXO 3 ********* </p>');



// EXO 1
//Boucle for avec if else pour afficher pairs et impairs en alternance
for (var i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
    console.log(i + ' est pair');
    } else {
    console.log(i + ' est impair');
    }
}

//Des console.log pour afficher les modulo/restes : les impairs
console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1
console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2


// EXO 2
document.write('<p>***** EXO 2 ******</p>');

var nbrUtilisateur1 = parseInt(prompt('Exo 2 : rentrez un nombre entier, merci '));
console.log(typeof nbrUtilisateur1, nbrUtilisateur1);

var nbrUtilisateurMax = (nbrUtilisateur1 + 10);
console.log(nbrUtilisateurMax, nbrUtilisateurMax);

for (var i = nbrUtilisateur1; i<=nbrUtilisateurMax; i++) {
    if (i % 2 === 0) {
        document.write('<p class="stabilo"> ' + nbrUtilisateur2 + ' est pair.</p>');
    } else {
        document.write('<p class="stabilo"> ' + nbrUtilisateur2 + ' est impair.</p>');
    }
}



// EXO 3 : boucle while
// Faites la même boucle, en demandant un second nombre, avec while. //

document.write('<p>************** EXO 3************ </p>');

var nbrUtilisateur2 = parseInt(prompt('Exo 3 : rentrez un nombre entier !'));
console.log(typeof nbrUtilisateur2, nbrUtilisateur2);

var nbrUtilisateurMax = (nbrUtilisateur2 + 10);
console.log(typeof nbrUtilisateur2, nbrUtilisateur2);

while (nbrUtilisateur2 <= nbrUtilisateur2) {
    // document.write('code');
    // nbrUtilisateur2++;

    if (nbrUtilisateur2 % 2 === 0) {
        document.write('<p class="stabilo"> ' + nbrUtilisateur2 + ' est pair.</p>');
    } else {
        document.write('<p class="stabilo"> ' + nbrUtilisateur2 + ' est impair.</p>');
    }
}
nbrUtilisateur2++;




















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