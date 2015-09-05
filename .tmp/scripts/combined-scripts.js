(function() {

var EmberC3 = window.EmberC3 = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

EmberC3.IndexController = Ember.Controller.extend({
});


})();

(function() {

EmberC3.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

EmberC3.IndexRoute = Ember.Route.extend({
    model: function() {
        return {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220],
                ['data3', 300, 200, 160, 400, 250, 250],
                ['data4', 200, 130, 90, 240, 130, 220],
                ['data5', 130, 120, 150, 140, 160, 150],
                ['data6', 90, 70, 20, 50, 60, 120],
            ],
            type: 'bar',
            types: {
                data3: 'spline',
                data4: 'line',
                data6: 'area',
            },
            groups: [
                ['data1', 'data2']
            ]
        };
    }
});


})();

(function() {

EmberC3.Router.map(function () {
  // Add your routes here
});


})();