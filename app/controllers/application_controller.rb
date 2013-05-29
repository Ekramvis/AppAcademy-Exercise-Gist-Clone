class ApplicationController < ActionController::Base
  protect_from_forgery

  def require_login
    p "in require login"
    unless current_user
      redirect_to new_session_url
    end
  end

  def current_user
    if cookies["session_token"]
      !!User.find_by_session_token(cookies["session_token"])
    end
  end
end
