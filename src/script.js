let map, infoWindow;
var service;

function markerPublicSchool() 
{
  var csv = '/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/data/Private_Schools.csv';
  var lines = csv.split("\n");
  while( typeof lines[0] !== "undefined" )
  {
      var line = lines.shift();
      var split = line.split(',');
      document.querySelector("#content").innerHTML += split[0]+"<br/>";
  }
}

function initMap() 
{
  map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35, lng: 139 },
      zoom: 6,
      mapId: 'c58801b525aee8b5'
    });

  const image =
    "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/tower.png";
  
  const beachMarker = new google.maps.Marker({
    position: { lat: 35, lng: 139 },
    map,
    icon: image,
  });
}

window.initMap = initMap;

// 35.73823749845609, 139.8131062934975