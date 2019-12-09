Rails.application.routes.draw do
  resources :visits
  resources :parks do
    resources :visits
  end

  root to: "home#index"

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
    resources :visits
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
