G.Views.GistDetailView = Backbone.View.extend({
  events: {
    "click button.favorite": "favoriteGist"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["gists/view"]({
      gist: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  checkFav: function () {
    var that = this;
    var favorites = that.options.user.favorites
    var ids = _.pluck(favorites, 'gist_id')

    _.contains(ids, that.model.id)
  }
});