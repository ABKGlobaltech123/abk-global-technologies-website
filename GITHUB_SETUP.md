# Complete GitHub Setup Guide for ABK Global Technologies Website

## Step 1: Prepare Your Code for GitHub

Your project is now ready for GitHub deployment with:
- ✅ Professional README.md
- ✅ GitHub Actions workflow for automatic deployment
- ✅ License file (MIT)
- ✅ Deployment documentation
- ✅ Formspree integration guide

## Step 2: Create GitHub Repository

1. **Go to GitHub.com and sign in**
2. **Click "New repository" (green button)**
3. **Repository settings:**
   - Name: `abk-global-technologies-website`
   - Description: `Modern corporate website for ABK Global Technologies - IT solutions and services provider`
   - Public repository (required for free GitHub Pages)
   - **DO NOT** check "Add a README file" (we have our own)
   - **DO NOT** add .gitignore or license (we have our own)

## Step 3: Upload Your Code

From Replit terminal or your local machine:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: ABK Global Technologies website with Formspree integration"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/abk-global-technologies-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click "Settings" tab**
3. **Scroll to "Pages" in left sidebar**
4. **Source:** Deploy from a branch
5. **Branch:** gh-pages (will be created automatically by GitHub Actions)
6. **Folder:** / (root)
7. **Click "Save"**

## Step 5: Configure GitHub Actions

The GitHub Action will automatically:
- ✅ Trigger on every push to main branch
- ✅ Install dependencies
- ✅ Build the frontend
- ✅ Deploy to GitHub Pages

**Your website will be live at:**
`https://YOUR_USERNAME.github.io/abk-global-technologies-website/`

## Step 6: Configure Formspree

1. **Sign up at [formspree.io](https://formspree.io)**
2. **Create a new form**
3. **Get your form ID** (looks like: `xzbqwxyz`)
4. **Edit the code:**
   - Open `client/src/components/ContactForm.tsx`
   - Find line 22: `'https://formspree.io/f/YOUR_FORM_ID'`
   - Replace `YOUR_FORM_ID` with your actual form ID
5. **Commit and push the change:**
   ```bash
   git add client/src/components/ContactForm.tsx
   git commit -m "Configure Formspree form ID"
   git push
   ```

## Step 7: Monitor Deployment

1. **Go to "Actions" tab in your GitHub repository**
2. **Watch the deployment process**
3. **Once green checkmark appears, your site is live**

## Step 8: Test Your Website

1. **Visit your live site**
2. **Test the contact form**
3. **Check mobile responsiveness**
4. **Verify all animations work**

## Optional: Custom Domain

To use your own domain (e.g., www.abkglobal.tech):

1. **Add CNAME file to your repository:**
   ```bash
   echo "www.abkglobal.tech" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS with your domain provider:**
   - Add CNAME record: `www` pointing to `YOUR_USERNAME.github.io`

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Site Not Loading
- Wait 10-15 minutes for GitHub Pages to propagate
- Check if GitHub Pages is enabled in repository settings
- Verify gh-pages branch was created

### Contact Form Not Working
- Confirm Formspree form ID is correct
- Check Formspree dashboard for submissions
- Verify form is not blocked by browser

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Test locally
npm run dev

# Push updates
git add .
git commit -m "Update dependencies and content"
git push
```

### Content Updates
- Edit pages in `client/src/pages/`
- Update contact info in `client/src/pages/Home.tsx`
- Modify services in respective page files

## Support

For technical support:
- Check GitHub Issues in your repository
- Review deployment logs in GitHub Actions
- Contact ABK Global Technologies development team

---

**Your professional website will be live and accessible worldwide once deployed! 🚀**