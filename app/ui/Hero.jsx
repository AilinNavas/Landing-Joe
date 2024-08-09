import Image from 'next/image';
import joel from '@/public/joel.jpg';
import logo from '@/public/logo.svg'
import Button from './General/Button';

const Hero = () => {
  return (
    <section className='bg-fondoPrincipal py-20 mt-10'>
      <div className='max-w-7xl px-6 mx-auto lg:px-0'>

        <Image src={logo} alt='logo-MUCHOMARKETING' className='max-w-xs mx-auto -mt-16' />
        <Image src={joel} alt='joel-chavez' className='w-28 rounded-full mx-auto -mt-6' />
        <p className='italic font-extrabold text-celestePrincipal text-xl md:text-2xl lg:text-3xl text-center pt-10'>Struggling To Get A Constant Flow Of Patients?</p>
        <p className=' text-center lg:max-w-5xl mx-auto mt-10 text-azulTitulo font-extrabold text-2xl md:text-3xl lg:text-4xl'>
          How to attract more patients and build a solid online reputation whitout expensive marketing campaigns
        </p>
        <p className='text-grisTexto py-10 lg:text-xl lg:max-w-5xl mx-auto'>
          <span className='font-bold text-azulTitulo'>Watch the video </span> below to learn how to make your practice visible to prospecting patients and get them to choose you over other successful practices.</p>
        <div className='rounded-2xl overflow-hidden aspect-video lg:max-w-5xl mx-auto'>
          <iframe src="https://www.loom.com/embed/d8e96ab640674dd5a489d08c88c00baa?sid=c8087434-05f9-45a8-8592-f271c1205708" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className='w-full h-full'></iframe>
          {/* <iframe className='w-full h-full' src="https://www.youtube.com/embed/mkEf-1pXdaM?si=5jtglqSduojJk5H1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen illow-src="https://www.youtube.com/embed/mkEf-1pXdaM?si=5jtglqSduojJk5H1"></iframe> */}
        </div>
        <div className='text-center pt-10 space-y-2'>
        <Button text={'Boost My Practice Today'} />
        <p className='text-grisTexto'>Get personalized insights • It’s free</p>
        </div>

      </div>

    </section>
  )
}

export default Hero