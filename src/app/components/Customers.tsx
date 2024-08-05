import React from 'react'
import Image from 'next/image'
import { ClientLogo, customer } from '../constants'

const Customers = () => {
  return (
    <div className='py-10 bg-silver'>
        <div className='mx-20'>
            <div className='flex flex-col'>
                {customer.map((customers, index) => (
                    <div key={index} className='flex'>
                        <div className='flex-shrink-0 mr-10'>
                            <Image src={customers.img} height={300} width={350} alt='Customer Image' />
                        </div>
                        <div className=''>
                            <p className='font-medium text-base text-Gray'>{customers.description}</p>
                            <h3 className='text-xl font-semibold text-primary pt-3'>{customers.name}</h3>
                            <p className='font-medium text-base text-Gray pt-2'>{customers.detail}</p>
                            <div className='flex justify-between items-center mt-4 pt-6'>
                                <div className='flex justify-between items-center gap-10'>
                                    {ClientLogo.map((logo, logoIndex) => (
                                    <Image key={logoIndex} src={logo} height={40} width={40} alt='Client Logo' />
                                    ))}
                                </div>
                                <div className='flex font-semibold text-xl'>
                                    <h3 className='text-primary'>Meet all Customers</h3>
                                    <Image src="/assets/Right.svg" height={20} width={20} alt='Arrow Right' />
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Customers
