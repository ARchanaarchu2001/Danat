import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import ContactImage from "../assets/contactimage.jpg"; 
import { Mail , MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contactpage() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm(
      "service_waj9xl8",
      "template_n5d6f69",
      form.current,
      "zYyIwB0t_r9hWFAC9"
    )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    }, (error) => {
        console.log(error.text);
    });
  };
  
  return (
   <section className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
    
    <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 '>

  



    
    {/* Form and Contact Info */}
    <motion.div 
    className='lg:w-1/2 w-full '
    initial= {{ opacity: 0, x: -50 }}
    animate= {{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}>
     
     <form ref={form} onSubmit={sendEmail} className='w-full space-y-10'>
      <h2 className="text-4xl  text-red-600  text-center ">Get In Touch</h2>

      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          <div className="relative border-b border-black top-3">
            <input type="text"  name="name"  value={name} required onChange={(e) => setName(e.target.value)} className="peer w-full bg-transparent focus:outline-none  py-2 placeholder-transparent" placeholder="Name" />
            <label className={`absolute left-0 font-bold text-gray-600 text-sm transition-all ${
                  name ? '-top-5 text-red-500 text-sm' : 'top-2 text-base'
                }`}>Name</label>
          </div>

          <div className="relative border-b border-black top-3">
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required  className="peer w-full bg-transparent focus:outline-none py-2  placeholder-transparent" placeholder="Email" />
            <label className={`absolute left-0 font-bold text-gray-600 text-sm transition-all ${
                  email ? '-top-5 text-red-500 text-sm' : 'top-2 text-base'
                }`}>Email</label>
          </div>

          {/* Message */}
          <div className=" md:col-span-2 relative border-b border-black top-4">
              <textarea rows="2" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required className="peer w-full bg-transparent focus:outline-none py-2 placeholder-transparent resize-none" placeholder="Message"/>
              <label className={`absolute left-0 font-bold text-gray-600 text-sm transition-all ${
                  message ? '-top-5 text-red-500 text-sm' : 'top-2 text-base'
                }`}>Message</label>
          </div>
    </div> 

    


    {/* Submit */}
    <div className="flex justify-center">
        <button type="submit" className="bg-red-600 w-1/2 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">Send</button>
    </div>
    { isSubmitted && <p className='text-green-600 text-center'> Message Sent Successfully</p>}
     </form>

     {/* ContactInfo */}
     <div className="mt-10 space-y-4 px-6">
      <div className='flex items-center gap-4 text-gray-700'>
      <Mail className="w-5 h-5" />
      <span className="text-gray-700 ">dine@danatalbaharuae.com</span>
     </div>
     <div className="flex items-center gap-4 text-gray-700">
      <MapPin className="w-5 h-5" />
      <span>Wakra Fish Market, Al, Al Wakrah, Qatar</span>
     </div>
     <div className="flex items-center gap-4 text-gray-700">
      <Phone className="w-5 h-5 " />
      <span className="text-gray-700 ">+971 47 770 7085</span>
     </div>
     </div>
     </motion.div>

     {/* Contact Image */}


     <motion.div 
      className='w-full block lg:hidden' 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}>
      <img 
        src={ContactImage} 
        alt='Contact Us' 
        className='rounded-lg shadow-lg h-60 w-full object-cover' 
  />
</motion.div>


     <motion.div
    className='lg:w-1/2 w-full hidden lg:block'
    initial= {{ opacity: 0, x: -50 }}
    animate= {{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}>

    <img src={ContactImage} alt='Contact Us' className='rounded-lg shadow-lg h-screen w-full object-cover '></img>
    </motion.div >
    </div>


    {/* Google map  */}

    <motion.div 
    initial= {{ opacity: 0, x: -50 }}
    animate= {{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className='mt-16'>
      <iframe 
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6309.784777462046!2d51.6063867!3d25.1706677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cb35f3fc1ebf%3A0x83f10e5ce09dc8a9!2sDanat%20Al%20Bahar%20BBQ%20Fish!5e1!3m2!1sen!2sin!4v1747975758352!5m2!1sen!2sin" 
      className="w-full h-96 rounded-lg shadow-md" 
      loading="lazy" 
      allowFullScreen>
      </iframe>
    </motion.div>
    </section>
  )
}

export default Contactpage