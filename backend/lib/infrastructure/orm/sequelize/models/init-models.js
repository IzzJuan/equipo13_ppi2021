var DataTypes = require("sequelize").DataTypes;
var _bookings_hotel = require("./BookingsHotel");
var _bookings_restaurant = require("./BookingsRestaurant");
var _bookings_touristic_place = require("./BookingsTouristicPlace");
var _hotels = require("./Hotels");
var _places = require("./Places");
var _restaurants = require("./Restaurants");
var _review_votes = require("./ReviewVotes");
var _reviews = require("./Reviews");
var _touristic_places = require("./TouristicPlaces");
var _users = require("./Users");
var _users_trip_place = require("./UsersTripPlace");

function initModels(sequelize) {
  var bookings_hotel = _bookings_hotel(sequelize, DataTypes);
  var bookings_restaurant = _bookings_restaurant(sequelize, DataTypes);
  var bookings_touristic_place = _bookings_touristic_place(sequelize, DataTypes);
  var hotels = _hotels(sequelize, DataTypes);
  var places = _places(sequelize, DataTypes);
  var restaurants = _restaurants(sequelize, DataTypes);
  var review_votes = _review_votes(sequelize, DataTypes);
  var reviews = _reviews(sequelize, DataTypes);
  var touristic_places = _touristic_places(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_trip_place = _users_trip_place(sequelize, DataTypes);

  bookings_hotel.belongsTo(hotels, { as: "idHotel_hotel", foreignKey: "idHotel"});
  hotels.hasMany(bookings_hotel, { as: "bookings_hotels", foreignKey: "idHotel"});
  hotels.belongsTo(places, { as: "idPlace_place", foreignKey: "idPlace"});
  places.hasMany(hotels, { as: "hotels", foreignKey: "idPlace"});
  restaurants.belongsTo(places, { as: "idPlace_place", foreignKey: "idPlace"});
  places.hasMany(restaurants, { as: "restaurants", foreignKey: "idPlace"});
  reviews.belongsTo(places, { as: "idPlace_place", foreignKey: "idPlace"});
  places.hasMany(reviews, { as: "reviews", foreignKey: "idPlace"});
  touristic_places.belongsTo(places, { as: "idPlace_place", foreignKey: "idPlace"});
  places.hasMany(touristic_places, { as: "touristic_places", foreignKey: "idPlace"});
  users_trip_place.belongsTo(places, { as: "idPlace_place", foreignKey: "idPlace"});
  places.hasMany(users_trip_place, { as: "users_trip_places", foreignKey: "idPlace"});
  bookings_restaurant.belongsTo(restaurants, { as: "idRestaurant_restaurant", foreignKey: "idRestaurant"});
  restaurants.hasMany(bookings_restaurant, { as: "bookings_restaurants", foreignKey: "idRestaurant"});
  review_votes.belongsTo(reviews, { as: "idReview_review", foreignKey: "idReview"});
  reviews.hasMany(review_votes, { as: "review_votes", foreignKey: "idReview"});
  bookings_touristic_place.belongsTo(touristic_places, { as: "idTouristicPlace_touristic_place", foreignKey: "idTouristicPlace"});
  touristic_places.hasMany(bookings_touristic_place, { as: "bookings_touristic_places", foreignKey: "idTouristicPlace"});
  bookings_hotel.belongsTo(users, { as: "idUser_user", foreignKey: "idUser"});
  users.hasMany(bookings_hotel, { as: "bookings_hotels", foreignKey: "idUser"});
  bookings_restaurant.belongsTo(users, { as: "idUser_user", foreignKey: "idUser"});
  users.hasMany(bookings_restaurant, { as: "bookings_restaurants", foreignKey: "idUser"});
  bookings_touristic_place.belongsTo(users, { as: "idUser_user", foreignKey: "idUser"});
  users.hasMany(bookings_touristic_place, { as: "bookings_touristic_places", foreignKey: "idUser"});
  review_votes.belongsTo(users, { as: "idUser_user", foreignKey: "idUser"});
  users.hasMany(review_votes, { as: "review_votes", foreignKey: "idUser"});
  reviews.belongsTo(users, { as: "idUser_user", foreignKey: "idUser"});
  users.hasMany(reviews, { as: "reviews", foreignKey: "idUser"});
  users_trip_place.belongsTo(users, { as: "idUser_user", foreignKey: "idUser"});
  users.hasMany(users_trip_place, { as: "users_trip_places", foreignKey: "idUser"});

  return {
    bookings_hotel,
    bookings_restaurant,
    bookings_touristic_place,
    hotels,
    places,
    restaurants,
    review_votes,
    reviews,
    touristic_places,
    users,
    users_trip_place,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
