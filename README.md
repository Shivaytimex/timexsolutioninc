# 🚀 Timex Solutions - Frontend Application

This is the frontend React application for Timex Solutions, built with Vite, React, and Tailwind CSS.

## 📁 Project Structure

```
timexsolutionincc/
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components (Home, About, Services, etc.)
│   ├── services/         # Service-specific pages
│   ├── utils/            # Utility functions and helpers
│   └── assets/           # Static assets (images, icons)
├── public/               # Public assets and images
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (create from env.example)
├── env.example           # Environment variables template
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🛠 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
```bash
# Copy environment template
cp env.example .env

# Edit .env file with your configuration
nano .env
```

#### Required Environment Variables:
- `VITE_API_URL`: Backend API URL (default: http://localhost:3001)

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗 Build for Production
```bash
npm run build
```

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project and upload the `dist/` folder to your hosting provider.

### Environment Variables for Production
Update your `.env` file or hosting provider environment variables:
```bash
VITE_API_URL=https://your-backend-api-domain.com
```

## 📦 Key Dependencies

### Frontend Framework
- **React 18**: Component-based UI library
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

### Payments
- **Stripe**: Payment processing (Payments.jsx)
- **Square**: Payment processing (PaymentsSquare.jsx)

### Forms & Communication
- **EmailJS**: Contact form submissions
- **SweetAlert2**: Beautiful alerts and modals

## 🎨 Features

- **Responsive Design**: Mobile-first approach
- **Modern UI/UX**: Clean and professional design
- **Payment Integration**: Multiple payment gateways
- **Contact Forms**: EmailJS integration
- **Portfolio Showcase**: Project displays
- **Service Pages**: Detailed service information
- **Team Section**: Team member profiles
- **Client Reviews**: Testimonial system

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Code Structure
- **Components**: Reusable UI components in `/src/components/`
- **Pages**: Full page components in `/src/pages/`
- **Services**: Service-specific pages in `/src/services/`
- **Utils**: Helper functions and utilities in `/src/utils/`

## 🌐 Backend Integration

This frontend communicates with a separate backend API for payment processing. Make sure to:

1. Start the backend server (from `../timex-payments-backend/`)
2. Update `VITE_API_URL` in your `.env` file
3. Ensure CORS is properly configured in the backend

## 📞 Support

For support, contact the Timex Solutions team or check the project documentation.

## 📄 License

This project is proprietary to Timex Solutions Inc.