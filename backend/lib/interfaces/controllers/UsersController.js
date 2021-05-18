'use strict';

const Boom = require('@hapi/boom');
const ListUsers = require('../../application/use_cases/User/ListUsers');
const CreateUser = require('../../application/use_cases/User/CreateUser');
const GetUser = require('../../application/use_cases/User/GetUser');
const DeleteUser = require('../../application/use_cases/User/DeleteUser');
const SignInUser = require('../../application/use_cases/User/SignInUser');
const LogInUser = require('../../application/use_cases/User/LoginInUser');

module.exports = {

  async signInUser(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { userFirstName, userLastName, userID, userEmail, userPassword } = request.payload;

    try {
      // Treatment
      const user = await SignInUser(userFirstName, userLastName, userID, userEmail, userPassword, serviceLocator);

      // Output
      return serviceLocator.userSerializer.serialize(user);

    } catch (e) {
      let message = "An internal server error occurred"
      if (e !== undefined && e === "ER_DUP_ENTRY") {
        return Boom.badRequest("This email is already registered");
      } else {
        console.log(e);
      }
      return h.response({ statusCode: 500, error: "Internal Server Error", message }).code(500);
    }
  },

  async logInUser(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    try {
      // Input
      const { userEmail, userPassword } = request.payload;

      // Treatment
      const user = await LogInUser(userEmail, userPassword, serviceLocator);

      // Output
      if (!user) {
        return Boom.notFound('the email and password dont match');
      }

      return h.response({ valid: true });
    } catch (e) {
      let message = "An internal server error occurred"
      if (e !== undefined && e === "EMAIL_NOT_FOUND") {
        return Boom.notFound('Email not found');
      } else {
        console.log(e);
      }
      return h.response({ statusCode: 500, error: "Internal Server Error", message }).code(500);
    }
  },

  async findUsers(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const users = await ListUsers(serviceLocator);

    // Output
    return users.map(serviceLocator.userSerializer.serialize)
  },

  async createUser(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { userFirstName, userLastName, userID, userEmail, userPassword } = request.payload;

    // Treatment
    const user = await CreateUser(userFirstName, userLastName, userID, userEmail, userPassword, serviceLocator);

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
