const db = require('./models');

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

module.exports = connectToDatabase;
