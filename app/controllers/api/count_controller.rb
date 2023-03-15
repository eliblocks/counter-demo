class Api::CountController < ApplicationController
  def index
    session[:count] ||= 0

    render_count
  end

  def increment
    session[:count] = session[:count] + 1

    render_count
  end

  private

  def render_count
    render json: { count: session[:count] }
  end
end
