import Image from 'next/image';
import joel from '@/public/joel.jpg';
import logo from '@/public/logo.svg'
import Button from './General/Button';

const Hero = () => {
  return (
    <section className='bg-fondoPrincipal py-10 md:py-16 mt-10'>
      <div className='max-w-7xl px-6 mx-auto lg:px-0'>

        <Image src={logo} alt='logo-MUCHOMARKETING' className='max-w-xs mx-auto -mt-10 md:-mt-20' />
        <Image src={joel} alt='joel-chavez' className='w-20 md:w-28 rounded-full mx-auto -mt-10 md:-mt-6' />
        <p className='italic font-extrabold text-celestePrincipal text-xl md:text-2xl lg:text-3xl text-center pt-4 md:pt-6'>Struggling To Get A Constant Flow Of Patients?</p>
        <p className=' text-center lg:max-w-5xl mx-auto my-4 md:my-6 text-azulTitulo font-extrabold text-2xl md:text-3xl lg:text-4xl'>
          How to attract more patients and build a solid online reputation whitout expensive marketing campaigns
        </p>
  
        <div className='rounded-md overflow-hidden aspect-video lg:max-w-5xl mx-auto'>
        <p className='text-white font-bold lg:text-xl w-full bg-celestePrincipal mx-auto py-2 flex items-center justify-center space-x-1'>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Media / Play_Circle"> <g id="Vector"> <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 15V9L15 12L10 15Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>
        <span className='hidden md:block '>Watch the video below to discover how to attract and retain more patients for your practice!</span>
        <span className='md:hidden'>Discover How in The Video Below</span></p>

          <iframe src="https://www.loom.com/embed/d8e96ab640674dd5a489d08c88c00baa?sid=c8087434-05f9-45a8-8592-f271c1205708" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className='w-full h-full'></iframe>
          {/* <iframe className='w-full h-full' src="https://www.youtube.com/embed/mkEf-1pXdaM?si=5jtglqSduojJk5H1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen illow-src="https://www.youtube.com/embed/mkEf-1pXdaM?si=5jtglqSduojJk5H1"></iframe> */}
        </div>
        <div className='text-center pt-4 md:pt-10 space-y-2'>
        <Button text={'Boost My Practice Today'} />
        <p className='text-grisTexto'>Get personalized insights • It’s free</p>
        </div>

      </div>

    </section>
  )
}

export default Hero