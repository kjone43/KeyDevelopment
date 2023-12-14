// Navigation bar data
const navLinks = [
    { text: 'Home', link: '#' },
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

// Call the function to create the navigation bar
createNavBar();

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds (2000 milliseconds)
}