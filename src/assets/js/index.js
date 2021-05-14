import {toggler, toggleObj} from "./variables";
import "../styles/scss/main.scss";

toggler.addEventListener("click", () => {
    if(toggleObj.classList == "fas fa-sun") {
        toggleObj.className = "fas fa-moon";
        toggleObj.style.color = "blue";
    } else {
        toggleObj.className = "fas fa-sun";
        toggleObj.style.color = "rgb(255, 189, 66)";
    }

    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll(".inverted").forEach(element => {
        element.classList.toggle("invert");
    })
});