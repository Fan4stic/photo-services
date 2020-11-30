const Photo = require('../models/Photo');

module.exports.getPhotos = async (req, res, next) => {
  try {
    const photos = await Photo.find(req.params);
    return res.status(200).json({
      success: true,
      count: photos.length,
      photos: photos
    })
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: 'SERVER ERROR'
    })
  }
};

module.exports.addPhoto = async (req, res, next) => {
  try{
    const { url, description, date } = req.body;
    const photo = await Photo.create(req.body);
    return res.status(201).json({
      success: true,
      data: photo
    })
  }
  catch{
    return res.send(500).json({
      success: false,
      error:'SERVER ERROR'
    })
  }
}

