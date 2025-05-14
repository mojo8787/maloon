#!/bin/bash

# Clean previous builds
rm -rf out

# Create out directory
mkdir -p out

# Copy public files directly
cp -R public/* out/

# Create basic index.html file
cat > out/index.html << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SpaceGate | Smart Buildings, Seamless Living | BMS Iraq</title>
  <meta name="description" content="SpaceGate provides industry-leading BMS, PMS, and IT Security solutions for smart buildings in Iraq and the Middle East. Experience seamless living with our technology.">
  <link rel="icon" href="/favicon.ico">
  <style>
    :root {
      --color-brand-green: #3B7447;
      --color-brand-gray: #2B3333;
      --color-brand-green-t: #6C9775;
      --color-brand-gray-t: #606666;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 0;
      color: var(--color-brand-gray);
    }
    header {
      background-color: var(--color-brand-gray);
      color: white;
      padding: 1rem;
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 100;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      height: 40px;
    }
    .hero {
      height: 100vh;
      background: linear-gradient(rgba(43, 51, 51, 0.8), rgba(43, 51, 51, 0.6)), url(/images/hero-bg.webp);
      background-size: cover;
      background-position: center;
      color: white;
      display: flex;
      align-items: center;
    }
    .hero-content {
      max-width: 600px;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      background-color: var(--color-brand-green);
      color: white;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      margin-right: 1rem;
    }
    .btn:hover {
      background-color: #2C5735;
    }
    .info {
      text-align: center;
      padding: 2rem 0;
      background-color: #f5f5f5;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <div class="header-content">
        <img src="/images/logo.png" alt="SpaceGate" class="logo">
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Smart Buildings, Seamless Living</h1>
        <p>Experience the future of property management and building automation with SpaceGate</p>
        <a href="#contact" class="btn">Contact Us</a>
      </div>
    </div>
  </section>

  <section class="info" id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>Email: info@spacegate.com</p>
      <p>Phone: +123 456 7890</p>
      <p><small>© 2024 SpaceGate. All rights reserved.</small></p>
    </div>
  </section>
</body>
</html>
EOL

echo "Build completed. Static files ready for deployment in the 'out' directory." 