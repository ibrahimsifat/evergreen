#!/bin/bash

# Evergreen Intelligent Company Ltd (EIC) - cPanel Deployment Script
# This script builds and prepares the project for cPanel deployment

echo "🚀 Starting deployment process for Evergreen Intelligent Company Ltd (EIC)..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf out
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Copy .htaccess to out directory
    echo "📄 Copying .htaccess file..."
    cp .htaccess out/
    
    # Create a deployment package
    echo "📦 Creating deployment package..."
    cd out
    zip -r ../sunmon-manpower-deployment.zip .
    cd ..
    
    echo "🎉 Deployment package created: sunmon-manpower-deployment.zip"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "Next steps:"
    echo "1. Upload the contents of the 'out' directory to your cPanel public_html folder"
    echo "2. Or upload the 'sunmon-manpower-deployment.zip' file and extract it in cPanel"
    echo "3. Make sure the .htaccess file is uploaded for proper routing"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
