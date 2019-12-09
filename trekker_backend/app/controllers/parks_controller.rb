class ParksController < ApplicationController
    
    def index
        parks = Park.all 
        render json: parks, except: [:created_at, :updated_at]
    end

    def show
        park = Park.find_by(id: params[:id])
        render json: park, except: [:created_at, :updated_at]
    end

end
