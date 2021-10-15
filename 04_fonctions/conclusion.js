coucou();

//Page conclusion de fonctions


// On crée une fonction anonyme
// function() {
//     alert('Alerte exécutée dans une fonction anonyme');
// }


// Comment l'appeler ? Je la passe en variable
// Celle là est appelé par monAlerte
let monAlerte = function() {
    alert('Alerte exécutée dans une fonction anonyme');
}
monAlerte();


// auto-invocation d'une fonction anonyme, pas besoin de l'appeler à la fin

// (function() {
//     alert('Alerte dans une seconde fonction');
// }) ();

// fonction auto-invoquée
(function() {
    alert('Alerte dans une seconde fonction');
}) ();

let para1 = document.getElementById('p1');
console.log(typeof para1, para1);

//Ici "ajoute un ecouteur de evenement"
para1.addEventListener('click', function(){
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !')
});

let para2 = document.getElementById('p2');
console.log(para2);
para2.addEventListener('dblclick', function() {
    alert('Et là un double clique sur le paragraphe.')
});

// fonction recursive

function decompte(t) {
    if(t > 10) {
        document.getElementById('p3').innerHTML += t + ' - ';
        return decompte(t - 10);
    } else {
        return t;
    }
} //fin fonction

decompte(1000);
