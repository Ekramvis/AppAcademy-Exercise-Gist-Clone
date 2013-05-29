window.G = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(allGists, content, user) {
    this.allGists = allGists;
    this.$content = content;
    this.user = user;

    var gistsCollection = new G.Collections.Gists(this.allGists);

    new G.Routers.GistsRouter(gistsCollection, this.$content, this.user)

    Backbone.history.start();
  }
}