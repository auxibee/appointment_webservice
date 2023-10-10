const { Pool } = require('pg');
const db = require('./models');

const pool = new Pool({ max: 10, connectionString: 'postgres://postgres:217317auxi@localhost:5432/appointment_webservice' });

async function query(statement, values) {
  const client = await pool.connect();
  const result = await client.query(statement, values);
  client.release();
  return result;
}

function getClient() {
  return pool.connect();
}

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('database connected succefully');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  return null;
}

module.exports = { connectToDatabase, query, getClient };
