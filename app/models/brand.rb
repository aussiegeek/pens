class Brand < ApplicationRecord
  has_many :pens, dependent: :destroy
end
