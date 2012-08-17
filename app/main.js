var MAPAPP = {};

MAPAPP.root = "/";

MAPAPP.common = (function($) {

  var init = function() {

    var mapView = new MapView();

  }

  return {
    init: init
  }

}(jQuery));

$(function() {
  MAPAPP.common.init();
});