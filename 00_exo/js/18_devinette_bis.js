
// Exo 18-bis (affiche 19) : devinette

console.log ('---- EXO 18 : devinette ----');

// CORRECTION 

alert('Bienvenue !');


let nombreAleatoire = Math.random();
console.log(typeof nombreAleatoire, nombreAleatoire);


let nombre100 = nombreAleatoire * 100;
console.log(nombre100);

let nombre = Math.floor(nombre100);
  

for (var i = 1; i <= 6; i++ ) {
   var choix = parseInt(prompt('Entre un nombre entre 1 et 100.  Tu as 6 essais.'));
        if (!isNaN(choix)) {
            if (nombre === choix) {
                alert('Bien joué');
                i = 6;
            } else {
                if (nombre < choix) {
                    alert('Le nombre est plus petit ; essai ' + i + '/6');
                } else {
                    alert('Le nombre est plus grand ; essai ' + i + '/6');
                }
            }
        } else {
            alert('Il faut choisir un nombre !');
        }       
        
    }

    alert('La bonne réponse était ' + nombre);
    document.write('<p class = "stabilo">La bonne réponse était : ' + nombre + ' . </p>');

 
    console.log(nombre);

