class Product < ApplicationRecord
  mount_uploaders :pictures, PictureUploader
end
