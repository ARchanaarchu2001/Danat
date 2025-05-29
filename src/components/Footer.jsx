import React from 'react'
import { Facebook, Instagram } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className=" bg-red-800 text-white py-8">
      <div className="flex  flex-col mx-auto justify-center  items-center text-center max-w-5xl space-y-4">
         {/* Title & Location */}
        <div>
          <h2 className='text-lg font-semibold '> Danat Al Bahar</h2>
          <p className='text-center'>UAE</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61575832414485" 
          className="text-white hover:text-red-400 transition ">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/danatalbahar_bbqfishuae/" 
          className="text-white hover:text-red-400 transition ">
            <Instagram className="w-6 h-6" />
          </a>
           <a href="http://tiktok.com/@danat462" className="text-white hover:text-red-400 transition ">
             <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-white hover:text-red-400 transition" />
           </a>
           {/* <a href="#" className="text-white hover:text-red-400 transition " >
            <FontAwesomeIcon icon={faSnapchatGhost} className="w-6 h-6 text-white hover:text-red-400 transition"  />
          </a>   */}
      </div>  

      {/* Footer Note  */}
      <p className='text-sm mt-4 text-white/70'>Copyright &copy; 2025 by DANAT AL BAHAR BBQ FISH. </p>
      </div>
    </footer>
  )
}

export default Footer