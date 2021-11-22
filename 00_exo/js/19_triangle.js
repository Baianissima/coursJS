// EXO 19 (17) - Triangle : faire un triangle avec le JS


// Boucle for

console.log('***1/ Avec la Boucle for ***');

for (let i = 1; i <= 9; i++) { 

    var  unTriangle = ""; 

    for(let j = 3 - i; j > 0; j--){

        unTriangle += " ";

    } // pour les espaces

    for(let j = i * 2 - 1; j > 0; j--){

        unTriangle += "#";

    } // pour la forme du triangle
    console.log(unTriangle);
}



// Boucle While

console.log('*** 2/ Avec la Boucle while ***');

let result = "#"

while(result.length <= 21 ){

console.log(result);

result = result +"."+ "#";
}