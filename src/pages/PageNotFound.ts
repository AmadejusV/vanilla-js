export const PageNotFound = () => {
  const main = document.createElement("main");
  const article = document.createElement("article");
  const notFoundH3 = document.createElement("h3");

  article.classList.add("main-article");
  article.setAttribute("id", "main-article");
  notFoundH3.textContent = "404 page not found!";

  article.appendChild(notFoundH3);
  main.appendChild(article);

  return main;
};
