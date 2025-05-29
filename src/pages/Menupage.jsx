import React, { useState } from 'react'
import { X } from 'lucide-react';




const Menus = [
    "/images/Menu1.png",
    "/images/Menu2.png",
    "/images/Menu3.png",
    "/images/Menu4.png",
    "/images/Menu5.png",
    "/images/Menu6.png",
    "/images/Menu7.png",
    "/images/Menu8.png",
    "/images/Menu9.png",
    "/images/Menu10.png",
    "/images/Menu11.png",
    "/images/Menu12.png",   
    "/images/Menu13.png",
    "/images/Menu14.png",
    "/images/Menu15.png",
    "/images/Menu16.png",
    "/images/Menu17.png",
    "/images/Menu18.png",
    "/images/Menu19.png",
    "/images/Menu20.png",        
];

function Menupage() {

    const [selectedImage,setSelectedImage] = useState(null);
  return (
    <div className="min-h-screen bg-black p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Menus.map((src, index) => (
                <div 
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:scale-105 transition"
                onClick={() => setSelectedImage(src)}>
                    <img 
                    src={src} alt='Menu'
                    className='w-full h-full object-cover'/>
                    </div>
            ))}
        </div>

        {selectedImage && 
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-auto">
            <div className='relative max-w-3xl w-full p-4 mx-4'>
                <button onClick={() => setSelectedImage(null)}>
                    <X className='absolute top-4 right-4 text-white' size={25} />
                </button>
                <img src={selectedImage} alt="Large view" className="w-full max-h-[80vh] object-contain rounded-lg" />
                </div>
                </div>}
    </div>
   
  )
}

export default Menupage