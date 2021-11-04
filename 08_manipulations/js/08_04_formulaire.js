// Page 08_03_keydown

// coucou();


// contrôle du formulaire avec une fonction
        // on vérifie la longueur des contenus dans les 2 input

    function controleForm() { //dans la parenthese event paramètre à enlever également
        event.preventDefault(); // pour empêcher l'envoi du formulaire, à enlever quand le site est terminé

        //condition pour le pseudo, la valeur tapée ds le form, et la longueur :
        if (document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15) {
            console.log( document.form1.pseudo.value);
            console.log( document.form1.pseudo.value.length);
            alert('Votre pseudo fait normalement entre 5 et 15 caractères');
        }

        // Exo idem pour le mot de passe entre 3 et 12 caractères
        if (document.form1.mdp.value.length < 3 || document.form1.mdp.value.length > 12) {
            console.log( document.form1.mdp.value);
            console.log( document.form1.mdp.value.length);
            alert('Votre mot de passe fait normalement entre 3 et 13 caractères');
        }
    }

    // controle du formulaire d inscription avec une fonction inscriptionForm()

    // récuperer le form par son id dans une variable
        let formInscription = document.getElementById('formulaireInscription');
        console.log(formInscription);

    
    // écoute de l'envoie du formulaire
    formInscription.addEventListener('submit', inscriptionForm);

    // création de la fonction
    function inscriptionForm(event) {
        event.preventDefault();

        //récupération de contenu des champs du formulaire
        // on cible dans des varaibles les value de tous les champs du form

        let prenom = event.target.prenom.value,
            nom = event.target.nom.value,
            email = event.target.email.value,
            mdp2 = event.target.mdp2.value,
            confmdp2 = event.target.confmdp2.value;
        console.log(prenom, nom, email, mdp2, confmdp2)
    }
