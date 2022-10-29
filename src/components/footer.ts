export const Footer = () => {
    const footer = document.createElement('footer');
    const copyright = document.createElement('h3');
    copyright.textContent = 'Copyright something something 2022.';

    footer.appendChild(copyright);

    return footer;
};