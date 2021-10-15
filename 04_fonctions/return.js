// coucou();

/* Page return

// Les portéee locale et globale

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

// function division(x,y) {
//     if (y == 0) {
//         return 'Divisions par 0 impossible'
//     } else {
//         return  x / y; // On faisant un return ici, ça s'arrete tout de suite car c'est impossible de diviser par zero
//     }



//Autre otpion pour changer le number en string 
function division(x,y) {
    if (y == 0) {
        return 'Divisions par 0 impossible'
    } else {
        alert('Attends mon Coco, je calcule !');
        return (x / y).toFixed(2); // Ici j'arrondi et je change en string
        return x / y;
        // On faisant un return ici, ça s'arrete tout de suite car c'est impossible de diviser par zero
        // Ce code, après return ne sera pas executé
        // alert('Fin');
    }
}

// function division(x,y) {  // Ici on a 2 arguments en parentheses
//     return x / y;
// }

let nbr1 = prompt('Entrez un premier nombre a diviser');
let nbr2 = prompt('Entrez un second nombre qui divisera le premier');

let resultatDivision = division(nbr1, nbr2);
console.log(resultatDivision);

// console.log(division(5,2));

// let nbr3 = prompt('Entrez encore un nombre a diviser');
// let nbr4 = prompt('Entrez un diviseur');

// console.log(division(nbr3, nbr4));
document.getElementById('p1').innerHTML = nbr1 +' divisé par '+ nbr2 +' = ' + resultatDivision;

// Exemple pratique JS pour remplacer le POINT par la VIRGULE
// Nouvelle variable pour contenir le passage de resultatDivision de number à string

// remplacer le point par la virgule
console.log(typeof resultatDivision, resultatDivision);

//nelle variable pour contenir le passage de resultatDivision de number à string
let divisionString = resultatDivision.toString();// je change le number en string grâce à la fonction prédéfinie toString()
console.log(typeof divisionString, divisionString);//je fais un console log pour vérifier que cela marche 

let nellePhrase =  divisionString.replace('.',',');
document.getElementById('p2').innerHTML = nbr1 + ' divisé par ' + nbr2 + ' = ' + nellePhrase;

// Ici on change cette chaine de caracteres en NUMBER avec parseFloat
let divisionNumber = parseFloat(divisionString);
console.log(typeof divisionNumber, divisionNumber);




