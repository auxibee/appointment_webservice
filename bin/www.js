const app = require('../app');

const startServer = async () => {
  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => console.log('server started succesfully'));
};

startServer();
