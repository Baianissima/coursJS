// JS pour la page boucles : ici c'est la boucle for


//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// += veut dire : additionner
// -= veut dire : soustraire
// > < superieur et inferieur
// <= inferieur ou egale à
// >= superieur ou egal à
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// alert('Bom dia!');

// EXEMPLE 1 :
// for (let i = 0; i < 10; i++) { /*  for (1- initialisation de la variable; 2- text ou condition de sortie; 3- incrémentation) */

//     document.getElementById('p1').innerHTML += 'La variable i contient : ' + i + ' à chaque passage de la boucle <br>';
// ici on fait repeter un break, saut a la ligne plusieurs fois

//     // console.info(typeof i, i);
// }

/* i = itérator = curseur */



// EXEMPLE 2 :

for (let i = 0; i < 10; i++) { /*  for (1- initialisation de la variable; 2- text ou condition de sortie; 3- incrémentation) */

    document.getElementById('tb1').innerHTML += '<tr><td>La variable i contient : ' + i + ' à chaque passage de la boucle </td></tr>';

    console.info(typeof i, i);
}

for (let arreteToi = 0; arreteToi < 100; arreteToi++) {
    if (arreteToi == 56) {
        break; // instruction
    } //fin du if

    document.getElementById('p2').innerHTML += 'La variable arreteToi contient ' + arreteToi + ' à chaque tour de boucle.<br>';
}/* fin de for */