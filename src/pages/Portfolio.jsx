import React, { useState } from 'react';
import PortfolioShowcase from '../components/PortfolioShowcase';

export default function Portfolio() {
  // Device Slider State
  const [deviceSlide, setDeviceSlide] = useState(0)
  const [isDeviceAnimating, setIsDeviceAnimating] = useState(false)

  // Before/After Slider State
  const [beforeAfterSlide, setBeforeAfterSlide] = useState(0)
  const [isBeforeAfterAnimating, setIsBeforeAfterAnimating] = useState(false)

  // Device Slider Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeviceAnimating) {
        nextDeviceSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [deviceSlide, isDeviceAnimating])

  // Before/After Slider Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBeforeAfterAnimating) {
        nextBeforeAfterSlide()
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [beforeAfterSlide, isBeforeAfterAnimating])

  // Device Slider Functions
  const nextDeviceSlide = () => {
    if (isDeviceAnimating) return
    setIsDeviceAnimating(true)
    setDeviceSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsDeviceAnimating(false), 500)
  }

  const prevDeviceSlide = () => {
    if (isDeviceAnimating) return
    setIsDeviceAnimating(true)
    setDeviceSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsDeviceAnimating(false), 500)
  }

  const goToDeviceSlide = (index) => {
    if (isDeviceAnimating || index === deviceSlide) return
    setIsDeviceAnimating(true)
    setDeviceSlide(index)
    setTimeout(() => setIsDeviceAnimating(false), 500)
  }

  // Before/After Slider Functions
  const nextBeforeAfterSlide = () => {
    if (isBeforeAfterAnimating) return
    setIsBeforeAfterAnimating(true)
    setBeforeAfterSlide((prev) => (prev + 1) % beforeAfterExamples.length)
    setTimeout(() => setIsBeforeAfterAnimating(false), 600)
  }

  const prevBeforeAfterSlide = () => {
    if (isBeforeAfterAnimating) return
    setIsBeforeAfterAnimating(true)
    setBeforeAfterSlide((prev) => (prev - 1 + beforeAfterExamples.length) % beforeAfterExamples.length)
    setTimeout(() => setIsBeforeAfterAnimating(false), 600)
  }

  const goToBeforeAfterSlide = (index) => {
    if (isBeforeAfterAnimating || index === beforeAfterSlide) return
    setIsBeforeAfterAnimating(true)
    setBeforeAfterSlide(index)
    setTimeout(() => setIsBeforeAfterAnimating(false), 600)
  }

  // Get current example for before/after slider
  const currentExample = beforeAfterExamples[beforeAfterSlide]
  return (
    <>
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 px-4 md:px-16 py-12">
      {/* Left Side */}
      <div className="flex-1 max-w-xl text-white space-y-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm mb-4 opacity-80">
          <span className="flex items-center"><span className="material-icons text-base mr-1">home</span> Home</span>
          <span className="mx-2">&gt;</span>
          <span>Web Design</span>
          <span className="mx-2">&gt;</span>
          <span className="font-bold">Custom Web Design</span>
        </nav>
        {/* Headings */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Custom Website<br/>Design Company</h1>
        <p className="text-lg md:text-xl opacity-90">Partner with a top-rated custom website design company to create a fully optimized website, ready to drive engagement and conversions.</p>
        {/* Bullet Points */}
        <ul className="space-y-2">
          <li className="flex items-center"><span className="text-cyan-300 mr-2">&#10003;</span> Create A Unique Digital Experience</li>
          <li className="flex items-center"><span className="text-cyan-300 mr-2">&#10003;</span> Drive Higher Conversions</li>
          <li className="flex items-center"><span className="text-cyan-300 mr-2">&#10003;</span> Attract Qualified Traffic</li>
        </ul>
        {/* Button */}
        <button className="mt-4 px-6 py-3 bg-white text-blue-700 font-bold rounded shadow hover:bg-blue-100 transition">REQUEST A QUOTE <span className="ml-2">&rarr;</span></button>
        {/* Awards */}
        <div className="flex items-center space-x-8 mt-8">
          <div className="flex items-center space-x-2">
            <span className="text-cyan-300 text-2xl">&#11088;</span>
            <span className="font-semibold">5 Star DesignRush Reviews</span>
          </div>
          <div className="flex items-center space-x-2 border-l border-white pl-4">
            <span className="text-white text-xl">&#127942;</span>
            <span className="font-semibold">Web Design Excellence Award</span>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center justify-center mt-12 md:mt-0 relative w-full md:w-auto">
        {/* Device Mockups */}
        <div className="relative w-[320px] md:w-[400px] h-[340px] md:h-[420px] mb-8">
          <img src="/public/web-development.webp" alt="Website Mockup" className="absolute left-0 top-0 w-64 md:w-80 rounded-lg shadow-2xl border-4 border-white" style={{zIndex:2}} />
          <img src="/public/app-development.webp" alt="Tablet Mockup" className="absolute right-0 top-8 w-40 md:w-48 rounded-lg shadow-xl border-4 border-white" style={{zIndex:1}} />
          <img src="/public/appdev.webp" alt="Mobile Mockup" className="absolute left-1/2 bottom-0 w-24 md:w-28 rounded-xl shadow-lg border-4 border-white transform -translate-x-1/2" style={{zIndex:3}} />
        </div>
        {/* Carousel Dots & Arrows */}
        <div className="flex items-center space-x-4 mb-8">
          <button className="text-cyan-300 text-2xl">&#8592;</button>
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-cyan-300 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-white opacity-50 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-white opacity-50 inline-block"></span>
          </div>

          {/* Video Preview Card */}
          <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-6 py-4 w-full max-w-xs hover:bg-white/95 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
              <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
            </div>
            <div>
              <div className="text-xs text-gray-600 uppercase font-medium tracking-wide">See our work</div>
              <div className="text-lg font-bold text-blue-900 leading-tight">IN ACTION</div>
              <div className="text-xs text-gray-500 font-medium">1 MINUTE</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-700 uppercase">See our work</div>
            <div className="text-lg font-bold text-blue-900 leading-tight">IN ACTION</div>
            <div className="text-xs text-gray-500">1 MINUTE</div>
          </div>
        </div>
      </div>
    </section>
    {/* Portfolio Stats & Categories Section */}
    <section className="w-full bg-gradient-to-b from-blue-700 to-blue-900 py-16 px-4 flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-white text-sm font-bold tracking-widest mb-2">OUR CUSTOM WEB DESIGN PORTFOLIO</div>
        <div className="text-4xl md:text-5xl font-extrabold text-white mb-4">700+ Completed Projects</div>
        <div className="text-lg md:text-xl text-white/90 mb-2">Custom B2C, B2B and eCommerce solutions</div>
        <div className="text-2xl md:text-2xl font-bold text-white mt-2 mb-10">optimized for traffic, engagement and conversion.</div>
      </div>
      {/* Category Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
        {/* Featured Card */}
        <div className="bg-white text-blue-900 rounded-lg shadow-lg px-10 py-8 flex flex-col items-center min-w-[180px] mb-4 md:mb-0">
          {/* Star Icon */}
          <svg className="mb-2" width="32" height="32" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 9"/></svg>
          <div className="font-bold text-lg mb-1">FEATURED</div>
          {/* Down Arrow */}
          <svg width="24" height="24" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        {/* B2B Card */}
        <div className="flex flex-col items-center text-white min-w-[120px]">
          {/* Handshake Icon */}
          <svg className="mb-2" width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12l1.5-1.5a2 2 0 012.8 0l1.2 1.2a2 2 0 002.8 0l1.2-1.2a2 2 0 012.8 0L20 12"/><path d="M2 16l4-4m12 4l4-4"/></svg>
          <div className="font-bold text-lg">B2B</div>
        </div>
        {/* B2C Card */}
        <div className="flex flex-col items-center text-white min-w-[120px]">
          {/* Credit Card Icon */}
          <svg className="mb-2" width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
          <div className="font-bold text-lg">B2C</div>
        </div>
        {/* ECOMMERCE Card */}
        <div className="flex flex-col items-center text-white min-w-[120px]">
          {/* Cart Icon */}
          <svg className="mb-2" width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h2l3.6 7.59a1 1 0 00.83.41H19a1 1 0 00.96-.74l3.24-9.26A1 1 0 0022.24 0H6.21"/></svg>
          <div className="font-bold text-lg">ECOMMERCE</div>
        </div>
      </div>
    </section>

    {/* Portfolio Showcase Section */}
    <section className="w-full bg-[#061c38] px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <PortfolioShowcase
          image={
            <img src="/public/web-development.webp" alt="Hi-Tech eCommerce Store" className="rounded-lg shadow-2xl w-full max-w-md" />
          }
          title="Hi-Tech eCommerce Store"
          description={`By creating a distinctive design tailored for a high-end electronics eCommerce store, we helped position Bang & Olufsen as a tech market innovator.\n\nWith a unique design and a streamlined sales funnel, our digital solutions targeted both UX and UI to grow brand visibility and customer engagement.`}
          buttons={[
            { label: 'LAUNCH WEBSITE', href: '#' },
            { label: 'REQUEST A QUOTE', href: '#' }
          ]}
        />
        <PortfolioShowcase
          image={
            <img src="/public/app-development.webp" alt="Reimagined eSports Platform" className="rounded-lg shadow-2xl w-full max-w-md" />
          }
          title="Reimagined eSports Platform"
          description={`Working with G2 eSports’ community-based identity, we developed a custom eCommerce platform to reinforce the organization’s legendary position in the eSports industry.\n\nOur design and development team introduced a streamlined shopping experience and strategically planned community design to grow conversions and support brand authority.`}
          buttons={[
            { label: 'LAUNCH WEBSITE', href: '#' },
            { label: 'REQUEST A QUOTE', href: '#' }
          ]}
          reverse
        />
        <PortfolioShowcase
          image={
            <img src="/public/web-development.webp" alt="Hi-Tech eCommerce Store" className="rounded-lg shadow-2xl w-full max-w-md" />
          }
          title="Hi-Tech eCommerce Store"
          description={`By creating a distinctive design tailored for a high-end electronics eCommerce store, we helped position Bang & Olufsen as a tech market innovator.\n\nWith a unique design and a streamlined sales funnel, our digital solutions targeted both UX and UI to grow brand visibility and customer engagement.`}
          buttons={[
            { label: 'LAUNCH WEBSITE', href: '#' },
            { label: 'REQUEST A QUOTE', href: '#' }
          ]}
        />
        <PortfolioShowcase
          image={
            <img src="/public/app-development.webp" alt="Reimagined eSports Platform" className="rounded-lg shadow-2xl w-full max-w-md" />
          }
          title="Reimagined eSports Platform"
          description={`Working with G2 eSports’ community-based identity, we developed a custom eCommerce platform to reinforce the organization’s legendary position in the eSports industry.\n\nOur design and development team introduced a streamlined shopping experience and strategically planned community design to grow conversions and support brand authority.`}
          buttons={[
            { label: 'LAUNCH WEBSITE', href: '#' },
            { label: 'REQUEST A QUOTE', href: '#' }
          ]}
          reverse
        />
      </div>
    </section>

    {/* Before & After Web Design Agency Examples Section */}
    <section className="w-full bg-gradient-to-b from-[#1a174d] to-[#060c1c] py-16 px-4 flex flex-col items-center text-center relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-white text-sm font-bold tracking-widest mb-2 uppercase opacity-80">BEFORE & AFTER WEB DESIGN AGENCY EXAMPLES</div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">A Trusted Custom Website Design Company</h2>
        <div className="relative flex items-end justify-center min-h-[350px] md:min-h-[420px] w-full">
          {/* Left Side Image */}
          <div className="hidden md:block absolute left-0 bottom-0 z-10 transform -rotate-6 scale-90 opacity-60">
            <img src="/public/webdev.webp" alt="Before Example" className="rounded-lg shadow-2xl w-64" />
          </div>
          {/* Center Before/After Images */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="flex items-center mb-2">
              <span className="text-purple-400 font-bold text-lg mr-4">BEFORE</span>
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none"><path d="M10 30 Q30 10 50 30" stroke="#38bdf8" strokeWidth="4" fill="none"/></svg>
              <span className="text-cyan-400 font-bold text-lg ml-4">AFTER</span>
            </div>

            {/* Right Side Image */}
            <div className="hidden md:block absolute right-0 bottom-0 z-10">
              <div
                className={`transform rotate-6 scale-90 opacity-60 transition-all duration-600 ${isBeforeAfterAnimating ? "scale-75 opacity-30" : "scale-90 opacity-60"
                  }`}
              >
                <img
                  src={currentExample.rightSide || "/placeholder.svg"}
                  alt="Side Example"
                  className="rounded-lg shadow-2xl w-64 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          {/* Right Side Image */}
          <div className="hidden md:block absolute right-0 bottom-0 z-10 transform rotate-6 scale-90 opacity-60">
            <img src="/public/web-development.webp" alt="After Example" className="rounded-lg shadow-2xl w-64" />
          </div>
          {/* Left Nav Arrow */}
          <button className="absolute left-2 top-1/2 -translate-y-1/2 text-cyan-400 text-4xl z-30 hidden md:block" aria-label="Previous">
            &#8592;
          </button>
          {/* Right Nav Arrow */}
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 text-4xl z-30 hidden md:block" aria-label="Next">
            &#8594;
          </button>
        </div>
        {/* Request a Quote Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-lg rounded shadow-lg border-2 border-cyan-400 hover:from-cyan-300 hover:to-blue-500 transition">
            REQUEST A QUOTE &rarr;
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
