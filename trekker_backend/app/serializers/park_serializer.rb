class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :est, :summary, :pic
end
