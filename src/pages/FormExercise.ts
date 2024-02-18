export const FormExercise = () => {
  const main = document.createElement("main");
  const article = document.createElement("article");

  article.classList.add("main-article");
  article.setAttribute("id", "main-article");
  article.innerHTML = `This is the form page`;

  main.appendChild(article);

  return main;
};
