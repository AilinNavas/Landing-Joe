import Image from "next/image";
import attract from '@/public/attract.png'
import getting from '@/public/getting.png'
import performance from '@/public/performance.png'
import gain from '@/public/gain.png'
import Button from "./General/Button";

const Stop = () => {
  return (
    <section className='stop py-20'>
      <div className='max-w-7xl px-6 mx-auto  lg:px-0 lg:max-w-5xl'>
        <h2 className='font-extrabold text-azulTitulo text-center lg:max-w-5xl mx-auto mb-10 text-2xl md:text-3xl lg:text-4xl'>Stop losing patients</h2>
        <p className='text-grisTexto pb-10 lg:text-xl lg:max-w-5xl mx-auto'>
          <span className='font-bold text-azulTitulo'>"Dentist near me" and variants count for 1-10M average monthly searches on Google in the US, </span> and it can be anything from 1,000 to 1M depending on the size of your city. This represents an existing demand that you are not capturing.</p>

        <div className="border-2 bg-white shadow-lg rounded-sm p-10 mb-6 flex flex-col lg:items-start">
          <h4 className="font-extrabold text-celestePrincipal text-2xl lg:text-3xl pb-10 md:text-center lg:text-left lg:max-w-md lg:pb-4">Attract more patients in your service area</h4>
          <div className="flex flex-col lg:flex-row items-center">
            <ul className='space-y-2 lg:space-y-4 lg:w-1/2'>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Show up for local searches like  <span className='font-bold'>“dentist near me”</span></p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Show up for high-intent searches like  <span className='font-bold'>“dentist 76106”</span></p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Win service-based searches like <span className='font-bold'>“dental implants near me”</span> </p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Become the go-to specialist for <span className='font-bold'> “pediatric dentist”</span></p>
              </li>
            </ul>
            <Image src={attract} alt="attract more patients" className=" mt-10 md:px-20 lg:mt-0 lg:pl-4 lg:w-1/2" />
          </div>
          <div className='text-center space-y-2'>
            <Button text={'I Want More Visibility'} />
            <p className='text-grisTexto'>Get personalized insights • It’s free</p>
          </div>
        </div>


        <div className="border-2 bg-white shadow-lg rounded-sm p-10 flex flex-col lg:items-end">
          <h4 className="font-extrabold text-celestePrincipal text-2xl md:text-3xl pb-10 md:text-center lg:text-left lg:max-w-md lg:pb-4">Have more patients getting in touch daily</h4>
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center">

            <ul className='space-y-2 lg:space-y-4 lg:w-1/2'>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Increase calls</span> made from your Business Profile </p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Increase messages</span>made from your Business Profile</p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Increase appointments</span>scheduled on your website </p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>See more patients</span> reaching out with inquiries</p>
              </li>
            </ul>
            <Image src={getting} alt="attract more patients" className=" mb-10 md:px-20 lg:mb-0 lg:pr-4 lg:w-1/2" />
          </div>
          <div className='text-center space-y-2'>
            <Button text={'I Want More Patients'} />
            <p className='text-grisTexto'>Get personalized insights • It’s free</p>
          </div>
        </div>


        <div className="border-2 bg-white shadow-lg rounded-sm p-10 mt-6 flex flex-col lg:items-start">
          <h4 className="font-extrabold text-celestePrincipal text-2xl lg:text-3xl pb-10 md:text-center lg:text-left lg:max-w-md lg:pb-4">Turn web visitors into patients consistently</h4>
          <div className="flex flex-col lg:flex-row items-center">
            <ul className='space-y-2 lg:space-y-4 lg:w-1/2'>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Increase local traffic</span> and outrank other dental practices</p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Increase clicks to your websit</span>with better titles</p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Stand out from the crowd</span> with a patient-centered exp.</p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Increase calls and appointments</span>with strategic structure</p>
              </li>
            </ul>
            <Image src={performance} alt="Performance on Google" className=" mt-10 md:px-20 lg:mt-0 lg:pl-4 lg:w-1/2" />
          </div>
          <div className='text-center space-y-2'>
            <Button text={'I Want More Visibility'} />
            <p className='text-grisTexto'>Get personalized insights • It’s free</p>
          </div>
        </div>


        <div className="border-2 bg-white shadow-lg rounded-sm p-10 flex flex-col mt-6 lg:items-end">
          <h4 className="font-extrabold text-celestePrincipal text-2xl md:text-3xl pb-10 md:text-center lg:text-left lg:max-w-md lg:pb-4">Gain patients’ trust and beat competitors</h4>
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center">

            <ul className='space-y-2 lg:space-y-4 lg:w-1/2'>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Catch patient’s attention</span> with an optimized GBP </p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Build authority</span> with informative, targeted content</p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Build trust</span> with an exceptional reputation management</p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p><span className='font-bold'>Win all patients </span> only with you Google Business Profile</p>
              </li>
            </ul>
            <Image src={gain} alt="attract more patients" className=" mb-10 md:px-20 lg:mb-0 lg:pr-4 lg:w-1/2" />
          </div>
          <div className='text-center space-y-2'>
            <Button text={'I Want A Srategy'} />
            <p className='text-grisTexto'>Get personalized insights • It’s free</p>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Stop