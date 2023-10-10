const Service = require('./authService');

const AuthService = new Service();

async function login(req, res) {
  const user = await AuthService.loginUser({ ...req.body });
  res.json(user);
}

async function register(req, res) {
  await AuthService.registerUser({ ...req.body });
  res.json({ message: 'succes' });
}

module.exports = { login, register };
