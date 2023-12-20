// index.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Make a GET request to fetch data from server.js
    const response = await axios.get('http://localhost:3000/data');

    // Extract the data from the response
    const data = response.data;

    // Send the data as the response
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
