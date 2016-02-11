<?php 
/**
 * Описание шаблона вывода карты Google
 */
?>

<script>
    // When you add a marker using a Place instead of a location, the Maps
    // API will automatically add a 'Save to Google Maps' link to any info
    // window associated with that marker.
    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // &lt;script src=&quot;https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;libraries=places&quot;&gt;

    function initMap() {
        var map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 17,
            center: {lat: -33.8666, lng: 151.1958}
        });

        var marker = new google.maps.Marker({
            map: map,
            // Define the place with a location, and a query string.
            place: {
                location: {lat: -33.8666, lng: 151.1958},
                query: 'Google, Sydney, Australia'
            },
            // Attributions help users find your site again.
            attribution: {
                source: 'Google Maps JavaScript API',
                webUrl: 'https://developers.google.com/maps/'
            }
        });

        // Construct a new InfoWindow.
        var infoWindow = new google.maps.InfoWindow({
            content: 'Google Sydney'
        });

        // Opens the InfoWindow when marker is clicked.
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
</script>

<div id="googleMap" class="map-content"></div>  
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOw-xjvFO7Mm1YR1YHul2Q8YkZ9zP0yjk&signed_in=true&libraries=places&callback=initMap"></script>