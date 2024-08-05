import React from 'react'
import Button from './sub-component/Button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
        <header className='py-10 bg-silver'>
            <div className='flex justify-between items-center mx-24'>
                <div className=''>
                    <div>
                        <h1 className='font-medium text-5xl text-D_gray'>Lesson and insights <br/> <span className='text-primary '>for 8 years</span></h1>
                        <p className='text-sm mt-6 text-Gray'>Where to grow your business as a photographer: site or social media?</p>
                    </div>

                    <div className='mt-7'>
                        <Button  type='button' varient='readmore' title='Read more'/>
                    </div>
                </div>

                <div>
                    <div>
                        <Image src="/assets/hero-section.svg" height={500} width={500} alt='image not found'/>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default HeroSection