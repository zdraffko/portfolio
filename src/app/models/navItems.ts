export interface INavItem {
    link: string;
    label: string;
}

export const appNavItems: INavItem[] = [
  { link: "#home", label: "Home" },
  { link: "#projects", label: "Projects" },
  { link: "#about", label: "About" },
  { link: "#contact", label: "Contact" },
];
