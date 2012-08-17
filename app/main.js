var MAPAPP = {};

MAPAPP.root = "/";

MAPAPP.zeegaId = 41366;

MAPAPP.common = (function($) {

  var init = function() {

    startRouting();

  };

  var startRouting = function() {
    var Router = Backbone.Router.extend({
      routes: {
        "!/collection/:id": "collection"
      },
      'collection': function(id) {
        MAPAPP.zeegaId = id;
        MAPAPP.mapView = new MapView('#main',MAPAPP.zeegaId);
      }
    });

    var appRouter = new Router();

    Backbone.history.start();
  }

  return {
    init: init
  }

}(jQuery));

$(function() {
  MAPAPP.common.init();
});