console.log ('Boa tarde !');

// Exo 16 : faire une boucle while : vaut 5 points

console.log ('---- EXO 16 : une boucle while ----');

// CORRECTION DE PATRICK :

let disMoi = '';
let i = 1;

// Ici on lit "Tant que le prompt ne contient pas oui ET ne contient pas non, continue à éxecuter le prompt" :

while ((disMoi !== 'oui') && (disMoi !== 'non')) {
    disMoi = prompt('Maintenant, nous allons jouer au jeu "Oui ni Non !" Ecris ce que tu veux ici !');
    i++; // une boucle a besoin de nombre de tours : il faut mettre i++

    document.getElementById('p1').classList.add('stabilo');
    document.getElementById('p1').innerHTML = 'Vous avez perdu !';
}
console.info(disMoi);
console.log ('---- boucle terminée ----');



//Ma version rendue:
// let jeu = '';

// while ((jeu !== 'oui') && (jeu !== 'non')) {
//     taReponse = prompt('Maintenant, nous allons jouer au jeu "Oui ni Non !" Ecris ce que tu veux ici !');

//     document.getElementById('p1').innerHTML += 'Tu as tapé ' + taReponse + ', donc tu as perdu !';

// }
// console.info(taReponse);



