import StackIcon from "tech-stack-icons";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "VisioLife",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter", "Firebase"],
    isMobile: true,
    images: [
      "src/assets/Screenshot_1710619145.png",
      "src/assets/Screenshot_1710617644.png",
    ],
    bgColor: "red",
    id: 1,
  },
  {
    name: "Typhoonista",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter", "Firebase"],
    isMobile: false,
    images: ["src/assets/typhoonista_banner.png"],
    bgColor: "blue",
    id: 2,
  },
  {
    name: "Band Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["HTML", "CSS", "Javascript"],
    isMobile: false,
    images: ["src/assets/bandwebsite-snapshot.png"],
    bgColor: "lime",
    id: 3,
  },
  {
    name: "Gympulse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter", "Hive"],
    isMobile: true,
    images: [
      "src/assets/localhost_53943_ (2).png",
      "src/assets/localhost_53943_ (1).png",
    ],
    bgColor: "green",
    id: 4,
  },
];

export default function Projects() {
  return (
    <>
      <div id="projects-section" className="mx-6 my-8 max-w-fit lg:mx-auto">
        <h1 className="text-[1rem] text-blue-400 font-hnd-black leading-[2rem] text-center mb-1">
          PORTFOLIO
        </h1>
        <h1 className="text-[1.2rem] font-hnd-black leading-[2rem] text-center">
          Relevant Projects I have made. A mix of personal and academic projects
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-32 py-16">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            techstack={project.techstack}
            isMobile={project.isMobile}
            images={project.images}
            bgColor={project.bgColor}
            id={project.id}
          />
        ))}
      </div>
    </>
  );
}
