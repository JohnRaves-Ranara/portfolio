import StackIcon from "tech-stack-icons";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Typhoonista",
    description:
      "Typhoonista is our Bachelor's Degree thesis and is a dashboard web-app that aims to aid the Department of Agriculture by providing damage cost forecasts of typhoon-induced rice crop damages using various ML models. I was responsible for the frontend and database-side backend of the website.",
    techstack: ["Flutter", "Firebase"],
    isMobile: false,
    images: ["src/assets/typhoonista_banner.png"],
    bgColor: "blue",
    repo: "https://github.com/JohnRaves-Ranara/typhoonista_",
    link: "",
    id: 1,
  },
  {
    name: "VisioLife",
    description: "VisioLife is a mobile-app project I made for my Software Engineering 1 and 2 course. It is a vision board app that helps users keep track of their long-term and short-term life goals. It also features a virtual pet companion the user can upgrade by completing their goals.",
    techstack: ["Flutter", "Firebase"],
    isMobile: true,
    images: [
      "src/assets/Screenshot_1710619145.png",
      "src/assets/Screenshot_1710617644.png",
    ],
    bgColor: "red",
    repo: "https://github.com/JohnRaves-Ranara/VisioLife",
    link: "https://johnraves-ranara.github.io/band-website/",
    id: 2,
  },
  {
    name: "Band Website",
    description: "A personal project website that features the famous albums of one of my favorite indie bands—Far Caspian. This site also has its own music player where you can listen to each track. I built this site to enhance my knowledge in manipulating the DOM with Javascript.",
    techstack: ["HTML", "CSS", "Javascript"],
    isMobile: false,
    images: ["src/assets/bandwebsite-snapshot.png"],
    bgColor: "lime",
    repo: "https://github.com/JohnRaves-Ranara/band-website",
    link: "https://johnraves-ranara.github.io/band-website/",
    id: 3,
  },
  {
    name: "Gympulse",
    description: "A workout app I made for keeping track of the sequence of my workouts. ",
    techstack: ["Flutter", "Hive"],
    isMobile: true,
    images: [
      "src/assets/localhost_53943_ (2).png",
      "src/assets/localhost_53943_ (1).png",
    ],
    bgColor: "green",
    repo: "https://github.com/JohnRaves-Ranara/workout_app",
    link: "https://johnraves-ranara.github.io/band-website/",
    id: 4,
  },
];

export default function Projects() {
  return (
    <>
      <div id="projects-section" className="px-6 mx-auto mt-32 mb-16 max-w-fit">
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
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </>
  );
}
