//COLLECTION - Movies

var Backbone = require('backbone');
var Movie = require('models/movie');
var Movies = Backbone.Collection.extend({
  model: Movie,

  //Unselect all models
  resetSelected: function() {
    this.each(function(model) {
      model.set({"selected": false});
    });
  },

  //Select a specific model from a collection
  selectByID: function(id) {
    this.resetSelected();
    var movie = this.get(id);
    movie.set({"selected": true});
    return movie.id;
  },

  _selectMovie: function(e) {
    e.preventDefault();
    if(!this.model.get('selected')) {
      this.model.collection.resetSelected();
      this.model.collection.selectByID(this.model.id);
    }
  }
});

module.exports = Movies;
