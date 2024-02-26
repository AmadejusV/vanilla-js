import { AsideCoffee } from "../components/asideCoffee";
import { MainArticle } from "../components/mainArticle";
import { fillCoffeeData } from "../dataFillers/coffeeFillers";

export const Home = () => {
  const main = document.createElement("main");
  const article = MainArticle();
  const aside = AsideCoffee();

  main.appendChild(article);
  main.appendChild(document.createElement("hr"));
  main.appendChild(aside);

  fillCoffeeData();
  return main;
};
