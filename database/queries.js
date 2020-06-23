const { Client } = require("pg");

const client = new Client({
  connectionString: "postgressql://postgres:password@localhost:5432/test",
});

client.connect();

const getAllEvents = (callback) => {
  client.query("SELECT * FROM events", (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result.rows);
    }
  });
};

module.exports = { getAllEvents };
