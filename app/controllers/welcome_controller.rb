class WelcomeController < ApplicationController
  def index
    @carpincho = Product.find_by(name: 'Carpincho')
    @coati = Product.find_by(name: 'Coati')
    @tamandua = Product.find_by(name: 'Tamandua')
  end
end
