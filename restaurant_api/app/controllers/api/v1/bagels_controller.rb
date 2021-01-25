class Api::V1::BagelsController < ApplicationController
    def index
        @toys = Api::V1::Bagel.all
        render json: @toys, except: [:created_at, :updated_at, :description]
    end
end
