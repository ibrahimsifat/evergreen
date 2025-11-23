# Cloudinary Setup Guide for Vercel Production

## 🚀 **Why Cloudinary?**

Your current upload system tries to save files to the local file system, which **doesn't work on Vercel** because:

- Vercel's file system is **read-only** in production
- Files are **deleted** after each serverless function execution
- No **persistent storage** on the server

## 📋 **Setup Steps**

### 1. **Create Cloudinary Account**

1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for a **free account**
3. You get **25GB storage** and **25GB bandwidth** for free

### 2. **Get Your Credentials**

1. Go to your [Cloudinary Dashboard](https://cloudinary.com/console)
2. Copy these values:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

### 3. **Set Environment Variables**

#### **Local Development (.env.local)**

```bash
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

#### **Vercel Production**

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `CLOUDINARY_CLOUD_NAME` = your cloud name
   - `CLOUDINARY_API_KEY` = your API key
   - `CLOUDINARY_API_SECRET` = your API secret

### 4. **Deploy to Vercel**

```bash
# Deploy your changes
git add .
git commit -m "Add Cloudinary integration for image uploads"
git push origin main
```

## ✨ **What's New**

### **Enhanced Upload API**

- ✅ **Cloudinary integration** for reliable file storage
- ✅ **Automatic image optimization** (quality, format, size)
- ✅ **Organized folders** by category (projects, services, clients)
- ✅ **Secure HTTPS URLs** for all uploaded images
- ✅ **File deletion support** via public ID

### **Image Optimization Features**

- **Auto quality** adjustment
- **Auto format** selection (WebP, AVIF when supported)
- **Size limits** (max 1920x1080)
- **Organized storage** in folders

### **Response Format**

```json
{
  "success": true,
  "data": {
    "fileUrl": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/albasari/projects/image.jpg",
    "publicId": "albasari/projects/image",
    "width": 1920,
    "height": 1080,
    "format": "jpg",
    "bytes": 245760
  }
}
```

## 🔧 **Testing**

### **Local Testing**

1. Add your Cloudinary credentials to `.env.local`
2. Run `pnpm dev`
3. Test uploads in your CMS

### **Production Testing**

1. Deploy to Vercel with environment variables
2. Test uploads on your live site
3. Check Cloudinary dashboard for uploaded files

## 📁 **File Organization**

Images will be stored in Cloudinary with this structure:

```
albasari/
├── projects/
│   ├── image1.jpg
│   └── image2.png
├── services/
│   ├── service1.jpg
│   └── service2.png
├── clients/
│   ├── client1.jpg
│   └── client2.png
└── general/
    └── general1.jpg
```

## 🚨 **Important Notes**

1. **Never commit** your `.env.local` file
2. **Keep your API secret** secure
3. **Monitor usage** in Cloudinary dashboard
4. **Free tier limits**: 25GB storage, 25GB bandwidth/month

## 🆘 **Troubleshooting**

### **Upload Fails**

- Check environment variables are set correctly
- Verify Cloudinary credentials
- Check file size (max 5MB)
- Ensure file type is supported (jpg, png, gif, webp)

### **Images Not Displaying**

- Check if URLs are HTTPS
- Verify Cloudinary account is active
- Check browser console for errors

## 🎉 **Benefits**

- ✅ **Works on Vercel** production
- ✅ **Automatic optimization**
- ✅ **Global CDN** for fast loading
- ✅ **Reliable storage**
- ✅ **Easy management** via dashboard
- ✅ **Free tier** for most projects

Your image uploads will now work perfectly on Vercel production! 🚀
