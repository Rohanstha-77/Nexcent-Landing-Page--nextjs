import Image from 'next/image'
import React from 'react'
import CommunityCard from './sub-component/CommunityCard'

const Community = () => {
  return (
    <>
        <div className='py-12'>
            <div className='grid place-items-center'>
                <div className='text-center pb-3'>
                    <h1 className='text-4xl text-D_gray'>Manage your entire community</h1>
                    <h1 className='text-4xl text-D_gray'>in a single system</h1>
                </div>
                <div className='text-center pb-4'>
                    <p>Who is Nextcent suitable for?</p>
                </div>

                
                <div className=' '>
                <CommunityCard/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Community