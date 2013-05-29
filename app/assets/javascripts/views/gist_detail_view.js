G.Views.GistDetailView = Backbone.View.extend({
  events: {
    "click button.favorite": "favoriteGist"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["gists/view"]({
      gist: that.model,
      userID: that.id
    });

    that.$el.html(renderedContent);
    return that;
  },

  checkFav: function () {
    var that = this;
    var userID = that.id

    if
  }
});