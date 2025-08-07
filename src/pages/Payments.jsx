import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { FaCreditCard, FaStripe, FaLock, FaCheckCircle, FaTimesCircle, FaShieldAlt, FaDollarSign } from 'react-icons/fa';
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

// Timex branding colors and styles
const TIMEX_BRAND = {
  primary: 'var(--primary)', // Using CSS variable
  secondary: 'var(--primary-dark)', // Using CSS variable
  accent: 'var(--primary-light)', // Using CSS variable
  dark: 'var(--primary-dark)', // Using CSS variable
  light: 'var(--primary-light)', // Using CSS variable
};

export default function Payments() {
  const [amount, setAmount] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleStripePayment = async () => {
    if (!amount || !customerName || !customerEmail) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all required fields.',
        icon: 'warning',
        confirmButtonColor: TIMEX_BRAND.primary
      });
      return;
    }

    if (parseFloat(amount) <= 0) {
      Swal.fire({
        title: 'Invalid Amount',
        text: 'Please enter a valid amount greater than 0.',
        icon: 'warning',
        confirmButtonColor: TIMEX_BRAND.primary
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // For demo purposes, we'll show a success message
      // In production, you would integrate with your backend
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      setPaymentStatus('success');
      setIsProcessing(false);
      
      Swal.fire({
        title: 'Payment Demo',
        text: `This is a demo payment for $${amount} by ${customerName}. In production, this would redirect to Stripe Checkout.`,
        icon: 'success',
        confirmButtonColor: TIMEX_BRAND.primary
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
    if (!amount || !customerName || !customerEmail) return null;

    return (
      <motion.button
        onClick={handleStripePayment}
        disabled={isProcessing}
        className="w-full bg-gradient-to-r from-primary to-primary text-white font-semibold py-4 px-8 rounded-lg hover:from-primary-dark hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
            Pay ${amount}
          </div>
        )}
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-black to-primary py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with Timex Branding */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text">
                TIMEX
              </span>
              <span className="text-white"> Payments</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Secure payment gateway powered by Timex Solutions. Enter your details and amount to proceed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Payment Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-semibold text-white mb-6">
              Payment Details
            </motion.h2>

            {/* Customer Information Form */}
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Customer Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Amount (USD) *
                  </label>
                  <div className="relative">
                    <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Payment Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-semibold text-white mb-6">
              Payment Information
            </motion.h2>

            {/* Payment Method Info */}
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-primary">
                  <FaStripe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Stripe Payment Gateway
                  </h3>
                  <p className="text-white/70 text-sm">
                    Powered by Timex Solutions
                  </p>
                </div>
              </div>
              
              {/* Security Features */}
              <div className="space-y-3">
                <div className="flex items-center text-white/80 text-sm">
                  <FaShieldAlt className="text-primary mr-2" />
                  PCI DSS Compliant
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <FaLock className="text-primary mr-2" />
                  SSL Encrypted
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <FaCheckCircle className="text-primary mr-2" />
                  Instant Payment Processing
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <FaCheckCircle className="text-primary mr-2" />
                  Timex Branded Experience
                </div>
              </div>
            </motion.div>

            {/* Payment Summary */}
            {amount && customerName && customerEmail && (
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Payment Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-white">
                    <span>Customer:</span>
                    <span>{customerName}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Email:</span>
                    <span className="text-sm">{customerEmail}</span>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between text-white font-semibold">
                      <span>Amount:</span>
                      <span className="text-2xl font-bold text-primary">
                        ${amount}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Payment Button */}
            {amount && customerName && customerEmail && (
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                {renderPaymentButton()}
                
                {/* Security Notice */}
                <div className="flex items-center justify-center text-white/60 text-sm">
                  <FaLock className="mr-2" />
                  Powered by Timex Solutions - Your payment is secure and encrypted
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
                    ? 'bg-primary/20 border border-primary/30' 
                    : 'bg-red-500/20 border border-red-500/30'
                }`}
              >
                <div className="flex items-center">
                  {paymentStatus === 'success' ? (
                    <FaCheckCircle className="text-primary mr-2" />
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