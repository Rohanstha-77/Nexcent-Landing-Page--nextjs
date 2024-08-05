import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type cardProps={
    img: string,
    title: string,
}
const Card = ({img,title}:cardProps) => {
  return (
    <>
        <div className='relative rounded-md'>
            <Image src={img} height={400} width={400} alt='image not found'/>
            <div className='p-4 w-10/12 shadow-xl text-center flex flex-col justify-center items-center bg-silver absolute left-12 top-3/4  rounded-lg'>
                <h1 className='font-semibold text-xl text-Gray'>{title}</h1>
                <Link href='/' className='text-primary p-4 mt-4'>
                    Read more &arr;
                </Link>
            </div>
        </div>
    </>
  )
}

export default Card