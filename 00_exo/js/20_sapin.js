// EXO 20 - Sapin : faire un sapin dans la console avec le JS


function afficheSapin() {


    var leavesHeight = document.getElementById("p1").value; //5
    var trunkHeight = document.getElementById("p2").value; //4
    var trunkWidth = document.getElementById("p3").value; //3
  
  
    var line = "";
    var strSpace = "";
    var strCroix = "";
    var res = "";
  
    //Le feuillage...
  
    for (var i = 0; i < leavesHeight; i++) {
      strSpace = " ".repeat(leavesHeight - 1 - i);
      strCroix = "*".repeat(2 * i + 1);
      line = strSpace + strCroix;    
      res += line + "\n";
    }
  
    //Le tronc...
  
    var nbrSpace = leavesHeight - 1 - (trunkWidth - 1) / 2;
  
    strSpace = " ".repeat(nbrSpace);
    strCroix = "*".repeat(trunkWidth);
    line = strSpace + strCroix;
  
    for (i = 0; i < trunkHeight; i++) {    
      res += line + "\n";
    }
  
    console.clear(); console.log("\n" + res); //affichage dans la console...
    document.getElementById("res").innerHTML = res.replace(/\n/g, "<br>"); //affichage dans la page HTML...
  
  }



  // EXO 19 (17) - Triangle : faire un triangle dans la console avec le JS


// Boucle for

// console.log('***1/ Avec la Boucle for ***');

// for (let i = 1; i <= 9; i++) { 

//     var  unTriangle = ""; 

//     for(let j = 3 - i; j > 0; j--){

//         unTriangle += " ";

//     } // pour les espaces

//     for(let j = i * 2 - 1; j > 0; j--){

//         unTriangle += "#";

//     } // pour la forme du triangle
//     console.log(unTriangle);
// }



// Boucle While

// console.log('*** 2/ Avec la Boucle while ***');

// let result = "#"

// while(result.length <= 21 ){

// console.log(result);

// result = result +"."+ "#";
// }