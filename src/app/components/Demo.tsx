import React from 'react'
import Button from './sub-component/Button'

const Demo = () => {
  return (
    <>
        <div className='py-10 bg-silver'>
            <div className='mx-24'>
                <div className=' flex flex-col justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='text-6xl font-semibold text-black'>Pellentesque suscipit <br/> fringilla libero eu.</h1>
                    </div>
                    <div className='pt-9'>
                        <Button type='button' title='Get a demo' varient='readmore'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Demo