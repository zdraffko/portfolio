export interface INavItem {
    link: string;
    label: string;
}

export const appNavItems: INavItem[] = [
  { link: "#home", label: "home" },
  { link: "#about", label: "about" },
  { link: "#projects", label: "projects" },
  { link: "#contact", label: "contact" },
];
