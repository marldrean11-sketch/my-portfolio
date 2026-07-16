console.log("Welcome to my Portfolio!")
const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeToggle.textContent="☀️";

    }else{

        themeToggle.textContent="🌙";

    }

});