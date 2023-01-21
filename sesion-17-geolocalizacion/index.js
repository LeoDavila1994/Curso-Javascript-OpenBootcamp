let map, marker;

function initMap(){
  const posicion = {
    lat: -25.344,
    lng: 131.031
  };

  const favOne = {
    lat: 35.68956,
    lng: 139.69172
  };
  const favTwo = {
    lat: 34.1477800,
    lng: -118.1445200
  };
  const favThree = {
    lat: 40.4165,
    lng: -3.70256
  };

  map = new google.maps.Map(document.getElementById("map"),{
    zoom: 4,
    center: posicion
  });

  marker = new google.maps.Marker({
    position: posicion,
    map
  });

  let tokyo = new google.maps.Marker({
    position: favOne,
    map,
    title: "Tokyo Japon"
  });

  let california = new google.maps.Marker({
    position: favTwo,
    map,
    title: "California, Estados Unidos"
  });

  let madrid = new google.maps.Marker({
    position: favThree,
    map,
    title: "Madrird, España"
  });

};

function getPosition() {
  if(navigator.geolocation){
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const geoPosit = geoLoc.watchPosition(centrarMapa, onError, options);
  } else {
    alert("Tu navegador no admite geolocalización");
  }
}

function centrarMapa (position) {
  const newLoc = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  marker.setPosition(newLoc);
  map.setCenter(newLoc);
}

function onError (error) {
  console.error(error);
}

getPosition();





