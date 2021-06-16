"use strict";

module.exports = class {
  find() {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  persist(domainUser) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  get(userId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  remove(userId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  merge(domainUser) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  getByEmail(email) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
};
