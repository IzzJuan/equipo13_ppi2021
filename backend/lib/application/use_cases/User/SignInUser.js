const User = require('../../../domain/User');
const { encryptPassword } = require('../../utilities/bcrypt');

module.exports = async (userFirstName, userLastName, userID, userEmail, userPassword, { userRepository }) => {
  userPassword = await encryptPassword(userPassword);
  const user = new User({ id: null, userFirstName, userLastName, userID, userEmail, userPassword });
  return userRepository.signIn(user);
};
