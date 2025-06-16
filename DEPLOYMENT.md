# Portfolio Deployment Guide

This guide explains how to deploy your portfolio to GitHub Pages and get a shareable public URL.

## 🌐 Live Portfolio URL

Once deployed, your portfolio will be available at:
**https://Joshi004.github.io/portfolio**

## 🚀 Deployment Methods

### Method 1: One-Click Deployment Script (Recommended)

1. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

   This script will:
   - Check for uncommitted changes
   - Install dependencies (if needed)
   - Build the project
   - Deploy to GitHub Pages
   - Provide the live URL

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Method 3: Automatic Deployment with GitHub Actions

GitHub Actions will automatically deploy your portfolio when you push changes to the main branch.

## 📋 Initial Setup Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `portfolio`
2. **Important:** Make sure the repository is **public** for GitHub Pages to work with free accounts

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial portfolio setup with deployment configuration"

# Add your GitHub repository as remote
git remote add origin https://github.com/Joshi004/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

#### Option B: Using gh-pages branch

1. Run the deployment script: `./deploy.sh`
2. Go to your repository settings on GitHub
3. In the **Pages** section, select **Deploy from a branch**
4. Choose **gh-pages** branch and **/ (root)** folder
5. Save the settings

## 🔄 Regular Updates

### For Automatic Deployment (GitHub Actions)
Just push your changes to the main branch:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Your portfolio will automatically build and deploy!

### For Manual Deployment
Run the deployment script whenever you want to update:
```bash
./deploy.sh
```

## 🌟 Sharing Your Portfolio

Once deployed, you can share these URLs:

- **Main Portfolio**: https://Joshi004.github.io/portfolio
- **Direct Sections**:
  - About: https://Joshi004.github.io/portfolio#about
  - Experience: https://Joshi004.github.io/portfolio#experience
  - Projects: https://Joshi004.github.io/portfolio#projects
  - Skills: https://Joshi004.github.io/portfolio#skills
  - Contact: https://Joshi004.github.io/portfolio#contact

## 🛠️ Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages**
   - Ensure repository is public
   - Check that GitHub Pages is enabled in repository settings
   - Wait 5-10 minutes after first deployment

2. **Build Fails**
   - Check for TypeScript errors: `npm run build`
   - Ensure all dependencies are installed: `npm install`

3. **Changes Not Appearing**
   - GitHub Pages can take 5-10 minutes to update
   - Clear your browser cache
   - Check the Actions tab for deployment status

4. **Permission Denied for deploy.sh**
   - Make script executable: `chmod +x deploy.sh`

### Checking Deployment Status

- **GitHub Actions**: Go to the **Actions** tab in your repository
- **Manual Deployment**: Check the `gh-pages` branch for latest commits

## 📱 Mobile Testing

Your portfolio is fully responsive. Test it on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (iOS Safari, Android Chrome)
- Tablet devices

## 🔧 Custom Domain (Optional)

To use a custom domain (e.g., nareshjoshi.dev):

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the homepage in `package.json`

## ✅ Deployment Checklist

- [ ] Repository is public on GitHub
- [ ] GitHub Pages is enabled
- [ ] Deployment script is executable (`chmod +x deploy.sh`)
- [ ] All changes are committed and pushed
- [ ] Portfolio builds successfully (`npm run build`)
- [ ] Live URL is accessible: https://Joshi004.github.io/portfolio

## 🎯 Next Steps

1. Share your portfolio URL with recruiters and potential employers
2. Add the URL to your LinkedIn profile
3. Include it in your email signature
4. Use it on business cards or resumes

Your portfolio is now live and ready to showcase your expertise to the world! 🌟 