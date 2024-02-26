import { fillChuckJokeData } from "../dataFillers/coffeeFillers";
import { ChuckJokeArticle } from "./chuckJokeArticle";

export const AsideCoffee = () => {
  const aside = document.createElement("aside");
  const title = document.createElement("h3");
  const section = document.createElement("section");
  const chuckJokeArticle = ChuckJokeArticle();

  aside.id = "aside-coffee";
  aside.classList.add("main-aside");
  section.classList.add("entertainment-section");
  title.textContent = "Something to enjoy by your coffee :}";

  aside.appendChild(title);
  aside.appendChild(section);
  section.appendChild(chuckJokeArticle);

  return aside;
};
