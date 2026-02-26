const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());



app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js backend! This is API Test" });
});



app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  
}));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(3000, '127.0.0.1', () => {
    console.log('Server running on http://localhost:3000');
  });