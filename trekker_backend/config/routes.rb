Rails.application.routes.draw do

  root to: "home#index"
  get '/profile' => 'home#profile'

  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }

  resources :users do 
    resources :visits, only: [:index, :show]
  end

  resources :visits do 
    resources :parks, only: [:index, :show]
  end
  
  resources :parks, only: [:index, :show] do 
    resources :visits, only: [:index, :show]
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
