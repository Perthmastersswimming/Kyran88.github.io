var model= {
		userLang: "",
		// Save preferred units here - either "Metric" or "Imp"
		currUnits: "",
		// All data below collected from OpenWeatherMap API JSON response
		data: {},
		getData: function(responseText) {
			var dataObj = JSON.parse(responseText);
			
			// Store data for later use
			this.data.city = dataObj.name;
			this.data.country = dataObj.sys.country;
			this.data.sunrise = dataObj.sys.sunrise;
			this.data.sunset = dataObj.sys.sunset;
			this.data.weatherDescription = capitalize(dataObj.weather[0].description);
			this.data.weatherID = dataObj.weather[0].id;
			this.data.avTempMetric = Math.round(dataObj.main.temp);
			this.data.avTempImp = Math.round((this.data.avTempMetric * 1.8) + 32);
			this.data.pressure = Math.round(dataObj.main.pressure);
			this.data.humidity = dataObj.main.humidity;
			this.data.windSpeedMetric = (dataObj.wind.speed * 3.6).toFixed(1);
			this.data.windSpeedImp = (0.6214 * this.data.windSpeedMetric).toFixed(1);
			this.data.windDir = degToCompass(dataObj.wind.deg);
		
			// Convert wind direction from degrees to compass directions
			function degToCompass(deg) {
				// Wind directions list
				var cardinalDir = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
				// Direction change step
				var dirStep = 360 / cardinalDir.length;
				// Calculate corresponding index
				var index = Math.floor((deg%360)/dirStep + .5) % 16;
				// Return the direction
				return cardinalDir[index];
			}
		}
	};
	
var	view = {
		modal: document.getElementById("modal"),
		dataContainer: document.getElementById("data"),
		switchUnitsBtn: document.getElementById("switch-units"),
		updateWeather: function() {
			// Location 
			var locationName = document.getElementById("location-name");
			locationName.innerHTML = "" + model.data.city + ", " + model.data.country.toUpperCase() + "";
			// Current weather icon
			var weatherIcon = document.getElementById("curr-weather-icon");
			weatherIcon.setAttribute("class", "wi wi-owm-" + isDayOrNight() + "-" + model.data.weatherID + "");
			// Current weather description
			var weatherDescrip = document.getElementById("curr-weather-descrip");
			weatherDescrip.innerHTML = model.data.weatherDescription;
			// Current temperature value and units
			var currTemp = document.getElementById("curr-temp-value"),
				tempUnits = document.getElementById("temp-units");
			currTemp.innerHTML = model.data["avTemp" + model.currUnits];
			tempUnits.innerHTML = (model.currUnits === "Metric" ? "°C" : "°F");
			// Current pressure
			var currPressure = document.getElementById("curr-pressure");
			currPressure.innerHTML = model.data.pressure + " hPa";
			// Current humidity
			var currHumidity = document.getElementById("curr-humidity");
			currHumidity.innerHTML = model.data.humidity + "%";
			// Current wind conditions and icon
			var currWindData = document.getElementById("curr-wind-data"),
				currWindIcon = document.getElementById("curr-wind-icon");
			currWindData.innerHTML = model.data.windDir + " " + model.data["windSpeed" + model.currUnits] + (model.currUnits === "Metric" ? " km/h" : " mph");
			currWindIcon.setAttribute("class", "wi wi-wind wi-from-" + model.data.windDir.toLowerCase() + "");
			
			// Discriminate day/night
			function isDayOrNight() {
				var currDate = new Date(),
					currTime = currDate.getTime(),
					sunriseTime = model.data.sunrise * 1000,	// owm states time is unix, that is measured in s rather than ms
					sunsetTime = model.data.sunset * 1000;
					
				if (currTime >= sunriseTime && currTime < sunsetTime) {
					return "day";
				} else 
					return "night";
			}
		},
		
		getUnits: function() {
			// Get selected units
			view.switchUnitsBtn.checked ? model.currUnits = "Imp" : model.currUnits = "Metric";
		
			// Update view only if data is already available
			if (Object.keys(model.data).length) {
				view.updateWeather();
			}
		},
		
		displayModal: function(message) {
			// Assign error message
			this.modal.innerHTML = message;
			// Show modal and hide data
			this.modal.classList.remove("hide");
			this.dataContainer.classList.add("hide");
		},
		
		displayData: function() {
			// Show data and hide modal
			this.dataContainer.classList.remove("hide");
			this.modal.classList.add("hide");
		}
		
	};
	
var controller = {
		
		getGeoLocation: function() {
			// Test for geolocation support
			if (navigator.geolocation) {
				// Get position if geolocation available
				navigator.geolocation.getCurrentPosition(sendLocation, displayError);
			}
			
			// Geolocation success handler
			function sendLocation(pos) {
				var lat = pos.coords.latitude;
				var lon = pos.coords.longitude;
				// Call OWM using detected coordinates
				controller.setAPIcall("byCoords", lat, lon);
			}
			
			// Geolocation error handler
			function displayError(error) {
				// Set error message depending on error code
				var errorMessage = "";
				switch (error.code) {
					case 1:
					case 2:
						errorMessage = "We can't detect your position. Try reloading the page or manually type your location in the search bar above.";
						break;
					case 3:
						errorMessage = "Request timed out. Check your connection.";
						break;
					default:
						errorMessage = "Looks like we're having some trouble right now. Try a refresh.";
				}
				
				// Display error message in UI
				view.displayModal(errorMessage);
			}
			
		},
		
		getInputLocation: function(locationName) {
				// If input not empty call OWM by city name
				if (locationName) {
					controller.setAPIcall("byName", locationName, null);
					view.displayModal("Loading...");
				}
		},
		
		setAPIcall: function(APIcallMethod, a, b) {
			// OpenWeatherMap API url
			var url = "http://api.openweathermap.org/data/2.5/weather?";
				
			switch(APIcallMethod) {
				case "byCoords":	// if calling by city coords a is latitude, b is longitude
					url += "lat=" + a + "&lon=" + b + "";
					break;
				case "byName":
					url += "q=" + a + "";	// if calling by city name, a is name, b is ignored
					break;
			}
			
			// Request for metric units
			url += "&units=metric";
			// Request for preferred language
			url += "&lang=" + model.userLang + "";
			url += "&appid=8be39b07e1fce1835190110a0d26f214";
			
			// Set the request
			var request = new XMLHttpRequest();
			request.open("GET", url);
			request.send();
			
			request.onreadystatechange = function() {
				// Successful request
				if (request.readyState == 4 && request.status == 200) {
					// Store data in model
					model.getData(request.responseText);
					// Display current data
					view.updateWeather();
					view.displayData();
				} 
				// Failed Request
				else if (request.status != 200) {
					view.displayModal("Ooops! That's an error. Try again in a few minutes")
				}
			};
		}
		
	};

function init() {
	// Hide "js disabled" message and display data instead
	view.displayModal("Loading...");
	
	// Detect preferred language
	getPrefLanguage();
	
	// Get current date and time
	var currDate = document.getElementById("curr-date"),
		currTime = document.getElementById("curr-time");
	// First call on page load
	getDateTime(currDate, currTime);
	// Display search bar and date
	document.getElementById("top-bar").classList.remove("hide");
	// Subsequent calls every second
	setInterval(getDateTime, 1000, currDate, currTime);
	
	// Search button functionality
	var srcBtn = document.getElementById("search-btn");
	srcBtn.addEventListener("click", handleSrcBtn);
	var inputField = document.getElementById("location-input");
	inputField.addEventListener("keydown", handleSrcBtn);
	
	// Switch units functionality
	view.getUnits();	// metric by default, but browsers may cache this input, so need to check it on load
	view.switchUnitsBtn.addEventListener("click", view.getUnits);
	
	// Get location using HTML5 geolocation
	controller.getGeoLocation();
}

function getDateTime(currDate, currTime) {
	var date = new Date,
		locale = model.userLang,
		options = {weekday: "short", month: "short", day:"numeric"};
		
	currDate.innerHTML = capitalize(date.toLocaleDateString(locale, options));
	
	var time = date.toLocaleTimeString(locale).split(":");
	if (time.length === 3) {
		// Remove seconds
		time = time[0] + ":" + time[1];
	}
	
	currTime.innerHTML = time;
}

function getPrefLanguage() {
	var lang;
	if (navigator.languages) {
		lang = navigator.languages[0].split("-")[0];
	} else if (navigator.userLanguage) {
		lang = navigator.userLanguage.split("-")[0];
	} else {
		lang = "en";
	}
	// Store lang in model
	model.userLang = lang;
}

function handleSrcBtn(e) {
	var locationInput = document.getElementById("location-input"),
		locationName = locationInput.value;
	// Trigger search on click or when hitting enter
	if ((e.type === "keydown" && (e.which === 13 || e.keyCode === 13)) || e.type === "click") {
		controller.getInputLocation(locationName);
		// Clear input field
		locationInput.value = "";
    e.target.blur();
	}
}

// Helper func: capitalize the first letter of each word in a string
function capitalize(string) {
	return string.replace(/\b./g, function(match) {
			return match.toUpperCase();
		});
}
	
// Make the magic happen
init();
