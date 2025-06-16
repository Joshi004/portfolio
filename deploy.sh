#!/bin/bash

# Portfolio Deployment Script
# This script builds and deploys the portfolio to GitHub Pages

echo "🚀 Starting Portfolio Deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run this script from the portfolio root directory."
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes. Please commit them first."
    echo "Uncommitted changes:"
    git status --short
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled."
        exit 1
    fi
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo ""
    echo "🌟 Your portfolio is now live at:"
    echo "   https://Joshi004.github.io/portfolio"
    echo ""
    echo "📝 Note: It may take a few minutes for changes to appear on the live site."
    echo "💡 You can share this URL with recruiters and potential employers!"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi 