interface ProjectCardProps {
  name: string
  description: string
  techstack: string[]
  isMobile: boolean
  images: string[]
  id: number
  bgColor: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  techstack,
  isMobile,
  images,
  bgColor,
  id
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-12 px-4 lg:px-6 lg:gap-0 w-full lg:justify-evenly ${
        id%2==0 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      
        {/* {image/s} */}
        {isMobile ? (
          // image container
          <section className={`rounded-xl flex flex-row gap-5 p-2 max-w-[21rem] ${bgColor}`}>
            <div className="border-solid border-black rounded-[15px] border-2 relative overflow-hidden">
              <div className="h-[5px] w-[20px] absolute top-0 bg-black left-[50%] translate-x-[-50%] rounded-b-md"></div>
              <img src={`${images[0]}`} alt="" className="w-full" />
            </div>

            <div className="border-solid border-black rounded-[15px] border-2 relative overflow-hidden">
              <div className="h-[5px] w-[20px] absolute top-0 bg-black left-[50%] translate-x-[-50%] rounded-b-md"></div>
              <img src={`${images[1]}`} alt="" className="w-full" />
            </div>
          </section>
        ) : (
          // image container
          <section className={`rounded-xl flex flex-row gap-5 p-2 max-w-[30rem] ${bgColor}`}>
            <div className="border-solid border-black rounded-[10px] border-[1px] overflow-hidden">
              <img
                src={`${images[0]}`}
                alt=""
                className="w-full"
              />
            </div>
          </section>
        )}

      {/* {project information} */}
      <section className="text-center max-w-[350px]">
        {/* {name and description} */}
        <h1 className="mb-4 text-xl font-hnd-bold">{name}</h1>
        <p className="mb-4 text-base font-hnd-thin">
          {description}
        </p>
        {/* {tech stack} */}
        <div className="flex justify-center gap-4 text-base font-hnd-bold">
            {techstack.map((item, index) => (
                <h1 key={index}>{item}</h1>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
