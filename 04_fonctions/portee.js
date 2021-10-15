/* Page portée

// Les portéee locale et globale

alerte('Coucou');

CARACTERES A UTILISER :

barre bolique opposée \
== veut dire : equivaut à, égal à
= veut dire : contient
+= veut dire :
typeof : c'est NUMBER, des chiffres
string : c'est une chaîne de caractères, entre des quotes simples ' '
!= veut dire : différent de
* multiplier
*= ???
€ = altGr + E

*/

alert('Bom dia!');

// ATTENTION : Une fonction doit toujours être appellée après avoir été déclarée, sinon elle ne s'affiche pas !!!

//ATTENTION : évitons de déclarer plusieurs variables dans différents espaces en utilisant un même nom : ici on peut le fait pour la démo !!!
function porteNew() {
    let xLet = 1;
    var yVar = 2;

    if (true) {
        let xLet = 500; // Let n'aura pas de portée au-delà de ce bloc
        var yVar = 200; // Var aura une portée au delà de ce bloc

        document.getElementById('p1').innerHTML = 'la variable let "xLet" dans le if = ' + xLet;
        document.getElementById('p2').innerHTML = 'la variable let "yVar" dans le if = ' + yVar;

    } //fin if

    document.getElementById('p3').innerHTML = 'la variable let "xLet" dans le if = ' + xLet;
    document.getElementById('p4').innerHTML = 'la variable let "yVar" dans le if = ' + yVar; // yVar affichera la dernière valeur déclarée car var a une portée élargie

} // fin fonction
porteNew();

let x = 5;
var y = 10;

function portee1() {  //Dans cette fonction j'appelle des variables qui ont une portée globale
    document.getElementById('p5').innerHTML = 'Depuis la fonction <code>portee1</code> : x ' + x + ' et y = ' + y;
}

function portee2() {
    let a = 123;
    var b = 456;
    document.getElementById('p6').innerHTML = 'Depuis la fonction <code>portee2</code> : a ' + a + ' et b = ' + b;
}

function portee3() {
    let x = 222; // les variables de la fonction ont le même nom que les globales
    var y = 444; // la fonction ici va utiliser les variables locales
    document.getElementById('p7').innerHTML = 'Depuis la fonction <code>portee3</code> : x ' + x + ' et y = ' + y;
}

// appel des fonctions
portee1();
portee2();
portee3();

// On affiche les globales x et y
document.getElementById('p8').innerHTML = 'Ce code n\'est pas dans une fonction ! Je suis dans l\'espace global et je cherche les contenus de x et y : x = ' + x + ' et y = ' + y;

// On va tenter maintenant d'afficher les locales cf. message dans la console, message normale
document.getElementById('p9').innerHTML = 'Depuis l\'espace local : a =  ' + a + ' et b = ' + b; 
// Ici on ne peut pas récuperer le a parce qu il est dans la fonction locale portee2

