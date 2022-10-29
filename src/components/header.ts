import { INavItem } from "./nav";
import { Nav } from "./nav";


const headerNavItems: INavItem[] = [
    { title: 'Link 1', href: 'link1'},
    { title: 'Link 2', href: 'link2'},
    { title: 'Link 3', href: 'link3'},
    { title: 'Link 4', href: 'link4'},
];

export const Header = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(Nav(headerNavItems, 'header-nav'));

    return header;
};