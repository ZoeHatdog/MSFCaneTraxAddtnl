const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js backend! This is API Test" });
});


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  
}));


app.listen(3000, '127.0.0.1', () => {
    console.log('Server running on http://localhost:3000');
  });