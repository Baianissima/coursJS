console.log ('Boa tarde !');

// Exo 16 : faire une boucle while


// boucle WHILE



let jeu = '';

while ((jeu !== 'oui') && (jeu !== 'non')) {
    taReponse = prompt('Maintenant, nous allons jouer au jeu "Oui ni Non !" Ecris ce que tu veux ici !');

    document.getElementById('p1').innerHTML += 'Tu as tapé ' + taReponse + ', donc tu as perdu !';

}
console.info(taReponse);



