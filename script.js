// Typewriter Effect Code (Already Present)
const typewriter = document.getElementById('typewriter');
const skills = [
    "Advanced Python Developer.",
    "Web Developer.",
    "Android Developer.",
    "IoT Enthusiast.",
    "Aspiring CEO."
];

let index = 0;
let skillIndex = 0;
let currentSkill = "";

function type() {
    if (skillIndex < skills[index].length) {
        currentSkill += skills[index][skillIndex];
        typewriter.textContent = currentSkill;
        skillIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (skillIndex > 0) {
        currentSkill = currentSkill.slice(0, -1);
        typewriter.textContent = currentSkill;
        skillIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % skills.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.fontSize = '18px';
            link.style.color = '#f0a500';
        });

        link.addEventListener('mouseout', () => {
            link.style.fontSize = '14px';
            link.style.color = '#aaa';
        });
    });
});
