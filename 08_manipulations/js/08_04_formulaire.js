// Page 08_04_formulaire

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

    // controle du formulaire d'inscription avec une fonction inscriptionForm()

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
        console.log(prenom, nom, email, mdp2, placeholder1);

    // Site pour expressions regulières
    // https://regex101.com/

    let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // avant le @ on a le droit de mettre de a à z de 0 à 9 un . et _ et - 
    //après @ il faut au minimun 2 caractères puis un . et de à a z et au minimum 2 caractères
    console.log(regex);

    // let regex = new RegExp("([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}");
    // console.log(regex);
    
    // vérifier si prenom et nom ne sont pas vides :
    // classList représente toute les classes de l'élément event.target
    // add ajoute une class à l'élément event.target
    // remove enlève la classe


    // console.log(event.target.prenom.classList);



    if (prenom !== '' || nom !== '') {
        if (prenom.length < 2) {
            // console.log(event.target.prenom.classList);
            // console.log(event.target);
            
            event.target.prenom.classList.add("error");
            // alert('Votre prenom doit comporter le minimum 2 caractères !');
            event.target.prenom.classList.remove("valide");
        } else {
            event.target.prenom.classList.add("valide");
            event.target.prenom.classList.remove("error");
            // alert('Votre prenom doit comporter le minimum 2 caractères !');
        }

        if (nom.length < 4)  {
            event.target.nom.classList.add("error");
            // alert('Votre prenom doit comporter le minimum 4 caractères !');
            event.target.nom.classList.remove("valide");
        } else {
            event.target.nom.classList.add("valide");
            event.target.nom.classList.remove("error");
            // alert('Votre prenom doit comporter le minimum 4 caractères !');
        }
    }   // fin condition sur le nom et le prénom

    // Condition 2 ( pour tester la longueur - length - du mot de passe ) : l'utilisateur a-t-il saisit le même mot de passe, la condition : si confmdp2 est différent de mdp2 (si le premier mdp tapé est different du 2eme mdp) :

    // length = longueur
    
    let placeholder1 = document.getElementById('placeholder1');

    if (confmdp2 !== mdp2) {  // si le mdp est différent
        // event.target.mdp2.classList.add("error");
        // event.target.mdp2.classList.remove("valide");
        // event.target.confmdp2.classList.add("error");
        // event.target.confmdp2.classList.remove("valide");

        placeholder1.innerHTML = "Vos mots de passe doivent être identiques";
        placeholder1.classList.add("rouge");

        document.getElementById('placeholder2').classList.add("rouge");
        // alert('Vous avez saisi deux mots de passe différents !');

        document.getElementById('placeholder2').innerHTML = "Vos mots de passe doivent être identiques !";

        // l'alert remplace les 4 lignes de code

    } else if (mdp2.length < 5 || mdp2.length > 15) {  // sinon, si le mot de passe est trop court
        event.target.mdp2.classList.add("error");
        event.target.mdp2.classList.remove("valide");
        event.target.confmdp2.classList.add("error");
        event.target.confmdp2.classList.remove("valide");
        // l'alert remplace les 4 lignes de code
        // alert('Votre mot de passe est trop court ou trop lent !');

    } else {  // et finalement, si le mdp respecte les 2 conditions, tout est bon !
        event.target.mdp2.classList.add("valide");
        event.target.mdp2.classList.remove("error");
        event.target.confmdp2.classList.add("valide");
        event.target.confmdp2.classList.remove("error");
    }

        // if ((confmdp2 !== mdp2) || (mdp2.length < 5) || (mdp2.length > 15)) {
        //     alert('Pas bon !');
        // } else {
        //         alert('Ok !');
        // }


    // utilisation de la fonction regulière
    console.info(regex.test(email));

    // let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // avant le @ on a le droit de mettre de a à z de 0 à 9 un . et _ et - 
    //après @ il faut au minimun 2 caractères puis un . et de à a z et au minimum 2 caractères
    // console.log(regex);

    if (regex.test(email) === false) {
        event.target.email.classList.add("error");
        event.target.email.classList.remove("valide");

    } else {
        event.target.email.classList.remove("error");
        event.target.email.classList.add("valide");
    }

} // fin fonction 2

// Une fonction sur le clique du bouton EFFACER pour vider les inputs
// Dans le clique on met une fonction :

document.getElementById('resetForm').addEventListener('click', function(event) {
    event.target.form.prenom.value = '';
    event.target.form.nom.value = '';
    event.target.form.email.value = '';
    event.target.form.mdp2.value = '';
    event.target.form.confmdp2.value = '';
}); // fin fonction reset



// === JS : envoyé par Sleyter ===
// function show() {
//     var p = document.getElementById('mdp2');
//     p.setAttribute('type', 'text');
// }

// function hide() {
//     var p = document.getElementById('mdp2');
//     p.setAttribute('type', 'password');
// }

// var pwShown = 0;

// document.getElementById("eye").addEventListener("click", function () {
//     if (pwShown == 0) {
//         pwShown = 1;
//         show();
//     } else {
//         pwShown = 0;
//         hide();
//     }
// }, false);

// <div class="mb-3">
//                     <label for="mdp2" class="form-label">Choississez un Mot de Passe *</label>
//                     <input type="password" class="form-control" id="mdp2" name="mdp2" placeholder="choississez un mot de passe" aria-describedby="mdp2">
//                     <button type="button" id="eye">
//                       <img src="https://cdn0.iconfinder.com/data/icons/feather/96/eye-16.png" alt="eye" />
//                   </button>
//                 </div>








