function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 53.245943, lng: -2.599244 }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        // co ordinates for Britannia Rd
        { lat: 53.245943, lng: -2.599244 },
        // co ordinates for Clover Hey
        { lat: 53.4715, lng: -2.7273 },
        // co ordinates for Hartley Green Gardens
        { lat: 53.5209, lng: -2.7123 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
