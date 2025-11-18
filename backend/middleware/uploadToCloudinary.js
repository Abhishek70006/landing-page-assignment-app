const streamifier = require('streamifier');
const cloudinary = require('../config/cloudinary');

function uploadToCloudinary(req, res, next) {
  if (!req.file) return next();

  const bufferStream = streamifier.createReadStream(req.file.buffer);
  const stream = cloudinary.uploader.upload_stream({ folder: 'projects_app' }, (error, result) => {
    if (error) return next(error);
    req.fileUrl = result.secure_url;
    next();
  });

  bufferStream.pipe(stream);
}

module.exports = uploadToCloudinary;
