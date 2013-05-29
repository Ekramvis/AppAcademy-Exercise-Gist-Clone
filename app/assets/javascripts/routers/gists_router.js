G.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    "gists/:id" : "show"
  },

  initialize: function (gistCollection, content) {
    var that = this;
    that.gistCollection = gistCollection;
    that.$content = content;
  },

  show: function (id) {
    var that = this;
    var selectedGist = that.gistCollection.get(id)
    console.log(selectedGist);
    var gistDetailView = new G.Views.GistDetailView({
      model: selectedGist
    });

    that.$content.html(gistDetailView.render().$el);
  }
});