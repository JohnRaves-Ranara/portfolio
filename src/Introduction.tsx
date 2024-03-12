import StackIcon from "tech-stack-icons";
import person from "./assets/me_1 - Copy.jpg";

export default function Introduction() {
  return (
    <div className="grid place-items-center lg:py-[8rem] h-dvh">
      <div className="flex flex-col gap-[4rem] mt-28 lg:mt-8 px-[1.5rem]">
        <div className="flex flex-col lg:gap-[6rem] gap-8 lg:flex-row-reverse transition-all duration-200">
          <img src={person} alt=""
          className="mx-auto md:h-[20rem] md:w-[20rem] h-[18rem] w-[18em] object-cover border-solid border-black border-[3px] hero-animated"
          />
          <div className="flex items-center max-w-[37rem]">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <h1 className="leading-[3.5rem] lg:leading-[4.5rem] text-[2.5em] sm:text-[3rem] lg:text-[4rem] font-hnd-black">
                Hello, I'm Raves
              </h1>
              <p className="text-[20px] text-[#555] font-hnd-thin">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea accusamus repellendus excepturi placeat iusto! 📍
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
          <StackIcon name="flutter" className="h-[3rem] mobile-s:h-[2.5rem]" />
          <StackIcon name="html5" className="h-[3rem] mobile-s:h-[2.5rem]" />
          <StackIcon name="css3" className="h-[3rem] mobile-s:h-[2.5rem]" />
          <StackIcon name="js" className="h-[3rem] mobile-s:h-[2.5rem]" />
          <StackIcon name="tailwindcss" className="h-[3rem] mobile-s:h-[2.5rem]" />
        </div>
      </div>
    </div>
  );
}
