import { ICoffeeItem } from "../models/coffee";
import { getData } from "../services/coffeeService";

export const fillCoffeeData = async () => {
    const mainArticle = document.querySelector('.main-article');
    if(!mainArticle) return;

    mainArticle.textContent = 'Loading...';

    const data: ICoffeeItem[] = await getData('https://api.sampleapis.com/coffee/hot');
    const filtered = data.filter(item => item.image && item.title !== 'string');

    console.log('filteredItems', filtered);

    const section = document.createElement('section');
    const coffeeList: HTMLElement[] = [];

    filtered.forEach(e => {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const title = document.createElement('title');
        const p = document.createElement('p');

        img.src = e.image;
        img.alt = e.title;
        title.textContent = e.title;
        p.textContent = e.description;

        article.appendChild(img);
        article.appendChild(title);
        article.appendChild(p);
        section.appendChild(article);
    });

    if(filtered.length > 0) {
        mainArticle.textContent = '';
        mainArticle.appendChild(section);
    } else {
        mainArticle.textContent = 'No data found...';
    }
};