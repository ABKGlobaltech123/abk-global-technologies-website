# Formspree Contact Form Setup Guide

## Quick Setup Steps

1. **Sign up for Formspree**
   - Go to [formspree.io](https://formspree.io)
   - Create a free account (allows 50 submissions/month)
   - For unlimited submissions, consider upgrading to a paid plan

2. **Create a New Form**
   - Click "New Form" in your dashboard
   - Give your form a name (e.g., "ABK Global Contact Form")
   - Copy the form endpoint URL (looks like: `https://formspree.io/f/xzbqwxyz`)

3. **Update the Code**
   - Open `client/src/components/ContactForm.tsx`
   - Find line 22: `'https://formspree.io/f/YOUR_FORM_ID'`
   - Replace `YOUR_FORM_ID` with your actual form ID (the part after `/f/`)
   - Example: `'https://formspree.io/f/xzbqwxyz'`

4. **Configure Form Settings (Optional)**
   - In Formspree dashboard, configure:
     - Email notifications
     - Redirect URL after submission
     - Spam protection
     - Custom thank you message

5. **Test the Form**
   - Submit a test message through your website
   - Check your email for the submission
   - Verify the form appears in your Formspree dashboard

## Form Features Included

✅ **Client-side validation** - Form validates input before submission
✅ **Loading states** - Shows spinner during submission
✅ **Success/error messages** - User feedback via toast notifications
✅ **Responsive design** - Works on all device sizes
✅ **Smooth animations** - Enhanced user experience
✅ **Spam protection** - Built-in Formspree spam filtering

## Customization Options

- **Email templates**: Customize notification emails in Formspree dashboard
- **Auto-responder**: Set up automatic thank you emails
- **Webhooks**: Connect to other services when forms are submitted
- **Custom fields**: Add additional form fields as needed

## Pricing

- **Free**: 50 submissions/month
- **Basic**: $10/month for 1,000 submissions
- **Pro**: $20/month for 5,000 submissions

For ABK Global Technologies, the free plan should be sufficient initially, with option to upgrade as contact volume grows.