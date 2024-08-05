import Image from 'next/image'
import React from 'react'
import Button from './sub-component/Button'

type SectionVprops={
    src: string,
    heading: string,
    paragraph: string
}

const SectionV = ({src,heading,paragraph}:SectionVprops) => {
  return (
    <>
        <section className='py-10'>
            <div className='mx-24'>
                <div className='flex justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <Image src={src} height={600} width={600} alt='image not found'/>
                    </div>
                    <div className=''>
                        <div>
                            <h1 className='text-4xl leading-tight font-semibold text-D_gray'>{heading}</h1>
                            <p className='text-sm font-normal text-Gray leading-5 pt-2'>{paragraph}</p>
                        </div>
                        <div className='pt-8'>
                            <Button type='button' varient="readmore" title='Learn More'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionV