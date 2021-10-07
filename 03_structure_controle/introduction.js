// js introduction structures de contrôle

//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != 4 veut dire : différent de

// pour tester la console, creer un alerte :
// alert('coucou');


// TEST 1
let x = 4;
// console.log(x);
// console.log(typeof x);
console.log(typeof x, x);// type d'x ET valeur de x

let egalValeur = x == 4;
console.log(egalValeur);

let egalValeurType = x === 4;
// contenu égal en type de données ET valeur
console.log(egalValeurType);//

let differenceValeur = x != 4;// différent de 
console.log(differenceValeur);

let differenceValeurType = x !== 4; // différent en valeur OU en type 
console.log(differenceValeurType);

let inferieur = x < 4;
console.log(inferieur);

let superieur = x > 4;
console.log(superieur);

let inferieurEgal = x <= 4;
console.log(inferieurEgal);

let superieurEgal =  x >= 4;
console.log(superieurEgal);


// Une alerte, faite par Patrick envoye par chat : il faut que je change les noms de variables pour qu elle marche

// alert('Valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur +
//     '\n Valeur dans x égale à 4 (en valeur ET en type) ? '  + testEgalValeurType +
//     '\n Valeur dans x different de 4 (en valeur) ? '  + testDifferenceValeur +
//     '\n Valeur dans x different de 4 (en valeur OU en type) ? '  + testDifferentValeurType +
//     '\n Valeur dans x inférieur à 4 (en valeur) ? '  + testInferieur +
//     '\n Valeur dans x supérieure à 4 (en valeur) ? '  + testSuperieur 
// );



