
ymaps.ready(init);

var map;

function init() {
    map = new ymaps.Map('map', {
        center: [59.95, 30.32],
        zoom: 12
    });

    placemark = new ymaps.Placemark([59.97, 30.30], {
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

    placemark2 = new ymaps.Placemark([59.94, 30.25], {
        hintContent: '<div class="map__hint">Малый проспект В. О., д. 64к1</div>',
        balloonContentBody: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: уМалый проспект В. О., д. 64к1',
            '</div>'
        ].join('')
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    placemark3 = new ymaps.Placemark([59.93, 30.34], {
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContentBody: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
            '</div>'
        ].join('')
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
}