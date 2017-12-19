var elMap = document.getElementById('loc');
var msg = 'Przepraszamy, nie udało się ustalić Twojego położenia.';

if (Modernizr.geolocation && Modernizr.sessionstorage && Modernizr.localstorage) {
    navigator.geolocation.getCurrentPosition(success, fail);
    elMap.textContent = 'Sprawdzanie położenia...';
} else {
    elMap.textContent = msg;
}

function deleteLocalAndSessionStorage() {
    console.log('usunieto');
    localStorage.clear();
    sessionStorage.clear();
}

function success(location) {
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
    localStorage.setItem('longitude', longitude);
    sessionStorage.setItem('longitude', latitude);
    msg = '<h3>Długość geograficzna:<br>';
    msg += location.coords.longitude + '</h3>';
    msg += '<h3>Szerokość geograficzna:<br>';
    msg += location.coords.latitude + '</h3>';
    msg += '<h3>Dokładność współrzędnych geograficznych:<br>';
    msg += location.coords.accuracy + ' m</h3>';
    msg += '<button id="del">Usuń dane z WebStorage</button>';
    elMap.innerHTML = msg;
    del = document.getElementById('del');
    del.addEventListener('click', deleteLocalAndSessionStorage);
}

function fail(msg) {
    elMap.textContent = msg.message;
    console.log(msg.message);
}