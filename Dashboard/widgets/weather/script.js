
// Sets weather and date values
$(document).ready(function() {

  var ampm = true;  // ture OR false
  $.simpleWeather({
    zipcode: '',
    woeid: '31927', // Perth, Scotland
    /* WOEID Lookup >> https://woeid.rosselliot.co.nz/ */
    location: '',
    unit: 'c',
    success: function(weather) {

      $('#country').text(weather.city + ', ' + weather.country);
      $('#temp').text(weather.temp+'°');
      $('#desc').text(weather.currently);
      $('#humidity').text(weather.humidity+'%');                      
      
      var icon;
      switch (parseInt(weather.code)) {
      
    case 0: // Tornado
      icon = '&#xf056;';          
      break;
    
    case 1: // Tropical Storm
      icon = '&#xf01e;';
      break;
      
    case 2: // Hurricane
      icon = '&#xf01e;';
      break;
      
    case 3: // Severe Thunderstorms
      icon = '&#xf01e;';
      break;
      
    case 4: // Thunderstorms
      icon = '&#xf01d;';
      break;
      
    case 5: // Mixed rain and snow
      icon = '&#xf01b;';
      break;
      
    case 6: // Mixed rain and sleet
      icon = '&#xf01b;';
      break;
      
    case 7: // Mixed snow and sleet
      icon = '&#xf01b;';
      break;
      
    case 8: // Freezing drizzle
      icon = '';
      break;
      
    case 9: // Drizzle
      icon = '&#xf017;';
      break;
      
    case 10: // Freezing rain
      icon = '&#xf019;';
      break;
      
    case 11: // Showers
      icon = '&#xf01a;';
      break;
      
    case 12: // Showers
      icon = '&#xf01a;';
      break;
      
    case 13: // Snow flurries
      icon = '&#xf01b;';
      break;
      
    case 14: // Light snow showers
      icon = '&#xf01b;';
      break;
      
    case 15: // Blowing snow
      icon = '&#xf01b;';
      break;
      
    case 16: // Snow
      icon = '&#xf01b;';
      break;
      
    case 17: // Hail
      icon = '&#xf015;';
      break;
      
    case 18: // Sleet
      icon = '&#xf01b;';
      break;
      
    case 19: // Dust
      icon = '&#xf014;';
      break;
      
    case 20: // Foggy
      icon = '&#xf014;';
      break;
      
    case 21: // Haze
      icon = '&#xf021;';
      break;
      
    case 22: // Smoky
      icon = '&#xf021;';
      break;
      
    case 23: // Blustery
      icon = '&#xf01d;';
      break;
      
    case 24: // Windy
      icon = '&#xf011;';
      break;
      
    case 25: // Cold
      icon = '&#xf00d;';
      break;
      
    case 26: // Cloudy
      icon = '&#xf013;';
      break;
      
    case 27: // Mostly cloudy (night)
      icon = '&#xf031;';
      break;
      
    case 28: // Mostly cloudy (day)
      icon = '&#xf002;';
      break;
      
    case 29: // Partly cloudy (night)
      icon = '&#xf031;';
      break;
      
    case 30: // Partly cloudy (day)
      icon = '&#xf002;';
      break;
      
    case 31: // Clear (night)
      icon = '&#xf02e;';
      break;
      
    case 32: // Sunny
      icon = '&#xf00d;';
      break;
      
    case 33: // Fair (night)
      icon = '&#xf02e;';
      break;
      
    case 34: // Fair (day)
      icon = '&#xf00d;';
      break;
      
    case 35: // Mixed rain and hail
      icon = '&#xf015;';
      break;
      
    case 36: // Hot
      icon = '&#xf00d;';
      break;
      
    case 37: // Isolated Thunderstorms
      icon = '&#xf01e;';
      break;
      
    case 38: // Scattered Thunderstorms
      icon = '&#xf01e;';
      break;
      
    case 39: // Scattered Thunderstorms
      icon = '&#xf01e;';
      break;
      
    case 40: // Scattered Showers
      icon = '&#xf01a;';
      break;
      
    case 41: // Heavy snow
      icon = '&#xf01b;';
      break;
      
    case 42: // Scattered snow showers
      icon = '&#xf01b;';
      break;    
      
    case 43: // Heavy snow
      icon = '&#xf01b;';
      break;
      
    case 44: // Partly cloudy
      icon = '&#xf013;';
      break;
      
    case 45: // Thundershowers
      icon = '&#xf01e;';
      break;
      
    case 46: // Snow showers
      icon = '&#xf01b;';
      break;
      
    case 47: // Isolated Thundershowers
      icon = '&#xf01e;';
      break;
      
    case 3200: // Not available
      icon = '?';
      break;          

}
      $('#weather-icon').html(icon);  
      
    },
    error: function(error) {      
      alert(error);
    }
  });
  
  var d = new Date();
  var date, day, year, time;
  
  date = d.getDate() < 10 ? '0' + d.getDate() :  d.getDate();
  year = d.getFullYear();
  switch(d.getDay()) {
   
    case 0:
      day = "Sunday";
      break;
      
    case 1:
      day = "Monday";
      break;
      
    case 2:
      day = "Tuesday";
      break;
      
    case 3:
      day = "Wednesday";
      break;
      
    case 4:
      day = "Thursday";
      break;
      
    case 5:
      day = "Friday";
      break;
      
    case 6:
      day = "Saturday";
      break;
            
  }
  
  var hours = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
  var mins =  d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
  if(ampm){
    var current_ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    time = hours + ':' + mins + ' ' + current_ampm;
  }else{
    time = hours + ':' + mins;
  }
  
  $('#date').text(date);
  $('#day').text(day);
  $('#time').text(time);
  $('#year').text(year);
  
});

/*
 * simpleWeather
 * http://simpleweatherjs.com
 *
 * A simple jQuery plugin to display the current weather
 * information for any location using Yahoo! Weather.
 *
 * Developed by James Fleeting <@twofivethreetwo> <http://iwasasuperhero.com>
 * Another project from monkeeCreate <http://monkeecreate.com>
 *
 * Version 2.3.0 - Last updated: June 16 2013
 */
(function(e){"use strict";e.extend({simpleWeather:function(t){t=e.extend({zipcode:"",woeid:"2357536",location:"",unit:"f",success:function(e){},error:function(e){}},t);var n=new Date;var r="https://query.yahooapis.com/v1/public/yql?format=json&rnd="+n.getFullYear()+n.getMonth()+n.getDay()+n.getHours()+"&diagnostics=true&callback=?&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";if(t.location!==""){r+='select * from weather.forecast where location in (select id from weather.search where query="'+t.location+'") and u="'+t.unit+'"'}else if(t.zipcode!==""){r+='select * from weather.forecast where location in ("'+t.zipcode+'") and u="'+t.unit+'"'}else if(t.woeid!==""){r+="select * from weather.forecast where woeid="+t.woeid+' and u="'+t.unit+'"'}else{t.error("Could not retrieve weather due to an invalid WOEID or location.");return false}e.getJSON(r,function(n){if(n!==null&&n.query.results!==null&&n.query.results.channel.description!=="Yahoo! Weather Error"){e.each(n.query.results,function(e,n){if(n.constructor.toString().indexOf("Array")!==-1){n=n[0]}var r=new Date;var i=new Date(r.toDateString()+" "+n.astronomy.sunrise);var s=new Date(r.toDateString()+" "+n.astronomy.sunset);if(r>i&&r<s){var o="d"}else{var o="n"}var u=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];var a=u[Math.round(n.wind.direction/22.5)];if(n.item.condition.temp<80&&n.atmosphere.humidity<40){var f=-42.379+2.04901523*n.item.condition.temp+10.14333127*n.atmosphere.humidity-.22475541*n.item.condition.temp*n.atmosphere.humidity-6.83783*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)-5.481717*Math.pow(10,-2)*Math.pow(n.atmosphere.humidity,2)+1.22874*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)*n.atmosphere.humidity+8.5282*Math.pow(10,-4)*n.item.condition.temp*Math.pow(n.atmosphere.humidity,2)-1.99*Math.pow(10,-6)*Math.pow(n.item.condition.temp,2)*Math.pow(n.atmosphere.humidity,2)}else{var f=n.item.condition.temp}if(t.unit==="f"){var l="c";var c=Math.round(5/9*(n.item.condition.temp-32));var h=Math.round(5/9*(n.item.forecast[0].high-32));var p=Math.round(5/9*(n.item.forecast[0].low-32));var d=Math.round(5/9*(n.item.forecast[1].high-32));var v=Math.round(5/9*(n.item.forecast[1].low-32))}else{var l="f";var c=Math.round(9/5*n.item.condition.temp+32);var h=Math.round(9/5*n.item.forecast[0].high+32);var p=Math.round(9/5*n.item.forecast[0].low+32);var d=Math.round(5/9*(n.item.forecast[1].high+32));var v=Math.round(5/9*(n.item.forecast[1].low+32))}var m={title:n.item.title,temp:n.item.condition.temp,tempAlt:c,code:n.item.condition.code,todayCode:n.item.forecast[0].code,timeOfDay:o,units:{temp:n.units.temperature,distance:n.units.distance,pressure:n.units.pressure,speed:n.units.speed,tempAlt:l},currently:n.item.condition.text,high:n.item.forecast[0].high,highAlt:h,low:n.item.forecast[0].low,lowAlt:p,forecast:n.item.forecast[0].text,wind:{chill:n.wind.chill,direction:a,speed:n.wind.speed},humidity:n.atmosphere.humidity,heatindex:f,pressure:n.atmosphere.pressure,rising:n.atmosphere.rising,visibility:n.atmosphere.visibility,sunrise:n.astronomy.sunrise,sunset:n.astronomy.sunset,description:n.item.description,thumbnail:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+"s.png",image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.condition.code+o+".png",tomorrow:{high:n.item.forecast[1].high,highAlt:d,low:n.item.forecast[1].low,lowAlt:v,forecast:n.item.forecast[1].text,code:n.item.forecast[1].code,date:n.item.forecast[1].date,day:n.item.forecast[1].day,image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+n.item.forecast[1].code+"d.png"},city:n.location.city,country:n.location.country,region:n.location.region,updated:n.item.pubDate,link:n.item.link};t.success(m)})}else{if(n.query.results===null){t.error("An invalid WOEID or location was provided.")}else{t.error("There was an error retrieving the latest weather information. Please try again.")}}});return this}})})(jQuery)
