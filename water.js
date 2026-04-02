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

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
});

showSlides();

function submitIssue() {
    const input = document.getElementById('userInput');
    if (input && input.value.trim() !== "") {
        alert("Issue Received");
        input.value = "";
    }
    else{
        alert("please type your issue again");
    }
}
