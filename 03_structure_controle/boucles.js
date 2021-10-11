// JS pour la page boucles


//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// += veut dire :
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// alert('Bom dia!');


// Incrémentation et décrémentation
let a = 10, b = 10, c = 20, d = 20;
console.info(a, b, c, d);


// 1/ Incrémentation

document.getElementById('p1').innerHTML = '- Pré-incrémenter // b contient ' + b + ', là je pré-incremente de 1,  et tout de suite b est égal à ' + ++b;
// à la fin de la ligne ' + ++b + ', on peut enlever le + final et la quote fermante
console.log(a);

document.getElementById('p2').innerHTML = '- Post-incrémenter // a contient ' + a + ', là je post-incremente de 1, a est toujours égal à '+ a++ + ' puis a est égal à ' + a +' après post-incrémentation.';
console.log(b);


// 2/ Décrémentation

document.getElementById('p3').innerHTML = '- Pré-décrémenter // d contient la valeur ' + d + ', là je pré-décrémente de 1, et donc d est égal à ' + --d;
console.log(c);

document.getElementById('p4').innerHTML = '- Post-décrémenter // c contient ' + c + ', là je post-décrémente de 1, c est toujours égal à ' + c-- + ' puis c est égal à ' + c + ' après post-décrémentation.';
console.log(d);






// while

let w1 = 0;
console.log(typeof w1, w1);

while (w1 < 15) {
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '<br>';
    console.log(typeof w1, w1);
    // il faut mettre console.log avant le w1++, console.log apres w1++ rajouterai une boucle sur la console seulement
    w1++;
   
}

// Lecture : 

// Tant que c'est vrai,

// rajoute avec += la chaine de caractere tant que la boucle n'est pas terminée  (fait apparaitre les lignes successives),

// incrémente la valeur de la variable de départ !


// ("incrémenter" c'est "rajouter")
// = fait apparaitre une seule ligne



// EXO : bouclez tant que w2 est inférieur à 10 sur id while2


let w2 = 0;
console.log(typeof w2, w2);  
while (w2 < 10) {  // Tant que c'est vrai,
    document.getElementById('while2').innerHTML += 'w2 contient la valeur ' + w2 + '<br>'; // rajoute avec += la chaine de caractere tant que la boucle n'est pas terminée
    console.log(typeof w2, w2);

    // il faut mettre console.log avant le w2++, console.log apres w1++ rajouterai une boucle sur la console seulement
    w2++;
}

let w3 = 0;
console.log(typeof w3, w3); 
do {   // fait cela
    document.getElementById('dowhile1').innerHTML += 'w3 contient la valeur ' + w3 + '<br>';
    w3++; // incrémente
}
while (w3 < 10); // tant que

// Pour "do while" la condition vient après 

