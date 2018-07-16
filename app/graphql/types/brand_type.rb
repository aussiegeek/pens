class Types::BrandType < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: false
  field :pens, [Types::PenType], null: false
end
