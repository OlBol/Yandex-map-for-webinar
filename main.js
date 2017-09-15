
ymaps.ready(init);

var map;

function init() {
    map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12
    });

    placemark = new ymaps.Placemark([59.97, 30.31], {
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContentBody: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 21',
            '</div>'
        ].join('')
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    map.geoObjects.add(placemark);
}