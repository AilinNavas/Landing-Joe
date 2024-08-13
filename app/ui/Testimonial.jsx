import Image from "next/image"
import neal from '@/public/Neal.jpeg'

const Testimonial = () => {
  return (
    <section className='testimonial py-10 md:py-16'>
      <div className='max-w-7xl px-6 mx-auto lg:px-0 lg:max-w-5xl'>
        <h2 className='font-extrabold text-azulTitulo text-center lg:max-w-5xl mx-auto mb-6 text-2xl md:text-3xl lg:text-4xl'>How many more patients would come to you with a 550% increase in Google appearances?</h2>
        <p className='text-grisTexto pb-10 lg:text-xl lg:max-w-5xl mx-auto'>
          <span className='font-bold text-azulTitulo'>See how we achieved outstanding results </span>  with a practice in the position 40th of Google Search results. Now they have patients that find them online and choose their practice over others.</p>
        <div className='pb-10 flex flex-col space-y-10 lg:space-y-0 lg:flex-row'>
          <div className='lg:w-1/2'>
          
            <div className="flex flex-col items-center justify-center lg:mx-10">
            <Image src={neal} alt="Neal-Horn" className="w-20 rounded-full -mb-4 z-10" />
            <div className="flex flex-col items-center p-4 shadow-md rounded-sm border-[rgba(0,0,0,0.13)] border-[1px] border-t-0 bg-white">
              <h4 className="font-bold mt-2 lg:text-lg">Dr. Neal Horn</h4>
              <span className="mb-4 lg:text-lg">SOUTHSIDE ENDODONTICS</span>
              <p className=" text-center lg:text-lg">“Joel has been a valuable asset to my endodontic practice. He skills with SEO have constantly positioned my practice at the top of the search results. I would not hesitate to recommend Joel to anyone looking to better position their practice through digital marketing.”</p>
            </div>
            </div>

          </div>



          <div className='lg:w-1/2 flex flex-col justify-center'>
            <ul className='space-y-2 lg:space-y-4 lg:text-xl'>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Appearances on Google <span className='font-bold'>increased 550%</span></p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Calls <span className='font-bold'>increased 440%</span></p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Secure the top 3 spots on Google for <span className='font-bold'>“endodontist near me”</span> </p>
              </li>
              <li className='flex items-start lg:items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-8 lg:mr-2 text-celestePrincipal">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>GBP peaked as the <span className='font-bold'>third-highest source of patients</span></p>
              </li>
            </ul>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Testimonial