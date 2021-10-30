// JS
// Page 07_08_diaporama

// coucou();

//diaporama 2

// console.log(document.GetById('btnDiapo2'));
// une fonction anonyme

document.getElementById('btnDiapo2').addEventListener('click', function() {
    document.getElementById('imgDiapo2').src = 'img/piscine2.jpg' ;
    document.getElementById('imgDiapo2').alt = 'une piscine aux Seychelles';
})


//diaporama 3

// On va faire une fonction tourneImages()

function tourneImages() {
    var getImage3 = document.getElementById('imgDiapo3'). getAttribute('src');
    // console.log(getImage3);// ce console.log ne s'affiche qu'au click

    switch(getImage3) {
        case 'img/plage1.jpg':
            document.getElementById('imgDiapo3').src= 'img/plage2.jpg'; 
            document.getElementById('imgDiapo3').alt= "une plage des Bahamas";
             break;
        
        case 'img/plage2.jpg':
            document.getElementById('imgDiapo3').src= 'img/plage3.jpg';
            document.getElementById('imgDiapo3').alt= "une plage sur la cote d azur";
             break;

        case 'img/plage3.jpg':
            document.getElementById('imgDiapo3').src= 'img/plage4.jpg'; 
            document.getElementById('imgDiapo3').alt= "une plage aux Seychelles"; 
            break;
        
        case 'img/plage4.jpg':
            document.getElementById('imgDiapo3').src= 'img/plage1.jpg';
            document.getElementById('imgDiapo3').alt= "une plage en Corse";
             break;
        
    }
} //fin fonction