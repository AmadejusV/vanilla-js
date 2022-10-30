import { ICoffeeItem } from "../models/coffee";

export const CoffeeCard = (coffeeItem: ICoffeeItem) => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const textSection = document.createElement('section');
    const title = document.createElement('h3');
    const p = document.createElement('p');

    article.classList.add('coffee-card');

    img.src = coffeeItem.image;
    img.alt = coffeeItem.title;
    title.textContent = coffeeItem.title;
    p.textContent = coffeeItem.description;

    article.appendChild(img);
    textSection.appendChild(title);
    textSection.appendChild(p);
    article.appendChild(textSection);
    
    return article;
};