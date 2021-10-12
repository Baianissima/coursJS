//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// += veut dire :
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de
// * multiplier
// *= ???
// € = altGr + E



// alert('Bonjour !');

// let a = 2;
// console.log(a);


let prixHT = prompt('Prix Hors Taxes :');
console.log(prixHT);

// console.log('Le prix TTC est de : + (prixHT * 1.2 + ' €.'));

let prixTTC = prixHT * 1.2;
console.log('Le prix TTC est de : ' + prixTTC + ' €');

document.getElementById('p1').innerHTML = ('Pour un achat HT de ' + prixHT + ' €, le prix TTC est de ' + prixTTC + ' €');

// alert('Prix ' + prixHT + ' € pour un total de ' + prixTTC + ' €');




// <title>Exo 03_TVA</title>   
//     <link rel="stylesheet" href="css/03_tva.css">
// </head>

// <body>


//     <div class="container p-4 mb-4">
//             <h1 class="display-4">TVA</h1>
//             <p id="p1"></p>
//             <script src="js/03_tva.js"></script>

//             <p>Ecrivez un programme JS qui fait saisir un prix HT (hors taxes) à l'utilisateur, puis qui affiche le prix TTC (toutes taxes comprises) correspondant en se basant sur un taux de TVA à 20 %.
//             </p>

//             <p>Vous pouvez effecteur l'affichage dans la console, dans une pop-up ou sur la page directement, dans un paragraphe avec un identifiant.</p>

//             <p>Indice : Multiplier le prix HT par 1,20 pour obtenir le prix TTC.</p>

//             <p>Résultat : Prix 1023 euros HT pour un total de 1227,6 euros TTC</p>

//     </div>










// ou cette autre façon de faire avec :

// let prenom;
// prenom = prompt('Votre prénom');
// console.log(prenom);

// let nom;
// nom = prompt('Votre nom');
// console.log(nom);

// alert('Bonjour, ' + prenom + ' ' + nom + ' ! ');





// let prenom =  prompt ('Votre prénom');
// console.log(prenom);

// let nom = prompt('Votre nom');
// console.log(nom);

// alert('Bonjour, ' + prenom + ' ' + nom + ' ! ');

//MODELE POUR ECRIRE : alert('   '+ X +'    '+ X +'    ');


// function popup(){
//     alert('Hé, Patrick, vous avez un chargeur ?');
// }


// function ajout(){
//     let para = document.createElement('p');
//     para.textContent = 'Paragraphe ajouté';
//     document.body.appendChild(para);
// }






















//pour tester sur la console avant ed commencer :  alert('Bonjour !');

// let prenom =  prompt ('Votre prénom');
// console.log(prenom);

// let nom = prompt('Votre nom');
// console.log(nom);

// alert('Bonjour, ' + prenom + ' ' + nom + ' ! ');

//MODELE POUR ECRIRE : alert('   '+ X +'    '+ X +'    ');



// ou cette autre façon de faire avec :

// let prenom;
// prenom = prompt('Votre prénom');
// console.log(prenom);

// let nom;
// nom = prompt('Votre nom');
// console.log(nom);

// alert('Bonjour, ' + prenom + ' ' + nom + ' ! ');




// 
// VERSION DE RACHID avec mes commentaires : decommenter pour la voir :

// Ici on cree les 2 varaibles :

// let questionPrenom = 'Quel est votre prénom ?';
// let questionNom = 'Quel est votre nom ?';

// Ici on fait apparaitre les 2 fenetres a taper les mots dedans avec PROMPT :

// let prenom = prompt(questionPrenom);
// let nom = prompt(questionNom);

// Ici console.clear permet de nettoyer la console :

// console.clear();

// Ici on cree la console pour verifier que les NOM et PRENOM s affichent correctement :

// console.log(prenom, nom);

// Ici on cree l'alerte qui contiendra la chanîe de caracteres entres des quotes avec le nom et le prenom tapés dans les prompts :

// alert('Bonjour, ' + prenom + ' ' + nom+ ' !');




        
        
        
        








