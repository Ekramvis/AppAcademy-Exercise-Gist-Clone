G.Views.NewGistFormView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    that.nestedItems = [];
    that.user_id = user.id;
    that.newGist = new G.Models.Gist;

    that.newGistFile1 = new G.Models.GistFile;

    that.newGist.get("gist_files").add(that.newGistFile1);

    that.gistForm = new Backbone.Form({
      model: that.newGist
    }).render();

    that.gistFileFormView1 = new G.Views.NewGistFileFormView({
      model: that.newGistFile1
    }).render();
  },

  events: {
    "click button#submit-gist" : "submit",
    "click button#new-gist-file" : "addNewRow"
  },

  addNewRow: function() {
    var that = this;

    that.newGistFile = new G.Models.GistFile;

    that.newGist.get("gist_files").add(that.newGistFile);

    that.gistFileFormView = new G.Views.NewGistFileFormView({
      model: that.newGistFile
    }).render();

    that.nestedItems.push(that.gistFileFormView);
    that.$('.bbf-form').last().append(that.gistFileFormView.$el);
  },

  render: function () {
    var that = this;

    that.$el.html(that.gistForm.$el);
    that.$el.append(that.gistFileFormView1.$el);

    that.$el.append("<button id='submit-gist'>Submit</button>");
    that.$el.append("<button id='new-gist-file'>Add Another Gist</button>");
    return that;
  },

  submit: function (){
    var that = this;

    that.gistForm.commit();
    that.newGist.attributes.user_id = that.user_id;

    that.gistFileFormView1.submit();

    _.each(that.nestedItems, function(item) {
      item.submit();
    });

    that.newGist.save();
  }
})