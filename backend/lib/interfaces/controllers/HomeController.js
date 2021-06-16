"use strict";

const Boom = require("@hapi/boom");
const ListUsers = require("../../application/use_cases/User/ListUsers");
const CreateUser = require("../../application/use_cases/User/CreateUser");
const GetUser = require("../../application/use_cases/User/GetUser");
const DeleteUser = require("../../application/use_cases/User/DeleteUser");

module.exports = {
  async findHotels(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const hotels = await ListUsers(serviceLocator);

    // Output
    return hotels.map(serviceLocator.userSerializer.serialize);
  },

  async createUser(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { userFirstName, userLastName, userID, userEmail, userPassword } =
      request.payload;

    // Treatment
    const user = await CreateUser(
      userFirstName,
      userLastName,
      userID,
      userEmail,
      userPassword,
      serviceLocator
    );

    // Output
    return serviceLocator.userSerializer.serialize(user);
  },

  async getUser(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    const user = await GetUser(userId, serviceLocator);

    // Output
    if (!user) {
      return Boom.notFound();
    }
    return serviceLocator.userSerializer.serialize(user);
  },

  async deleteUser(request, h) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    await DeleteUser(userId, serviceLocator);

    // Output
    return h.response().code(204);
  },
};
