import BackendSkills from "./skills/BackendSkills";
import DevopsSkills from "./skills/DevopsSkills";
import FrontendSkills from "./skills/FrontendSkills";

const contentData = [
  {
    id: "frontend",
    title: "Front-End",
    component: FrontendSkills,
    items: [
      { id: "react", label: "React" },
      { id: "typescript", label: "Typescript" },
      { id: "tailwind-css", label: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    component: BackendSkills,
    items: [
      { id: "dotnet", label: ".Net" },
      { id: "nodejs", label: "Node.js" },
    ],
  },
  {
    id: "devops",
    title: "Devops",
    component: DevopsSkills,
    items: [
      { id: "docker", label: "Docker" },
      { id: "aws", label: "AWS" },
      { id: "jenkins", label: "Jenkins" },
      { id: "github-actions", label: "Github Actions" },
    ],
  },
];

export default contentData;
