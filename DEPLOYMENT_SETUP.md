# 🚀 Auto Deployment Setup Guide - Timex Solutions Inc

Is guide ko follow karke aap apne Timex project ko GitHub se VPS pe auto-deploy kar sakte ho.

---

## 📋 Prerequisites

- ✅ GitHub repository (code already pushed)
- ✅ VPS server access (SSH enabled)
- ✅ Domain/subdomain configured (optional)
- ✅ Node.js installed on VPS

---

## 🔑 Step 1: SSH Key Setup

### Local Machine pe (apni system pe):

```bash
# SSH key generate karo
ssh-keygen -t ed25519 -C "timex-deploy-key" -f ~/.ssh/timex_deploy

# Ye 2 files banegi:
# ~/.ssh/timex_deploy (private key - GitHub me jayegi)
# ~/.ssh/timex_deploy.pub (public key - VPS me jayegi)
```

### VPS Server pe:

```bash
# VPS me SSH login karo
ssh your_user@your_vps_ip

# SSH directory banao (agar nahi hai)
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Public key add karo
nano ~/.ssh/authorized_keys
# Paste karo: ~/.ssh/timex_deploy.pub ki content
# Save & Exit: Ctrl+X, Y, Enter

# Permissions set karo
chmod 600 ~/.ssh/authorized_keys
```

### Test karo SSH key:

```bash
# Local machine se
ssh -i ~/.ssh/timex_deploy your_user@your_vps_ip
# Agar login ho jaye without password - SUCCESS! ✅
```

---

## 🔐 Step 2: GitHub Secrets Setup

1. **GitHub repository me jao:**
   - `https://github.com/your-username/your-repo`

2. **Settings → Secrets and variables → Actions → New repository secret**

3. **Ye 3-4 secrets banao:**

### Secret 1: SSH_KEY
```bash
# Local machine pe private key copy karo
cat ~/.ssh/timex_deploy

# Output copy karke GitHub secret me paste karo
# Name: SSH_KEY
# Value: (private key ki puri content, including -----BEGIN ... -----END)
```

### Secret 2: SSH_HOST
```
# Name: SSH_HOST
# Value: your_vps_ip_address (e.g., 192.168.1.100)
```

### Secret 3: SSH_USER
```
# Name: SSH_USER
# Value: ubuntu (ya jo bhi SSH username ho - root, ubuntu, kashif, etc.)
```

### Secret 4: SSH_PORT (optional)
```
# Name: SSH_PORT
# Value: 22 (agar different port use karte ho to wo, warna skip karo)
```

---

## 🖥️ Step 3: VPS Server Setup

### Project directory banao:

```bash
# VPS me login karo
ssh your_user@your_vps_ip

# Project directory banao
sudo mkdir -p /var/www/timex
sudo chown -R $USER:$USER /var/www/timex

# Git repository clone karo (pehli baar)
cd /var/www
git clone https://github.com/your-username/your-repo.git timex

# Project directory me jao
cd /var/www/timex

# Dependencies install karo
npm install

# Build karo
npm run build
```

### Nginx Setup (Static Site ke liye - Recommended):

```bash
# Nginx install karo (agar nahi hai)
sudo apt update
sudo apt install nginx -y

# Nginx config file banao
sudo nano /etc/nginx/sites-available/timex
```

**Nginx config paste karo:**

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Apna domain dalo

    root /var/www/timex/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|mp4)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Enable karo:**

```bash
# Symlink banao
sudo ln -s /etc/nginx/sites-available/timex /etc/nginx/sites-enabled/

# Test karo config
sudo nginx -t

# Reload karo
sudo systemctl reload nginx
```

### Ya PM2 Setup (agar preview server use karna hai):

```bash
# PM2 install karo globally
sudo npm install -g pm2

# Start karo
cd /var/www/timex
pm2 start npm --name "timex" -- run preview

# Auto-start on server reboot
pm2 startup
pm2 save
```

---

## ✅ Step 4: Workflow File Check

File already created hai: `.github/workflows/deploy.yml`

**Important:** Workflow me uncomment karo jo method use kar rahe ho:

- **Agar Nginx use kar rahe ho:**
  ```yaml
  # Uncomment this line in deploy.yml
  sudo systemctl reload nginx
  ```

- **Agar PM2 use kar rahe ho:**
  ```yaml
  # Uncomment this line in deploy.yml
  pm2 restart timex || pm2 start npm --name "timex" -- run preview
  ```

---

## 🎯 Step 5: Test Deployment

### Push to GitHub:

```bash
# Local machine pe (VS Code me)
git add .
git commit -m "✨ Setup auto deployment"
git push origin main
```

### Monitor GitHub Actions:

1. GitHub repository me jao
2. **Actions** tab click karo
3. Latest workflow run ko dekho
4. Green checkmark ✅ = Success!

---

## 🔄 How It Works

Ab se jab bhi aap code push karoge:

```bash
git add .
git commit -m "Your message"
git push origin main
```

**Auto-magically ye hoga:**

1. ✅ GitHub Actions trigger hoga
2. ✅ Code build hoga (npm ci + npm run build)
3. ✅ VPS pe SSH connection banegi
4. ✅ Latest code pull hoga
5. ✅ Dependencies install hongi
6. ✅ Fresh build banegi
7. ✅ Server restart/reload hoga
8. ✅ Live site update ho jayegi! 🎉

---

## 🐛 Troubleshooting

### Agar deployment fail ho:

1. **GitHub Actions logs dekho:**
   - Actions tab → Failed workflow → Click karke details dekho

2. **SSH permission error:**
   ```bash
   # VPS pe check karo
   ls -la ~/.ssh/authorized_keys
   # Should be: -rw------- (600 permissions)
   ```

3. **Build error:**
   ```bash
   # Local pe build test karo
   npm run build
   ```

4. **Port already in use (PM2):**
   ```bash
   pm2 delete timex
   pm2 start npm --name "timex" -- run preview
   ```

5. **Nginx error:**
   ```bash
   sudo nginx -t  # Config check
   sudo systemctl status nginx  # Service status
   ```

---

## 📝 Important Notes

- **Build time:** React/Vite app ko build hone me 2-5 minutes lag sakte hain
- **Secrets security:** Kabhi bhi secrets ko public mat karo
- **Branch protection:** Main branch ko protect karo (Settings → Branches)
- **Environment variables:** Agar .env file use karte ho, wo VPS pe manually set karo

---

## 🎉 Done!

Ab aap VS Code me normal development kar sakte ho aur jab bhi `git push` karoge, automatically VPS pe deploy ho jayega! 🚀

**Questions?** Check GitHub Actions logs ya VPS logs:

```bash
# PM2 logs (agar PM2 use kar rahe ho)
pm2 logs timex

# Nginx logs (agar Nginx use kar rahe ho)
sudo tail -f /var/log/nginx/error.log
```

