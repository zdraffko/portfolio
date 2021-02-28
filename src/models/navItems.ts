export interface INavItem {
    link: string;
    label: string;
}

export const appNavItems: INavItem[] = [
  { link: "#home", label: "home" },
  { link: "#projects", label: "projects" },
  { link: "#about", label: "about" },
  { link: "#contact", label: "contact" },
];
