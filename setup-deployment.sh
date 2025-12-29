#!/bin/bash

# 🚀 Timex Solutions - Deployment Setup Script
# This script helps automate SSH key generation and setup

set -e  # Exit on error

echo "🚀 Timex Solutions - Auto Deployment Setup"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Step 1: Generate SSH Key
echo "📝 Step 1: Generate SSH Key"
echo "----------------------------"

KEY_PATH="$HOME/.ssh/timex_deploy"

if [ -f "$KEY_PATH" ]; then
    print_info "SSH key already exists at $KEY_PATH"
    read -p "Do you want to generate a new key? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Using existing key..."
    else
        rm -f "$KEY_PATH" "$KEY_PATH.pub"
        ssh-keygen -t ed25519 -C "timex-deploy-key" -f "$KEY_PATH" -N ""
        print_success "New SSH key generated!"
    fi
else
    ssh-keygen -t ed25519 -C "timex-deploy-key" -f "$KEY_PATH" -N ""
    print_success "SSH key generated at $KEY_PATH"
fi

echo ""

# Step 2: Display Public Key
echo "📋 Step 2: Public Key (VPS ke liye)"
echo "-----------------------------------"
print_info "Is key ko VPS ke ~/.ssh/authorized_keys me add karo:"
echo ""
cat "$KEY_PATH.pub"
echo ""
print_info "Copy command: cat $KEY_PATH.pub | pbcopy (Mac) ya xclip (Linux)"
echo ""

# Step 3: Display Private Key for GitHub
echo "🔐 Step 3: Private Key (GitHub Secret ke liye)"
echo "----------------------------------------------"
print_info "Is private key ko GitHub Secrets me 'SSH_KEY' naam se add karo:"
echo ""
echo "--- PRIVATE KEY START ---"
cat "$KEY_PATH"
echo "--- PRIVATE KEY END ---"
echo ""

# Step 4: Instructions
echo "📝 Step 4: Next Steps"
echo "--------------------"
echo ""
print_info "VPS pe setup:"
echo "  1. ssh your_user@your_vps_ip"
echo "  2. nano ~/.ssh/authorized_keys"
echo "  3. Public key paste karo (upar wali)"
echo "  4. Save & exit"
echo "  5. chmod 600 ~/.ssh/authorized_keys"
echo ""

print_info "GitHub Secrets setup:"
echo "  1. GitHub repo → Settings → Secrets → New secret"
echo "  2. Name: SSH_KEY"
echo "  3. Value: Private key (upar wali) copy-paste karo"
echo "  4. Add 3 more secrets:"
echo "     - SSH_HOST (VPS IP address)"
echo "     - SSH_USER (SSH username like ubuntu/root)"
echo "     - SSH_PORT (optional, default: 22)"
echo ""

print_info "VPS Server Setup:"
echo "  sudo mkdir -p /var/www/timex"
echo "  sudo chown -R \$USER:\$USER /var/www/timex"
echo "  cd /var/www && git clone <your-repo-url> timex"
echo "  cd timex && npm install && npm run build"
echo ""

print_success "Setup script complete!"
print_info "Read DEPLOYMENT_SETUP.md for detailed instructions"
echo ""

# Test SSH Connection (optional)
read -p "🔍 Do you want to test SSH connection? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter VPS IP: " VPS_IP
    read -p "Enter SSH user (e.g., ubuntu): " SSH_USER
    echo ""
    print_info "Testing SSH connection..."
    if ssh -i "$KEY_PATH" -o ConnectTimeout=10 "$SSH_USER@$VPS_IP" "echo 'Connection successful!'"; then
        print_success "SSH connection successful! ✅"
    else
        print_error "SSH connection failed. Please check:"
        echo "  - VPS IP is correct"
        echo "  - SSH user is correct"
        echo "  - Public key added to VPS ~/.ssh/authorized_keys"
        echo "  - VPS firewall allows SSH (port 22)"
    fi
fi

echo ""
print_success "🎉 All done! Now push to GitHub to trigger auto-deployment!"

