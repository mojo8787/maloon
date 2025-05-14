#!/bin/bash

# Install dependencies
npm install

# Make sure critters is installed (needed for CSS optimization)
npm install critters --no-save

# Clean previous builds
rm -rf .next out

# Build with Next.js (with static export)
npx next build

# Copy the robots.txt and sitemap.xml to the out directory if they don't exist
if [ ! -f "out/robots.txt" ]; then
  cp src/app/robots.txt out/robots.txt
fi

if [ ! -f "out/sitemap.xml" ]; then
  cp src/app/sitemap.xml out/sitemap.xml
fi

echo "Build completed. Files ready for deployment in the 'out' directory." 