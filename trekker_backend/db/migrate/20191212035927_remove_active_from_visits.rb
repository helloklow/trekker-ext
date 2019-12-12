class RemoveActiveFromVisits < ActiveRecord::Migration[6.0]
  def change

    remove_column :visits, :active, :boolean
  end
end
