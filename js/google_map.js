// Define the global variable for Google Maps
let map;

// Load the Google Maps API asynchronously
function loadScript(url, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = callback;
  document.body.appendChild(script);
}

function initMap() {
  const myLatlng = { lat: -1.2972789704746053, lng: 36.79223638024518 };

  const mapOptions = {
    zoom: 7,
    center: myLatlng,
    scrollwheel: false,
    styles: [
      {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "simplified" }, { lightness: 20 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ hue: "#f49935" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ hue: "#fad959" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{ visibility: "simplified" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ hue: "#a1cdfc" }, { saturation: 30 }, { lightness: 49 }],
      },
    ],
  };

  // Create the Google Map using the element and options defined above
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const addresses = ["Nairobi"];

  for (let x = 0; x < addresses.length; x++) {
    $.getJSON(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        addresses[x],
      null,
      function (data) {
        const p = data.results[0].geometry.location;
        const latlng = new google.maps.LatLng(p.lat, p.lng);
        new google.maps.Marker({
          position: latlng,
          map: map,
          icon: "images/loc.png",
        });
      }
    );
  }
}

// Load the Google Maps API
function loadMapsAPI() {
  loadScript(
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSyH0GsYKD2yiHmQiyplsIgFKx_apdllU&callback=initMap"
  );
}

window.onload = loadMapsAPI;
