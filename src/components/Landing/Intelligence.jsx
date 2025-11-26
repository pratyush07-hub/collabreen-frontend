import React from 'react'
import intelligence from '../../assets/intelligence.png'

const Intelligence = () => {
  return (
    <>
        <section className='w-full h-auto'>
            <p className='text-center leading-relaxed text-white text-sm md:text-4xl lg:text-5xl'>The intelligence you need, presented <br /> exactly how you need it</p>
            <div>
                <img src={intelligence} alt="intelligence" className='mx-auto mt-10'/>
            </div>
        </section>
    </>
  )
}

export default Intelligence