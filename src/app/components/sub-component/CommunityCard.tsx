import Image from 'next/image'
import React from 'react'
import { Community } from '../../constants'

const CommunityCard = () => {
  return (
    <div className='flex flex-wrap justify-between w-full max-w-7xl mx-auto gap-4'>
      {Community.map((community) => (
        <div key={community.icon} className='border rounded-md py-6 flex flex-col items-center shadow-lg w-72'>
          <div className='flex justify-center'>
            <Image src={community.icon} height={100} width={100} alt='Community Icon'/>
          </div>
          <div className='text-center py-2'>
            <h1 className='font-bold text-3xl text-D_gray'>{community.h1}</h1>
          </div>
          <div className='text-center px-5'>
            <p className='text-Gray text-base'>{community.para}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommunityCard
