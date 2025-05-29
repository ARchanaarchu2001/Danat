import React, { useState } from 'react'
import {motion, AnimatePresence} from "framer-motion";
import MenuImage from "../assets/menuimage.jpg";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const countryCode = [{value: "+974"},{value: "+971"},{value: "+966"},{value: "+965"},{value: "+968"},{value: "+973"},{value: "+91"},
    {value: "+92"},{value: "+1"},{value: "+44"},{value: "+49"},{value: "+63"},{value: "+55"},{value: "+54"},{value: "+212"},
    {value: "+216"},{value: "+90"},{value: "+996"},{value: "+7"},{value: "+86"},{value: "+60"},{value: "+62"},{value: "+380"},{value: "+81"},
    {value: "+82"},{value: "+98"},{value: "+66"},{value: "+39"},{value: "+34"},
]

// Success Popup Component
const SuccessPopup = ({ isOpen, onClose, customerName }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    >
                        {/* Popup Modal */}
                        <motion.div
                            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
                            initial={{ scale: 0.5, opacity: 0, y: -50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.5, opacity: 0, y: -50 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Success Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-green-100 rounded-full p-3">
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Success Message */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
                                <p className="text-gray-600 mb-2">
                                    Thank you, <span className="font-semibold text-red-700">{customerName}</span>
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Your table booking request has been sent successfully. We'll contact you shortly to confirm your reservation.
                                </p>
                                
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="bg-red-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105"
                                >
                                    Awesome!
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

function Bookpage() {
    const [selectedCode, setSelectedCode] = useState(countryCode[0].value);
    const [form, setForm] = useState({ name: "", phone: "", people: "", area: "Anywhere" });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            customer_name: form.name,
            code: selectedCode,
            phone: form.phone,
            people: form.people,
            area: form.area,
        };

        // Send email using EmailJS
        emailjs.send('service_waj9xl8', 'template_4qd8ywy', templateParams, 'zYyIwB0t_r9hWFAC9')
            .then(() => {
                setCustomerName(form.name); // Store customer name before resetting form
                setShowSuccessPopup(true);
                setForm({ name: "", phone: "", people: "", area: "Anywhere" }); // reset
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                alert("Something went wrong. Please try again.");
                setIsSubmitting(false);
            });
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    return (
        <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
            {/* Background Image */}
            <div className='absolute inset-0'>
                <img 
                    src={MenuImage}
                    alt='Menu Background'
                    className='w-full h-full object-cover blur-sm brightness-60'
                />
            </div>

            {/* Form content */}
            <motion.div
                className='relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-lg w-full'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Book Your Table</h2>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-gray-700'>Customer Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            value={form.name} 
                            onChange={handleChange} 
                            className='w-full border border-gray-300 rounded p-2' 
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Phone</label>
                        <div className='flex flex-wrap sm:flex-nowrap gap-3'> 
                            <select
                                className="flex-shrink-0 w-full sm:w-1/4 border border-gray-300 rounded p-2"
                                value={selectedCode}
                                onChange={(e) => setSelectedCode(e.target.value)}
                                disabled={isSubmitting}
                            >
                                {countryCode.map((code, index) => (
                                    <option key={index} value={code.value}>
                                        {code.value}
                                    </option>
                                ))}
                            </select> 
                            <input 
                                type='tel' 
                                name='phone' 
                                value={form.phone} 
                                onChange={handleChange}
                                className='w-full sm:w-3/4 border border-gray-300 rounded p-2' 
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                    <div>
                        <label className='block text-gray-700'>Number of People</label>
                        <input 
                            type='number' 
                            name='people' 
                            value={form.people} 
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded p-2' 
                            required 
                            disabled={isSubmitting}
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Preferred Area</label>
                        <select 
                            name='area' 
                            value={form.area} 
                            onChange={handleChange} 
                            className='w-full border border-gray-300 rounded p-2'
                            disabled={isSubmitting}
                        >
                            <option>Anywhere</option>
                            <option>Inside</option>
                            <option>Balcony</option>
                        </select>
                    </div>
                    <div className='flex justify-center mt-6 gap-x-10'>
                        <button 
                            type='submit' 
                            className='bg-red-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:bg-white/30 hover:text-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Booking...' : 'Book Your Table'}
                        </button>
                        <button 
                            type='button'
                            className='bg-red-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:bg-white/30 hover:text-red-700 transition-all duration-300' 
                            onClick={() => navigate('/menu')}
                            disabled={isSubmitting}
                        >
                            View Menu
                        </button>
                    </div>
                </form>
            </motion.div>

            {/* Success Popup */}
            <SuccessPopup 
                isOpen={showSuccessPopup} 
                onClose={closeSuccessPopup}
                customerName={customerName}
            />
        </section>
    );
}

export default Bookpage