class SendController < ApplicationController
  def index
  end

  def create
      @params= params
      ContactMailer.contact_send(params).deliver
    end
end
