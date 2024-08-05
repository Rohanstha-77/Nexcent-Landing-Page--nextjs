"use client"
import React from 'react'
import { ClientLogo } from '../constants'
import Image from 'next/image'

const  Clients= () => {
  return (
    <>
        <div className='py-10'>
            <div className='mx-24'>
                <div className=''>
                    <h1 className='text-center font-semibold text-3xl text-D_gray leading-normal'>Our Clients</h1>
                    <p className='text-base text-Gray text-center'>We have been working with Fortune 500+ clients</p>
                </div>
                <div className='flex justify-between items-center pt-8'>
                    {ClientLogo.map((logo)=>(
                        <Image src={logo} height={40} width={40} alt='image not found'/>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Clients