import Image from "next/image"
import contentMarketing from '@/public/services/1.gif'
import localMarketing from '@/public/services/2.gif'
import reputationManagement from '@/public/services/3.gif'
import Button from "./General/Button"

const Services = () => {
  return (
    <section className='bg-fondoPrincipal py-10 md:py-16'>
      <div className='max-w-7xl px-6 mx-auto lg:px-0 lg:max-w-5xl '>
        <h2 className='font-extrabold text-azulTitulo text-center lg:max-w-5xl mx-auto mb-6 text-2xl md:text-3xl lg:text-4xl'>What am I exactly getting?</h2>
        <p className='text-grisTexto pb-2 lg:text-xl lg:max-w-5xl mx-auto'>
          <span className='font-bold text-azulTitulo'>This approach is unique, and different
          </span>  from other generic marketing packages offered out there.
        </p>
        <p className='font-bold text-azulTitulo mb-6 lg:text-xl'>If you take action today, you will get a bundle of different services that actually work. </p>
        <p className=' text-grisTexto lg:text-xl'>You will get this every month:</p>


        {/* Cards container */}
        <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:items-start my-6'>
          {/* Service Card N° 1 */}
          <div className='border-2 bg-white shadow-lg rounded-sm p-6 flex flex-col lg:flex-row border-t-2 border-t-celestePrincipal'>
            <div className=' text-center  px-4 lg:flex lg:flex-col md:min-h-64'>
              <h4 className='font-extrabold text-celestePrincipal text-xl md:text-2xl lg:text-3xl mb-6'>Content Marketing</h4>
              <span className='font-bold text-azulTitulo md:text-lg lg:text-xl'>Build authority and trust</span>
              <p className='italic pt-2 lg:text-lg max-w-xs'>🛠️ Communicate your expertise effectively and serve beforehand.</p>
            </div>
          </div>

          {/* Service Card N° 2 */}
          <div className='border-2 shadow-lg rounded-sm p-6 bg-white flex flex-col lg:flex-row border-t-2 border-t-celestePrincipal'>
            <div className=' text-center px-4 lg:flex lg:flex-col md:min-h-64'>
              <h4 className='font-extrabold text-celestePrincipal mx-auto text-xl md:text-2xl lg:text-3xl mb-6 max-w-40'>Local Marketing</h4>
              <span className='font-bold text-azulTitulo md:text-lg lg:text-xl'>Dominate your local area</span>
              <p className='italic pt-2 lg:text-lg max-w-xs'>📍 Ensure that people living in ALL areas you serve can find you and have reasons to choose you</p>
            </div>
          </div>

          {/* Service Card N° 3 */}
          <div className='border-2 shadow-lg rounded-sm p-6 bg-white flex flex-col lg:flex-row border-t-2 border-t-celestePrincipal'>
            <div className=' text-center  px-4 lg:flex lg:flex-col md:min-h-64'>
              <h4 className='font-extrabold text-celestePrincipal text-xl md:text-2xl lg:text-3xl mb-6'>Reputation Management</h4>
              <span className='font-bold text-azulTitulo md:text-lg lg:text-xl'>Gain patient trust</span>
              <p className='italic pt-2 lg:text-lg max-w-xs'>⭐ Increase 5-star reviews and provide effective responses to set higher expectations and showcase your service quality</p>
            </div>
          </div>
        </div>

        {/* Information Services Container */}
        <div className='grid grid-cols-1 space-y-12 pt-12 lg:py-12 bg-white px-8'>

          <div className=" flex flex-col lg:flex-row lg:items-center">
            <div className=''>
              <span className='font-bold text-azulTitulo text-xl md:text-2xl underline underline-offset-4 decoration-azulTitulo'>Local Marketing Services:</span>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-4'>Website Optimization:</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>🌐 Optimize for local search terms to attract patients</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2 '>Google Business Profile Optimization</h6>
              <ul className='text-grisTexto  lg:text-xl'>
                <li>📈 Increase patient visibility</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2'>Social Media Profile Optimization</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>📱 Ensure visibility when patients are scrolling</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2'>Content Production</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>📝 Tailored for all service locations</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2'>Performance Reports</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>📊 Website rankings on Google search results</li>
                <li>📊 Google Business Profile rankings on Google search results</li>
                <li>📊 Google Business Profile rankings on Google Maps</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2'>Premium Reports</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>📍 Google Maps performance for multiple locations</li>
                <li>🏆 Competitor comparison for performance analysis</li>
              </ul>

            </div>
            <div>
              <Image src={contentMarketing} unoptimized quality={80} className="lg:max-w-md" alt="gif-service-content-marketing" />
              <div className='text-center space-y-2'>
                <Button text={'Boost My Practice Today'} />
                <p className='text-grisTexto'>Get personalized insights • It’s free</p>
              </div>
            </div>

          </div>



          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
            <div className='px-2 '>
              <span className='font-bold text-azulTitulo text-xl md:text-2xl underline underline-offset-4 decoration-azulTitulo'>Content Marketing Services:</span>
              <h6 className='font-bold text-azulTitulo  lg:text-xl mt-4'>Engage and Attract Visitors</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>🎯 Content assets optimized for engagement</li>
                <li>📣 Create awareness in your community</li>
                <li>💬 Respond to patients' common questions</li>
                <li>🤝 Build trust with local residents</li>
                <li>🔍 Invite visitors to take action</li>
                <li>🏅 Showcase why you are the best choice</li>
                <li>📚 Position yourself as an authority</li>
                <li>🏠 Resonate with residents</li>
                <li>🌟 Build a solid online reputation</li>
              </ul>
            </div>
            <div>
              <Image src={reputationManagement} unoptimized quality={80} className="lg:max-w-md" alt="gif-service-local-marketing" />
              <div className='text-center space-y-2'>
                <Button text={'Boost My Practice Today'} />
                <p className='text-grisTexto'>Get personalized insights • It’s free</p>
              </div>
            </div>

          </div>

          <div className=" flex flex-col lg:flex-row lg:items-center">
            <div className='px-2'>
              <span className='font-bold text-azulTitulo text-xl md:text-2xl underline underline-offset-4 decoration-azulTitulo'>Reputation Management Services:</span>
              <h6 className='font-bold text-azulTitulo lg:text-xl  mt-4 '>Increase 5-Star Reviews</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>⭐ Google Business Profile and Facebook Page reviews</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2 '>Monitor and Respond</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>📆 Daily monitoring of Google Business Profile reviews</li>
                <li>📈 Generate custom reports with detailed analytics</li>
                <li>🕒 Respond professionally and authentically within 24 hours</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2'>Showcase Testimonials</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>💬 Prominently display customer testimonials on your website</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2'>Optimize Interactions</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>📊 Improve interactions with the latest Google Business Profile features</li>
                <li>💡 Develop strategies to attract patients using old reviews</li>
              </ul>
              <h6 className='font-bold text-azulTitulo lg:text-xl mt-2'>Engaging Content</h6>
              <ul className='text-grisTexto lg:text-xl'>
                <li>📰 Share informative content weekly</li>
                <li>🎨 Create visually appealing content for a more engaging user experience</li>

              </ul>


            </div>
            <div>
              <Image src={localMarketing} unoptimized quality={80} className="lg:max-w-md " alt="gif-service-local-marketing" />
              <div className='text-center pt-4 md:pt-10 space-y-2'>
                <Button text={'Boost My Practice Today'} />
                <p className='text-grisTexto'>Get personalized insights • It’s free</p>
              </div>

            </div>

          </div>

        </div>







      </div>
    </section>
  )
}

export default Services
