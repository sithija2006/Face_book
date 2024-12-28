// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// Face++ API endpoint and your API key
const FACE_PLUS_API_KEY = 'L1sQyrQQLwRJ7c5KAFFwhNdCz7maLpzlHide';
const FACE_PLUS_API_URL = 'https://api-us.faceplusplus.com/facepp/v3/detect';

// Proxy route to call Face++ API
app.post('/api/face-recognition', async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    const response = await axios.post(FACE_PLUS_API_URL, null, {
      params: {
        image_base64: imageBase64,
        api_key: FACE_PLUS_API_KEY,
        api_secret: '	L1sQyrQQLwRJ7c5KAFFwhNdCz7maLpzl', // Add your API secret here
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the image.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
