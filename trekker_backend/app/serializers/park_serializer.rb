class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :est, :summary, :pic

  def initialize(park_obj)
    @park = park_obj
  end

  def to_serialized_json 
    @park.to_json(:include => {
        :users => {:except => [:created_at, :updated_at]},
        :visits => {:except => [:created_at, :updated_at]}
    }, :except => [:created_at, :updated_at])
  end
end
