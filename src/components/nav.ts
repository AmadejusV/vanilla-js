
export interface INavItem {
    title: string;
    href: string;
};

export const Nav = (navContent: INavItem[], className: string) => {
    const nav = document.createElement('nav');
    nav.classList.add(className);
    const linkList = document.createElement('ul');

    navContent.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        li.appendChild(link);
        link.innerHTML = item.title;
        link.href = item.href;

        linkList.appendChild(li);
    });

    nav.appendChild(linkList);

    return nav;
};