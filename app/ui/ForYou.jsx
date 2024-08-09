import React from 'react'

const ForYou = () => {
  return (
    <section className='py-20 bg-fondoSecundario'>
      <div className='max-w-7xl px-6 mx-auto  lg:px-0 lg:max-w-5xl'>
        <h2 className='font-extrabold text-white text-center lg:max-w-5xl mx-auto mb-10 text-2xl md:text-3xl lg:text-4xl'>Is this innovative approach right for me?</h2>
        <ul className='text-white list-disc ml-5 space-y-2 lg:space-y-4 text-lg md:text-xl lg:text-2xl'>
          <li>
            <p>Have you invested much money in your website <span className='font-bold'>but haven’t seen significant returns yet?</span></p>
          </li>
          <li>
            <p>Do you think that marketing your practice is important <span className='font-bold'>but you find it too expensive?</span></p>
          </li>
          <li>
            <p>Do you know some marketing strategies would work for your practice, <span className='font-bold'>but taking care of it is time-consuming?</span></p>
          </li>
          <li>
            <p>Do you think creating a comprehensive marketing strategy combining everything you need <span className='font-bold'>is hard to achieve and implement?</span></p>
          </li>
          <li>
            <p>Do you understand that all potential patients check your Business Profile, reviews, and website, <span className='font-bold'>but you don’t know exactly what to do?</span></p>
          </li>
        </ul>
        <p className='text-white font-extrabold text-2xl lg:text-3xl pt-10'>If you're nodding your head <span className='text-celestePrincipal'>'YES'</span> to any of these...<span className='text-celestePrincipal'>Then this is for you!</span></p>
      </div>

    </section>
  )
}

export default ForYou