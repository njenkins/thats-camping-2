App.MapView = Ember.View.extend({
  map: function() {
    return L.map('map');
  }.property(),
  didInsertElement: function() {
    this.didUpdateLocation();
    var map = this.get("map");

    L.tileLayer('http://{s}.tile.cloudmade.com/be7a385fc3034f60805677eadddb4130/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(map);
  },

  didUpdateLocation: function() {
    latitude = App.get("latitude");
    longitude = App.get("longitude");
    zoom = 13;
    if (latitude == null || longitude == null) {
      latitude = -35;
      longitude = 133;
      zoom = 3;
    }
    this.get("map").setView([latitude, longitude], zoom);
  }.observes("App.latitude", "App.longitude")
});
