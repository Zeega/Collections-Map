var PlacesCollection = Backbone.Collection.extend({
	model: Place,
	url: 'http://alpha.zeega.org/api/items/41366',
	initialize : function(){ console.log('##	PlacesCollection initialize')},
	parse: function(response) {
		console.log('PlacesCollection parse');
		this.latLong = [response.items[0].media_geo_latitude,response.items[0].media_geo_longitude];
		return response.items[0].child_items;
	}
});