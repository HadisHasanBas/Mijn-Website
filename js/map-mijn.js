let map = L.map("mijnMap").setView([51.171036778497246, 4.311773184352585], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let bounds = [
  [51.23041, 4.4155],
  [51.22991, 4.41675],
];

L.circle([51.17120878480565, 4.3097656896864125], { radius: 1300 }).addTo(map);

let mijnMarker = L.marker([51.171036778497246, 4.311773184352585]).addTo(map);
mijnMarker
  .bindPopup("<b>Woonplaats</b><br>Kruibeke, Oost-Vlaanderen")
  .openPopup();
