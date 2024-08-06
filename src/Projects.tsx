// import StackIcon from "tech-stack-icons";
import ProjectCard from "./ProjectCard";
import typhoonista from "./assets/typhoonista_banner.png";
import visiolife1 from "./assets/Screenshot_1710619145.png";
import visiolife2 from "./assets/Screenshot_1710617644.png";
import bandwebsite from "./assets/bandwebsite-snapshot.png";
import gym1 from "./assets/localhost_53943_ (2).png";
import gym2 from "./assets/localhost_53943_ (1).png";
import azura1 from "./assets/azurawatch_1.png";
import chainmed1 from "./assets/chainmed_1.png";
import ravesmovies1 from "./assets/raves-movies.vercel.app_.png";

const projects = [
  {
    name: "AzuraWatch",
    description:
      "An anime streaming website I made. Powered by Consumet & Anify API",
    techstack: ["React", "Vite"],
    isMobile: false,
    images: [
      `${azura1}`,
      // `${azura2}`,
    ],
    bgColor: "green",
    repo: "https://github.com/JohnRaves-Ranara/anime-fullstack-app",
    link: "",
    id: 1,
    isUnderDevelopment: true,
  },
  {
    name: "Movie Catalog Website",
    description:
      "A movie website built with NextJS and powered by TMDb API. This website lets you discover, search, filter movies by genre, and view movie details.",
    techstack: ["NextJS 14"],
    isMobile: false,
    images: [
      `${ravesmovies1}`,
      // `${azura2}`,
    ],
    bgColor: "green",
    repo: "https://github.com/JohnRaves-Ranara/MovieWebsite_tmdb-api",
    link: "https://raves-movies.vercel.app/",
    id: 2,
    isUnderDevelopment: false,
  },
  {
    name: "Chainmed Connect",
    description:
      "A patient-doctor booking appointment system deployed on the blockchain. Powered by ICP and Web3 technologies. I was one of the frontend devs out of four developers. This was our entry to the 2024 HackerHouse Davao Hackathon where we won 2nd place.",
    techstack: ["React", "Vite", "Express"],
    isMobile: false,
    images: [`${chainmed1}`],
    bgColor: "green",
    repo: "https://github.com/Samshh/Hackathon-Project---The-Launchpad",
    link: "",
    id: 3,
    isUnderDevelopment: true,
  },
  {
    name: "Typhoonista",
    description:
      "Typhoonista is our Bachelor's Degree thesis and is a dashboard web-app that aims to aid the Department of Agriculture by providing damage cost forecasts of typhoon-induced rice crop damages using various ML models. I was responsible for the frontend and database-side backend of the website.",
    techstack: ["Flutter", "Firebase"],
    isMobile: false,
    images: [`${typhoonista}`],
    bgColor: "blue",
    repo: "https://github.com/JohnRaves-Ranara/typhoonista_",
    link: "",
    id: 4,
    isUnderDevelopment: false,
  },
  {
    name: "VisioLife",
    description:
      "VisioLife is a mobile-app project I made for my Software Engineering 1 and 2 course. It is a vision board app that helps users keep track of their long-term and short-term life goals. It also features a virtual pet companion the user can upgrade by completing their goals.",
    techstack: ["Flutter", "Firebase"],
    isMobile: true,
    images: [`${visiolife1}`, `${visiolife2}`],
    bgColor: "red",
    repo: "https://github.com/JohnRaves-Ranara/VisioLife",
    link: "https://mega.nz/file/NNcCUTxI#Bs07RbmzSMY2E6parJjVD_gapEB3jB8VUW4PkZkdOBI",
    id: 5,
    isUnderDevelopment: false,
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
            isUnderDevelopment={project.isUnderDevelopment}
            name={project.name}
            description={project.description}
            techstack={project.techstack}
            isMobile={project.isMobile}
            images={project.images}
            // bgColor={project.bgColor}
            id={project.id}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </>
  );
}
