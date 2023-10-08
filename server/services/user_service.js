/* eslint-disable class-methods-use-this */
const model = require('../database/models');
const ApiError = require('../errors/apiError');

const { User } = model;

class UserService {
  async createAccount({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      throw new ApiError('An account with this email already exits', 433);
    }
  }
}

module.exports = UserService;
