class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :gist_file_attributes

  validates :title, :user_id, presence: true

  accepts_nested_attributes_for :gist_file

  belongs_to :user
  has_many :favorites
  has_one :gist_file, inverse_of: :gist
end