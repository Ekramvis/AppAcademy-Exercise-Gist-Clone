class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_user_name(params[:user_name])

    if @user
      @user.session_token = SecureRandom.hex
      @user.save
      cookies[:session_token] = @user.session_token
      redirect_to :root_url
      #flash
    else
      #flash error
      render :new
    end
  end

  def destroy
    # delete cookie
  end
end