// corretion EXO 19 (17) - Triangle : faire un triangle dans la console avec le JS


// Boucle for

// alert('coucou');

//le triangle correction Régis - Mathieu

let nbrLigne = 17;

for (let ligne = 0; ligne <= nbrLigne; ligne++) {
        // les variables sont vides 
        let etoiles = '';
        let espaces = '';

        // 1er for pour les espaces au début de la ligne
        // sur la 1ère (qui aura une étoile) je place 6 espaces à gauche de l'étoile 1ère opération le nbr de lignes - l'étoile placée
        for (let col = 0; col <= nbrLigne - (ligne + 1); col++) {
            espaces += ' ';
        }

        // 2nd for pour les étoiles 
        for (let col = 0; col <= 2 * ligne + 1; col++) {
            etoiles += '*';
        }
        console.log(espaces + etoiles);
}

// à faire dans la page

// cherchons comment faire ensuite un sapin de noël

// essayez de le fabriquer dans la page après l'avoir dans la console

// 
// (ce n'est pas tout à fait un sapin de Noël il n'a pas encore de pied, vous pouvez essayer de fabriquer un pied après)
