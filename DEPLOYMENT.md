# GitHub Deployment Guide

## GitHub Repository Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" 
3. Repository name: `abk-global-technologies-website`
4. Description: `Modern corporate website for ABK Global Technologies`
5. Set to Public (for free GitHub Pages)
6. Initialize with README: ❌ (we have our own)
7. Click "Create repository"

### 2. Upload Project to GitHub

From your local project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ABK Global Technologies website"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/abk-global-technologies-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Source: "Deploy from a branch"
5. Branch: Select "gh-pages" (will be created automatically)
6. Folder: "/ (root)"
7. Click "Save"

The GitHub Action will automatically build and deploy your site when you push to main branch.

## Alternative Deployment Options

### Option 1: Netlify (Recommended)

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain** (Optional)
   - Go to Site settings > Domain management
   - Add your custom domain
   - Configure DNS settings

### Option 2: Vercel

1. **Import Project**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configuration**
   - Framework Preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click "Deploy"

### Option 3: GitHub Pages with Custom Domain

1. **Add CNAME file**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Update DNS settings**
   - Add CNAME record pointing to `yourusername.github.io`
   - Or A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## Build Configuration

### Update Vite Configuration for GitHub Pages

If deploying to GitHub Pages with a repository name, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/abk-global-technologies-website/', // Add your repo name
  // ... rest of config
});
```

### Environment Variables

For production deployment, you may need to set:

- `VITE_FORMSPREE_ID`: Your Formspree form ID
- `VITE_SITE_URL`: Your production site URL

## Continuous Deployment

The included GitHub Action (`.github/workflows/deploy.yml`) automatically:

1. ✅ Installs Node.js and dependencies
2. ✅ Builds the project
3. ✅ Deploys to GitHub Pages
4. ✅ Triggers on every push to main branch

## Monitoring and Analytics

### Add Google Analytics

1. Get Google Analytics tracking ID
2. Add to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

### Performance Monitoring

- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking with Sentry (optional)

## Security Considerations

1. **Content Security Policy**: Add CSP headers
2. **HTTPS**: Ensure all traffic uses HTTPS
3. **Dependencies**: Regularly update npm packages
4. **Secrets**: Never commit API keys or secrets

## Backup Strategy

1. **Code**: Stored safely on GitHub
2. **Content**: Consider backing up Formspree submissions
3. **Analytics**: Export Google Analytics data periodically

## Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version compatibility
2. **Assets not loading**: Verify base path in Vite config
3. **404 errors**: Configure proper routing for SPA
4. **Contact form not working**: Verify Formspree configuration

### Getting Help

- Check GitHub Issues for similar problems
- Review build logs in GitHub Actions
- Contact ABK Global Technologies support

---

**Your website will be live at: `https://yourusername.github.io/abk-global-technologies-website/`**