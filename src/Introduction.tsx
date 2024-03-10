import StackIcon from "tech-stack-icons";
import person from "./assets/me.jpg";

const Introduction = () => {
  return (
    <div className="flex flex-col mx-auto my-0 py-[5rem] h-dvh ">
      <div className="flex flex-col gap-[3.5rem]">
        <div className="flex flex-col items-center gap-3 px-8 py-4">
          <img
            src={person}
            alt=""
            className="md:h-[20rem] md:w-[20rem] h-[18rem] w-[18em] object-cover border-solid border-black border-[2px] rounded-[50%] mt-4"
          />
          <div className="flex flex-col text-center">
            <h1 className="leading-[3.5rem] text-[2.6em] font-bold mt-4">
              Computer Science Student
            </h1>
            <p className="text-[20px] font-sans text-[#555] mt-4">
              hi im raves ang comsci student na may pangarap.
              based in davao. 📍
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <StackIcon name="flutter" className="stack-icon" />
          <StackIcon name="html5" className="stack-icon" />
          <StackIcon name="css3" className="stack-icon" />
          <StackIcon name="js" className="stack-icon" />
          <StackIcon name="firebase" className="stack-icon" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
