import React from 'react'
import AboutImage from "../assets/aboutimage.jpg";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function About() {
  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
      
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-10'>
        {/* imge section */}

       <motion.div 
        className='lg:w-1/2 w-full hidden sm:block '
        initial= {{ opacity: 0, x: -50 }}
        animate= {{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <img src={AboutImage} alt="About Us" className=" rounded-lg shadow-xl w-full h-[400px] object-cover "/>  
        </motion.div>

        {/* text section */}
        <motion.div
        className='lg:w-1/2 w-full text-center lg:text-left '
        initial= {{ opacity: 0, x: 50 }}
        animate= {{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}> 
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-red-700">DANAT ALBAHAR BBQ FISH </h2>
        <p className='text-gray-700 text-base sm:text-lg leading-relaxed text-justify '> At Danat Al Bahar BBQ Fish, we bring the rich flavors of the sea to your plate with traditional Qatari grilling. 
          Located in the scenic Souq Al Wakrah, we specialize in freshly caught seafood, marinated with authentic spices and barbecued to perfection.
          From juicy grilled fish to tender prawns, every dish is a celebration of taste and tradition. Whether you're enjoying a relaxed indoor meal or dining under the open sky, 
          our welcoming atmosphere and passionate service make every visit memorable.Discover the true taste of the coast — fresh, flavorful, and uniquely Qatari.</p>
        </motion.div>
      </div>
      
      </section>
  )
}

export default About