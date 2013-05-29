class FavoritesController < ApplicationController
  before_filter :require_login

  def create
    gist = Gist.find(params[:id])
    user = User.find_by_session_token(cookies["session_token"])
    Favorite.create!(gist_id: gist.id, user_id: user.id)
  end

  def destroy
    user = User.find_by_session_token(cookies["session_token"])
    gist = Gist.find(params[:id])
    Favorite.where(user_id: user.id, gist_id: gist.id)[0].destroy
  end

end