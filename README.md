# AI Vision Inspector

A web application that uses Roboflow and OpenAI to detect objects in images and generate descriptions.

## Features

- Drag and drop image uploads
- Object detection with bounding boxes
- AI-generated descriptions for each detected object
- Interactive lightbox for viewing object details
- Dynamic cropping of detected objects
- Secure API key handling through environment variables

## Deployment on Render

### Prerequisites

- A [Render](https://render.com/) account
- A [Roboflow](https://roboflow.com/) API key

### Setup Steps

1. Fork or clone this repository
2. Create a `.env` file with your API keys (use `.env.example` as a template)
3. Connect your GitHub repository to Render
4. Create a new Web Service
5. Add your environment variables in the Render dashboard:
   - `ROBOFLOW_API_KEY` - Your Roboflow API key
   - `ROBOFLOW_ENDPOINT` - The Roboflow workflow endpoint (if different from default)

### Using Environment Variables on Render

1. Go to your Render dashboard and select your service
2. Navigate to the "Environment" tab
3. Add the environment variables listed above
4. Click "Save Changes" and trigger a new deployment

## Local Development

To run this application locally:

1. Clone the repository
   ```
   git clone <repository-url>
   cd ai-vision-inspector
   ```

2. Create a `.env` file in the root directory
   ```
   cp .env.example .env
   ```

3. Edit the `.env` file to add your API keys
   ```
   ROBOFLOW_API_KEY=your_api_key_here
   ```

4. Install dependencies
   ```
   npm install
   ```

5. Start the development server
   ```
   npm run dev
   ```

6. Visit `http://localhost:3000` in your browser

## Project Structure

```
ai-vision-inspector/
├── public/
│   └── index.html     (The main HTML file)
├── server.js          (Express server for serving the app)
├── package.json       (Node.js dependencies and scripts)
├── .env.example       (Template for environment variables)
├── .env               (Your actual environment variables - not committed to Git)
├── render.yaml        (Render deployment configuration)
└── README.md          (This file)
```

## Security

This application uses server-side API key management to keep your API keys secure. The keys are:
- Stored as environment variables on the server
- Never exposed to the client
- Accessed through a secure API endpoint
- Not included in the client-side JavaScript

## Technologies

- HTML/CSS with Tailwind CSS
- JavaScript (Vanilla)
- Node.js/Express for the server
- Roboflow API for computer vision
- OpenAI for image descriptions#   A I _ V i s i o n _ I n s p e c t o r  
 