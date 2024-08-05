import Image from 'next/image'
import React from 'react'
import { List, SocialMedia } from '../constants'

const Footer = () => {
  return (
    <>
        <div className='px-10 bg-black'>
            <div className='mx-24'>
                <div className='flex justify-between items-center py-16'>
                    <div>
                        <div>
                            <Image src="/assets/fotterlogo.svg" height={200} width={200} alt="logo" />
                        </div>
                        <div className='py-6'>
                            <p className='text-silver font-normal text-sm'>Copyright © 2020 Nexcent.ltd </p>
                            <p className='text-silver font-normal text-sm'>All rights reserved</p>
                        </div>
                        <div className='flex  justify-between items-center'>
                            {SocialMedia.map((icon,index)=>(
                                <Image key={index} src={icon} height={20} width={25} alt='icon'/>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        
                            {List.map((list,index)=>(
                                <div className='mr-24' key={index}>
                                    <h1 className='text-silver font-semibold pb-4 text-xl'>{list.title}</h1>
                                    {list.detail.map((list)=>(
                                        <ul className='text-sm font-normal text-silver'>
                                            <li className='pt-2'>{list}</li>
                                        </ul>
                                    ))}
                                </div>
                            ))}
                            
                        
                        <div className=''>
                            <h5 className='text-silver font-semibold pb-4 text-xl'>Stay up to date</h5>
                            <div className='bg-D_gray text-white rounded-lg'>
                                <input className="shadow-none py-2 outline-none bg-D_gray ml-3" type="email" placeholder='Your email address' />
                                <button className="mr-2">
                                <Image src="/assets/send.svg" className="pt-2 mx-3" height={20} width={20} alt="send" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer