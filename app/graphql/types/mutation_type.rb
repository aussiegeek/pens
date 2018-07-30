class Types::MutationType < Types::BaseObject
  field :create_brand, mutation: Mutations::CreateBrand
  field :update_brand, mutation: Mutations::UpdateBrand
end
