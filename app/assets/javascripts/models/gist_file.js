G.Models.GistFile = Backbone.RelationalModel.extend({
  urlRoot: "/gist_files",

  schema: {
    body: "Text"
  },

  toJSON : function(){
    return {"gist_file": _.clone(this.attributes)};
  }  
})