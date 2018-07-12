class Types::QueryType < Types::BaseObject
  field :viewer, Types::ViewerType, null: true
  def viewer
    {
      name: 'Alan Harper'
    }
  end
end
