class Api::V1::BagelsController < ApplicationController
    def index
        @bagels = Api::V1::Bagel.all
        render json: @bagels, except: [:created_at, :updated_at, :description]
    end

    def update
        @bagel = Api::V1::Bagel.find_by_id(params[:id])
        @property.update(params)
        render json: @bagel, except: [:created_at, :updated_at, :description]
    end
end
