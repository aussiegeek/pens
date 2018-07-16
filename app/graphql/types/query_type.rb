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
end
