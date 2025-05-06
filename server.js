const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Required environment variables
const ROBOFLOW_API_KEY = process.env.ROBOFLOW_API_KEY;
const ROBOFLOW_ENDPOINT = process.env.ROBOFLOW_ENDPOINT || 'https://serverless.roboflow.com/infer/workflows/obinopaul/project';

// Check if the API key is provided
if (!ROBOFLOW_API_KEY) {
  console.error('ROBOFLOW_API_KEY environment variable is not set. Please set it before starting the server.');
  process.exit(1);
}

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to provide credentials
app.get('/api/credentials', (req, res) => {
  res.json({
    roboflowApiKey: ROBOFLOW_API_KEY,
    roboflowEndpoint: ROBOFLOW_ENDPOINT
  });
});

// Route all other requests to the HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API credentials configured: ${ROBOFLOW_API_KEY ? 'Yes' : 'No'}`);
});