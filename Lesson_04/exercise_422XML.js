var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        var response = xhr.responseXML;
        var events = response.getElementsByTagName('track');
        for (let i = 0; i < events.length; i++) {
            var container, button;
            container = document.createElement('span');
            container.className = 'track';
            button = document.createElement('button');
            button.setAttribute('id', i);
            button.innerHTML = getNodeValue(events[i], "title");
            container.appendChild(button);
            document.getElementById('wrapper').appendChild(container);
            var trackInfo;
            trackInfo = document.createElement('span');
            container.appendChild(trackInfo);
            document.getElementById(i).addEventListener("click", function () {
                trackInfo.innerHTML = "<ul><li>" + getNodeValue(events[i], "title")
                    + "</li><li>" + getNodeValue(events[i], "artist")
                    + "</li><li>" + getNodeValue(events[i], "genre")
                    + "</li><li>" + getNodeValue(events[i], "album")
                    + "</li><li>" + getNodeValue(events[i], "year");
            });
        }
    }

    function getNodeValue(obj, tag) {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }
};

xhr.open('GET', 'exercise_421.xml', true);
xhr.send(null);