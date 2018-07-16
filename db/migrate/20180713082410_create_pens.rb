class CreatePens < ActiveRecord::Migration[5.2]
  def change
    create_table :pens do |t|
      t.references :brand, foreign_key: true
      t.string :model, null: false

      t.timestamps
    end
  end
end
