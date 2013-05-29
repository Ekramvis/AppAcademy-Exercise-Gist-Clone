G.Models.User = Backbone.RelationalModel.extend({
  urlRoot: "/users",

  relation: [{
    type: Backbone.HasMany,
    key: "favorites",
    relatedModel: "G.Models.Favorite",
    collectionType: "G.Collections.UserFavorites",
    reverseRelation: {
      key: "user"
    }
  }]
})