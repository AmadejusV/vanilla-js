import './style.css';

import { SECTION } from './components/section';
import { HEADER } from './components/header';
import { NAV } from './components/nav';
import { ASIDE } from './components/aside';
import { FOOTER } from './components/footer';

const start = () => {
    document.body.appendChild(HEADER());
    document.body.appendChild(NAV());
    document.body.appendChild(SECTION());
    document.body.appendChild(ASIDE());
    document.body.appendChild(FOOTER());
};

start();