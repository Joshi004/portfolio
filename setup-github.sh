#!/bin/bash

# GitHub Repository Setup Script for Portfolio

echo "🚀 Setting up GitHub Repository for Portfolio..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already initialized."
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Check if there are files to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    # Commit the files
    echo "💾 Committing files..."
    git commit -m "Initial portfolio setup with deployment configuration

- Added professional portfolio with clean design
- Configured GitHub Pages deployment
- Added automated deployment scripts
- Included comprehensive documentation"
fi

# Check if remote origin exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote origin already configured."
    echo "🌐 Remote URL: $(git remote get-url origin)"
else
    echo ""
    echo "🔗 Next Steps:"
    echo "1. Create a new repository on GitHub named 'portfolio'"
    echo "2. Make sure the repository is PUBLIC (required for free GitHub Pages)"
    echo "3. Run the following commands:"
    echo ""
    echo "   git remote add origin https://github.com/Joshi004/portfolio.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
fi

echo ""
echo "📋 Setup Checklist:"
echo "- [✅] Git repository initialized"
echo "- [✅] Files committed"
echo "- [⏳] Create GitHub repository (manual step)"
echo "- [⏳] Push to GitHub (manual step)"
echo "- [⏳] Enable GitHub Pages (manual step)"
echo ""
echo "📚 For detailed instructions, see: DEPLOYMENT.md"
echo ""
echo "🚀 Quick deployment after GitHub setup:"
echo "   ./deploy.sh"
echo ""
echo "🌟 Your portfolio will be live at:"
echo "   https://Joshi004.github.io/portfolio" 