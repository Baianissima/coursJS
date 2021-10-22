// coucou();

// Exo : Exo 10 - Nombre de jours dans un mois

// Faire en boucle WHILE et après en boucle FOR

// Pour la condition : if else if

// Pour la méthode : parseFloat (pour arrondir le nombre tapé par l'utilisateur)

// Pour la condition du départ "si c'est un nombre" : !isNaN


let moyenneBac = parseFloat(prompt('Quele est votre moyenne au baccalaureat ?'));
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
        

            
