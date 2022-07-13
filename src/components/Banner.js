import Button from "./Button"
import ProfilImage from "../assets/3.jpg"
import Stack from "./Stack"
import { FaLaravel, FaReact } from "react-icons/fa"
import { SiCodeigniter, SiGithub, SiMysql } from "react-icons/si"
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <div className="lg:mx-36 mx-6">
            <div className="md:flex items-center justify-between py-16">
                <div>
                    <Fade bottom>
                        <h1 className="text-white text-[2rem] md:text-[4rem] font-medium text-center md:text-start">Kristovel Edoway</h1>
                    </Fade>
                    <Fade bottom>
                        <p className="text-[#9c9c9c] md:w-[28rem] mt-4 text-lg">
                            Saya adalah Backend Developer. Mengelola data anda menjadi sebuah website, menjamin ke efesiensi dalam kinerja dimana anda bekerja.
                        </p>
                        <Button text={"Mari Mulai"} className="mt-6 shadow-md shadow-[#3F8E00] bg-gradient-to-r hover:bg-gradient-to-l from-[#3F8E00] to-[#1b6dba] hover:animate-bounce" />
                    </Fade>
                </div>
                <Fade right>
                    <div className="flex items-center justify-center">
                        <img className=" xl:h-[25rem] h-[20rem] w-[20rem] xl:w-[25rem] rounded-full bg-cover mt-14 md:mt-0 animate-pulse" src={ProfilImage} alt="my profil">
                        </img>
                    </div>
                </Fade>
            </div>
            <div className="pb-16 flex flex-col items-center md:items-start">
                <Fade bottom>
                    <p className="text-white">Worked With</p>
                </Fade>
                <Fade bottom>
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <Stack Icon={FaReact} name="React JS" />
                        <Stack Icon={FaLaravel} name="Laravel" />
                        <Stack Icon={SiCodeigniter} name="Codeigniter" />
                        <Stack Icon={SiMysql} name="Mysql" />
                        <Stack Icon={SiGithub} name="Github" />
                    </div>
                </Fade>
            </div>
        </div >
    )
}

export default Banner