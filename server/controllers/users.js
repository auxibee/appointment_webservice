const Service = require('../services/user_service');

const UserService = new Service();

async function createAccount(req, res) {
  await UserService.createAccount({ email: 'auxibee@gmail.com', password: 'dfsfsdfsd' });
  res.json({ name: 'bad' });
}

module.exports = { createAccount };
