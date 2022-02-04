//Entry point into the app. Modules are getting imported to index.js. 

//1. Create a default export module

document.querySelector('.toggle-icon').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
    });