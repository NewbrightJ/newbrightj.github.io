      var mymap1 = L.map('mapid1').setView([40.02, -82.75], 7);
      var mymap2 = L.map('mapid2').setView([40.02, -82.75], 7);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoiZWJhdGVzMjIiLCJhIjoiY2pmMnpzZWJlMDZ2cjJxcWg3MDFxZGE0cSJ9.QosvCTCVcXRUy6xNam_wVQ'
      }).addTo(mymap1);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoiZWJhdGVzMjIiLCJhIjoiY2pmMnpzZWJlMDZ2cjJxcWg3MDFxZGE0cSJ9.QosvCTCVcXRUy6xNam_wVQ'
      }).addTo(mymap2);
