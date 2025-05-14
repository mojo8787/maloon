#!/bin/bash

# Install dependencies
npm install

# Make sure critters is installed (needed for CSS optimization)
npm install critters --no-save

# Clean previous builds
rm -rf .next out

# Build with Next.js
npx next build

echo "Build completed. Files ready for deployment in the 'out' directory." 