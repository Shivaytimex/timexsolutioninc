# ⚡ Quick Deployment Guide - Timex Solutions

## 🚀 1-Minute Setup (Summary)

### Local Machine:
```bash
# 1. Generate SSH key
ssh-keygen -t ed25519 -C "timex-deploy" -f ~/.ssh/timex_deploy

# 2. Show keys
cat ~/.ssh/timex_deploy.pub    # Public key → VPS
cat ~/.ssh/timex_deploy         # Private key → GitHub
```

### GitHub Secrets (Settings → Secrets → Actions):
```
SSH_KEY   = (private key content)
SSH_HOST  = your_vps_ip
SSH_USER  = ubuntu (ya aapka SSH username)
SSH_PORT  = 22 (optional)
```

### VPS Server:
```bash
# 1. Public key add karo
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys  # Public key paste karo
chmod 600 ~/.ssh/authorized_keys

# 2. Project setup
sudo mkdir -p /var/www/timexsolutioninc
sudo chown -R $USER:$USER /var/www/timexsolutioninc
cd /var/www
git clone YOUR_REPO_URL timex
cd timex
npm install
npm run build

# 3a. Nginx setup (Static site - Recommended)
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/timex
# Config paste karo (DEPLOYMENT_SETUP.md se)
sudo ln -s /etc/nginx/sites-available/timex /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 3b. Or PM2 setup (Preview server)
sudo npm install -g pm2
pm2 start npm --name "timexsolutioninc" -- run preview
pm2 startup
pm2 save
```

### Workflow File:
```bash
# File already created: .github/workflows/deploy.yml
# Uncomment appropriate lines:
# - For Nginx: sudo systemctl reload nginx
# - For PM2: pm2 restart timexsolutioninc
```

---

## 📝 Daily Usage

```bash
# VS Code me normal kaam karo
git add .
git commit -m "Your changes"
git push origin main

# ✨ Automatically deploy ho jayega!
```

---

## 🔍 Check Deployment

### GitHub:
- Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO/actions`
- Latest workflow run dekho
- Green ✅ = Success

### VPS:
```bash
# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# PM2 logs (if using PM2)
pm2 logs timexsolutioninc
pm2 status
```

---

## 🐛 Common Issues

### "Permission denied" error:
```bash
# VPS pe check karo
ls -la ~/.ssh/authorized_keys
# Should be: -rw------- (600)
chmod 600 ~/.ssh/authorized_keys
```

### "Connection refused":
```bash
# VPS pe SSH service check karo
sudo systemctl status ssh
sudo systemctl restart ssh
```

### "Build failed":
```bash
# Local pe test karo
npm ci
npm run build
```

### PM2 not working:
```bash
pm2 delete timex
pm2 start npm --name "timexsolutioninc" -- run preview
pm2 save
```

### Nginx not serving:
```bash
sudo nginx -t  # Config test
sudo systemctl status nginx
sudo systemctl restart nginx
```

---

## 📞 Need Help?

1. **Check GitHub Actions logs**: Detailed error messages
2. **VPS logs**: `sudo tail -50 /var/log/nginx/error.log`
3. **Test SSH**: `ssh -i ~/.ssh/timex_deploy your_user@your_ip`
4. **Manual deployment**: SSH to VPS and run commands manually

---

## ✅ Verify Setup

```bash
# 1. SSH key exists?
ls -la ~/.ssh/timex_deploy*

# 2. GitHub secrets set?
# Check: GitHub → Settings → Secrets → Actions

# 3. VPS accessible?
ssh -i ~/.ssh/timex_deploy your_user@your_vps_ip

# 4. Project on VPS?
ssh your_user@your_vps_ip "ls -la /var/www/timexsolutioninc"

# 5. Workflow file exists?
ls -la .github/workflows/deploy.yml
```

---

## 🎯 What Happens on Push?

```
1. 📝 Code push hota hai GitHub pe
2. ⚡ GitHub Actions trigger hota hai
3. 🏗️ Build banta hai (npm ci + npm run build)
4. 🔑 SSH connection VPS se banti hai
5. 📥 Latest code pull hota hai VPS pe
6. 📦 Dependencies install hoti hain
7. 🏗️ Fresh build banta hai
8. ♻️ Server reload hota hai
9. ✅ Site live ho jati hai!
```

**Total Time:** ~2-5 minutes

---

## 📚 Full Documentation

For detailed step-by-step guide: Read `DEPLOYMENT_SETUP.md`

---

**🎉 Happy Deploying!** 🚀

