class Api::V1::BagelsController < ApplicationController
    def index
        @bagels = Api::V1::Bagel.all
        render json: @bagels, except: [:created_at, :updated_at, :description]
    end

    def create
        @bagel = Api::V1::Bagel.new(bagel_params)
        @bagel.likes = 0
        @bagel.save
        render json: @bagel, except: [:created_at, :updated_at, :description]
    end

    def update
        if params[:item] 
                @bagel = Api::V1::Bagel.find_by_id(params[:id]) 
                @bagel.update(quantity: @bagel.quantity - params[:item][:ordered])     
        else
            @bagel = Api::V1::Bagel.find_by_id(params[:id])
            @likes = @bagel.likes
            @likes = @likes + 1
            @bagel.update(likes: @likes )
        end

        render json: @bagel, except: [:created_at, :updated_at, :description]
    end 


    def destroy 
        @bagel = Api::V1::Bagel.find_by_id(params[:id])
        @bagel.delete
        @bagels = Api::V1::Bagel.all
        render json: @bagels, except: [:created_at, :updated_at, :description]    
    end

    
private

def order_params
    params.require(:item).permit!
end

def bagel_params
    params.require(:bagel).permit(:name, :image, :quantity, :price, :likes)
end

end
# array:[:id, :name, :image, :likes, :quantity, :price, :ordered]