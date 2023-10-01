async function health(req, res) {
  res.json({ health: 'ok' });
}

module.exports = health;
