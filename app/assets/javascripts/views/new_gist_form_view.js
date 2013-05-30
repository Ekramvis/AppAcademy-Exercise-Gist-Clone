G.Views.NewGistFormView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    that.user_id = user.id;
    that.newGist = new G.Models.Gist;
    that.newGistFile1 = new G.Models.GistFile;
    that.newGistFile2 = new G.Models.GistFile;
    that.newGistFile3 = new G.Models.GistFile;

    that.newGist.get("gist_files").add(that.newGistFile1);
    that.newGist.get("gist_files").add(that.newGistFile2);
    that.newGist.get("gist_files").add(that.newGistFile3);

    that.gistForm = new Backbone.Form({
      model: that.newGist
    }).render();

    that.gistFileFormView1 = new G.Views.NewGistFileFormView({
      model: that.newGistFile1
    }).render();

    that.gistFileFormView2 = new G.Views.NewGistFileFormView({
      model: that.newGistFile2
    }).render();

    that.gistFileFormView3 = new G.Views.NewGistFileFormView({
      model: that.newGistFile3
    }).render();

  },



  events: {
    "click button#submit-gist" : "submit"
  },

  render: function () {
    var that = this;

    that.$el.html(that.gistForm.$el);
    that.$el.append(that.gistFileFormView1.$el);
    that.$el.append(that.gistFileFormView2.$el);
    that.$el.append(that.gistFileFormView3.$el);
    that.$el.append("<button id='submit-gist'>Submit</button>");
    return that;
  },

  submit: function (){
    var that = this;

    that.gistForm.commit();
    that.newGist.attributes.user_id = that.user_id;
    that.gistFileFormView1.submit();
    that.gistFileFormView2.submit();
    that.gistFileFormView3.submit();

    that.newGist.save();
  }
})