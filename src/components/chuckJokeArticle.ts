import { fillChuckJokeData } from "../dataFillers/coffeeFillers";

export const ChuckJokeArticle = () => {
    const article = document.createElement('article');
    const articleTitle = document.createElement('h4');
    const joke = document.createElement('p');
    const button = document.createElement('button');
    
    joke.id = 'chuck-joke';

    button.id = 'joke-button';
    button.type = 'button';
    button.onclick = () => {
        fillChuckJokeData();
        changeButtonTextAfter1stClick();
    };
    
    button.textContent = 'Get a joke';
    articleTitle.textContent = 'Enjoy a Chuck Norris joke!';
    article.appendChild(articleTitle);
    article.appendChild(joke);
    article.appendChild(button);

    return article;
};

const changeBtnText = () => {
    let timesClicked = 0;

    return () => {
        if(timesClicked !== 0) return;
        
        const btn = document.getElementById('joke-button');
        if (btn) {
            timesClicked++;
            btn.textContent = 'Get another joke';
            console.log('Closure - timesClicked: ', timesClicked);
        }; 
    };
};

const changeButtonTextAfter1stClick = changeBtnText();