export const MainArticle = (className?: string) => {
  const article = document.createElement("article");
  article.classList.add(className ? className : "main-article");
  article.setAttribute("id", "main-article");

  return article;
};
