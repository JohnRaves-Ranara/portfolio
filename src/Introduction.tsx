
import linkedin from "./assets/linkedin.svg"
import github from "./assets/github-2.svg"

import StackIcon from "tech-stack-icons";

export default function Introduction() {
  return (
    <header className="flex flex-col items-center justify-center py-8 lg:h-dvh">
      <div className="flex flex-col gap-16 px-6 mt-28 lg:mt-16">
        <div className="flex flex-col lg:gap-[6rem] gap-8 lg:flex-row-reverse transition-all duration-200">
          <div className="mx-auto hero-image md:h-[20rem] md:w-[20rem] h-[18rem] w-[18rem]"></div>
          <div className="flex items-center max-w-[37rem]">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <h1 className="leading-[3.5rem] lg:leading-[4.5rem] text-[2.5em] sm:text-[3rem] lg:text-[4rem] font-hnd-black">
                Hello, I'm Raves
              </h1> 
              <p className="text-[20px] text-[#555] font-hnd-thin">
              CS student passionate about crafting innovative software solutions. Dedicated to continuous improvement. Based in Davao, Philippines.📍
              </p>
              <div className="flex justify-center gap-6 lg:justify-start ">
                <a href="https://www.linkedin.com/in/johnraves-ranara/" target="_blank"><img src={linkedin} alt="" className="size-[30px]"/></a>
                <a href="https://github.com/JohnRaves-Ranara" target="_blank"><img src={github} alt="" className="size-[30px]"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
          {/* <img src={test} alt="" className="h-[3rem] mobile-s:h-[2.5rem]"/> */}
          <StackIcon name="flutter" className="h-[2.5rem] mobile-l:h-[3rem]" />
          <StackIcon name="html5" className="h-[2.5rem] mobile-l:h-[3rem]" />
          <StackIcon name="css3" className="h-[2.5rem] mobile-l:h-[3rem]" />
          <StackIcon name="js" className="h-[2.5rem] mobile-l:h-[3rem]" />
          <StackIcon name="tailwindcss" className="h-[2.5rem] mobile-l:h-[3rem]" />
        </div>
      </div>
    </header>
  );
}
