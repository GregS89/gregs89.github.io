var map;

function initMap() {
  var myLatLng = { lat: -1.2972789704746053, lng: 36.79223638024518 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: myLatLng,
    scrollwheel: false,
    styles: [
      {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }, { lightness: 20 }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ hue: '#f49935' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ hue: '#fad959' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [{ hue: '#a1cdfc' }, { saturation: 30 }, { lightness: 49 }],
      },
    ],
  });

  var addresses = ['Kilimani'];

  for (var i = 0; i < addresses.length; i++) {
    $.getJSON(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        address: addresses[i],
        key: 'AIzaSyDSyH0GsYKD2yiHmQiyplsIgFKx_apdllU', // Replace with your Google Maps API key
      },
      function (data) {
        var p = data.results[0].geometry.location;
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        new google.maps.Marker({
          position: latlng,
          map: map,
          icon: 'images/loc.png',
        });
      }
    );
  }
}
