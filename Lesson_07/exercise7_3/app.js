function main() {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
    }
}

function success(location) {
    let vector = [];
    document.getElementsByTagName('div')[0].id = 'mapid';
    vector[0] = location.coords.latitude;
    vector[1] = location.coords.longitude;
    draw(vector);
}

function fail(msg) {
    console.log(msg.code);
}

function draw(vector) {
    const mymap = L.map('mapid').setView(vector, 13);
    let tableOfLocations = [];
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(mymap);
    const marker = L.marker(vector).addTo(mymap);
    tableOfLocations.push(vector);
    marker.bindPopup('Kliknąłeś na punkt o współrzędnych: ' + '(' + vector[0] + ', ' + vector[1] + ').').openPopup();

    const circle = L.circle(vector, {
        color: '#2BE80C',
        fillColor: '#84FF0D',
        fillOpacity: 0.5,
        radius: 1000
    }).addTo(mymap);

    function onMapClickMarker(e) {
        let marker2 = L.marker();
        marker2.setLatLng(e.latlng).addTo(mymap);
        marker2.bindPopup('Kliknąłeś na punkt o współrzędnych: ' + e.latlng.toString().replace('LatLng', '') + '.').openPopup();
        tableOfLocations.push([e.latlng.lat, e.latlng.lng]);
        let polyline = L.polyline(tableOfLocations, { color: 'red' }).addTo(mymap);
    }

    mymap.on('click', onMapClickMarker);

    L.control.scale({ imperial: false }).addTo(mymap);

    let polyline = L.polyline(tableOfLocations, { color: 'red' }).addTo(mymap);
}

window.onload = main;