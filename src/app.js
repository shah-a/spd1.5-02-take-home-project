require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();

// ROUTES
app.get('/weather', async (req, res) => {
  const URL = 'http://api.openweathermap.org/data/2.5/weather';
  const { city } = req.query;

  fetch(`${URL}?q=${city}&appid=${process.env.API_KEY}`)
    .then((results) => results.json())
    .then((json) => {
      res.json(json);
    })
    .catch((err) => {
      res.json({ err });
    });
});

app.get('/:asdf/:mood', (req, res) => {
  res.send('Not yet implemented');
});

// START SERVER
app.listen(process.env.PORT || 3000);
