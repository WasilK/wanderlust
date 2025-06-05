mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const faLink = document.createElement('link');
faLink.rel = 'stylesheet';
faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
document.head.appendChild(faLink);
const el = document.createElement('div');
el.className = 'custom-marker';

// Set inner HTML to Font Awesome icon
el.innerHTML = `<i class="fa-brands fa-airbnb" style="font-size: 37px; color: red"></i>`;



const marker = new mapboxgl.Marker({ element: el })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4><p>Exact location provided after booking</p>`
    )
  )
  .addTo(map);

 