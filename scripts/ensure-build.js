// ensure-build.js
// This script ensures that the build files are in the correct location
// and creates a basic index.html if needed

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distPublicDir = path.join(rootDir, 'dist', 'public');

// Ensure the dist/public directory exists
if (!fs.existsSync(distPublicDir)) {
  console.log(`Creating directory: ${distPublicDir}`);
  fs.mkdirSync(distPublicDir, { recursive: true });
}

// Check if index.html exists in the dist/public directory
const indexPath = path.join(distPublicDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.log(`Creating temporary index.html at: ${indexPath}`);
  // Create a basic index.html file that redirects to the root
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LumeCredit</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        padding: 20px;
        text-align: center;
      }
      h1 {
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 20px;
      }
      a {
        display: inline-block;
        background-color: #4a4a4a;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
      }
      a:hover {
        background-color: #333;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to LumeCredit</h1>
    <p>You should be redirected automatically. If not, please click the button below.</p>
    <a href="/">Go to LumeCredit</a>
    <script>
      // Redirect to the main page
      window.location.href = '/';
    </script>
  </body>
</html>
  `;
  fs.writeFileSync(indexPath, html);
  console.log('Temporary index.html created successfully');
}

console.log('Build verification complete');