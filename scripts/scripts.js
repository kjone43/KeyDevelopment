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


let slideIndex = 0;
const slides = document.querySelectorAll('.gallery-image');

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
  showSlide(n);
}

// Show the first image initially
showSlide(slideIndex);