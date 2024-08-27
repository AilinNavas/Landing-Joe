import Image from "next/image"
import Button from "./General/Button"
import bonus1 from '@/public/bonus1.png'
import bonus11 from '@/public/bonus11.png'
import bonus2 from '@/public/bonus2.png'
import bonus3 from '@/public/bonus3.png'

const Bonus = () => {
  return (
    <section className='bg-white py-10 md:py-16'>
      <div className='max-w-7xl px-6 mx-auto lg:px-0 lg:max-w-5xl '>
        <h2 className='font-extrabold text-azulTitulo text-center lg:max-w-5xl mx-auto mb-6 text-2xl md:text-3xl lg:text-4xl'><span className='text-celestePrincipal'>PLUS ... </span>3 BONUS MONTHLY SERVICES</h2>

        <h6 className='text-azulTitulo font-extrabold text-lg lg:text-xl py-2'><span className="text-celestePrincipal">#BONUS 1</span> →  Branded Media Assets (5)</h6>
        <p className='text-grisTexto mb-2 lg:text-xl'>Distinctive branding, including consistent colors, logos, and design elements, enhances brand recognition and makes a dental practice more memorable to potential patients, setting it apart from competitors</p>
        <div className="flex flex-col items-center md:flex-row md:justify-evenly ">
          <Image src={bonus1} alt="result" className="max-w-xs md:max-w-md" />
          <Image src={bonus11} alt="result" className="max-w-xs md:max-w-80" />
        </div>

        <h6 className='text-azulTitulo font-extrabold text-lg lg:text-xl py-2'><span className="text-celestePrincipal">#BONUS 2</span> →  Social Media Posts (5)</h6>
        <p className='text-grisTexto mb-2 lg:text-xl'>Using location-specific hashtags and local keywords helps ensure that the content reaches people in the vicinity who may be looking for dental services</p>
        <div className="flex flex-col items-center md:flex-row md:justify-evenly ">
        <Image src={bonus2} alt="result" className=" max-w-64" />
       
        </div>

        
        <h6 className='text-azulTitulo font-extrabold text-lg lg:text-xl py-2'><span className="text-celestePrincipal">#BONUS 3</span> →  Email Marketing Campaign (1)</h6>
        <p className='text-grisTexto mb-2 lg:text-xl'>Keep the practice top-of-mind for existing patients, encouraging them to schedule regular check-ups and appointments</p>
        <div className="flex flex-col items-center ">
        <Image src={bonus3} alt="result" className="max-w-xs lg:max-w-xl" />
       
        </div>




      </div>
      

      <div className='text-center pt-24 space-y-2'>
        <Button text={'Boost My Practice Today'} />
        <p className='text-grisTexto'>Get personalized insights • It’s free</p>
      </div>


    </section>
  )
}

export default Bonus