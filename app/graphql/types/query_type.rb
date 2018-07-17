class Types::QueryType < Types::BaseObject
  field :viewer, Types::ViewerType, null: true
  def viewer
    User.first
  end

  field :pens, [Types::PenType], null: false
  def pens
    Pen.all
  end

  field :brands, [Types::BrandType], null: false
  def brands
    Brand.all
  end

  field :get_brand, Types::BrandType, null: true do
    argument :id, ID, required: true
  end
  def get_brand(id:)
    Brand.find(id)
  end
end
