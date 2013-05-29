G.Views.GistDetailView = Backbone.View.extend({
  render: function () {
    var that = this;
    console.log(that.model)
    var renderedContent = JST["gists/view"]({
      gist: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
});