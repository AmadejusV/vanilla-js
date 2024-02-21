import "./style.css";
import { Header } from "./components/header";
import { Footer as Footer } from "./components/footer";
import { initRouter, Router } from "./router";

const start = () => {
  document.body.appendChild(Header());
  document.body.appendChild(Router());
  document.body.appendChild(Footer());
};

start();
initRouter();
