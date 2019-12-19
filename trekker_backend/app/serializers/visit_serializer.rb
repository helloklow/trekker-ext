class VisitSerializer < ActiveModel::Serializer
  attributes :date, :notes, :park_id
  has_one :park

  def initialize(visit_obj)
    @visit = visit_obj
  end

  def to_serialized_json 
    @visit.to_json(:include => {
        :user => {:except => [:created_at, :updated_at]},
        :park => {:except => [:created_at, :updated_at]}
    }, :except => [:created_at, :updated_at])
  end
end
