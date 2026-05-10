let mapA = L.map("apMap").setView([51.23009, 4.41616], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapA);

let boundsap = [
  [51.23041, 4.4155],
  [51.22991, 4.41675],
];

L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(mapA);

let apMarker = L.marker([51.23009, 4.41616]).addTo(mapA);
apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();
