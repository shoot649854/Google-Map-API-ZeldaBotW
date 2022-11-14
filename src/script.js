let map, infoWindow;
var service;
var markers = [];
var markers_1 = [];
var markers_2 = [];
var markers_3 = [];
var markers_4 = [];
var markers_5 = [];

function initialize(lat,lng) 
{
  const pyrmont = { lat: lat, lng: lng};

  map = new google.maps.Map(document.getElementById("map"), {
    center: pyrmont,
    zoom: 10,
    mapId: "c58801b525aee8b5",
  });

  service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const moreButton = document.getElementById("more");

  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) {
      getNextPage();
    }
  };
}

function panToCurrent() 
{
  const locationButton = document.createElement("button");
  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          initialize(pos.lat,pos.lng);

          console.log(`Device Latitude: ${position.coords.latitude}`);
          console.log(`Device Longitude: ${position.coords.longitude}`);

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },

        () => 
        {
          handleLocationError(true, infoWindow, map.getCenter());
        });
    }

    else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function getRandomInt(max) 
{
  return Math.floor(Math.random() * max + 1);
}

function tower_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/tower.png";

  towerMarker = new google.maps.Marker(
    {
      title: "Tower",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const inforwindow = new google.maps.InfoWindow({
      content: "To fill in your map in The Legend of Zelda: Breath of the Wild, you must seek out Sheikah Tower locations."
    })
    towerMarker.addListener("click", () => {
      inforwindow.open(map, towerMarker);
    });
}

function gardian_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/guardian.png";

  gardianMarker = new google.maps.Marker(
    {
      title: "Guardian",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const inforwindow = new google.maps.InfoWindow({
      content: "Guardians are recurring Enemies "
    })
    gardianMarker.addListener("click", () => {
      inforwindow.open(map, gardianMarker);
    });
}

function inn_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/inn.png";

  innMarker = new google.maps.Marker(
    {
      title: "Inn",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const inforwindow = new google.maps.InfoWindow({
      content: "An Inn is a location from The Legend of Zelda: \nBreath of the Wild. Inns can be found in villages and towns, as well as the many stables found throughout Hyrule."
    })
    innMarker.addListener("click", () => {
      inforwindow.open(map, innMarker);
    });
}

function lynel_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/lynel.png";

  lynelMarker = new google.maps.Marker(
    {
      title: "Lynel",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: google.maps.Animation.DROP,
    });
    
    const inforwindow = new google.maps.InfoWindow({
      content: "A Lynel is one of the centaur-like monsters "
    })
    lynelMarker.addListener("click", () => {
      inforwindow.open(map, lynelMarker);
    });
}

function village_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/village.png";

  villageMarker = new google.maps.Marker(
    {
      title: "Village",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const inforwindow = new google.maps.InfoWindow({
      content: "Village"
    })
    villageMarker.addListener("click", () => {
      inforwindow.open(map, villageMarker);
    });
}

function molduga_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/molduga.png";

  moldugaMarker = new google.maps.Marker(
    {
      title: "Sword",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: google.maps.Animation.DROP,
    });
    
    const inforwindow = new google.maps.InfoWindow({
      content: "Sword"
    })
    moldugaMarker.addListener("click", () => {
      inforwindow.open(map, moldugaMarker);
    });
}

function treasure_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/treasure.png";

  treasureMarker = new google.maps.Marker(
    {
      title: "Treasure Chest",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: google.maps.Animation.DROP,
    });
    
    const inforwindow = new google.maps.InfoWindow({
      content: "A Treasure Chest is where weapons, materials, \nand rupees are hidden throughout \nHyrule in The Legend of Zelda: Breath of the Wild."
    })
    treasureMarker.addListener("click", () => {
      inforwindow.open(map, treasureMarker);
    });
}

function toggleBounce()
{
  if (marker.getAnimation() !== null) 
  {
    marker.setAnimation(null);
  } 
  else 
  {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function additionalItem(lat, lon) 
{
  var i = 1;
  while (i < 5)
  {

    var LATITUDE = lat + getRandomInt(10) * 0.013;
    var LONGITUDE = lon + getRandomInt(10) * 0.028;
    treasure_marker(LATITUDE + 0.034, LONGITUDE + 0.038);
    treasure_marker(LATITUDE - 0.044, LONGITUDE - 0.042);
    treasure_marker(LATITUDE - 0.052, LONGITUDE + 0.052);

    inn_marker(LATITUDE - 0.032, LONGITUDE - 0.032);
    inn_marker(LATITUDE + 0.052, LONGITUDE - 0.052);
    village_marker(LATITUDE, LONGITUDE);
    lynel_marker(LATITUDE + 0.032, LONGITUDE - 0.032);

    var LATITUDE = lat + getRandomInt(10) * 0.011;
    var LONGITUDE = lon + getRandomInt(10) * 0.031;
    lynel_marker(LATITUDE - 0.052, LONGITUDE + 0.052);
    gardian_marker(LATITUDE - 0.040, LONGITUDE - 0.040);
    molduga_marker(LATITUDE + 0.032, LONGITUDE + 0.032);
    molduga_marker(LATITUDE + 0.052, LONGITUDE + 0.052);
    
    i++;
  }
}

function addMarker(position) 
{
    var marker = new google.maps.Marker({
        position: position,
        map: map,
    });
    markers.push(marker);
}

function setMapOnAll(map) 
{
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function hideMarkers() {
  setMapOnAll(null);
}

function showMarkers() 
{
    setMapOnAll(map);
}

function deleteMarkers() {
  hideMarkers();
  markers_1 = [];
}
function deleteMarkers1() {
  markers_1[0].setMap(null);
  markers_1 = [];
}
function deleteMarkers2() {
  markers_2[0].setMap(null);
  markers_2 = [];
}
function deleteMarkers3() {
  markers_3[0].setMap(null);
  markers_3 = [];
}
function deleteMarkers4() {
  markers_4[0].setMap(null);
  markers_4 = [];
}
function deleteMarkers5() {
  markers_5[0].setMap(null);
  markers_5 = [];
}


function callback(results, status) 
{
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
function mainMarker(lat, lon)
{
  var LATITUDE = lat;
  var LONGITUDE = lon;
  mainquest_1_marker(LATITUDE, LONGITUDE);
  mainquest_2_marker(LATITUDE + 0.072, LONGITUDE + 0.072);
  mainquest_3_marker(LATITUDE - 0.102, LONGITUDE - 0.132);
  mainquest_4_marker(LATITUDE - 0.072, LONGITUDE - 0.072);
  mainquest_5_marker(LATITUDE + 0.102, LONGITUDE + 0.042);

  var LATITUDE = lat + 0.0056;
  var LONGITUDE = lon - 0.0097;
  tower_marker(LATITUDE + 0.072, LONGITUDE + 0.072);
  tower_marker(LATITUDE - 0.102, LONGITUDE - 0.132);
  tower_marker(LATITUDE - 0.072, LONGITUDE - 0.072);
  tower_marker(LATITUDE + 0.102, LONGITUDE + 0.042);
  tower_marker(LATITUDE - 0.102, LONGITUDE + 0.042);
}

function mainquest_1_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/mainquest.png";

  mainquestMarker_1 = new google.maps.Marker(
    {
      title: "Main Quest 1",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const contentString = '<h2> Follow the Sheikah Slate </h2>' +
    "Use Google Map as Sheikah Slate and follow where it directs you. You are going to find something you did not know and discover that your new things in your town. " + 
    "In the game of Zelda Breath of the wild, you are going to see some monsters and new weapons and getting know the game. You probably find new aspects of your place. " + 
    "Go to the pinned place and find it out!";

    const inforwindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Follow the Sheikah Slate"
    })

    mainquestMarker_1.addListener("click", () => {
      inforwindow.open(map, mainquestMarker_1);
    });

    markers_1.push(mainquestMarker_1);
    markers.push(mainquestMarker_1);
}

function mainquest_2_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/mainquest.png";

  mainquestMarker_2 = new google.maps.Marker(
    {
      title: "Main Quest 2",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const contentString_2 = '<h2> Seek Out Impa </h2>' +
    "Time goes very fast especially when you get older, and you probably do not realize how meaningful those friends you made when you were little" + 
    "Take this chance to talk to your friend and meet up there. It's good to have a coffee chat, or snack if you do not like coffee that much. " + 
    " Go to the pinned place and find it out!";

    const inforwindow = new google.maps.InfoWindow({
      content: contentString_2,
      ariaLabel: "Seek Out Impa",

    })

    mainquestMarker_2.addListener("click", () => {
      inforwindow.open(map, mainquestMarker_2);
    });

    markers_2.push(mainquestMarker_2);
    markers.push(mainquestMarker_2);
}

function mainquest_3_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/mainquest.png";

  mainquestMarker_3 = new google.maps.Marker(
    {
      title: "Main Quest 3",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const contentString = '<h2> Find the Fairy Fountain </h2>' +
    "In Japan, Fountain is very famous since it is rockly area and there is a culture of hot spring. So, this time, find a nice Sauna in this area. You probably have not "+ 
    "spent much of your time in hot spring because it's not really a thing in not-rocky area, but it actually is nice and it is said to have some healing effect" + 
    "In the Zelda Breath of the Wild, if you find a Fountain, the fairly shall enpower your weapon or protector!  Go to the pinned place and find it out!";

    const inforwindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Find the Fairy Fountain",

    })

    mainquestMarker_3.addListener("click", () => {
      inforwindow.open(map, mainquestMarker_3);
    });

    markers_3.push(mainquestMarker_3);
    markers.push(mainquestMarker_3);
}

function mainquest_4_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/mainquest.png";

  mainquestMarker_4 = new google.maps.Marker(
    {
      title: "Main Quest 4",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const contentString = "<h2> The Hero's Sword </h2>" +
    "Hero Sword remains the only one able to lift the hammer in this universe by the real hero. In the real world, there must have some strength that only "+
    "you remain and probably you do not realize it now as Link, the main character in this game, did not realize that he owns Hero Sword because he was sleeping "+ 
    "for 100 years. Go to the pinned place and find it out!";

    const inforwindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "The Hero's Sword",

    })
    mainquestMarker_4.addListener("click", () => {
      inforwindow.open(map, mainquestMarker_4);
    });

    markers_4.push(mainquestMarker_4);
    markers.push(mainquestMarker_4);
}

function mainquest_5_marker(LATITUDE, LONGITUDE) 
{
  const image = "/Users/shotomorisaki/programming/Google-Map-API-ZeldaBotW/images/mainquest.png";

  mainquestMarker_5 = new google.maps.Marker(
    {
      title: "Main Quest 5",
      position: {lat: LATITUDE, lng: LONGITUDE},
      map,
      icon: image,
      draggable: false,
      animation: null,
    });
    
    const contentString = '<h2> Destroy Ganon </h2>' +
    "In the Breath of Wild, Ganon is the last enemy and this is the end of story if you could beat Ganon. Because of Ganon, everyone got hurt and " + 
    "been stressful. Well, talking about the real-world, there we also have something stressful in our daily life, such as annoying manager, rainy day, and your work. " + 
    "This time, beat your stress. Go to the pinned place and find it out!";

    const inforwindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Destroy Ganon",

    })
    mainquestMarker_5.addListener("click", () => {
      inforwindow.open(map, mainquestMarker_5);
    });

    markers_5.push(mainquestMarker_5);
    markers.push(mainquestMarker_5);
}

function initMap() 
{
  var haightAshbury = {lat: 35.738237498456, lng: 139.813106293497};
  map = new google.maps.Map(document.getElementById("map"), 
  {
    center: haightAshbury,
    zoom: 11.9,
    mapId: 'c58801b525aee8b5'
  });

  mainMarker(35.7382374984, 139.8131062934);
  additionalItem(35.738237498456, 139.813106293497);
  additionalItem(35.738237498456-0.01, 139.813106293497-0.01);
  additionalItem(35.738237498456+0.05, 139.813106293497-0.17);
  additionalItem(35.738237498456-0.05, 139.813106293497-0.17);
  additionalItem(35.738237498456-0.20, 139.813106293497-0.20);


  document.getElementById("show-markers").addEventListener("click", showMarkers);
  document.getElementById("delete-markers-1").addEventListener("click", deleteMarkers1);
  document.getElementById("delete-markers-2").addEventListener("click", deleteMarkers2);
  document.getElementById("delete-markers-3").addEventListener("click", deleteMarkers3);
  document.getElementById("delete-markers-4").addEventListener("click", deleteMarkers4);
  document.getElementById("delete-markers-5").addEventListener("click", deleteMarkers5);
}

window.initMap = initMap;