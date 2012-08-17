var PlacesCollection = Backbone.Collection.extend({
	zeegaId: 41366,
	model: Place,
	url: function(zeegaId) {
		return 'http://alpha.zeega.org/api/items/' + this.zeegaId;
	},
	initialize: function(zeegaId) {
		this.zeegaId = zeegaId;
	},
	parse: function(response) {
		this.latLong = [response.items[0].media_geo_latitude,response.items[0].media_geo_longitude];
		return response.items[0].child_items;
	}
});