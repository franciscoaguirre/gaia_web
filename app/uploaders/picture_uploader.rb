class PictureUploader < CarrierWave::Uploader::Base
  def store_dir
    "products/#{model.id}/pictures"
  end

  def extension_whitelist
    %w(jpg jpeg png)
  end
end
