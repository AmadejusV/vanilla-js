import { fillChuckJokeData } from "../dataFillers/coffeeFillers";

export const ChuckJokeArticle = () => {
    const article = document.createElement('article');
    const articleTitle = document.createElement('h4');
    const joke = document.createElement('p');
    const button = document.createElement('button');
    
    joke.id = 'chuck-joke';

    button.id = 'joke-button';
    button.type = 'button';
    button.onclick = () => fillChuckJokeData();
    
    button.textContent = 'Get a joke';
    articleTitle.textContent = 'Enjoy a Chuck Norris joke!';
    article.appendChild(articleTitle);
    article.appendChild(joke);
    article.appendChild(button);

    return article;
};