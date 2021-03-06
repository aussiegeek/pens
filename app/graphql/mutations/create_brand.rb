class Mutations::CreateBrand < Mutations::BaseMutation
  null false

  argument :name, String, required: true

  field :brand, Types::BrandType, null: true
  field :success, Boolean, null: false

  def resolve(name:)
    brand = Brand.new(name: name)
    success = brand.save

    {
      brand: brand,
      success: success
    }
  end
end
