class FavoritesController < ApplicationController
  respond_to :json

  before_filter :require_login

  def create
    @favorite = Favorite.create!(gist_id: params[:gist_id], user_id: params[:user_id])
    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find(params[:id]).destroy
    render json: @favorite
  end

end