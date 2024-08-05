import React from 'react'
import Image from 'next/image'
import { Local } from '../constants'

const Help = () => {
  return (
    <>
        <div className='py-10 bg-silver'>
            <div className='mx-10'>
                <div className='flex justify-evenly items-center'>
                    <div>
                        <h1 className='text-4xl leading-tight font-semibold text-D_gray'>Helping a local <br/> <span className='text-primary'>business reinvent itself</span></h1>
                        <p className='text-sm font-normal text-Gray leading-5 pt-2'>We reached here with our hard work and dedication</p>
                    </div>
                    <div className='gridContainer'>
                        {Local.map((local,index)=>(
                            <div className='flex pb-8 mr-8' key={index}>
                                <div className='mr-4'>
                                    <Image src={local.icon} height={60} width={60} alt='image not found'/>
                                </div>
                                <div>
                                    <h1 className='text-3xl text-D_gray text-bold'>{local.value}</h1>
                                    <p className='text-sm font-normal text-Gray leading-5 pt-2'>{local.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Help