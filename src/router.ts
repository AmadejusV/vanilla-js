import { fillCoffeeData } from "./dataFillers/coffeeFillers";
import { FormExercise } from "./pages/FormExercise";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

type Routes = {
  [key: string]: () => HTMLElement;
};

const routes: Routes = {
  "404": PageNotFound,
  "/": Home,
  "/form": FormExercise,
};

export const route = (eventParam: any) => {
  const event = eventParam || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

export const handleLocation = async () => {
  const path = window.location.pathname;
  const pageComponent = routes[path] || routes["404"];
  const elementByRoute = pageComponent();

  const mainElement = document.getElementById("my-router");
  if (mainElement) {
    mainElement.replaceChildren(elementByRoute);
  }

  //Fill data when on home page
  if (path === "/") {
    fillCoffeeData();
  }
};

export const Router = () => {
  const router = document.createElement("div");
  router.setAttribute("id", "my-router");

  return router;
};

export const initRouter = () => {
  window.onpopstate = handleLocation;
  handleLocation();
};
