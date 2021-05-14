'use strict';

const _serializeSingleUser = (user) => {
  return {
    'id': user.id,
    'userFirstName': user.userFirstName,
    'userLastName': user.userLastName,
    'userEmail': user.userEmail,
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }

};