import { ICoffeeItem } from "../models/coffee";
import { CoffeeProduct } from "../models/product";

export const CoffeeCard = (coffeeItem: ICoffeeItem) => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const textSection = document.createElement('section');
    const title = document.createElement('h3');
    const p = document.createElement('p');

    article.classList.add('coffee-card');

    const coffeeWithInfo = CoffeeProduct(
        coffeeItem.title, 
        coffeeItem.id, 
        coffeeItem.image,
        coffeeItem.description, 
        coffeeItem.ingredients
    );

    img.src = coffeeWithInfo.image;
    img.alt = coffeeWithInfo.title;
    title.textContent = coffeeWithInfo.title;
    p.textContent = coffeeWithInfo.description;

    article.addEventListener('click', () => {
        coffeeWithInfo.logCoffee();
        coffeeWithInfo.prototypicallyInherited();
    });

    article.appendChild(img);
    textSection.appendChild(title);
    textSection.appendChild(p);
    article.appendChild(textSection);
    
    return article;
};