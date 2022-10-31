import { AsideCoffee } from "./asideCoffee";

export const Main = () => {
    const main = document.createElement('main');
    const article = document.createElement('article');
    const aside = AsideCoffee();
    
    article.classList.add('main-article');
    article.setAttribute('id', 'main-article')
    aside.classList.add('main-aside');
    
    article.textContent = 'this the article';
    
    main.appendChild(article);
    main.appendChild(document.createElement('hr'));
    main.appendChild(aside);

    return main;
};