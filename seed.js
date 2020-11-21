const faker = require('faker');
const { addPhoto } = require('./controllers/controllers');
const Photo = require('./models/Photo');
const dbConnection = require('./db/connection');
const restaurant_id_arr = [1, 2, 3, 4, 5]
const picModifiers = ['sushi', 'burrito', 'chicken', 'ramen', 'dessert']

const createPhotoRecord = () => {
  let randomRestaurant_id = Math.floor(Math.random()* 5)
  let randomFriends = Math.floor(Math.random()* 101);
  let randomReviews = Math.floor(Math.random()* 101);
  let record = {
    "url": `https://loremflickr.com/320/240/${picModifiers[randomRestaurant_id]}`,
    "description": `${faker.lorem.sentence()}`,
    "date": `${faker.date.past()}`,
    "user": {
      "username": `${faker.internet.userName()}`,
      "friends": randomFriends,
      "reviews": randomReviews,
      "avatar": `${faker.image.avatar()}`
    },
    "restaurant_id": restaurant_id_arr[randomRestaurant_id]
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