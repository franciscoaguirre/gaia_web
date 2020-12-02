class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    product = Product.new(product_params)
    
    if product.save
      render json: {}, status: :ok
    else
      render json: {}, status: :bad_request
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, { pictures: [] })
  end
end
