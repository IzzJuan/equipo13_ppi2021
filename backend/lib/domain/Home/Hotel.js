"use strict";

module.exports = class {
  constructor({
    id = null,
    userFirstName,
    userLastName,
    userID,
    userEmail,
    userPassword,
  }) {
    this.id = id;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userID = userID;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }
};
