import Image from 'next/image'
import React from 'react'
import Button from './sub-component/Button'
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
        <nav className='bg-silver'> 
            <div className='flex justify-between items-center mx-24 h-[95px]'>
                <div>
                    <Image src="/assets/logo.svg" width={150} height={35} alt='logo'/>
                </div>
                <ul className='flex justify-around'>
                    <Link href="#" className='ml-6'>Home</Link>
                    <Link href="#" className='ml-6'>Service</Link>
                    <Link href="#" className='ml-6'>Feature</Link>
                    <Link href="#" className='ml-6'>Product</Link>
                    <Link href="#" className='ml-6'>Testimonials</Link>
                    <Link href="#" className='ml-6'>FAQ</Link>
                </ul>
                <div>
                    <Button type="button" varient="login_btn" title="Login"/>
                    <Button  type='button' varient='signup_btn' title='Sign up'/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar