const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Import cors


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Simple GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API endpoint to list products
app.get('/products', (req, res) => {
  let sql = 'SELECT * FROM Products';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// API endpoint to list customers
app.get('/customers', (req, res) => {
  let sql = 'SELECT * FROM Customers';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// API endpoint to list orders
app.get('/orders', (req, res) => {
  let sql = 'SELECT * FROM Orders';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.get('/orderdetails', (req, res) => {
  let sql = 'SELECT * FROM OrderDetails';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.get('/suppliers', (req, res) => {
  let sql = 'SELECT * FROM Suppliers';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
