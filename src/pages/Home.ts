import { AsideCoffee } from "../components/asideCoffee";
import { fillCoffeeData } from "../dataFillers/coffeeFillers";

export const Home = () => {
  const main = document.createElement("main");
  const article = document.createElement("article");
  const aside = AsideCoffee();

  article.classList.add("main-article");
  article.setAttribute("id", "main-article");
  aside.classList.add("main-aside");

  main.appendChild(article);
  main.appendChild(document.createElement("hr"));
  main.appendChild(aside);

  fillCoffeeData();
  return main;
};
