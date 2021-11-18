// console.log ('Boa sorte !');



// Exo 17 : correction de Patrick

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

console.log('**************** voir dans la page ********************');

for ( var i = 1; i <= 100; i++ ) {
    // console.log(i);
    if ( (i % 3 === 0) && (i % 5 === 0) ) {// le nombre est divisible par 3 et 5 
        document.getElementById('p1').innerHTML += 'FizzBuzz<br>';
    } else if ( i % 3 === 0) {
        document.getElementById('p1').innerHTML += 'Fizz<br>';
    } else if ( i % 5 === 0) {
        document.getElementById('p1').innerHTML += 'Buzz<br>';
    } else {
        document.getElementById('p1').innerHTML += i + '<br>';
    }
}// fin for

