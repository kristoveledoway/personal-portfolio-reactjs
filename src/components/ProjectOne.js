import React from 'react'
import Button from './Button'
import ProfilImage from "../assets/3.jpg"

const ProjectOne = ({ flip, button }) => {
    return (
        <div className={`lg:flex ${flip && "flex-row-reverse"} px-6 md:px-36 mb-12 w-full space-x-4`}>
            <div className='flex-1 flex flex-col justify-around h-80 px-6'>
                <h1 className='text-black text-[2rem] font-medium'>Web App</h1>
                <p className='text-[#9c9c9c]'>
                    Amet proident aliquip aute in dolor duis fugiat excepteur nisi elit nulla amet veniam. Velit excepteur adipisicing ea nostrud et ad veniam id aliquip ullamco aute dolore. Id occaecat id sint fugiat pariatur sint aute non consectetur. Est quis ea in cillum culpa minim consequat deserunt mollit et consequat esse culpa. In et consequat ipsum incididunt eu labore. Ut minim cupidatat adipisicing laborum nostrud cupidatat elit non qui et cillum culpa mollit eu.
                </p>
                <Button text={"View Project"} className={`${button} px-10 w-fit py-2`} />
            </div>
            <div>
                <img className="h-80 flex-1 rounded-lg bg-cover animate-pulse" src={ProfilImage} alt="my profil" />
            </div>
        </div>
    )
}

export default ProjectOne