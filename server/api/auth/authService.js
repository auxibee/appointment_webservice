/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const ApiError = require('../../errors/apiError');
const { getPasswordByEmail, getAccountByEmail, addAccount } = require('../users/model');

class AuthService {
  async loginUser({ email, password }) {
    const user = await getAccountByEmail({ email });
    if (!user) {
      throw new ApiError('Wrong email or password', 401);
    }
    const hashedPassword = await getPasswordByEmail({ email });

    const verifyPassword = await bcrypt.compare(password, hashedPassword);
    if (verifyPassword) {
      return user;
    }
    throw new ApiError('Wrong email or password', 401);
  }

  async registerUser({ email, password }) {
    const user = await getAccountByEmail({ email });
    console.log(user);
    if (user) {
      throw new ApiError('An account with the email already exits', 403);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    await addAccount({ email, password: hash });
  }
}

module.exports = AuthService;
