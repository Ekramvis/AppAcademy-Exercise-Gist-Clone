G.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: "/gists",

  schema: {
    title: 'Text'
  },

  relations: [{
    type: Backbone.HasOne,
    key: "gist_file",
    relatedModel: "G.Models.GistFile",
    reverseRelation: {
      key: "gist_id"
    }
  }]
});