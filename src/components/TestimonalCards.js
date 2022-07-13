import React from 'react'
import ProfilImage from '../assets/3.jpg'

const TestimonalCards = () => {
    return (
        <div className='relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8'>
            <img src='https://ksets.netlify.app/personal/quote.png' alt='' className='absolute -top-3' />
            <p className='text-[#9c9c9c] text-start'>
                Enim pariatur qui velit amet est consectetur sint. do ipsum. Adipisicing ex consequat id aliqua proident labore Lorem.
            </p>
            <div className='flex items-center space-x-2'>
                <span>
                    <img className="h-[3rem] w-[3rem] rounded-full bg-cover" src={ProfilImage} alt="my profil" />
                </span>
                <p className='text-white text-lg font-medium'>Kristovel Edoway</p>
            </div>
        </div>
    )
}

export default TestimonalCards