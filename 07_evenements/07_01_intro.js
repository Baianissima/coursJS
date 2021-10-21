// Dossier : 07 evenemnt
// Page 07_01_intro

// coucou();

// 1-Evenements avec une fonction
let event1 = document.querySelector('#rouge');
console.log(event1);
console.log(event1.innerHTML);

//On va utiliser
event1.addEventListener('click',fonctionDivRouge);
// Creation de la fonction

// si je veux débugger la fonction je peux passer e comme event dans les paramètres et faire un console.log(e) dans la fonction 
// function fonctionDivRouge(e) {
//     console.log(e);
//     alert('Vous avez cliqué sur la div #rouge !');
// }

function fonctionDivRouge() {
    alert('Vous avez cliqué sur la div #rouge et maintenant elle est verte !')
    this.style.background = 'green';
}

//second exemple : avec une fonction anonyme :

let event2 = document.querySelector('#p1');
console.log(event2);

// event2.addEventListener('click',function() {
//     alert('Vous avez cliqué sur le paragraphe id p1');
//     this.style.background = "green";
//     this.style.color = "black";
// });

//Le même code sans utilisation de variable :

document.querySelector('#p1').addEventListener('click', function() {
    alert('Vous avez cliqué sur le paragraphe id p1');
    this.style.background = "yellow";
    this.style.color = "black";
});


// 2 - Nouveau mot-clef "mouseover" : au passage de la souris

document.getElementById('orange').addEventListener('mouseover', fonctionDivOrange);

function fonctionDivOrange(e) {
    // console.log(e);
    // console.log('this : ',this); une façon p verifier : ici on cible que la console.log pour "this"

    //alert decomménté
    // alert('Vous avez survolé la div orange');

    // je change le texte : ici on fait apparaîte Coucou quand on surbole avec la souris
    this.innerHTML = "Coucou !";

    // je change la taille de typo à 1.5em

    this.style.fontSize = "1.5em";

    // this.style.display = "none"; ici on fait disparaître la div
}

// 3- Nouveau mot-clef "mouseout"
document.querySelector('#bleu').addEventListener('mouseout',fonctionDivBleu);

function fonctionDivBleu(e) {
    alert('Vous êtes passé sur la div #bleu !');
    this.innerHTML = "Coucou2";
    this.style.fontSize = "1.5em";
}