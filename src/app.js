require('dotenv').config();
const express = require('express');

const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.send('Salaam, World :)');
});

// START SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
