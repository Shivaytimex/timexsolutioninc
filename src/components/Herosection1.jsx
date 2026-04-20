/* eslint-disable no-irregular-whitespace */
import { Link } from 'react-router'
import TypewriterEffect from './TypewriterEffect'
import Magnet from '../utils/Magnet'
import { Stars } from './Stars'
import { motion } from 'framer-motion'
import { AniButton } from '../utils/ButtonAnimation'

// optimized code
function HeroSection1() {
  return (
    <div className="relative bg-gradient-to-b from-black from-10% via-primary via-100% to-black to-100% overflow-hidden py-8 md:py-10 mt-24 lg:mt-28  xl:mt-28 h-screen">
      <section className="bg-gradient-to-b  from-transparent via-PurpleDark/10 to-transparent mx-auto px-4 relative">
        <Stars />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative'>
          {/* First Column: Heading Text */}
          <div className='text-center relative lg:mt-12'>
            <motion.h1
              className='lg:text-5xl text-white text-3xl font-bold leading-tight mb-4 text-center'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='text-transparent bg-clip-text bg-white/90'>
                Connecting <br />
                your brand to the
                <br />
                <span className=''> world</span>
              </div>
              <TypewriterEffect />
            </motion.h1>
            <motion.p
              className='text-lg text-transparent bg-clip-text bg-white mb-1'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Business times with Next-Gen Web Solutions, Powerful Software, Video Shoot Services, and Results-Driven Marketing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to={'/contact'}>
                <AniButton
                  text='Get Started'
                  buttonClass='bg-primary text-white font-semibold px-10 py-5 rounded-full border-2 border-white'
                  textClass='bg-white text-primary text-3xl'
                />
              </Link>
            </motion.div>
          </div>

          {/* Second Column: Image */}
          <div className='w-full h-full relative '>
            <motion.div
              className='h-auto lg:w-[470px] lg:-mt-2 mx-auto object-cover'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Magnet padding={50} disabled={false} magnetStrength={50}>
                <img
                  src='/Web-Banner-1.webp'
                  alt='Web-Banner'
                  className='rounded-lg object-cover'
                />
              </Magnet>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection1
