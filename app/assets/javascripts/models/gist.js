G.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: "/gists",

  schema: {
    title: 'Text'
  },

  relations: [{
    type: Backbone.HasMany,
    key: "gist_files",
    relatedModel: "G.Models.GistFile",
    collectionType: "G.Collections.GistFiles",
    reverseRelation: {
      key: "gist_id"
    }
  }]
});