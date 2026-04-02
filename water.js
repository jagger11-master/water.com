let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide-img");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    if (slides.length > 0) {
        slides[slideIndex - 1].classList.add("active");
    }
    
    setTimeout(showSlides, 3000);
}

showSlides();

const menuToggle = document.getElementById('nav-check');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            navMenu.classList.add('active');
        } else {
            navMenu.classList.remove('active');
        }
    });
}

function submitIssue() {
    const input = document.getElementById('userInput');
    if (input && input.value.trim() !== "") {
        alert("Issue submitted");
        input.value = "";
    }
}
