"use strict";

const User = require("../../domain/User");
const UserRepository = require("../../domain/UserRepository");

const { hotels, cities } = require("../orm/sequelize/relationalModel");

module.exports = class extends UserRepository {
  async find() {
    const seqHotels = await hotels.findAll();
    return seqHotels.map((seqUser) => {
      return new User({
        id: seqUser.id,
        userFirstName: seqUser.userFirstName,
        userLastName: seqUser.userLastName,
        userID: seqUser.userID,
        userEmail: seqUser.userEmail,
        userPassword: seqUser.userPassword,
      });
    });
  }

  async persist(userEntity) {
    const { userFirstName, userLastName, userID, userEmail, userPassword } =
      userEntity;
    const seqUser = await users.create({
      userFirstName,
      userLastName,
      userID,
      userEmail,
      userPassword,
    });
    return new User({
      id: seqUser.id,
      userFirstName: seqUser.userFirstName,
      userLastName: seqUser.userLastName,
      userID: seqUser.userID,
      userEmail: seqUser.userEmail,
      userPassword: seqUser.userPassword,
    });
  }

  async get(userId) {
    const seqUser = await users.findByPk(userId);

    if (seqUser)
      return new User({
        id: seqUser.id,
        userFirstName: seqUser.userFirstName,
        userLastName: seqUser.userLastName,
        userID: seqUser.userID,
        userEmail: seqUser.userEmail,
        userPassword: seqUser.userPassword,
      });
    else return false;
  }

  async remove(userId) {
    const seqUser = await users.findByPk(userId);
    if (seqUser) {
      return seqUser.destroy();
    }
    return false;
  }

  async merge(userEntity) {
    const seqUser = await this.model.findByPk(userEntity.id);

    if (!seqUser) return false;

    const {
      full_name,
      last_name,
      email,
      pass,
      upgrade_time,
      last_entry,
      status,
      admin,
      parent_id,
    } = userEntity;
    await seqUser.update(
      {
        full_name,
        last_name,
        email,
        pass,
        last_entry,
        status,
        admin,
        parent_id,
        upgrade_time,
      },
      { where: { id: userEntity.id } }
    );

    return new User(
      seqUser.id,
      seqUser.full_name,
      seqUser.last_name,
      seqUser.email,
      seqUser.pass,
      seqUser.register_time,
      seqUser.last_entry,
      seqUser.status,
      seqUser.admin,
      seqUser.parent_id,
      seqUser.upgrade_time
    );
  }

  async getByEmail(userEmail) {
    const seqUser = await users.findOne({ where: { userEmail } });
    return new User({
      id: seqUser.id,
      userFirstName: seqUser.userFirstName,
      userLastName: seqUser.userLastName,
      userID: seqUser.userID,
      userEmail: seqUser.userEmail,
      userPassword: seqUser.userPassword,
    });
  }
};
