import { Fade } from "react-reveal"
import ProjectOne from "./ProjectOne"

const Project = () => {
    return (
        <div className='bg-gray-200 flex flex-col items-center'>
            <div className='text-center flex flex-col items-center pb-16 pt-12'>
                <Fade bottom>
                    <h1 className='text-black text-[3rem] font-medium'>Project</h1>
                </Fade>
                <Fade bottom>
                    <p className='text-[#9c9c9c] md:w-[35rem] text-center mx-4 mt-4'>
                        Saya membuat beberapa proyek website dibawah ini, silahkan di lihat :
                    </p>
                </Fade>
            </div>
            <Fade bottom>
                <ProjectOne button="bg-[#FFA217]" />
            </Fade>
            <Fade bottom>
                <ProjectOne flip button="bg-[#000AFF]" />
            </Fade>
            <Fade bottom>
                <ProjectOne button="bg-[#2AB090]" />
            </Fade>
        </div>
    )
}

export default Project