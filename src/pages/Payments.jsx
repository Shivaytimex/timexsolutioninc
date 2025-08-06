import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { FaCreditCard, FaStripe, FaLock, FaCheckCircle, FaTimesCircle, FaShieldAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Stripe configuration
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51RtAmSRwnYoRP4jYZ3NZohh4RkwFRdBSt6Sytx9t725orKVfPBVbaAlQutIIJEcDVAeD7vaFuLNDCwZIt0GAlwMk00WQi6FTPi';

// Payment method data (Stripe only)
const paymentMethod = {
  id: 'stripe',
  name: 'Stripe',
  icon: FaStripe,
  description: 'Secure payment with credit/debit card',
  color: 'bg-purple-500',
  textColor: 'text-purple-500'
};

// Service packages data
const servicePackages = [
  {
    id: 'basic-video',
    name: 'Basic Video Package',
    price: 299,
    originalPrice: 399,
    description: 'Perfect for small businesses and startups',
    features: [
      'Professional Video Production',
      'Up to 2-Minute Final Video',
      'Basic Color Grading',
      'Background Music Selection',
      'Simple Motion Graphics',
      'Social Media Optimization',
      '2 Rounds of Revisions',
      'HD Quality Delivery'
    ]
  },
  {
    id: 'professional-video',
    name: 'Professional Video Package',
    price: 599,
    originalPrice: 799,
    description: 'Ideal for growing businesses',
    features: [
      'All Features in Basic Package',
      'Up to 5-Minute Final Video',
      'Advanced Color Grading',
      'Custom Motion Graphics',
      'Professional Audio Mixing',
      'Multiple Camera Angles',
      'Green Screen Effects',
      'Custom Animations',
      '4K Quality Delivery'
    ]
  },
  {
    id: 'premium-video',
    name: 'Premium Video Package',
    price: 999,
    originalPrice: 1299,
    description: 'Enterprise-level solution',
    features: [
      'All Features in Professional Package',
      'Unlimited Video Length',
      'Cinematic Color Grading',
      'Advanced Visual Effects',
      'Custom Sound Design',
      'Multi-location Shooting',
      'Drone Footage',
      '3D Animation',
      'Interactive Elements',
      'Priority Support'
    ]
  }
];

export default function Payments() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setPaymentStatus(null);
  };

  const handleStripePayment = async () => {
    if (!selectedPackage) return;

    setIsProcessing(true);
    
    try {
      // For demo purposes, we'll show a success message
      // In production, you would integrate with your backend
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      setPaymentStatus('success');
      setIsProcessing(false);
      
      Swal.fire({
        title: 'Payment Demo',
        text: `This is a demo payment for ${selectedPackage.name}. In production, this would redirect to Stripe Checkout.`,
        icon: 'success',
        confirmButtonColor: '#10b981'
      });
      
    } catch (error) {
      setIsProcessing(false);
      setPaymentStatus('error');
      
      Swal.fire({
        title: 'Payment Error',
        text: error.message || 'There was an error processing your payment.',
        icon: 'error',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  const renderPaymentButton = () => {
    if (!selectedPackage) return null;

    return (
      <motion.button
        onClick={handleStripePayment}
        disabled={isProcessing}
        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <FaStripe className="mr-2" />
            Demo Payment
          </div>
        )}
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-black to-primary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Secure Payment
          </h1>
          <p className="text-lg text-white/80">
            Choose your package and payment method to get started
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Package Selection */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-semibold text-white mb-6">
              Select Your Package
            </motion.h2>

            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={fadeInUp}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedPackage?.id === pkg.id 
                    ? 'ring-2 ring-cyan-400 bg-white/20' 
                    : 'hover:bg-white/15'
                }`}
                onClick={() => handlePackageSelect(pkg)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {pkg.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">
                      ${pkg.price}
                    </div>
                    <div className="text-white/50 line-through text-sm">
                      ${pkg.originalPrice}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80 text-sm">
                      <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Payment Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-semibold text-white mb-6">
              Secure Payment
            </motion.h2>

            {/* Payment Method Info */}
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-500">
                  <FaStripe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Stripe Payment
                  </h3>
                  <p className="text-white/70 text-sm">
                    Secure payment with credit/debit card
                  </p>
                </div>
              </div>
              
              {/* Security Features */}
              <div className="space-y-3">
                <div className="flex items-center text-white/80 text-sm">
                  <FaShieldAlt className="text-green-400 mr-2" />
                  PCI DSS Compliant
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <FaLock className="text-green-400 mr-2" />
                  SSL Encrypted
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  Instant Payment Processing
                </div>
              </div>
            </motion.div>

            {/* Payment Summary */}
            {selectedPackage && (
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Payment Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-white">
                    <span>Package:</span>
                    <span>{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Amount:</span>
                    <span className="text-2xl font-bold text-cyan-400">
                      ${selectedPackage.price}
                    </span>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between text-white font-semibold">
                      <span>Total:</span>
                      <span className="text-2xl text-cyan-400">
                        ${selectedPackage.price}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Payment Button */}
            {selectedPackage && (
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                {renderPaymentButton()}
                
                {/* Security Notice */}
                <div className="flex items-center justify-center text-white/60 text-sm">
                  <FaLock className="mr-2" />
                  Your payment information is secure and encrypted
                </div>
              </motion.div>
            )}

            {/* Payment Status */}
            {paymentStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  paymentStatus === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30' 
                    : 'bg-red-500/20 border border-red-500/30'
                }`}
              >
                <div className="flex items-center">
                  {paymentStatus === 'success' ? (
                    <FaCheckCircle className="text-green-400 mr-2" />
                  ) : (
                    <FaTimesCircle className="text-red-400 mr-2" />
                  )}
                  <span className="text-white">
                    {paymentStatus === 'success' 
                      ? 'Payment processed successfully!' 
                      : 'Payment failed. Please try again.'
                    }
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 