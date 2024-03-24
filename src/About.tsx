
export default function About()  {
    return (
        <section id="about-section" className="flex flex-col items-center justify-center px-8 py-24 lg:flex-row bg-[#f9f9f9]">
            <div className="gap-8 flex flex-col lg:gap-12 lg:flex-row items-center justify-center max-w-[65rem]">
                <img src="src/assets/about.jpg" alt="" className='block w-full max-w-[450px] rounded-xl' />
                <div className='flex flex-col gap-3'>
                    <h1 className="text-[1.1rem] text-blue-400 font-hnd-black leading-[2rem] text-center lg:text-start">ABOUT ME</h1>
                    <h1 className='text-[1.3rem] font-hnd-black leading-[2rem] text-center lg:text-start'>Computer Science Student, Aspiring Software Engineer based in Davao, Philippines 📍</h1>
                    <p className='text-center lg:text-start font-hnd-thin text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tempora nulla magnam. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </section>
    )
}