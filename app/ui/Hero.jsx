'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import joel from '@/public/joel.webp';
import logo from '@/public/logo.svg';
import Button from './General/Button';

const Hero = () => {
  useEffect(() => {
    // Cargar los scripts de Wistia de manera dinámica
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/d8dn3encai.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Limpiar los scripts al desmontar el componente para evitar duplicados
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <>
      {/* Scripts de Wistia para cargar el video */}
   

      <section className='bg-fondoPrincipal py-10 md:py-16 mt-10 border-2'>
        <div className='max-w-7xl px-6 mx-auto lg:px-0'>
          <Image src={logo} alt='logo-MUCHOMARKETING' quality={80} priority className='max-w-xs mx-auto -mt-10 md:-mt-24' />
          <Image src={joel} alt='joel-chavez' quality={80} priority className='w-20 md:w-28 rounded-full mx-auto -mt-10 md:-mt-6' />
          <p className='italic font-bold text-celestePrincipal text-lg md:text-2xl text-center pt-4 md:pt-6'>
            Struggling To Get A Constant Flow Of Patients?
          </p>
          <p className='text-center lg:max-w-5xl mx-auto my-4 md:my-6 text-azulTitulo font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            How to attract more patients and build a solid online reputation without expensive marketing campaigns
          </p>

          {/* Contenedor del video de Wistia */}
          <div className='rounded-md overflow-hidden aspect-video lg:max-w-5xl mx-auto border-b border-x border-x-grisTexto border-b-grisTexto'>
            <p className='text-white font-bold lg:text-lg w-full bg-celestePrincipal mx-auto py-1 flex items-center justify-center space-x-1'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Media / Play_Circle">
                    <g id="Vector">
                      <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M10 15V9L15 12L10 15Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className='hidden md:block'>
                Watch the video below to discover how to attract and retain more patients for your practice!
              </span>
              <span className='md:hidden'>Discover How in The Video Below</span>
            </p>

            {/* Implementación del video de Wistia */}
            <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                <div className="wistia_embed wistia_async_d8dn3encai seo=true videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                  <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                    <img src="https://fast.wistia.com/embed/medias/d8dn3encai/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center pt-4 md:pt-10 space-y-2'>
            <Button text={'Boost My Practice Today'} />
            <p className='text-grisTexto'>Get personalized insights • It’s free</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;