import { CoffeeCard } from "../components/coffeeCard";
import { IChuckJoke } from "../models/chuckJoke";
import { ICoffeeItem } from "../models/coffee";
import { getData } from "../services/coffeeService";

export const fillCoffeeData = async () => {
    const mainArticle = document.querySelector('.main-article');
    if(!mainArticle) return;

    mainArticle.textContent = 'Loading...';

    const data: ICoffeeItem[] = await getData('https://api.sampleapis.com/coffee/hot');
    const filtered = data.filter(item => item.image && item.image.includes('https'));

    const section = document.createElement('section');
    filtered.forEach(e => section.appendChild(CoffeeCard(e)));

    if(filtered.length > 0) {
        mainArticle.textContent = '';
        mainArticle.appendChild(section);
    } else {
        mainArticle.textContent = 'No data found...';
    }
};


export const fillChuckJokeData = async () => {
    const chuckJoke = document.getElementById('chuck-joke');
    if (!chuckJoke) return;

    chuckJoke.textContent = 'Loading...';

    const data: IChuckJoke = await getData('https://api.chucknorris.io/jokes/random');
    console.log(data);

    if (!data.value) {
        chuckJoke.textContent = 'Sorry error occured, try again :('; 
        return;
    } else {
        chuckJoke.textContent = data.value;

        const btn = document.getElementById('joke-button');
        if (btn) btn.textContent = 'Get another joke'; 
    };
};