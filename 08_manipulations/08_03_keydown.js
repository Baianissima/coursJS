// Page 08_03_keydown

// coucou();

document.addEventListener('keydown', clavier); //écouteur d'événement sur une boucle pressée




// Code de Fatima, doit marcher plus que celui de Patrick
// page Js pour 08/03 Keydown

document.addEventListener('keydown', clavier);//écouteur d'évènement sur une touche pressée
document.onkeydown = clavier;
console.log(document.getElementById('bouge'));

function clavier (e) {
    var carre = document.getElementById('bouge')
if (e.keyCode == '38') {//flèche haut
carre.style.top = (carre.offsetTop - 20) + 'px';
} else if (e.keyCode == '39') {//flèche de droite
    carre.style.left = (carre.offsetLeft + 20) + 'px';
}else if (e.keyCode == '40') {//flèche du bas
    carre.style.top = (carre.offsetTop + 20) + 'px';
} else if (e.keyCode == '37') {//flèche de gauche
    carre.style.left = (carre.offsetLeft - 20) + 'px';

}

}//fin fonction

// La div est censée bouger avec les manip clavier, mais avec ce code elle disparait avec fleche de bas : demander le code de Fatima, qui a marché

document.onkeydown = clavier;
console.log(document.getElementById('bouge'));

// la fonction clavier()
// function clavier(e) {
//     var carre = document.getElementById('bouge');
//     if(e.keycode == '38') {  // 38 flèche haut
//         carre.style.top = (carre.offsetTop - 20) + 'px';
//     } else if (e.keyCode == '39') {  //39 flèche de droite
//         carre.style.left = (carre.offsetLeft + 20) + 'px';
//     } else if (e.keyCode == '40') {  // 40 flèche du bas
//         carre.style.top = (carre.offsetTop + 20) + 'px';
//     } else if (e.keyCode == '37') {  // 37 flèche de gauche
//         carre.style.left = (carre.offsetLeft - 20) + 'px';
//     }
// } // fin fonction clavier


// avec le code de Patrick la div disparait : erreur a chercher
document.addEventListener('keydown', clavier);
        document.onkeydown = clavier;

            console.log(document.getElementById('move'));

            // function clavier(e) {
            //     var carre = document.getElementById('move')
            //     if (e.keyCode == '38') { // 38 flèche du haut
            //         carre.style.top = (carre.offsetTop - 20) + 'px';
            //     } else if (e.keyCode == '39') {// 39 flèche de droite
            //         carre.style.left = (carre.offsetLeft + 20) + 'px';
            //     } else if (e.keyCode == '40') {// 40 flèche du bas
            //         carre.style.top = (carre.offsetTop + 20) + 'px';
            //     } else if (e.keyCode == '37') {// flèche de gauche
            //         carre.style.left = (carre.offsetLeft - 20) + 'px';
            //     }
            // }// fin fonction clavier


