# Contact Form Setup with Formspree

Your contact form is ready but needs a Formspree account to work.

## Quick Setup:

1. **Sign up at [formspree.io](https://formspree.io)**
2. **Create a new form**
3. **Get your form ID** (looks like: `xzbqwxyz`)
4. **Edit the JavaScript file:**
   - Open `assets/index-BPhVLtUl.js` in a text editor
   - Find: `'https://formspree.io/f/YOUR_FORM_ID'`
   - Replace `YOUR_FORM_ID` with your actual form ID
5. **Upload the updated file to GitHub**

## Alternative: Use Your Own Email

Replace the form action with `mailto:` in the JavaScript file:
```javascript
// Find the fetch request and replace with:
window.location.href = `mailto:info@abkglobal.tech?subject=Contact Form&body=${message}`;
```

Your contact form will work perfectly once configured!