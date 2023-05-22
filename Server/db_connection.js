const express = require('express');
const mysql = require('mysql');
const axios = require('axios');

const app = express();
const port = 3000; // or any other port you prefer
const cors = require('cors');
app.use(express.json());
app.use(cors());

// MySQL database connection configuration
const connection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12619695',
  password: '2ANG8tNXa7',
  database: 'sql12619695',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define a route to fetch data from the database
app.get('/api/data/users', (req, res) => {
  const query = 'SELECT * FROM test';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Error retrieving data from the database');
    } else {
      res.json(results);
    }
  });
});


app.post('/api/data/postUser/', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const query = 'INSERT INTO test (name, age) VALUES (?, ?)';
  const values = [name, age];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Error creating a new record' });
    } else {
      res.status(200).json({ message: 'New record created', results});
    }
  });
});



app.delete('/api/data/deleteUser/:id', (req, res) => {
  const id = req.params.id;

  // SQL query to delete data with the specified ID
  const query = 'DELETE FROM test WHERE id = ?';

  // Execute the query with the provided ID
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ error: 'Error deleting data' });
    } else {
      res.status(200).json({ message: `Data with ID ${id} deleted successfully` });
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});