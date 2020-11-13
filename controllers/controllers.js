const Photo = require('../models/Photo');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

module.exports.getPhotos = async (req, res, next) => {
  try {
    const photos = await Photo.find({"restaurant_id": `${req.params.id}`});
    return res.status(200).json({
      success: true,
      count: photos.length,
      data: photos
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

module.exports.addUser = async (req, res, next) => {
  try {
    const { email, username, friends, review } = req.body;
    const user = await User.create(req.body);
    return res.status(201).json({
      success: true,
      data: user
    })
  }
  catch{
    return res.send(500).json({
      success: false,
      error:'SERVER ERROR'
    })
  }
};



