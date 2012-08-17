var MapView = Backbone.View.extend({
	initialize: function(element, zeegaId) {
		_.bindAll(this, 'render', 'collectionToMap', 'putOnMap');

		var that = this;

		this.el = element;
		
		this.placeCollection = new PlacesCollection(zeegaId);
		
		this.placeCollection.fetch({
			success: function(collection, response) {
				that.centerMap(collection.latLong, that);
				that.collectionToMap(collection, that);
			}
		});

		this.render();
		
	},

	render: function(){

	    $(this.el).append('<div id="map" style="height: 600px;"></div>');

	    this.leafletMap = L.map('map').setView([51.505, -0.09], 13);

	    L.tileLayer('http://{s}.tiles.mapbox.com/v2/mapbox.mapbox-streets/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		    maxZoom: 18
		}).addTo(this.leafletMap);

	},

	centerMap: function(latLong, context) { // we must pass in context as this is called from the response of the collection's fetch
		context.leafletMap.panTo(latLong);
	},

	collectionToMap: function(collection, context) { // we must pass in context as this is called from the response of the collection's fetch
		collection.each( function(item) {
			putOnMap(item);
		});

		function putOnMap(item) {
			var placeInfo = {
				lat: item.get('media_geo_latitude'),
				long: item.get('media_geo_longitude'),
				image: item.get("thumbnail_url")
			}
			var marker = L.marker([placeInfo.lat, placeInfo.long]).addTo(context.leafletMap);

			marker.bindPopup("<img src='" + placeInfo.image + "' width='144' height='144'>");

		}
	}
});