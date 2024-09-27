// Import necessary modules using ESM syntax
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Create an Express application
const app = express();

// Get the __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html from views folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
