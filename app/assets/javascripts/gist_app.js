window.G = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(allGists, content) {
    this.allGists = allGists;
    this.$content = content;

    var gistsCollection = new G.Collections.Gists(this.allGists);

    new G.Routers.GistsRouter(gistsCollection, this.$content)

    Backbone.history.start();
  }
}