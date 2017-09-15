
ymaps.ready(init);

var map,
    placemarks = [
    {
        latitude: 59.97,
        longitude: 30.3,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 21',
            '</div>'
        ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект В. О., д. 64к1</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: уМалый проспект В. О., д. 64к1',
            '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
            '</div>'
        ]
    }];

function init() {
    map = new ymaps.Map('map', {
        center: [59.95, 30.32],
        zoom: 12
    });

    placemarks.forEach(function(obj) {
        placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
            hintContent: obj.hintContent,
            balloonContent: obj.balloonContent.join('')
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });

        map.geoObjects.add(placemark);
    });
}