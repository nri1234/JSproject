
'use strict';
var outputC = document.getElementById('C');

outputC.innerHTML = 'Przeliczmy stopnie Celcjusza na Fahrenheit' + '<br><br>';

var buttonC = document.getElementById('c-f-button');

buttonC.addEventListener('click', function(){

    var tempCelcius = window.prompt('Podaj temperaturę w stopniach Celcjusza:');
    var tempOutput = parseFloat(tempCelcius);
    if (!tempCelcius) {
    outputC.innerHTML = 'Hej, ale wpisz coś?!'
    } else if (isNaN(tempOutput)) {
        outputC.innerHTML = 'Niestety! ' + tempCelcius + ' nie jest liczbą!' + '<br><br>';
    } else {
    var tempF = tempOutput * 9/5 + 32;
    if (tempOutput <= 0) {
        outputC.innerHTML = tempOutput + ' stopni Celcjusza to w przeliczeniu ' + tempF + ' stopni Farhenheita' + '<br><br>' + 'W tej temperaturze woda jest lodem.' + '<br><br>';
    } else if ((tempOutput > 0) && (tempOutput < 100)) {
        outputC.innerHTML = tempOutput + ' stopni Celcjusza to w przeliczeniu  ' + tempF + ' stopni Farenheita' + '<br><br>' + 'W tej temperaturze woda jest płynna.' + '<br><br>';
    } else if (tempOutput >= 100) {
        outputC.innerHTML = tempOutput + ' stopni Celcjusza to  ' + tempF + ' stopni Farenheita' + '<br><br>' + 'W tej temperaturze woda jest w stanie parą wodną.' + '<br><br>';
    }
  }
});

var outputF = document.getElementById('F');

outputF.innerHTML = 'Przeliczymy stopnie Celcjusza na Farenheit' + '<br><br>';

var buttonF = document.getElementById('f-c-button');

buttonF.addEventListener('click', function(){
    var tempFahrenheit = window.prompt('Podaj temperaturę w stopniach Fahrenheita:');
    var tempFOutput = parseFloat(tempFahrenheit);
    if (!tempFahrenheit) {
        outputF.innerHTML = 'Hej, ale coś musisz wpisać?!'
    } else if (isNaN(tempFOutput)) {
	   outputF.innerHTML = 'Niestety! ' + tempFahrenheit + ' nie jest liczbą!' + '<br><br>';
    } else {
    var tempC = (5/9) * (tempFOutput-32);
    if (tempFOutput <= 33.8) {
        outputF.innerHTML = tempFOutput + ' stopni Farhenheita to w przeliczeniu to w przeliczeniu to ' + tempC + ' stopni Celcjusza' + '<br><br>' + 'W tej temperaturze woda jest lodem.' + '<br><br>';
    } else if ((tempFOutput > 33.8) && (tempFOutput < 100)) {
        outputF.innerHTML = tempFOutput + ' stopni Farhenheita to w przeliczeniu to w przeliczeniu to ' + tempC + ' stopni Celcjusza' + '<br><br>' + 'W tej temperaturze woda jest płynna.' + '<br><br>';
    } else if (tempFOutput >= 100) {
        outputF.innerHTML = tempFOutput + ' stopni Farhenheita to w przeliczeniu to w przeliczeniu to  ' + tempC + ' stopni Celcjusza'+'<br><br>' + 'W tej temperaturze woda jest w parą wodną.' + '<br><br>';
    }
  }
});
