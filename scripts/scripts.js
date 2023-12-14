// Navigation barr
const navLinks = [
    { text: 'Home', link: '#home' },
    { text: 'About', link: '#about' },
    { text: 'Services', link: '#services' },
    { text: 'Contact', link: '#contact' }
];

// Function to create the navigation bar
function createNavBar() {
    const navbar = document.getElementById('navbar');

    const ul = document.createElement('ul');
    ul.classList.add('navigation');

    navLinks.forEach(linkData => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = linkData.text;
        a.href = linkData.link;

        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);
}
createNavBar();


let imageContainer = document.getElementById('imageContainer');

function scrollRight() {
  imageContainer.scrollLeft += 100; // Change the value to control scroll distance
}

function scrollLeft() {
  imageContainer.scrollLeft -= 100; // Change the value to control scroll distance
}