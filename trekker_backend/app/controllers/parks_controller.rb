class ParksController < ApplicationController
    before_action :authenticate_user!

    def index
        parks = Park.all 
        render json: ParkSerializer.new(parks).to_serialized_json
    end

    def show
        park = Park.find(params[:id])
        authorize_user_resource(park)
        render json: ParkSerializer.new(park).to_serialized_json
    end

end
