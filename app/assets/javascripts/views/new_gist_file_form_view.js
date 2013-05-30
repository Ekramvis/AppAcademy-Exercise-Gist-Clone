G.Views.NewGistFileFormView = Backbone.View.extend({
  render: function () {
    var that = this;

    that.gistFileForm = new Backbone.Form({
      model: that.model
    })

    that.$el.html(that.gistFileForm.render().$el);
    return that;
  }
});

