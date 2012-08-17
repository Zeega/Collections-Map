var MapView = Backbone.View.extend({
	el: $('#main'),

	events: {
		// no events yet.
	},

	initialize: function() {
		_.bindAll(this, 'render');

		//this.collection = new List();
		//myCollection.bind('add', this.appendItem);

		this.render();
	},

	render: function(){
		/*
		var self = this;
		_(myCollection.models).each(function(item){ // in case collection is not empty
	        self.appendItem(item);
	    }, this);
	    */
	    $(this.el).append('<div id="map" style="height: 300px; background: salmon;"></div>');
	},

	addItem: function() {
		// this was a thing that happened when you clicked!
	},

	appendItem: function(item){
		// this was a thing that was bound to the model, and it 
	}
});