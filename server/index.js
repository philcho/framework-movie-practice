const app = require('./app');
const db = require('./db');
const port = 4568;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});