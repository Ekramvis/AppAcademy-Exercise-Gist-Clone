G.Views.GistDetailView = Backbone.View.extend({
  events: {
    "click button#favorite": "favoriteGist",
    "click button#unFavorite": "unFavorite"
  },

  initialize: function () {
    var that = this;
    var favorites = that.options.user.favorites;

    that.checkFav = function () {
      var that = this;
      var ids = _.pluck(favorites, 'gist_id');

      return _.contains(ids, that.model.id);
    };
  },

  render: function () {
    var that = this;

    var renderedContent = JST["gists/view"]({
      gist: that.model,
      favorited: that.checkFav()
    });

    that.$el.html(renderedContent);
    return that;
  },

  unFavorite: function () {
    var that = this;
    var favorites = that.options.user.favorites;

    var favorite = _.find(favorites, function(fav){
      return fav.gist_id === that.model.id
    })

    var a = new G.Models.Favorite(favorite);

    a.destroy({success: function () {
       console.log("unfavorite");
       that.render();
       Backbone.history.navigate("#/gists/" + that.model.id, {trigger: true});
    }});
  },

  favoriteGist: function () {
    var that = this;

    var newFav = new G.Models.Favorite({
      user_id: that.options.user.id,
      gist_id: that.model.id
    });

    newFav.save({}, {success: function () {
       console.log("favorite");
       that.render();
       Backbone.history.navigate("#/gists/" + that.model.id, {trigger: true});
      }
    });
  }

});