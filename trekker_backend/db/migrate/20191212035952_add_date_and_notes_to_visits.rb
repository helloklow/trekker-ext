class AddDateAndNotesToVisits < ActiveRecord::Migration[6.0]
  def change
    add_column :visits, :date, :string
    add_column :visits, :notes, :text
  end
end
