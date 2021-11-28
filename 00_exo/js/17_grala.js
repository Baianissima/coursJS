console.log ('Boa tarde !');

// Exo 17_grala.js

console.log ('---- EXO 17 : GRALA ----');


// var nbre = 1;

// for (var nbre = 1; nbre <=100; nbre++) {
//     if ((nbre % 3 === 0) && (nbre % 5 === 0)) {
//         console.log('GralaBu'); 
      
//     } else if (nbre % 3 === 0) {
//         console.log('Grala');
 
//     } else if (nbre % 5 === 0) {
//         console.log('Bu'); 

//     }  
//     else {
//         console.log(nbre);
       
//         } 
     
//     }


//Correction Fizzbuzz/grabalu

   
// for (var i = 1; i <=100; i++) { //le nombre est divisible par 3 et 5
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('Fizzbuzz'); 
      
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
 
//     } else if (i % 5 === 0) {
//         console.log('Buzz'); 

//     }  
//     else {
//         console.log(i);
       
//         } 
     
//     }

 // for (var i = 1; i <=100; i++) {//le nombre est divisible par 3 et 5
//     if (i % 15 === 0) {
//         console.log('Toutgoudou'); 
      
//     } else if (i % 3 === 0) {
//         console.log('Tout');
 
//     } else if (i % 5 === 0) {
//         console.log('Goudou'); 

//     }  
//     else {
//         console.log(i);
       
//         } 
     
//     }
for (var i = 1; i <= 100; i++) {
    var message =  ' ' ; //initialisation de la var message
    if (i % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
        message +='Grala' ; // on affiche le mot
        }
    if (i % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
        message += 'Bu' ; //on affiche bu
        }
    if (message == ' '){ // et sinon on affiche le i
        message =  i ; // en même temps la variable va concaténer Grala + Bu si le nombre est un multiple de 3 ET de de 5
        }
    console.log(message);
}//fin de for
// alert('coucou');

console.log('**************** 1 ********************');

for ( var i = 1; i <= 100; i++ ) {
// console.log(i);
if ( (i % 3 === 0) && (i % 5 === 0) ) {// le nombre est divisible par 3 et 5 
    console.info('FizzBuzz');
} else if ( i % 3 === 0) {
    console.info('Fizz');
} else if ( i % 5 === 0) {
    console.info('Buzz');
} else {
    console.info(i);
}
}// fin for

console.log('**************** 2 ********************');

for ( var i = 1; i <= 100; i++ ) {
// console.log(i);
if ( i % 15 === 0 ) {// le nombre est divisible par 15 c'est à dire par 3 et 5  
    console.info('Toutgoudou');
} else if ( i % 3 === 0) {
    console.info('Tout');
} else if ( i % 5 === 0) {
    console.info('Goudou');
} else {
    console.info(i);
}
}// fin for

console.log('**************** 3 ********************');

for ( var i = 1; i <= 100; i++ ) {
var message = '';

if ( i % 3 === 0 ) {// le nombre est divisible par 3  
    message += 'Grala';// on affiche le mot
}
if ( i % 5 === 0 ) {// le nombre est divisible par 5  
    message += 'Bu';// on affiche bu
} 
if (message == '') {// sinon on affiche la valeur numérique de i 
    message = i;  // en même temps la variable va concaténer Grala + Bu si le nombre est un multiple de 3 et 5  
}
console.log(message)
}// fin for

console.log('**** voir dans la page ****');

for ( var i = 1; i <= 100; i++ ) {
console.log(i);
if ( (i % 3 === 0) && (i % 5 === 0) ) {// le nombre est divisible par 3 et 5 
    document.getElementById('p1').innerHTML += 'FizzBuzz<br>';
    //document.getElementById('p1').style.backgroundColor= "blue";
} else if ( i % 3 === 0) {
    document.getElementById('p1').innerHTML += 'Fizz<br>';
    //style.background = "yellow";
} else if ( i % 5 === 0) {
    document.getElementById('p1').innerHTML += 'Buzz<br>';
    //style.background = "pink";
} else {
    document.getElementById('p1').innerHTML += i + '<br>';
    //style.background = "green";
}
}// fin for












// console.log(typeof grala, grala);
// console.log(typeof grala, grala);

//Correction - AUTRES METHODES

// alert('coucou');

// console.log('**************** 1 ********************');

// for ( var i = 1; i <= 100; i++ ) {
//     // console.log(i);
//     if ( (i % 3 === 0) && (i % 5 === 0) ) {// le nombre est divisible par 3 et 5 
//         console.info('FizzBuzz');
//     } else if ( i % 3 === 0) {
//         console.info('Fizz');
//     } else if ( i % 5 === 0) {
//         console.info('Buzz');
//     } else {
//         console.info(i);
//     }
// }// fin for

// console.log('**************** 2 ********************');

// for ( var i = 1; i <= 100; i++ ) {
//     // console.log(i);
//     if ( i % 15 === 0 ) {// le nombre est divisible par 15 c'est à dire par 3 et 5  
//         console.info('Toutgoudou');
//     } else if ( i % 3 === 0) {
//         console.info('Tout');
//     } else if ( i % 5 === 0) {
//         console.info('Goudou');
//     } else {
//         console.info(i);
//     }
// }// fin for

// console.log('**************** 3 ********************');

// for ( var i = 1; i <= 100; i++ ) {
//    var message = '';

//     if ( i % 3 === 0 ) {// le nombre est divisible par 3  
//         message += 'Grala';// on affiche le mot
//     }
//     if ( i % 5 === 0 ) {// le nombre est divisible par 5  
//         message += 'Bu';// on affiche bu
//     } 
//     if (message == '') {// sinon on affiche la valeur numérique de i 
//         message = i;  // en même temps la variable va concaténer Grala + Bu si le nombre est un multiple de 3 et 5  
//     }
//     console.log(message)
// }// fin for

// console.log('**************** voir dans la page ********************');

// for ( var i = 1; i <= 100; i++ ) {
//     // console.log(i);
//     if ( (i % 3 === 0) && (i % 5 === 0) ) {// le nombre est divisible par 3 et 5 
//         document.getElementById('p1').innerHTML += 'FizzBuzz<br>';
//     } else if ( i % 3 === 0) {
//         document.getElementById('p1').innerHTML += 'Fizz<br>';
//     } else if ( i % 5 === 0) {
//         document.getElementById('p1').innerHTML += 'Buzz<br>';
//     } else {
//         document.getElementById('p1').innerHTML += i + '<br>';
//     }
// }// fin for

