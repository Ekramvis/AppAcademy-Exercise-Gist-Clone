G.Views.NewGistFileFormView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    that.gistFileForm = new Backbone.Form({
      model: that.model
    });
  },

  render: function () {
    var that = this;

    that.$el.html(that.gistFileForm.render().$el);
    return that;
  },

  submit: function () {
    var that = this;

    that.gistFileForm.commit();
  }
});

