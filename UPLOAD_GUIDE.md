# What to Upload to GitHub

## ✅ UPLOAD These Files/Folders:

### Core Application Files
- `client/` - Your React frontend
- `server/` - Your Express backend  
- `shared/` - Shared schemas and types
- `components.json` - UI components config
- `drizzle.config.ts` - Database configuration
- `package.json` - Dependencies and scripts
- `postcss.config.js` - CSS processing config
- `tailwind.config.ts` - Tailwind CSS config
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build tool configuration

### Documentation & Setup
- `README.md` - Project documentation
- `LICENSE` - MIT license
- `DEPLOYMENT.md` - Deployment instructions
- `FORMSPREE_SETUP.md` - Contact form setup
- `GITHUB_SETUP.md` - GitHub setup guide
- `UPLOAD_GUIDE.md` - This guide
- `replit.md` - Project architecture

### GitHub Configuration
- `.github/` - GitHub Actions workflow
- `.gitignore` - Files to exclude from Git

## ❌ DO NOT Upload These Files/Folders:

### Replit-Specific Files
- `.replit` - Replit configuration
- `replit.nix` - Replit environment
- `.config/` - Replit config folder
- `.upm/` - Replit package manager

### Build & Dependencies
- `node_modules/` - Dependencies (installed automatically)
- `dist/` - Build output (generated automatically)
- `package-lock.json` - Lock file (can cause conflicts)

### Demo Assets
- `attached_assets/` - Demo images and files

### Environment & Logs
- `.env` files - Environment variables
- `*.log` - Log files

## Quick Upload Commands

1. **Initialize and upload (from your project root):**
```bash
git init
git add .
git commit -m "Initial commit: ABK Global Technologies website"
git remote add origin https://github.com/YOUR_USERNAME/abk-global-technologies-website.git
git push -u origin main
```

The `.gitignore` file will automatically exclude the files you shouldn't upload.

## What Happens After Upload

1. **GitHub Actions will automatically:**
   - Install dependencies
   - Build your website
   - Deploy to GitHub Pages

2. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/abk-global-technologies-website/`

3. **To update later:**
```bash
git add .
git commit -m "Update website content"
git push
```

## File Structure You'll See on GitHub

```
abk-global-technologies-website/
├── .github/workflows/
├── client/
├── server/
├── shared/
├── README.md
├── LICENSE
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── other config files...
```

**Total files to upload: ~50-60 files (not including node_modules)**