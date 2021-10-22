// mon second fichier externe en JS

// création de 3 variables qui ne stockent pas de valeurs

let prenom;
console.log(prenom);
// let monAge;

var ville;

/* Le signe égal = est un opérateur d'affectation */
prenom = 'Jean'; /* cette variable contient une chaine de caractères */

let monAge;
monAge = 40;   /* cette variable contient un nombre  */

// ceci fonctionne avec var, on initialise la variable après affectations
// même si NOM n est une variable decalrée car n a mis VAR
nom = 'Yourcenar';
var nom;
console.log(nom);

// ceci ne fonctionne pas
// vehicule = 'autobus';
// let vehicule;
// console.log(vehicule);

var chien = 'Médor';
console.log(chien);
var chien = 'kiki';
console.log(chien);

// avec let la redeclaration ne fonctionne pas, des errerus apparaissent sur la console
// let chat = 'Minet';
// console.log(chat);
// let chat = 'Minouchette';
// console.log(chat);

if(true){
    let animal ='Tigre';
    console.log(animal);
}

// console.log(animal);

if(true){
    var objet = 'Lampe';
    console.log(objet);
}
// ici var fait fonctionner aussi en global, en exterieur, alors que let, non : on voit apparaitre LAMPE 2 fois sur la console!
console.log(objet);

// EN RESUME : let a une portée locale, et var a une portée globale