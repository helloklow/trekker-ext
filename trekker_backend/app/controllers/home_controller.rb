class HomeController < ApplicationController
    before_action :authenticate_user!

    def index
        render json: {message: 'Welcome, Trekker'}
    end

    def profile
        user = current_user
        render_resource(user, with: [:visits, :parks])
    end

end