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
end