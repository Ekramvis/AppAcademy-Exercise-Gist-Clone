GistApp::Application.routes.draw do
  resource :session
  resources :gists

  root to: "gists#index"
end
