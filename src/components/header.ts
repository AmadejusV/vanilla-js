import { route } from "../router";
import { INavItem } from "./nav";
import { Nav } from "./nav";

const headerNavItems: INavItem[] = [
  { title: "Home", href: "/", onClick: route },
  { title: "Form", href: "/form", onClick: route },
  {
    title: "Not found test",
    href: "/404",
    onClick: route,
  },
  { title: "Link 4", href: "link4", onClick: route },
];

export const Header = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(Nav(headerNavItems, "header-nav"));

  return header;
};
