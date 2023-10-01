const app = require('../app');
const connectToDatabase = require('../server/database/connection');

const startServer = async () => {
  const PORT = process.env.PORT || 8080;
  await connectToDatabase();
  app.listen(PORT, () => console.log('server started succesfully'));
};

startServer();
