'use strict';
var outputC = document.getElementById('C');

outputC.innerHTML = 'Przeliczmy stopnie Celcjusza na Fahrenheit'+'<br><br>';

var buttonC = document.getElementById('c-f-button');

buttonC.addEventListener('click', function(){

    var tempCelcius = window.prompt('Podaj temperaturę w stopniach Celcjusza:');
    var tempOutput = parseFloat(tempCelcius);
    if (!tempCelcius) {
    outputC.innerHTML = 'Hej, ale wpisz coś?!'
    } else if (isNaN(tempOutput)) {
        outputC.innerHTML = 'Niestety! ' + temp + ' nie jest liczbą!' + '<br><br>';
    } else {
    var tempFahrenheit = tempOutput * 9/5 + 32;
    if (tempOutput <= 0) {
        outputC.innerHTML = tempOutput + ' stopni Celcjusza to w przeliczeniu ' + tempFahrenheit + ' stopni Farhenheita' + '<br><br>' + 'W tej temperaturze woda jest lodem.' + '<br><br>';
    } else if ((tempOutput > 0) && (tempOutput < 100)) {
        outputC.innerHTML = tempOutput + ' stopni Celcjusza to w przeliczeniu  ' + tempFahrenheit + ' stopni Farenheita' + '<br><br>' + 'W tej temperaturze woda jest płynna.' + '<br><br>';
    } else if (tempOutput >= 100) {
        outputC.innerHTML = tempOutput + ' stopni Celcjusza to  ' + tempFahrenheit+' stopni Farenheita' + '<br><br>' + 'W tej temperaturze woda jest w stanie parą wodną.' + '<br><br>';
    }
  }
});

var outputF = document.getElementById('F');

outputF.innerHTML = 'Przeliczymy stopnie Celcjusza na Farenheit'+'<br><br>';

var buttonF = document.getElementById('f-c-button');

buttonF.addEventListener('click', function(){
 var temp = window.prompt('Podaj temperaturę w stopniach Celcjusza:');
  var temp3 = parseFloat(temp);
  if (!temp) {
    outputF.innerHTML = 'Hej, ale coś musisz wpisać?!'
  } else if(isNaN(temp3)) {
	  outputF.innerHTML = 'Niestety! '+temp+' nie jest liczbą!'+'<br><br>';
  }
  else{
    var tempC = (5/9) * (temp3-32);
    if(temp3 <= 33.8) {
      outputF.innerHTML = temp3+' stopni Farhenheita to w przeliczeniu to w przeliczeniu to '+tempC+' stopni Celcjusza'+'<br><br>'+'W tej temperaturze woda jest lodem.'+'<br><br>';
    }
    else if ((temp3 > 33.8) && (temp3 < 100)) {
      outputF.innerHTML = temp3+' stopni Farhenheita to w przeliczeniu to w przeliczeniu to '+tempC+' stopni Celcjusza'+'<br><br>'+'W tej temperaturze woda jest płynna.'+'<br><br>';
    }
    else if (temp3 >= 100) {
      outputF.innerHTML = temp3+' stopni Farhenheita to w przeliczeniu to w przeliczeniu to  '+tempC+' stopni Celcjusza'+'<br><br>'+'W tej temperaturze woda jest w parą wodną.'+'<br><br>';
    }
  }
});
