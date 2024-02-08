function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function OpenLinkedIn() {
    window.open("https://www.linkedin.com/in/amer-bečić-330076242", "_blank");
}

function OpenGitHub() {
    window.open("https://github.com/AmerBecic", "_blank");
}