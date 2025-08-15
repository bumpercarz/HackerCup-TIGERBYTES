// Only for thumbnail on home tab
var thumbnailMap = L.map('mapThumbnail', {
  center: [14.5995, 120.9842], // example: Manila
  zoom: 12,
  dragging: false,
  zoomControl: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false,
  tap: false,
  touchZoom: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(thumbnailMap);

// Optional: add a few static markers to preview
L.marker([14.5995, 120.9842]).addTo(thumbnailMap).bindPopup('Sample marker');
