export const Main = () => {
    const main = document.createElement('main');
    const article = document.createElement('article');
    const aside = document.createElement('aside');
    article.classList.add('main-article');
    aside.classList.add('main-aside');

    article.textContent = 'this the article';
    aside.textContent = 'this just some aside';

    main.appendChild(article);
    main.appendChild(document.createElement('hr'));
    main.appendChild(aside);

    return main;
};