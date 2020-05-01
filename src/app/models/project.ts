import projectCategories from "../constants/projectCategories";

export interface IProject {
    name: string;
    description: string;
    technologies: string[];
    sourceCodeLink: string;
    livePreviewLink?: string;
    categories: string[];// constants
}

export const appProjects: IProject[] = [
  {
    name: "Portfolio",
    description: "A single-page application I use as my portfolio.",
    technologies: ["React", "TypeScript"],
    sourceCodeLink: "https://github.com/zdraffko/portfolio",
    categories: [projectCategories.REACT_TS]
  },
  {
    name: "Event Planner",
    description: "A single-page application where users can log in, register, create and manage events.",
    technologies: ["React", "TypeScript", "ASP.NET Core", "EF Core", "Microsoft SQL Server"],
    sourceCodeLink: "https://github.com/zdraffko/EventPlanner",
    categories: [projectCategories.REACT_TS, projectCategories.ASPNET]
  },
  {
    name: "Top Laptop",
    description: "An ASP.NET Core MVC application where users can log in, register, create and manage laptop listings.",
    technologies: ["ASP.NET Core", "EF Core", "Microsoft SQL Server"],
    sourceCodeLink: "https://github.com/zdraffko/TopLaptop",
    categories: [projectCategories.ASPNET]
  },
  {
    name: "EMS",
    description: "An ASP.NET Core MVC application where managers can manage their employees.",
    technologies: ["ASP.NET Core", "EF Core", "Microsoft SQL Server"],
    sourceCodeLink: "https://github.com/zdraffko/EMS",
    categories: [projectCategories.ASPNET]
  },
  {
    name: "Virtual Sensor",
    description: "A single-page application calculating death probability in a car crash.",
    technologies: ["React", "JavaScript"],
    sourceCodeLink: "https://github.com/zdraffko/car-crash-virtual-sensor",
    livePreviewLink: "https://zdraffko.github.io/car-crash-virtual-sensor/",
    categories: [projectCategories.REACT_JS]
  },
  {
    name: "Burger Builder",
    description: "A single-page application where users can create and buy burgers.",
    technologies: ["React", "JavaScript"],
    sourceCodeLink: "https://github.com/zdraffko/burger-builder",
    livePreviewLink: "https://zdraffko.github.io/burger-builder/",
    categories: [projectCategories.REACT_JS]
  }
];
