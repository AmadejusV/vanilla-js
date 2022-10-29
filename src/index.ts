import './style.css';

import { Header } from './components/header';
import { Main as Main } from './components/main';
import { Footer as Footer } from './components/footer';

const start = () => {
    document.body.appendChild(Header());
    document.body.appendChild(Main());
    document.body.appendChild(Footer());
};

start();