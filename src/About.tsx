
import image from './assets/about.jpg'
import Example from './SampleDialog'

export default function About()  {
    return (
        <section id="about-section" className="flex flex-col items-center justify-center px-8 py-24 lg:flex-row bg-[#f9f9f9]">
            <div className="gap-8 flex flex-col lg:gap-12 lg:flex-row items-center justify-center max-w-[65rem]">
                <img src={"https://i.animepahe.ru/snapshots/7df622c5b798887638e8dd691943d0009860f0b1192ede800510d6d4b9184e08.jpg"} alt="" className='block w-full max-w-[450px] rounded-xl' />
                <div className='flex flex-col gap-3'>
                    <h1 className="text-[1.1rem] text-blue-400 font-hnd-black leading-[2rem] text-center lg:text-start">ABOUT ME</h1>
                    <h1 className='text-[1.3rem] font-hnd-black leading-[2rem] text-center lg:text-start'>Computer Science Student, Aspiring Software Engineer based in Davao, Philippines 📍</h1>
                    <p className='text-center lg:text-start font-hnd-thin text-[18px]'>Hey, I'm John Raves, and I'm a graduating CS student with strong passion for building real world applications.</p>
                    <p className='text-center lg:text-start font-hnd-thin text-[18px]'>I specialize on the frontend with React and the Javascript ecosystem</p>
                </div>
            </div>
            <Example/>
        </section>
    )
}