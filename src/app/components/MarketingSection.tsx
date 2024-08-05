import React from 'react'
import Card from './sub-component/card'
import { marketing } from '../constants'

const MarketingSection = () => {
  return (
    <>
        <div className='pt-10 pb-44'>
            <div className='mx-24'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='text-center font-semibold text-3xl text-D_gray leading-loose'>Caring is the new marketing</h1>
                        <p className='text-base text-Gray'>The Nexcent blog is the best place to read about the latest membership insights, <br/> trends and more. See who's joining the community, read about how our community <br/> are increasing their membership income and lot's more.</p>
                    </div>
                    <div className='mt-5 flex flex-row justify-between items-center gap-4'>
                        {marketing.map((marketing,index)=>(
                            <Card key={index} img={marketing.image} title={marketing.title} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MarketingSection