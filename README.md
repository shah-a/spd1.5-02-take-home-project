# SPD 1.5: Take Home Coding Project

Written in JavaScript (Node.js v15.11.0)

## Description

Use any backend framework to build a weather app using the OpenWeatherMap API. Allow anonymous users to input their mood each day corresponding to the weather.

## Prerequisites

To run the app locally, an OpenWeatherMap API key is necessary

## Endpoints

BASE URL: `http://localhost:YOUR_PORT`

### Current weather by city

Enter `city` query paramater (`city_name`, or `city_name,country_code`)

GET `/weather?city=Toronto`<br/>
GET `/weather?city=Hamilton,CA`<br/>
GET `/weather?city=Houston,US`

#### Enter your mood (optional)

Add `mood` query parameter to enter your mood based on the weather

GET `/weather?city=Toronto&mood=happy`<br/>
GET `/weather?city=Hamilton,CA&mood=motivated`<br/>
GET `/weather?city=Houston,US&mood=excited`
