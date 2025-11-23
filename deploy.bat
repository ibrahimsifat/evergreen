@echo off
echo 🚀 Starting deployment process for Al-Bishri Company General Contracting EST...

echo 🧹 Cleaning previous builds...
if exist out rmdir /s /q out
if exist .next rmdir /s /q .next

echo 📦 Installing dependencies...
npm install

echo 🔨 Building the project...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build completed successfully!
    
    echo 📄 Copying .htaccess file...
    copy .htaccess out\
    
    echo 📦 Creating deployment package...
    cd out
    powershell Compress-Archive -Path * -DestinationPath ..\sunmon-manpower-deployment.zip -Force
    cd ..
    
    echo 🎉 Deployment package created: sunmon-manpower-deployment.zip
    echo 📁 Static files are ready in the 'out' directory
    echo.
    echo Next steps:
    echo 1. Upload the contents of the 'out' directory to your cPanel public_html folder
    echo 2. Or upload the 'sunmon-manpower-deployment.zip' file and extract it in cPanel
    echo 3. Make sure the .htaccess file is uploaded for proper routing
) else (
    echo ❌ Build failed! Please check the errors above.
    exit /b 1
)

pause
