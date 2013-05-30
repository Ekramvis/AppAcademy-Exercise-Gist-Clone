class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :gist
  belongs_to :gist, inverse_of: :gist_files
  validates :gist, presence: true
end