class Mutations::UpdateBrand < Mutations::BaseMutation
  null false

  argument :id, ID, required: true
  argument :name, String, required: true

  field :brand, Types::BrandType, null: true
  field :success, Boolean, null: false

  def resolve(id:, name:)
    brand = Brand.find(id)
    success = brand.update_attributes(name: name)

    {
      brand: brand,
      success: success
    }
  end
end
