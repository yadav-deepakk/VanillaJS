document.querySelector(".close-side-bar").addEventListener("click", () => sideBarToggler("none"));
document.querySelector(".hamburger-menu").addEventListener("click", () => sideBarToggler("block"));
const sideBarToggler = (displayProp) => document.querySelector(".side-bar-bg").style.display = displayProp;