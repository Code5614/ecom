// src/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let data = { message: "Hello, world!" };

app.get('/', (req, res) => {
  res.send(data.message);
});

app.post('/update', (req, res) => {
  data.message = req.query.message;
  res.send(`Message updated to: ${data.message}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
