class GistsController < ApplicationController
  before_filter :require_login

  respond_to :html, only: [:index]
  respond_to :json

  def index
    @gists = Gist.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @gists }
    end
  end

  def new
    @gist = Gist.new
    @gist.gist_files.build
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.save
    redirect_to root_url
  end
end