const myCoords = [59.934280, 30.335099];

const map = L.map('map').setView(myCoords, 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker(myCoords).addTo(map)
  .bindPopup('Nevsky Prospect 28')
  .openPopup();
