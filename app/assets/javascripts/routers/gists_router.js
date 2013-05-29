G.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    "gists/new" : "newForm",
    "gists/:id" : "show"
  },

  initialize: function (gistCollection, content, user) {
    var that = this;
    that.gistCollection = gistCollection;
    that.$content = content;
    that.user = user;
  },

  show: function (id) {
    var that = this;
    var selectedGist = that.gistCollection.get(id)

    var gistDetailView = new G.Views.GistDetailView({
      model: selectedGist,
      user: that.user
    });
    that.$content.html(gistDetailView.render().$el);
  },

  newForm: function () {
    var that = this;

    var newGistFormView = new G.Views.NewGistFormView({
      user: that.user
    });

    that.$content.html(newGistFormView.render().$el);
  }
});