/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat. De coördinaten van AP zijn: 51.23009 en 4.41616.
De initiële grootte is 16 met een maximale zoom van 19.
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map("mijnMap").setView([51.171036778497246, 4.311773184352585], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// bepaal de rechthoek rondom het gebouw van AP (coördinaten zijn 51.23041, 4.4155 en 51.22991, 4.41675)
let bounds = [
  [51.23041, 4.4155],
  [51.22991, 4.41675],
];

// kleur de rechthoek in met de rode AP-kleur (#e60005)
L.circle([51.17120878480565, 4.3097656896864125], { radius: 1300 }).addTo(map);
// plaats een marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let mijnMarker = L.marker([51.171036778497246, 4.311773184352585]).addTo(map);
mijnMarker
  .bindPopup("<b>Woonplaats</b><br>Kruibeke, Oost-Vlaanderen")
  .openPopup();
