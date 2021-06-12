const { comparePassword } = require('../../utilities/bcrypt');

module.exports = async (userEmail, userPassword, { userRepository }) => {
  return await comparePassword(userPassword, await userRepository.logIn(userEmail));
};