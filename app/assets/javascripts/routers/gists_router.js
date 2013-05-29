G.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    "gists/:id" : "show"
  },

  initialize: function (gistCollection, content, userID) {
    var that = this;
    that.gistCollection = gistCollection;
    that.$content = content;
    that.userID = userID;
  },

  show: function (id) {
    var that = this;
    var selectedGist = that.gistCollection.get(id)

    var gistDetailView = new G.Views.GistDetailView({
      model: selectedGist,
      id: that.userID
    });
    //
    // var favButtonView = new G.Views.FavButtonView({
    //   model:
    // })

    that.$content.html(gistDetailView.render().$el);
  }
});