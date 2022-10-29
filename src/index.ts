import * as _ from 'lodash';
import './style.css';
import printMe from './print';

const someDiv = () => {
    return `
    <div>
        <h1>This is h1</h1>
        <span>This is, but a span</span>
    </div>`;
};


function start() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.innerHTML += someDiv();


    return element;
}

document.body.appendChild(start());