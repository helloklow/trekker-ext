class VisitsController < ApplicationController
    # before_action :authenticate_user!
    
    def index
        visits = current_user.visits
        render json: visits.to_json(include: [:park])
    end

    def show
        visit = Visit.find(params[:id])
        authorize_user_resource(visit)
        render_resource(visit, with: [:parks])
    end

    def create 
        visit = Visit.new(visit_params)
        visit.user = current_user 
        visit.save 
        render_resource(visit)
    end

    def update
        visit = Visit.find(params[:id])
        authorize_user_resource(visit) 
        visit.update(visit_params)
        render_resource(visit)
    end

    def destroy
        visit = Visit.find(params[:id])
        authorize_user_resource(visit)
        visit.destroy 
        render_resource(visit)
    end

    private 

    def visit_params
        params.require(:date, :notes)
    end

end
