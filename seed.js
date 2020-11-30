const faker = require('faker');
const { addPhoto } = require('./controllers/controllers');
const Photo = require('./models/Photo');
const dbConnection = require('./db/connection');
const restaurant_id_arr = [1, 2, 3, 4, 5]
const picModifiers = ['sushi', 'teriyaki', 'beer', 'ramen', 'dessert', 'sake', 'restaurant', 'wine', 'rice', 'tempura', 'tofu', 'udon', 'soba', 'yakitori', 'curry', 'tonkatsu', 'sashimi', 'tea']
const s3photos = ['https://fecphotomodule.s3.us-east-2.amazonaws.com/dessert1.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/dessert2.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/dessert3.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/dessert4.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/ramen1.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/ramen2.jpg','https://fecphotomodule.s3.us-east-2.amazonaws.com/ramen3.jpg','https://fecphotomodule.s3.us-east-2.amazonaws.com/ramen4.jpg','https://fecphotomodule.s3.us-east-2.amazonaws.com/ramen5.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/rice1.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/sake1.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/sake2.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/sake3.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/sushi1.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/sushi2.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/sushi3.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/sushi4.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/tonkatsu1.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/tonkatsu2.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/tonkatsu3.jpg']
const avatars = ['https://fecphotomodule.s3.us-east-2.amazonaws.com/avatar1.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/avatar2.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/avatar3.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/avatar4.jpg', 'https://fecphotomodule.s3.us-east-2.amazonaws.com/avatar5.jpg'];


const createPhotoRecord = () => {
  let randomRestaurant_id = Math.floor(Math.random()* 5)
  let randomFriends = Math.floor(Math.random()* 101);
  let randomReviews = Math.floor(Math.random()* 101);
  let randomPic = Math.floor(Math.random()* 20)
  let randomAvatar = Math.floor(Math.random() * 5)

  let record = {
    "url": `${s3photos[randomPic]}`,
    "description": `${faker.lorem.sentence()}`,
    "date": `${faker.date.past()}`,
    "user": {
      "username": `${faker.internet.userName()}`,
      "friends": randomFriends,
      "reviews": randomReviews,
      "avatar": avatars[randomAvatar],
      "yelpElite": !! Math.floor(Math.random() * 2)
    },
    "resID": restaurant_id_arr[randomRestaurant_id]
  }
  Photo.create(record);
};

const seedDB = (entries) => {
  let created = 1;
  while (created < entries) {
    createPhotoRecord();
    created++
  }
}

seedDB(101);