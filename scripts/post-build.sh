#!/bin/bash

# Run the ensure-build script
echo "Running post-build verification..."
node scripts/ensure-build.js

# Copy any assets from attached_assets to the public folder if needed
echo "Copying assets..."
mkdir -p dist/public/assets
cp -r attached_assets/* dist/public/assets/ 2>/dev/null || true

echo "Post-build script completed"