import StackIcon from "tech-stack-icons";
import person from "./assets/me.jpg";

export default function Introduction() {
  return (
    <div className="grid place-items-center lg:py-[8rem] h-dvh">
      <div className="flex flex-col gap-[4rem] mt-28 lg:mt-8 px-[1.5rem]">
        <div className="flex flex-col lg:gap-[10rem] gap-8 lg:flex-row-reverse transition-all duration-200">
          <img
            src={person}
            alt=""
            className="mx-auto md:h-[20rem] md:w-[20rem] h-[18rem] w-[18em] object-cover border-solid border-black border-[3px] rounded-[50%]"
          />
          <div className="flex items-center max-w-[37rem]">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <h1 className="leading-[3.5rem] lg:leading-[4.5rem] text-[2.6em] lg:text-[3.4rem] font-bold">
                Computer Science Student
              </h1>
              <p className="text-[20px] font-sans text-[#555]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea accusamus repellendus excepturi placeat iusto! 📍
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
          <StackIcon name="flutter" className="stack-icon" />
          <StackIcon name="html5" className="stack-icon" />
          <StackIcon name="css3" className="stack-icon" />
          <StackIcon name="js" className="stack-icon" />
          <StackIcon name="tailwindcss" className="stack-icon" />
        </div>
      </div>
    </div>
  );
}
