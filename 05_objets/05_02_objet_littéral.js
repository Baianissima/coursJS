// Dossier : 05 objets 
// Page objet littéral



//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// coucou();

// victor EST un nouvel objet

let victor = { 
    //mon age et email sont des proprietés de l'objet

    nom : ['Victor', 'Marie', 'Hugo'], // un array > indices : 0, 1, 2
    age : 2,
    email : 'totor@hugo.fr',

    // bonjour est une méthode
    bonjour: function() {
        alert('Bonjour, je suis ' + this.nom[0] + ' ' + this.nom[2] + ' et j\'ai ' + this.age + ' ans.');
    }
}

console.info(typeof victor, victor);

// victor.bonjour();
// On accède aux proprietés qui contiennent des valeurs
document.getElementById('p1').innerHTML = 'Nom : ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age : ' + victor.age + ' ans.';
document.getElementById('p3').innerHTML = 'Email : ' + victor.email;

// On modifie la valeur de "age"
victor.age = 80;

console.info(typeof victor, victor);
document.getElementById('p4').innerHTML = 'Nouvel.age : ' + victor.age + ' ans';

//Ici on rajoute deux nouvelles propeietés et leurs valeurs associées
victor.metier = 'écrivain, dramaturge et poète';
console.info(typeof victor, victor);
victor.metier = 'écrivain exilé, dramaturge et poète';
console.info(victor.metier);

victor.adresse = 'en son avenue, à Paris';
console.info(victor.adresse);

// et ici on crée une nouvelle méthode
victor.bonjour2 = function() {
    alert('Bonjour j\'ai maintenant ' + this.age + ' ans,  je suis ' + this.metier + ' et je suis célèbre dans le monde entier.');
}

// Ici on appelle la méthode
victor.bonjour2();

document.getElementById('p5').innerHTML = 'Bonjour, je suis ' + victor.nom[0] + ' ' + victor.nom[2];

