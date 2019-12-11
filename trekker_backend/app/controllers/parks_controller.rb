class ParksController < ApplicationController
    before_action :authenticate_user!

    def index
        parks = Park.all 
        render json: parks, except: [:created_at, :updated_at]
    end

    def show
        park = Park.find(params[:id])
        authorize_user_resource(park)
        render json: park, except: [:created_at, :updated_at]
    end

end
