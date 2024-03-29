Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "home#index"

  namespace :api do
    get "/count", to: "count#index"
    post "/count/increment", to: "count#increment"
  end
end
