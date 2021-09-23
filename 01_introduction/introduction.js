// Mon premier fichier .js

// alert('coucou');

/* un commentaire JS sur plusieurs lignes... 
Avec barre oblique + étoile pour creer ce commentaire
*/

let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup(){
    alert('Hé, Patrick, vous avez un chargeur ?');
}

function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para);
}