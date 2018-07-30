class Mutations::CreateBrand < Mutations::BaseMutation
  null false

  argument :title, String, required: true

  field :brand, Types::BrandType, null: true
  field :success, Boolean, null: false

  def resolve(title:)
    brand = Brand.new(name: title)
    success = brand.save

    {
      brand: brand,
      success: success
    }
  end
end
