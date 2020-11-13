const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://localhost:3306/yelpclone');

const User = sequelize.define('User', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Restaurant = sequelize.define('Restaurant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Photo = sequelize.define('Photo', {
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

async () => {
  await sequelize.sync();
  let newUserRecord = await User.create({
    email: `${randomEmail}`,
    username: `${randomUsername}`
  })
}

async () => {
  await sequelize.sync();
  let newRestaurantRecord = await Restaurant.create({
    name: `${randomName}`
  })
}

async () => {
  await sequelize.sync();
  let newPhotorecord = await Photo.create({
    url: `${randomUrl}`
  })
}
