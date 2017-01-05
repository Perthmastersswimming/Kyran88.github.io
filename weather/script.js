var lat;
var lon;

$.ajax({
  url: 'https://freegeoip.net/json/',
  type: 'GET',
  datatype: 'json',
  success: function(location) { 
    var lat=location.latitude;
    var lon=location.longitude;
    var country=location.country_name;
    var cityname=location.city;
    $(".city").append(cityname);

  $.ajax({ 
    url: "https://api.forecast.io/forecast/92fd0081530eebd7bd22a521aeac97ef/"+lat+","+lon,
    jsonp: "callback",
    dataType: "jsonp",
    success: function(data)
    {
   
var temperature=data.currently.temperature;
      var feelslike=data.currently.apparentTemperature;     
var temp0= Math.round((temperature -32)* 5/9);
     
var info=data.currently.summary;
var cloud=data.currently.cloudCover;
var humidity=data.currently.humidity;
var wind=data.currently.windSpeed;
var image=data.currently.icon;
var weatherIcon = "wi wi-forecast-io-" + image;
            
$("#icon").append("<i></i>");
$("#icon i").addClass(weatherIcon);     
$(".temp0").append(temp0 + "<sup><small>°C</small> </sup>");
$(".info").append(info);
$(".iconInfo").append("<i class='wi wi-cloud'></i>"+"&nbsp;"+ (Math.round(cloud*100)) + "%" +"&nbsp;"+"&nbsp;"+"<i class='wi wi-humidity'></i>"+"&nbsp;"+(Math.round(humidity*100)) + "%" +"&nbsp;"+"&nbsp;"+ "<i class='wi wi-strong-wind'></i>"+"&nbsp;"+ wind + "km/h");
$("#today").append("Today"); 
      
      
var image1=data.daily.data[0].icon;
var temperatureMin1=data.daily.data[0].temperatureMin;
var temperatureMax1=data.daily.data[0].temperatureMax;

      
$(".temp1").append(Math.round((temperatureMin1 -32)* 5/9) + "°C "+"/ " + Math.round((temperatureMax1 -32)* 5/9) + "°C");   
      $(".feelslike").append("feels like "+ Math.round((feelslike -32)* 5/9) +"°C ");   
var weatherIcon1 = "wi wi-forecast-io-" + image1;
$("#icon1").append("<i></i>");
$("#icon1 i").addClass(weatherIcon1);

      
$("#tomorrow").append("Tomorrow");             
var image2=data.daily.data[1].icon;
var temperatureMin2=data.daily.data[1].temperatureMin;
var temperatureMax2=data.daily.data[1].temperatureMax;
$(".temp2").append(Math.round((temperatureMin2 -32)* 5/9) + "°C / " + Math.round((temperatureMax2 -32)* 5/9) + "°C");                   
var weatherIcon2 = "wi wi-forecast-io-" + image2;
$("#icon2").append("<i></i>");
$("#icon2 i").addClass(weatherIcon2);

      
var sec3=data.daily.data[2].time; 
var milli3=sec3*1000;
var dayaftertomorrow=moment(milli3).format("dddd"); 
$("#dayaftertomorrow").append(dayaftertomorrow);       
var image3=data.daily.data[2].icon;
var temperatureMin3=data.daily.data[2].temperatureMin;
var temperatureMax3=data.daily.data[2].temperatureMax;
$(".temp3").append(Math.round((temperatureMin3 -32)* 5/9) + "°C / " + Math.round((temperatureMax3 -32)* 5/9) + "°C");                   
var weatherIcon3 = "wi wi-forecast-io-" + image3;
$("#icon3").append("<i></i>");
$("#icon3 i").addClass(weatherIcon3);
 
      
var sec4=data.daily.data[3].time; 
var milli4=sec4*1000;
var andthedayafter=moment(milli4).format("dddd"); 
$("#andthedayafter").append(andthedayafter);        
var image4=data.daily.data[3].icon;
var temperatureMin4=data.daily.data[3].temperatureMin;
var temperatureMax4=data.daily.data[3].temperatureMax;
$(".temp4").append(Math.round((temperatureMin4 -32)* 5/9) + "°C / " + Math.round((temperatureMax4 -32)* 5/9) + "°C");                   
var weatherIcon4 = "wi wi-forecast-io-" + image4;
$("#icon4").append("<i></i>");
$("#icon4 i").addClass(weatherIcon4);
      
$(".hr").append("<hr>");  
$(".button").append("<button class='btn' id='tempC'><b>°C</b></button> "+
        " <button class='btn' id='tempF'><b>°F</b></button>");
      
      $("#tempF").on('click',function()
              {
  $('.temp0').text((Math.round(temperature)) +'°F');
        $(".feelslike").text("feels like "+ Math.round(feelslike) +"°F ");
        $('.temp1').text(Math.round(temperatureMin1) + "°F / " + Math.round(temperatureMax1) + "°F");
  $('.temp2').text(Math.round(temperatureMin2) + "°F / " + Math.round(temperatureMax2) + "°F");
  $('.temp3').text(Math.round(temperatureMin3) + "°F / " + Math.round(temperatureMax3) + "°F");
  $('.temp4').text(Math.round(temperatureMin4) + "°F / " + Math.round(temperatureMax4) + "°F");
});
      $("#tempC").on('click',function()
                          {
     $('.temp0').text(temp0+'°C');
         $(".feelslike").text("feels like "+ Math.round((feelslike -32)* 5/9) +"°C ");   
              $('.temp1').text(Math.round((temperatureMin1 -32)* 5/9) + "°C "+"/ " + Math.round((temperatureMax1 -32)* 5/9) + "°C");
              $('.temp2').text(Math.round((temperatureMin2 -32)* 5/9) + "°C "+"/ " + Math.round((temperatureMax2 -32)* 5/9) + "°C");
              $('.temp3').text(Math.round((temperatureMin3 -32)* 5/9) + "°C "+"/ " + Math.round((temperatureMax3 -32)* 5/9) + "°C");
              $('.temp4').text(Math.round((temperatureMin4 -32)* 5/9) + "°C "+"/ " + Math.round((temperatureMax4 -32)* 5/9) + "°C");
              
              
              
              
              
     });

      
      
    }
  });
  } 
});

