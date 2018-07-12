class Types::QueryType < Types::BaseObject
  field :viewer, Types::ViewerType, null: false
  def viewer
    {
      name: 'Alan Harper'
    }
  end
end
