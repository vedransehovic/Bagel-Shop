class CreateApiV1Bagels < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_bagels do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :likes
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end
