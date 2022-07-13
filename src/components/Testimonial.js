import { Fade } from "react-reveal"
import TestimonialCards from "./TestimonalCards"

const Testimonial = () => {
    return (
        <div className='text-center flex flex-col items-center pb-16 pt-12'>
            <div className='text-center flex flex-col items-center pb-16 pt-12'>
                <Fade bottom>
                    <h1 className='text-white text-[3rem] font-medium'>Testimonials</h1>
                </Fade>
                <Fade bottom>
                    <p className='text-[#9c9c9c] md:w-[35rem] text-center mx-4 mt-4'>
                        Saya membuat beberapa proyek website dibawah ini, silahkan di lihat :
                    </p>
                </Fade>
                <div className="px-36 flex flex-wrap items-center justify-center mt-16">
                    <Fade left>
                        <TestimonialCards />
                    </Fade>
                    <Fade right>
                        <TestimonialCards />
                    </Fade>
                    <Fade left>
                        <TestimonialCards />
                    </Fade>
                    <Fade right>
                        <TestimonialCards />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Testimonial