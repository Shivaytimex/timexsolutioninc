# 🏗️ Timex Solutions Frontend Project Structure

## 📁 **Frontend Project Organization**

```
timexsolutionincc/              # Frontend (React + Vite)
├── src/
│   ├── components/             # Reusable components
│   │   ├── ContactUs-Components/
│   │   ├── header/
│   │   ├── services/
│   │   ├── slider/
│   │   ├── splashScreen/
│   │   ├── ui/
│   │   └── ...
│   ├── pages/                  # Page components
│   │   ├── PaymentsSquare.jsx  # Square payment component
│   │   ├── Payments.jsx        # Stripe payment component
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── ...
│   ├── services/               # Service-specific pages
│   │   ├── app-development.jsx
│   │   ├── web-development.jsx
│   │   ├── digital-marketing.jsx
│   │   └── ...
│   ├── utils/                  # Utility functions
│   └── assets/                 # Static assets
├── public/                     # Public assets
├── package.json                # Frontend dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── .env                        # Environment variables
├── env.example                 # Environment template
└── README.md                   # Frontend documentation
```

## 🔗 **Backend Integration**

This frontend connects to a separate backend service:
- **Backend Location**: `../timex-payments-backend/`
- **API URL**: Configured via `VITE_API_URL` environment variable
- **Default**: `http://localhost:3001`

## 🚀 **Quick Start Guide**

### **1. Frontend Setup:**
```bash
cd /home/kashif/nitin/timex/timexsolutionincc

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit with your API configuration
nano .env

# Start frontend development server
npm run dev
```

### **2. Access the Application:**
- **Frontend:** `http://localhost:5173`
- **Home Page:** `http://localhost:5173/`
- **Services:** `http://localhost:5173/services`
- **Payment Pages:** 
  - `http://localhost:5173/payments` (Stripe)
  - `http://localhost:5173/payments-square` (Square)
- **Contact:** `http://localhost:5173/contact`

### **3. Backend Connection:**
- Ensure the backend service is running at the configured `VITE_API_URL`
- Default: `http://localhost:3001`
- The backend handles payment processing for both Stripe and Square integrations

## 🔧 **Environment Configuration**

### **Frontend (.env):**
```env
# Backend API Configuration
VITE_API_URL=http://localhost:3001

# Optional: Third-party services
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 📦 **Key Features**

### **Components Architecture:**
- **Modular Design**: Reusable components
- **Responsive Layout**: Mobile-first approach
- **Animation**: Framer Motion integration
- **Icons**: Lucide React and React Icons

### **Pages & Navigation:**
- **Home**: Hero section, services overview, testimonials
- **Services**: Detailed service pages for each offering
- **Portfolio**: Project showcase with filtering
- **About**: Team information and company details
- **Contact**: Contact forms and business information
- **Payments**: Multiple payment gateway integration

### **Payment Integration:**
- **Stripe**: Full payment processing via Payments.jsx
- **Square**: Square Web Payments SDK via PaymentsSquare.jsx
- **Backend Communication**: RESTful API calls

### **Styling & UI:**
- **Tailwind CSS**: Utility-first styling
- **Custom Components**: Reusable UI elements
- **Responsive Design**: Mobile, tablet, desktop optimized
- **Dark/Light Themes**: CSS variables for theming

## 🛠 **Development Workflow**

### **Available Scripts:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### **Project Structure Guidelines:**
- **Components**: Place reusable components in `/src/components/`
- **Pages**: Full page components in `/src/pages/`
- **Services**: Service-specific pages in `/src/services/`
- **Utils**: Helper functions in `/src/utils/`
- **Assets**: Static files in `/src/assets/` and `/public/`

### **Styling Guidelines:**
- Use Tailwind CSS utility classes
- Custom CSS in component-specific files when needed
- CSS variables for theme colors in `index.css`
- Responsive design using Tailwind breakpoints

## 🚀 **Deployment**

### **Production Build:**
```bash
npm run build
```

### **Deployment Platforms:**
- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting for open source
- **AWS S3 + CloudFront**: Scalable hosting

### **Production Environment:**
```env
VITE_API_URL=https://your-backend-api-domain.com
```

## 📞 **Support & Documentation**

- **Frontend Documentation**: This file
- **Backend Documentation**: `../timex-payments-backend/README.md`
- **Payment Setup**: `SQUARE_SETUP.md`

For technical support, contact the Timex Solutions development team.