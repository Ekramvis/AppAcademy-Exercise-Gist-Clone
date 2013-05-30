class GistFilesController < ApplicationController
  respond_to :json

  def new
    @gistfile = GistFile.new
  end

  def create
    @gistfile = GistFile.new(params[:gist_file])
    @gistfile.save
    redirect_to root_url
  end
end