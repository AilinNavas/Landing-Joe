import Image from "next/image"
import Button from "./General/Button"
import one from '@/public/one.png'
import two from '@/public/two.png'
import top1 from '@/public/top-1.jpg'
import performance1 from '@/public/performance1.png'
import performance2 from '@/public/performance2.png'
import performance3 from '@/public/performance3.png'



const Results = () => {
  return (
    <section className='bg-fondoPrincipal py-10 md:py-16'>
      <div className='max-w-7xl px-6 mx-auto lg:px-0 lg:max-w-5xl '>
        <h2 className='font-extrabold text-azulTitulo text-center lg:max-w-5xl mx-auto mb-6 text-2xl md:text-3xl lg:text-4xl'>Results speak for themselves</h2>
        <p className='text-grisTexto pb-6 lg:text-xl lg:max-w-5xl mx-auto'>
          <span className='font-bold text-azulTitulo'>These are real results from a real, current client.</span> Not random testimonials and unbacked results.<span className='font-bold text-azulTitulo'> See for yourself. </span></p>
        <div className="my-6">
          <h4 className='text-azulTitulo font-bold text-lg lg:text-xl'>DENTAL PRACTICE INCREASED 40 POSITIONS ON GOOGLE</h4>
          <p className='text-grisTexto mb-2 lg:text-lg'>Southside Endodontics scaled to position 9th in only 2 months.</p>
          <Image src={one} alt="result" className="border border-celestePrincipal rounded-md" />
          <p className='text-grisTexto my-2 lg:text-lg'>They also increased their practice’s visibility dramatically.</p>
          <Image src={two} alt="result" className="border border-celestePrincipal rounded-md" />
        </div>

        <div className="my-12">
          <h4 className='text-azulTitulo font-bold text-lg lg:text-xl'>GOOGLE BUSINESS PROFILE RANKING 1° IN  LOCAL SEARCH  RESULTS</h4>
          <p className='text-grisTexto my-2 lg:text-lg'>They outranked ALL competitors for “endodontist near me”, securing the top 1 position across several locations.</p>
          <Image src={top1} alt="result" className="border border-celestePrincipal rounded-md" />
          <p className='text-grisTexto mt-2 lg:text-lg'>Each circle represents a location and the number says your ranking for that location and given keyword.</p>
        </div>

        <div className="my-12">
          <h4 className='text-azulTitulo font-bold text-lg lg:text-xl'>GOOGLE BUSINESS PROFILE GETTING MORE PATIENTS THROUGH INCREASED VISIBILITY</h4>
          <p className='text-grisTexto my-2 lg:text-lg'>After our marketing efforts, we saw an insane improvement in their Google Business Profile performance.</p>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image src={performance1} alt="result1" className="border border-celestePrincipal rounded-md w-full md:max-w-xs" />
            <Image src={performance2} alt="result2" className="border border-celestePrincipal rounded-md w-full md:max-w-xs" />
            <Image src={performance3} alt="result3" className="border border-celestePrincipal rounded-md w-full md:max-w-xs" />
          </div>
        </div>
        <div className='text-center pt-4 md:pt-10 space-y-2'>
        <Button text={'Boost My Practice Today'} />
        <p className='text-grisTexto'>Get personalized insights • It’s free</p>
        </div>


      </div>
    </section>
  )
}

export default Results

