const db = require('../db');

const executeQuery = (query, values) => {
  return db.queryAsync(query, values).spread(results => results);
};