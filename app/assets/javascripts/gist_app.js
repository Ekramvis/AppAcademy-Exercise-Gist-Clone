window.G = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(allGists, content, userID) {
    this.allGists = allGists;
    this.$content = content;
    this.userID = userID;

    var gistsCollection = new G.Collections.Gists(this.allGists);

    new G.Routers.GistsRouter(gistsCollection, this.$content, this.userID)

    Backbone.history.start();
  }
}