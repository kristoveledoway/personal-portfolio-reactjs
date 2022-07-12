import Button from "./Button"

const Banner = () => {
    return (
        <div className="lg:mx-36 mx-6">
            <div className="md:flex items-center justify-between py-16">
                <div>
                    <h1 className="text-white text-[2rem] md:text-[4rem] font-medium text-center md:text-start">Kristovel Edoway</h1>
                    <p className="text-[#9c9c9c] md:w-[28rem] mt-4 text-lg">
                        Saya adalah Backend Developer. Mengelola data anda menjadi sebuah website, menjamin ke efesiensi dalam kinerja dimana anda bekerja.
                    </p>
                    <Button text={"Mari Mulai"} className="mt-6 shadow-md shadow-[#3F8E00] bg-gradient-to-r hover:bg-gradient-to-l from-[#3F8E00] to-[#1b6dba] hover:animate-bounce" />
                </div>
            </div>
        </div>
    )
}

export default Banner