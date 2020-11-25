Rails.application.routes.draw do
  root 'welcome#index'

  get 'our_purpose', to: 'purpose#index'
  get 'contact_us', to: 'contact#index'

  resources :products, only: [:index, :show]
end
