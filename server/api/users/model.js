const { query } = require('../../database/connection');

async function addAccount({ email, password }) {
  const statement = 'INSERT INTO accounts (email, password) VALUES ($1, $2)';
  await query(statement, [email, password]);
}

async function getPasswordByEmail({ email }) {
  const statement = 'Select password From accounts Where email = $1';
  const result = await query(statement, [email]);
  return result.rows[0] ? result.rows[0].password : null;
}

async function getAccountByEmail({ email }) {
  const statement = 'Select id, email From accounts Where email = $1';
  const result = await query(statement, [email]);
  return result.rows[0];
}

module.exports = { addAccount, getPasswordByEmail, getAccountByEmail };
