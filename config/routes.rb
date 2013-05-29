GistApp::Application.routes.draw do
  resource :session
  resources :gists
  resources :users

  root to: "gists#index"
end
