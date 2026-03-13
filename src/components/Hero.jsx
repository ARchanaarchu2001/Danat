import { useState, useEffect, useRef } from "react";
import HeroImage1 from "../assets/herimage1.jpg"; // Update with your actual image paths
import HeroImage2 from "../assets/heroimage2.jpg"; // Update with your actual image paths
import { UtensilsCrossed,BookOpenText, Link } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const images = [
    {
      id: 1,
      src: HeroImage1,
      title: "Option 1",
      description: "Description for the first option",
      cta: "Explore Now"
    },
    {
      id: 2,
      src: HeroImage2,
      title: "Option 2",
      description: "Description for the second option",
      cta: "Discover More"
    }
  ];
  
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const intervalRef = useRef(null);

  // Auto-rotate images
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    clearInterval(intervalRef.current); // Pause auto-rotation during swipe
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const difference = touchStartX.current - touchEndX.current;
      if (difference > 50) {
        // Swipe left
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else if (difference < -50) {
        // Swipe right
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    }
    
    // Restart auto-rotation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  return (
    <div className="w-full relative overflow-hidden" >

      {/* Image Slider */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 relative">
            {/* Full-width Image */}
            <img
              src={image.src}
              alt={image.title}
              className="w-full  h-[70vh] md:h-screen object-cover"
            />
            {/* <div className="w-full h-[70vh] md:h-screen bg-gradient-to-br from-black via-red-900 to-black animate-pulse blur-sm"></div> */}


            {/* Image Overlay Content */}
            <div className={`absolute inset-0 flex items-center justify-centerp-4 md:px-20 bg-black/30 ${
                                currentIndex === 0 ? 'justify-start' : 'justify-end'
                              }`}>

              <div className=" flex flex-col md:flex-row gap-6 bg-black/70 p-6 rounded-lg w-auto max-w-4xl justify-center items-center">

              {/* Book Table Option */}
                <div 
                onClick={() => navigate("/book")} 
                className="flex flex-col items-center justify-center w-40 h-28 bg-white/30 border hover:bg-white/10 border-white/20 rounded-xl shadow-md p-4 cursor-pointer transition">
                    <UtensilsCrossed className="h-10 w-10 text-red-900" />
                      <span className="mt-2 text-white font-bold text-nowrap">Book Table</span>
                </div>
                      {/* View Menu Option */}
             
<div
  onClick={(e) => {
    e.preventDefault();
    window.open('/assets/menucard.pdf', '_blank', 'noopener,noreferrer');
  }}
  className="flex flex-col items-center justify-center w-40 h-28 bg-white/30 hover:bg-white/10 border border-white/20 rounded-xl shadow-md p-4 cursor-pointer transition"
>
  <BookOpenText className="h-10 w-10 text-red-900" />
  <span className="mt-2 text-white font-bold text-nowrap">View Menu</span>
</div>

    </div>
  </div>
</div>  
         ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              clearInterval(intervalRef.current);
              intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
              }, 5000);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-red-700" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;