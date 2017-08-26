ymaps.ready(init);

var map;

function init() {
	map = new ymaps.Map('map', {
		center: [59.94, 30.32],
        zoom: 12
	});

	placemark = new ymaps.Placemark([59.97, 30.31], {

	});

	map.geoObjects.add(placemark);
}