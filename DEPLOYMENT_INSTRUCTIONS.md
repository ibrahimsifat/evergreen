# 🚀 Evergreen Intelligent Company Ltd (EIC) - cPanel Deployment Guide

This guide will help you deploy your Next.js project to cPanel hosting.

## 📋 Prerequisites

- cPanel hosting account with access to File Manager
- Node.js installed on your local machine
- Git (optional, for version control)

## 🛠️ Local Setup & Build

### Step 1: Prepare Your Project

1. **Open terminal/command prompt** in your project directory
2. **Install dependencies** (if not already done):

   ```bash
   npm install
   ```

3. **Build the project for static export**:

   ```bash
   npm run build
   ```

4. **Alternative: Use the deployment script**:

   ```bash
   # On Windows (PowerShell)
   bash deploy.sh

   # On Mac/Linux
   chmod +x deploy.sh
   ./deploy.sh
   ```

### Step 2: Verify Build Output

After building, you should see:

- `out/` directory with all static files
- `sunmon-manpower-deployment.zip` file (if using deployment script)

## 🌐 cPanel Deployment

### Method 1: File Manager Upload

1. **Login to your cPanel**
2. **Open File Manager**
3. **Navigate to `public_html`** (or your domain's root directory)
4. **Upload the contents** of the `out` directory:
   - Select all files from the `out` folder
   - Upload them to `public_html`
   - Make sure `.htaccess` file is included

### Method 2: ZIP Upload & Extract

1. **Upload the ZIP file**:
   - Upload `sunmon-manpower-deployment.zip` to `public_html`
   - Extract the ZIP file in cPanel File Manager
   - Delete the ZIP file after extraction

### Method 3: FTP/SFTP Upload

1. **Use FTP client** (FileZilla, WinSCP, etc.)
2. **Connect to your hosting** using FTP credentials
3. **Upload all files** from the `out` directory to `public_html`
4. **Ensure .htaccess is uploaded** (it might be hidden)

## ⚙️ Important Configuration

### .htaccess File

The `.htaccess` file is crucial for:

- Client-side routing (SPA behavior)
- Security headers
- Caching static assets
- Compression

**Make sure it's uploaded to your root directory!**

### File Structure in cPanel

Your `public_html` should contain:

```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── images/
├── clients/
└── ... (other static files)
```

## 🔧 Troubleshooting

### Common Issues:

1. **404 Errors on Page Refresh**

   - Ensure `.htaccess` file is uploaded
   - Check that rewrite rules are working

2. **Images Not Loading**

   - Verify all files from `public` folder are uploaded
   - Check file permissions (should be 644 for files, 755 for directories)

3. **CSS/JS Not Loading**

   - Check that `_next/static/` folder is uploaded
   - Verify file permissions

4. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors: `npm run lint`

### File Permissions:

- Files: 644
- Directories: 755
- .htaccess: 644

## 🚀 Post-Deployment

### Testing Your Site:

1. Visit your domain
2. Test all pages and navigation
3. Check that images load correctly
4. Verify contact forms work (if any)
5. Test on mobile devices

### Performance Optimization:

- Enable Gzip compression (handled by .htaccess)
- Set up CDN if needed
- Monitor site speed with tools like GTmetrix

## 📞 Support

If you encounter issues:

1. Check cPanel error logs
2. Verify all files are uploaded correctly
3. Test with a simple HTML file first
4. Contact your hosting provider if needed

## 🔄 Updates

To update your site:

1. Make changes locally
2. Run `npm run build`
3. Upload new files to cPanel
4. Clear any caches if needed

---

**Good luck with your deployment! 🎉**

_Evergreen Intelligent Company Ltd (EIC) - Leading Construction & Manpower Solutions_
