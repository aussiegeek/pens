class Types::PenType < Types::BaseObject
  field :id, ID, null: false
  field :brand, Types::BrandType, null: false
  field :model, String, null: false
end
