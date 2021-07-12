require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();

// ROUTES
// eslint-disable-next-line consistent-return
app.get('/weather', async (req, res) => {
  const URL = 'http://api.openweathermap.org/data/2.5/weather';
  const { city, mood } = req.query;

  if (!city) {
    return res.status(400).json({ err: '`city` query parameter required.' });
  }

  fetch(`${URL}?q=${city}&appid=${process.env.API_KEY}`)
    .then((results) => results.json())
    .then((json) => {
      if (mood) {
        const message = `The weather in ${json.name} is ${json.weather[0].description}, and you're feeling ${mood}.`;
        return res.json({ message });
      }
      const message = `The weather in ${json.name} is ${json.weather[0].description}`;
      return res.json({ message });
    })
    .catch((err) => res.json({ err }));
});

// START SERVER
app.listen(process.env.PORT || 3000);
