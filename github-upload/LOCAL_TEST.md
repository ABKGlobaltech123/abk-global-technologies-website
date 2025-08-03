# Test Your Website Locally

## Method 1: Using Python (Recommended)

1. **Open terminal/command prompt**
2. **Navigate to the github-upload folder**
3. **Run this command:**
   ```bash
   python -m http.server 8080
   ```
   OR if you have Python 3:
   ```bash
   python3 -m http.server 8080
   ```

4. **Open your browser and go to:**
   `http://localhost:8080`

## Method 2: Using Node.js

1. **Navigate to the github-upload folder**
2. **Run:**
   ```bash
   node test-server.js
   ```
3. **Open your browser and go to:**
   `http://localhost:3001`

## Method 3: Using VS Code Live Server

1. **Install "Live Server" extension in VS Code**
2. **Open the github-upload folder in VS Code**
3. **Right-click on index.html**
4. **Select "Open with Live Server"**

## Method 4: Double-click index.html

Simply double-click the `index.html` file to open it in your browser. However, some features might not work due to CORS restrictions.

## What to Test:

✅ **Website loads properly**
✅ **Logo appears in header**
✅ **Navigation works**
✅ **Animations play**
✅ **Contact form displays**
✅ **Mobile responsive design**
✅ **All pages accessible**

If everything works locally, it will work on GitHub Pages!