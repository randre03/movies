//VIEW - movie.js

var $ = require('jquery-untouched');
var _ = require('underscore');
var Backbone = require('backbone');

var MovieView = Backbone.View.extend({
  tagName: 'article', //maps to the html tag type
  className: 'movie', //maps to the css class
  template:'<h1><%= title %><hr></h1>',

  render: function() {
    var templ = _.template(this.template);
    this.$el.html(templ(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));
    return this;
  },

  initialize:function () {
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
  },

  events: {
    'click': _selectMovie
  },

  _selectMovie: function(e) { //the syntax with the '_functionName' is often used for private methods
    e.preventDefault();
    console.log($(e.currentTarget).html());
  }
});

module.exports = MovieView;
