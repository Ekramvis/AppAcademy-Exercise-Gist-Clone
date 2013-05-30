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
    keyDestination: "gist_files_attributes",
    reverseRelation: {
      key: "gist"
    }
  }]
});