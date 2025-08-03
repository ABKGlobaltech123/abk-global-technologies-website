# Manual Upload to GitHub - Step by Step

## Step 1: Prepare Your Files
✅ You have all files ready in the `github-upload` folder:
- index.html
- assets/ (folder with CSS and JS)
- abk-logo.png
- photo1.avif
- .nojekyll
- README.md files

## Step 2: Create GitHub Repository

1. **Go to github.com and sign in**
2. **Click the green "New" button** (or "+" → New repository)
3. **Repository details:**
   - Repository name: `abk-global-technologies-website`
   - Description: `Professional website for ABK Global Technologies`
   - ✅ Make it **Public** (required for free GitHub Pages)
   - ❌ **DO NOT** check "Add a README file"
   - ❌ **DO NOT** add .gitignore or license
4. **Click "Create repository"**

## Step 3: Upload Files Manually

1. **On your new empty repository page, click "uploading an existing file"**
2. **Drag and drop ALL files from your `github-upload` folder:**
   - Select ALL files and folders at once
   - Or upload one by one if needed
3. **Important:** Make sure to upload:
   - `index.html` (main file)
   - `assets` folder (contains CSS and JS)
   - `abk-logo.png` (your logo)
   - `photo1.avif` (background image)
   - `.nojekyll` file (GitHub Pages config)
4. **Scroll down and add commit message:**
   - Title: `Add ABK Global Technologies website`
   - Description: `Professional corporate website with responsive design`
5. **Click "Commit changes"**

## Step 4: Enable GitHub Pages

1. **In your repository, click "Settings" tab**
2. **Scroll down to "Pages" in the left sidebar**
3. **Under "Source", select:**
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. **Click "Save"**
5. **Wait 2-5 minutes for deployment**

## Step 5: Access Your Website

Your website will be live at:
```
https://ABKGlobaltech123.github.io/abk-global-technologies-website/
```

## Troubleshooting

**If CSS doesn't load:**
- Ensure `assets` folder was uploaded correctly
- Check that `index.html` and `assets` folder are in the same directory

**If images don't show:**
- Ensure `abk-logo.png` and `photo1.avif` are uploaded
- Check file names match exactly

**If site doesn't load:**
- Wait 10-15 minutes for GitHub Pages to activate
- Check that repository is public
- Verify GitHub Pages is enabled in Settings

## Success!
Once deployed, you'll have a professional website with:
- Your ABK logo
- Responsive design
- Modern animations
- Contact form ready for setup
- Mobile-friendly navigation

🎉 **Your website will be live and accessible worldwide!**