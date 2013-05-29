G.Views.GistDetailView = Backbone.View.extend({
  events: {
    "click button#favorite": "favoriteGist",
    "click button#unFavorite": "unFavorite"
  },

  initialize: function () {
    var that = this;
    that.checkFav = function () {
      var that = this;
      var favorites = that.options.user.favorites;
      var ids = _.pluck(favorites, 'gist_id');

      return _.contains(ids, that.model.id);
    }
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
    console.log(that.model.id);

    a.destroy({success: function () {
       Backbone.history.navigate("#/gists/" + that.model.id);
    }});
  }

  // favoriteGist: function () {
 //    if (checkFav) {
 //
 //    }
 //  }

});