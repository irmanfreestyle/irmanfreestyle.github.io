$(document).ready(function() {

	if(!navigator.geolocation) {
		console.log("Geolocation is not supported by this browser!")
	}


	navigator.geolocation.getCurrentPosition(success, error);

	function success(pos) {

		var lat = pos.coords.latitude;
		var long = pos.coords.longitude;
		weather(lat, long);
		googleURL(lat, long);
	
	}

	$("#loading").hide();
	var success = false;

	function error() {
		console.log("Error")
		success = true;
	}

	function googleURL(lat, long) {
		var URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAKrWpPNhMc68iXrWQMEV6EX1wHjW0I8k0`;
		
		$.getJSON(URL, function(Gdata) {
			var city = Gdata.results[0].address_components[4].long_name;
			var districts = Gdata.results[0].address_components[3].long_name;
			$("#city").text(`${districts}, ${city}`);
		});

	} 


	
	function weather(lat, long){
		
    	var apiKey = "deeec8caa3d2e1709c88fbbb376502e0";
   		var URL = `https://api.darksky.net/forecast/deeec8caa3d2e1709c88fbbb376502e0/${lat},${long}`;
     
	    //get darksky api data
	    $.ajax({
	      url: URL,
	      dataType: "jsonp",
	      success: function (data) { 
	      	success = true;
	        var icon = data.currently.icon;
	        var temp = Math.floor(data.currently.temperature);
	        var skycons = new Skycons({"color": "black"});
	        var stat = data.currently.summary;


	        skycons.add(document.getElementById("icon"), icon);
	        skycons.play();
	        $("#temp").text(temp);
	        $("#stat").text(stat);

	      }
    });
  }

  	var load = setInterval(()=> {
  		if(success == false) {
  			console.log("Loading")
  			$("#loading").fadeIn(500);
  		} else {
  			clearInterval(load)
  			success = false;
  			$("#loading").fadeOut(500);
  			console.log(success)
  		}
  	}, 300);



	var searchBox = new google.maps.places.SearchBox(document.querySelector("#cityName"));

	searchBox.addListener('places_changed', searchLocation);


	function searchLocation() {

		if($("#cityName").val().trim().length == 0) {
			return false;
		}

		var _load = setInterval(()=> {
  		if(success == false) {
  			console.log("Loading"+success)
  			$("#loading").fadeIn(500);
  		} else {
  			clearInterval(_load)
	  			success = false;
	  			$("#loading").fadeOut(500);
	  			console.log(success)
	  		}
	  	}, 300);

		var datas = searchBox.getPlaces()[0];
		var locale = searchBox.getPlaces()[0].geometry.location;
		var loc = JSON.stringify(locale);
		var latlng = JSON.parse(loc)
		var lat = latlng.lat;
		var long = latlng.lng;
		
		weather(lat, long)

		var all = [];
		for(i=0;i<3;i++) {
			if(i==1) continue;
			all.push(datas.address_components[i].long_name);
			$("#city").text(all.join(", "));
		}
	}

});

