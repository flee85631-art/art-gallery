
const button = document.querySelector('.btn');

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Navigating to:', link.textContent);
    });
});

console.log("Welcome to Saman's Art Studio!");
