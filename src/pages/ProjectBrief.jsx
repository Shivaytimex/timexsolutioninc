import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ProjectBrief() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyLogo: null,
    companyTagline: '',
    briefDescription: '',
    address: '',
    phoneNumber: '',
    email: '',
    websiteGoals: [],
    mainGoal: '',
    otherGoal: '',
    targetAudience: '',
    colorScheme: '',
    websiteExamples: '',
    designElements: '',
    aboutUsContent: '',
    servicesOffered: '',
    testimonials: '',
    staffBios: '',
    domainHosting: '',
    maintenanceRequired: '',
    updateHandling: '',
    digitalAssets: '',
    imagesVideos: '',
    permissions: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...prev[name], value]
        : prev[name].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-black to-primary py-12 px-4">
      <motion.div 
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Brief</h1>
          <p className="text-lg text-white/80">Tell us about your project so we can bring your vision to life</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} variants={staggerContainer} className="space-y-8">
          
          {/* Company Information Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/20 pb-2">Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Company Logo *</label>
                <input
                  type="file"
                  name="companyLogo"
                  onChange={handleInputChange}
                  required
                  accept="image/*"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Company Tagline</label>
              <input
                type="text"
                name="companyTagline"
                value={formData.companyTagline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Your company's tagline"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Brief Description of the Company *</label>
              <textarea
                name="briefDescription"
                value={formData.briefDescription}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Describe your company and what you do"
              />
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/20 pb-2">Contact Information *</h2>
            
            <div>
              <label className="block text-white font-medium mb-2">Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Your business address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </motion.div>

          {/* Website Goals Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/20 pb-2">Website Goals</h2>
            
            <div>
              <label className="block text-white font-medium mb-4">What do you want to achieve with your new website?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Improve Customer Service', 'Increase Sales', 'Build Brand Awareness'].map((goal) => (
                  <label key={goal} className="flex items-center space-x-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      name="websiteGoals"
                      value={goal}
                      checked={formData.websiteGoals.includes(goal)}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-400"
                    />
                    <span>{goal}</span>
                  </label>
                ))}
              </div>
              
              <div className="mt-4">
                <label className="block text-white font-medium mb-2">Other:</label>
                <input
                  type="text"
                  name="otherGoal"
                  value={formData.otherGoal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Specify other goals"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Main Goal of the Website</label>
              <input
                type="text"
                name="mainGoal"
                value={formData.mainGoal}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="What's the primary goal?"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Target Audience</label>
              <textarea
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Describe your target audience"
              />
            </div>
          </motion.div>

          {/* Design Preferences Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/20 pb-2">Design Preferences</h2>
            
            <div>
              <label className="block text-white font-medium mb-2">What style and colors do you prefer?</label>
              <textarea
                name="colorScheme"
                value={formData.colorScheme}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Describe your preferred style and color scheme"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Examples of Websites you Like</label>
              <textarea
                name="websiteExamples"
                value={formData.websiteExamples}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Share reference website URLs"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Specific Design Elements</label>
              <textarea
                name="designElements"
                value={formData.designElements}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Any specific design elements you want included"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/20 pb-2">Content</h2>
            
            <div>
              <label className="block text-white font-medium mb-2">About Us Page Content</label>
              <textarea
                name="aboutUsContent"
                value={formData.aboutUsContent}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Content for your About Us page"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Services/Products Offered *</label>
              <textarea
                name="servicesOffered"
                value={formData.servicesOffered}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="List your services or products"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Testimonials or Case Studies</label>
                <textarea
                  name="testimonials"
                  value={formData.testimonials}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Any testimonials or case studies to include"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Staff Bios and Photos</label>
                <textarea
                  name="staffBios"
                  value={formData.staffBios}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Information about staff members to include"
                />
              </div>
            </div>
          </motion.div>

          {/* Technical Requirements Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/20 pb-2">Technical Requirements</h2>
            
            <div>
              <label className="block text-white font-medium mb-4">Do You Have a Domain & Hosting</label>
              <div className="flex flex-wrap gap-4">
                {['Yes', 'No', 'Need Suggestions'].map((option) => (
                  <label key={option} className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="radio"
                      name="domainHosting"
                      value={option}
                      checked={formData.domainHosting === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 focus:ring-cyan-400"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-4">Ongoing Maintenance Required?</label>
              <div className="flex flex-wrap gap-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="radio"
                      name="maintenanceRequired"
                      value={option}
                      checked={formData.maintenanceRequired === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 focus:ring-cyan-400"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Preferred Update & Change Handling</label>
              <textarea
                name="updateHandling"
                value={formData.updateHandling}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="How would you like updates and changes to be handled?"
              />
            </div>
          </motion.div>

          {/* Digital Assets Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/20 pb-2">Digital Assets</h2>
            
            <div>
              <label className="block text-white font-medium mb-2">Existing Digital Assets</label>
              <textarea
                name="digitalAssets"
                value={formData.digitalAssets}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="List any existing digital assets (logos, images, videos, etc.)"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Images & Videos to Include</label>
              <textarea
                name="imagesVideos"
                value={formData.imagesVideos}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Describe images and videos you want to include"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Permissions & Copyrights Info</label>
              <textarea
                name="permissions"
                value={formData.permissions}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Any permissions or copyright information we should know about"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeInUp} className="pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Submit Project Brief
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default ProjectBrief;