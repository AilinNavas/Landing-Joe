'use client'
import { useEffect } from 'react';



const Button = ({ text }) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;

        script.onload = () => {
            console.log("Calendly script loaded successfully");
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const openCalendly = (e) => {
        e.preventDefault();
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/navasailin18/cita-de-asesoria-gratuita' });
        } else {
            console.error("Calendly script not loaded or not found.");
        }
        return false;
    };


    return (
       
        <button onClick={openCalendly}
        
            className="text-center px-4 py-2 min-w-60 md:px-6 md:py-3 text-lg md:text-2xl leading-10 font-extrabold rounded-sm shadow-sm text-white bg-celestePrincipal hover:bg-celesteSecundario border-[1px] border-[rgba(0,0,0,0.13)] transition duration-150 ease-in-out"
        >
            {text}
        </button>
   
    )
}

export default Button