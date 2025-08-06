import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/character/:id', async (req, res) => {
  const {id} = req.params;
  const url = `https://character-service.dndbeyond.com/character/v5/character/${id}`;

    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching character data:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});