// This script is for controlling the hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// This script is for copyright 
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright © ${currentYear} Gosub All Rights Reserved.`;
    document.getElementById("copyright").textContent = copyrightText;
});