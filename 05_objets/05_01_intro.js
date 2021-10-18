// Dossier : 05 objetsnom : 
// Page Intro



//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// coucou();



let auteur = 'Victor Hugo';

let utilisateur = { // Ici on a une variable objet
// nom, email, age et adresse sont des proprietés de l'objet utilisateur
// nom : ici nous avons des proprietés qui sont dans un tableau, un "array" qui commence à 0
 nom : ['Victor', 'Marie', 'Hugo'], // un array > indices : 0, 1, 2
 age : 2,
 email : 'totor@hugo.fr', 
 adresse : 'Besançon',

// Une méthode qui est un peu comme une fonction

 bonjour : function() {
     alert('Bonjour, j\'ai ' + this.age + ' ans et mon nom est ' + this.nom[0] + ' ' + this.nom[1] + ' ' + this.nom[2]);
 }
}
    
console.info(typeof utilisateur, utilisateur);
utilisateur.bonjour();