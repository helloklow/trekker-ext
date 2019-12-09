class Park < ApplicationRecord 
    has_many :visits, dependent: :destroy
    has_many :users, through: :visits
end
