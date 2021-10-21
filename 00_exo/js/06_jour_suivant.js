//OO entrainement : page 06 jour suivant

// coucou();

//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// += veut dire :
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de


// SCHEMA A SUIVRE pour commencer les conditions avec if else if:
    // if () {
    //     bloc;
    // { else if () {
    //     bloc;
    // } else {
    //     bloc;
    // }

    let jour = prompt('1- Quel jour sommes-nous ? (avec if else if)');
    console.log(typeof jour, jour);
    
    if (jour === 'lundi') {
        document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est mardi !';
    } else if ( jour === 'mardi') {
        document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demainc\'est mercredi !';
    } else if ( jour === 'mercredi') {
        document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demainc\'est jeudi !';
    } else if ( jour === 'jeudi') {
        document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demainc\'est vendredi !';
    } else if ( jour === 'vendredi') {
        document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain c\'est samedi !';
    } else if ( jour === 'samedi') {
        document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demainc\'est dimanche !';
    } else if ( jour === 'dimanche') {
        document.getElementById('p1').innerHTML = 'Demain, bon courage pour la semaine !';
    } else {
        document.getElementById('p1').innerHTML = 'C\'est jour n\'existe pas !';
    }
    
   // Et le même exo em mode switch, avec la même variable jour :

   switch (jour) {
    case 'lundi' :
        document.write('<p>Switch - Aujourd\'hui nous sommes ' + jour + ', demain c\'est mardi !</p>');
    break;
    case 'mardi' :
        document.write('<p>Switch - Demain c\'est mercredi !</p>');
    break;
    case 'mercredi' :
        document.write('<p>Switch - Demain c\'est jeudi !</p>'); 
    break;
    case 'jeudi' :
        document.write('<p>Switch - Demain c\'est vendredi !</p>');
    break;
    case 'vendredi' :
        document.write('<p>Switch - Demain c\'est samedi !</p>');
    break;
    case 'samedi' :
        document.write('<p>Switch - Demain c\'est dimanche !</p>');
    break;
    case 'dimanche' :
        document.write('<p>Switch - Demain c\'est lundi !</p>');
    break;
    default: 
        document.write('<p>Switch - Voir le calendrier de la planète Mars ! </p>');
    }

    
// Ici le switch avec une nouvelle variable : jour2 :
// Autre option pour remplacer document.getElementById et simplifier : créer une variable let leP2, par exemple et ça donne ça :

// let leP2;
//case 'lundi' :
    // document.getElementById('p2').innerHTML = 'Demain c\'est mardi !</p>';

    var jour2 = prompt('1- Quel jour sommes-nous ? (avec switch et id');
    console.log(typeof jour2, jour2);

    switch (jour2) {
        case 'lundi' :
            document.getElementById('p2').innerHTML = 'Demain c\'est mardi !</p>';
        break;
        case 'mardi' :
            document.getElementById('p2').innerHTML = 'Demain c\'est mercredi !</p>';
        break;
        case 'mercredi' :
            document.getElementById('p2').innerHTML = 'Demain c\'est jeudi !</p>'; 
        break;
        case 'jeudi' :
            document.getElementById('p2').innerHTML = 'Demain c\'est vendredi !</p>';
        break;
        case 'vendredi' :
            document.getElementById('p2').innerHTML =  'Demain c\'est samedi !</p>';
        break;
        case 'samedi' :
            document.getElementById('p2').innerHTML =  'Demain c\'est dimanche !</p>';
        break;
        case 'dimanche' :
            document.getElementById('p2').innerHTML =  'Demain c\'est lundi !</p>';
        break;
        default: 
        document.getElementById('p2').innerHTML =  'Voir le calendrier de la planète Mars ! </p>';
    }
  
    // classList.add c'est une classe bootstrap




