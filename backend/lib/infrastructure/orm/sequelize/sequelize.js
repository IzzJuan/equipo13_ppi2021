'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(environment.database.url);

sequelize.import('./models/BookingsHotel');
sequelize.import('./models/BookingsRestaurant');
sequelize.import('./models/BookingsTouristicPlace');
sequelize.import('./models/Hotels');
sequelize.import('./models/Places');
sequelize.import('./models/Restaurants');
sequelize.import('./models/Reviews');
sequelize.import('./models/ReviewVotes');
sequelize.import('./models/TouristicPlaces');
sequelize.import('./models/Users');
sequelize.import('./models/UsersTripPlace');




module.exports = sequelize;