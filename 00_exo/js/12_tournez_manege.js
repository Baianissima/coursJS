// coucou();

// Exo : Exo 12 - tournez manege

// Faire en boucle WHILE et après en boucle FOR

// Il faut incrémenter : ++


// Version de Patrick :

// 1- boucle WHILE
let manege = 0;
// console.log(typeof manege, manege);
while (manege < 3) {
    manege++;
    // console.log(manege);
    document.getElementById('p1').innerHTML += 'while 1 ; c\'est le tour n° ' + manege + '<br>';
} 

// let tour1 = 0;
// console.log(typeof tour1, tour1);
// while (tour1 < 3) {
//     document.getElementById('tour1').innerHTML += 'C\'est le tour de manège numéro ' + tour1 + '<br>';
//     tour1++;
//     console.log(typeof tour1, tour1);
// }

let nbrTours1 = parseInt(prompt('WHILE / Combien de tours de manège voulez faire ? ', 'saisissez un nombre, svp'));
console.log(typeof nbrTours1, nbrTours1);

let manege2 = 0;
while (manege2 < nbrTours1) {
    manege2++;// si j'incrémente avant le bloc de code le compte démarre à 1 et s'arrête à nbrTours1
    console.info(manege2);
    document.getElementById('p2').innerHTML += 'while 1 ; c\'est le tour n° ' + manege2 + '<br>';
	// manege2++;// si j'incrémente après le bloc de code le compte démarre à 0 et s'arrête à nbrTours1 - 1
} 

for (let i = 1; i <= 10; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
        // console.info(i);
        document.getElementById('p3').innerHTML += 'for 1 ; c\'est le tour n°' + i + '<br>';
    }

let nbrTours2 = parseInt(prompt('FOR / Combien de tours à faire ?')); 
for (let i = 1; i <= nbrTours2; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
    console.info(nbrTours2);
    document.getElementById('p4').innerHTML += 'FOR /  Avec une boucle for ; c\'est le tour n°' + nbrTours2 + '<br>';
}




/////////////////////////////////////////////////////////


// Tapé par Vanusa pendant les corrections : fonctionne

// boucle WHILE
// let tournezManege = 0;
// console.log(typeof tournezManege, tournezManege);

// while (tournezManege < 10) {
//     document.getElementById('p1').innerHTML += 'Avec une boucle while, c\'est le tour n° '  + tournezManege + '<br>';
//     console.log(tournezManege, tournezManege);
//     tournezManege++;
// }

// while (tournezManege < 10) {
//     document.getElementById('p1').innerHTML += 'Avec une boucle while, c\'est le tour n° '  + tournezManege + '<br>';
//     console.log(tournezManege, tournezManege);
//     tournezManege++;
// }

// for(let i = 1; i <= 10; i++){ // Ici on initialise i à 1 car les tours commencent à 1 et pas à zero; i prend la valeur 1, boucle une 1ère fois et ncrémente (jusqu'à 10)
//     console.info(i);
//     document.getElementById('p3').innerHTML += 'Avec une boucle for, c\'est le tour n° ' + i + ' <br>';
// }

// Essai du FOR de Vanusa avec plus de code et ça a marché la boucle de 10 :
// for (tournezManege = 0; tournezManege < 10; tournezManege++) {
//     if (tournezManege == 10) {
//         break;
//     }
//     document.getElementById('p2').innerHTML += 'Avec for : c\'est le tour n° ' + tournezManege + ' <br> ';
// }


// Suite EXO : While et for avec prompt

// let nbTours1 = prompt ('WHILE / Combien de tours de manège à faire ?');
// for(let i = 0; i <= nbTours1; i++){ // Ici on initialise i à 1; i prend la valeur 1, boucle une 1ère fois et incrémente
//     console.info(i);
//     console.log(typeof nbTours1, nbTours1);

//     document.getElementById('p3').innerHTML += 'Avec une boucle for en prompt, c\'est le tour n° ' + i + ' <br>';
// }

// let manege2 = 0;
// while(manege2 < nbTours1) {
//     manege2++; // Si j'incrémente avant le bloc de code le compte démarre à 1 et s'arrête à nbrTours1
//     console.info(manege2);
//     document.getElementById('p4').innerHTML += 'While / c est le tour n° ' + manege2 + ' <br>';
// }

// let nbTours2 = parseInt(prompt ('FOR / Combien de tours de manège à faire ?'));
// for(let i = 1; i <= nbTours2; i++){ // Ici on initialise i à 1; i prend la valeur 1, boucle une 1ère fois et incrémente : rajoute des tours suivant le nombre tapé sur le prompt
//     console.info(i);
//     console.log(typeof nbTours2, nbTours2);
//     document.getElementById('p5').innerHTML += 'FOR / Avec une boucle for en prompt, c\'est le tour n° ' + i + ' <br>';
// }







            