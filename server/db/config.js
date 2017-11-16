module.exports = (db) => {
  return db.query(`
    CREATE TABLE IF NOT EXISTS movies (
      title VARCHAR(255),
      isWatched BOOLEAN
    );
  `, 
  function(err, results, fields) {
    if (err) throw err;
  });
};