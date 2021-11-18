console.log ('Boa sorte !');



// Exo 17 : faire du modulo

console.log ('---- EXO 17 : modulo / boucle for ----');

let exo17;

console.log(exo17);

for (let exo17 = 1; exo17 <= 100; exo17++){

    if  (exo17 % 5 == 0){   
        document.getElementById('p1').innerHTML += '<p> "Grala"</p>';

    } else if (exo17 % 3 == 0){
        document.getElementById('p1').innerHTML += '<p> "Bu"</p>';

    } else if  ((exo17 % 5 == 0) && (exo17 % 3 == 00)) {
        document.getElementById('p1').innerHTML += '<p> "Gralabu" </p>';

    } else {
        console.info(exo17);
    }
}

