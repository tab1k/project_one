var map;
/*var directionsDisplay;*/
/*var directionsService;*/
		function initMap() {
			/*const directionsService = new google.maps.DirectionsService();
			const directionsRenderer = new google.maps.DirectionsRenderer();*/
			var mapOptions = {
				zoom: 8,
				center: new google.maps.LatLng(35.827031438270794, 139.99275069296743),
				styles: [
					{
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#212121"
						}
					  ]
					},
					{
					  "elementType": "labels.icon",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "elementType": "labels.text.stroke",
					  "stylers": [
						{
						  "color": "#212121"
						}
					  ]
					},
					{
					  "featureType": "administrative",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "administrative.country",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					},
					{
					  "featureType": "administrative.land_parcel",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "featureType": "administrative.locality",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#bdbdbd"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#181818"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "labels.text.stroke",
					  "stylers": [
						{
						  "color": "#1b1b1b"
						}
					  ]
					},
					{
					  "featureType": "road",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#2c2c2c"
						}
					  ]
					},
					{
					  "featureType": "road",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#8a8a8a"
						}
					  ]
					},
					{
					  "featureType": "road.arterial",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#373737"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#3c3c3c"
						}
					  ]
					},
					{
					  "featureType": "road.highway.controlled_access",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#4e4e4e"
						}
					  ]
					},
					{
					  "featureType": "road.local",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "featureType": "transit",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#000000"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#3d3d3d"
						}
					  ]
					}
				  ]
			};
			/*directionsRenderer.setMap(map);*/
			
			const map = new google.maps.Map(document.getElementById("map"), mapOptions);
		
	
			var air = new google.maps.LatLng(35.5503344635377, 139.78637224949316);
			var rwb = new google.maps.LatLng(35.827031438270794, 139.99275069296743);
			var rwb2 = new  google.maps.LatLng(35.70782322799533, 139.291784864339);
			var markerAIR = new google.maps.Marker({
				position: air,
				map: map
			});
			var iconCar = {
				url: 'images/pina.png', // url
				scaledSize: new google.maps.Size(50, 50), // size
			};
			var markerRWB = new google.maps.Marker({
				position: rwb,
				map: map,
				icon: iconCar
			});	

			var markerRWB2 = new google.maps.Marker({
				position: rwb2,
				map: map,
				icon: iconCar
			});	

			var pathBetween = new google.maps.Polyline({
				path: [air,rwb],
				strokeColor: '#FF0000',
				strokeOpacity: 1.0,
				strokeWeight: 2
			  });
			  pathBetween.setMap(map);
			  var pathBetween = new google.maps.Polyline({
				path: [air,rwb2],
				strokeColor: '#FF0000',
				strokeOpacity: 1.0,
				strokeWeight: 2
			  });
	   
	   
			  pathBetween.setMap(map);	

	
			  };
			 /* function calculateAndDisplayRoute(directionsService, directionsRenderer) {
				directionsService.route(
				  {
					origin: {
					  query: document.getElementById("air").value,
					},
					destination: {
					  query: document.getElementById("rwb").value,
					},
					travelMode: google.maps.TravelMode.DRIVING,
				  },
				  (response, status) => {
					if (status === "OK") {
					  directionsRenderer.setDirections(response);
					} else {
					  window.alert("Directions request failed due to " + status);
					}
				  }
				);
			  }*/