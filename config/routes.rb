GistApp::Application.routes.draw do
  resource :session, only: [:new, :create, :destroy]

  resources :gists do
    member do
      resource :favorite, only: [:create]
    end
  end

  resources :favorites, only: [:index, :destroy, :create]
  resources :users

  root to: "gists#index"
end
