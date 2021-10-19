//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// += veut dire :
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de
// * multiplier
// *= ???
// € = altGr + E


// coucou();

//version de Patrick :

var tempC = prompt('Rentrez une température en Celsius, merci.')
    // console.log(tempC);
    // console.log(9/5);
    // console.log(1*1.8);
    document.getElementById('li1').innerHTML = ' 1 degré Celsius = ' + ((1 * 1.8) + 32) +  ' Fahrenheit ';

    document.getElementById('li2').innerHTML = tempC + ' degrés Celsius = ' + ((tempC * 1.8) + 32) +  ' Fahrenheit ';

    var tempF = (tempC * 1.8) + 32;
    console.log(tempF);
    document.getElementById('li3').innerHTML = ('1 degré Fahrenheit = ' + ((1 - 32 ) / 1.8) + ' Celsius ' );

    document.getElementById('li4').innerHTML = ( + tempF + ' degré(s) Fahrenheit = ' + ((tempF - 32 ) / 1.8) + ' Celsius ' );
    // console.log(document.querySelectorAll('li'));




    // CODE D'IMRAM : très clair !

    // let temperature = prompt('Quelle est la température de l\'extérieur ?');
    //     console.log(temperature);
        
    //     let farhenheit = (temperature* 9/5) + 32; ou (temperature* 1.8) + 32
        
    //     var select = document.getElementsByTagName('li');
    //     console.log(select, select.length);
    //     select[0].innerHTML = '1 degré Celsius = 33.8 Farhenheit';
    //     select[1].innerHTML = temperature +' degrés Celsius = '+farhenheit+ ' Farhenheit';
    //     select[2].innerHTML = 'temperature est '+temperature;
    //     select[3].innerHTML = '1 degré Farhenheit = -17.22222222222 Celsius';
    //     select[4].innerHTML = '68 degrés Farhenheit = 20 Celsius';
    
        
    

    // CODE DE RACHID pour les classes :

    // Conversion de Celsius vers Fahrenheit
    // document.querySelector('li.cel-to-fah').innerHTML = varCelsius + " degrès Celcius= " + varFahrenheit + ' Fahrenheit';
    // document.querySelector('li#li2').innerHTML = varCelsius + " degrès Celcius= " + varFahrenheit + ' Fahrenheit';

    // // Conversion de Fahrenheit vers Celsius
    // document.querySelector('li.fah-to-cel').innerHTML = varFahrenheit + " degrès Fahrenheit = " + varCelsius + ' Celsius';

    // const textCelsiusFahrenheit = "1 degré Celsius = 33.8 Fahrenheit";
    // const textFahrenheit = "1 degrè Fahrenheit = -17.22222222222222 Celsius";









