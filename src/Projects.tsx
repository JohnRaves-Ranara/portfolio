import StackIcon from "tech-stack-icons";

const projects = [
  {
    name: "VisioLife",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter, Firebase"],
    isMobile: true,
    images: [],
  },
  {
    name: "Typhoonista",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter, Firebase"],
    isMobile: false,
    image: [],
  },
  {
    name: "Gympulse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter, Hive"],
    isMobile: true,
    image: [],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center py-8 ">
      <div className="flex flex-col items-center gap-12 mx-6 lg:gap-24 lg:flex-row">
        {/* {image container} */}
        <section className="rounded-[10px] flex flex-row gap-4 p-4 bg-blue-300 max-w-[320px]">
          <div className="border-solid border-black rounded-[15px] border-2 bg-cover relative overflow-hidden">
            <div className="h-[5px] w-[20px] absolute top-0 bg-black left-[50%] translate-x-[-50%] rounded-b-md"></div>
            <img
              src="src/assets/Screenshot_1710619145.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="border-solid border-black rounded-[15px] border-2 bg-cover relative overflow-hidden">
            <div className="h-[5px] w-[20px] absolute top-0 bg-black left-[50%] translate-x-[-50%] rounded-b-md"></div>
            <img
              src="src\assets\Screenshot_1710617644.png"
              alt=""
              className="w-full"
            />
          </div>
        </section>

        {/* {project information} */}
        <section className="text-center max-w-[300px] ">
          {/* {name and description} */}
          <h1 className="mb-5 text-xl font-hnd-bold">VisioLife</h1>
          <p className="mb-5 text-base font-hnd-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sequi
            mollitia quia fuga illo aut, animi sunt debitis incidunt consequatur
            harum porro repudiandae dicta explicabo!
          </p>
          {/* {tech stack} */}
          <div className="flex justify-center gap-4 text-base font-hnd-bold">
            <h1>Flutter</h1>
            <h1>Firebase</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
