// coucou();

// Exo : baccalauréat : avec la méthode parseFloat, qui arrondi les nombres : 10,5 = 10 avec parseFloat

// Pour la condition : if else if
// Pour la méthode : parseFloat (pour arrondir le nombre tapé par l'utilisateur)
// Pour la condition "si c'est un nombre" : !isNaN

//Ici avec !isNaN on met la condition "(le premier IF)Si ceci est un nombre... (le dernier ELSE) Sinon : "Vous n avez pas saisi un nombre !"

let moyenneBac = parseFloat(prompt('Quelle est votre moyenne au baccalaureat ?'));
    console.log(typeof moyenneBac, moyenneBac);
    if (!isNaN(moyenneBac)) {
        if (moyenneBac >= 0 && moyenneBac <= 10) {
            document.getElementById('p1').innerHTML = '<p>Votre moyenne est ' + moyenneBac + ', vous êtes récalé !</p>';
        } else if (moyenneBac >= 10 && moyenneBac <= 12) { 
            document.getElementById('p1').innerHTML = '<p>Votre moyenne est ' + moyenneBac + ', vous êtes reçu sans mention.</p>';
        } else if (moyenneBac >= 12 && moyenneBac <= 20) {
            document.getElementById('p1').innerHTML = '<p>Votre moyenne est ' + moyenneBac + ', vous êtes reçu avec mention</p>';
        } else {
            document.getElementById('p1').innerHTML ='<p>Ceci n est pas une moyenne ;-) ! </p>';
        }
    } else {
        document.getElementById('p1').innerHTML ='<p>Vous n avez pas saisi de nombre !</p>';
    }
        

            
