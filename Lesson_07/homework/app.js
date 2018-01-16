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
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(mymap);
    var redIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const marker = L.marker(vector, { icon: redIcon }).addTo(mymap);
    marker.bindPopup('Tu jesteś.').openPopup();

    L.control.scale().addTo(mymap);

    let xhr = new XMLHttpRequest(); // utworzenie obiektu XHR
    xhr.open('GET', 'map_service.json', true); // przygotowanie żądania
    /* W powyższej metodzie pierwszy argument to nazwa metody HTTP, drugi to adres URL strony, która będzie obsługiwać żądanie, trzeci to wartość boolowska, wskazująca, czy żądanie powinno być asynchroniczne*/
    xhr.send(null); // wysłanie żądania bez dodatkowych informacji dodatkowych

    /* Odpowiedź */
    xhr.onload = function () { // wykonanie funkcji anonimowej dla zdarzenia ONLOAD
        if (xhr.status === 200) { // jeśli status wynosi 200 to OK
            // przetworzenie odpowiedzi
        }
    }
}

window.onload = main;