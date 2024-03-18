import StackIcon from "tech-stack-icons";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "VisioLife",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter",  "Firebase"],
    isMobile: true,
    images: [
      "src/assets/Screenshot_1710619145.png",
      "src/assets/Screenshot_1710617644.png",
    ],
    bgColor: 'bg-red-200',
    id: 1,
  },
  {
    name: "Typhoonista",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter", "Firebase"],
    isMobile: false,
    images: ["src/assets/typhoonista_banner.png"],
    bgColor: 'bg-blue-200',
    id: 2,
  },
  {
    name: "Gympulse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium, rem perferendis a perspiciatis suscipit! Alias iusto distinctio explicabo ea ducimus quisquam deserunt odio tempora",
    techstack: ["Flutter" ,"Hive"],
    isMobile: true,
    images: [
      "src/assets/localhost_53943_ (2).png",
      "src/assets/localhost_53943_ (1).png",
    ],
    bgColor: 'bg-green-200',
    id: 3,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-24 py-8">
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
  );
}
