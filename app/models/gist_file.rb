class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :gist

  validates :gist, presence: true

  belongs_to :gist, inverse_of: :gist_file
end