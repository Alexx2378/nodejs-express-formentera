const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Serve static files from "public" folder
app.use(express.static('public'));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

// Items array
const items = ['Apple', 'Banana', 'Orange'];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body.item;
  items.push(newItem);
  res.json(items);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
