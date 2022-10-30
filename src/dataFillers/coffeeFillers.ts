import { CoffeeCard } from "../components/coffeeCard";
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

    filtered.forEach(e => section.appendChild(CoffeeCard(e)));

    if(filtered.length > 0) {
        mainArticle.textContent = '';
        mainArticle.appendChild(section);
    } else {
        mainArticle.textContent = 'No data found...';
    }
};