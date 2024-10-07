import Image from 'next/image';
import check from '@/public/check.svg'
import neal from '@/public/Neal.jpeg'

export const InfoForm = () => {
  return (
    <div className='hidden lg:flex flex-col space-y-4  p-4  w-1/2'>
            <h4 className='font-black text-azulTitulo text-3xl'>Get a Cost-effective Marketing Strategy!</h4>
            <p className='font-black text-azulTitulo uppercase'>100% No–Risk Free Trial</p>
            <ul>
              <li className='flex text-grisTexto'><Image src={check} width={20} height={20} alt='icon-check' className='mr-2' />
                Pay NOTHING for the first 30-days</li>
              <li className='flex text-grisTexto'><Image src={check} width={20} height={20} alt='icon-check' className='mr-2' />
                Cancel anytime, hassle-free</li>
              <li className='flex text-grisTexto'><Image src={check} width={20} height={20} alt='icon-check' className='mr-2' />No long-term contracts</li>
            </ul>

            <div className='border-4 border-[text-grisTexto] p-4'>
            
              <p className='flex justify-between mt-2'>
                <span className='font-bold text-azulTitulo'>Service retainer</span>
                <span className='font-bold text-azulTitulo'>$0 due today</span>
              </p>
              <p className='text-grisTexto'>$850/m after your trial</p>

            </div>

            <div className="flex flex-col p-6 justify-center border-[rgba(0,0,0,0.13)] border-[1px] border-t-0">
              <div className='flex'>
                <Image src={neal} alt="Neal-Horn" className="w-14 rounded-md mr-4" />
                <div>
                  <h4 className="font-bold mt-2 lg:text-md">Dr. Neal Horn</h4>
                  <span className="mlg:text-md">SOUTHSIDE ENDODONTICS</span>
                </div>
              </div>
                <p className="text-left lg:text-md pt-4">“Joel has been a valuable asset to my endodontic practice. <span className="underline underline-offset-4 decoration-2 decoration-celestePrincipal">He skills with SEO have constantly positioned my practice at the top of the search results.</span> I would not hesitate to recommend Joel to anyone looking to better position their practice through digital marketing.”</p>
            </div>
          </div>
  )
}
