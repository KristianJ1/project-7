const features = document.querySelector(".features");

const dropdown = document.querySelector(".dropdownone");

const arrowone = document.querySelector(".arrowone");

const arrowtwo = document.querySelector(".arrowtwo");

const company = document.querySelector(".company");

const dropdowntwo = document.querySelector(".dropdowntwo");

features.addEventListener("click", function(){
    if(dropdown.classList.contains("display-none")){
        dropdown.classList.remove("display-none");
        arrowone.src = "images/icon-arrow-up.svg"
    } else{
        dropdown.classList.add("display-none");
        arrowone.src = "images/icon-arrow-down.svg"
    }
})

company.addEventListener("click", function(){
    if(dropdowntwo.classList.contains("display-none")){
        dropdowntwo.classList.remove("display-none");
        arrowtwo.src = "images/icon-arrow-up.svg"
    } else{
        dropdowntwo.classList.add("display-none");
        arrowtwo.src = "images/icon-arrow-down.svg"
    }
})

var hamb = document.querySelector(".hamburger");

var right = document.querySelector(".right");  

var left = document.querySelector(".left");


hamb.addEventListener("click", function(){
    hamb.classList.toggle("active");
    right.classList.toggle("active");
    left.classList.toggle("active");
})



var login = document.querySelector(".login");

var register =  document.querySelector("register");


features.addEventListener("click", function(){
    if(window.innerWidth <= 768){
            features.classList.toggle("activeone");
            login.classList.toggle("activeone");
            register.classList.toggle("activeone");
    }})
    

company.addEventListener("click", function(){
    if(window.innerWidth <= 768){
    company.classList.toggle("activetwo");
    login.classList.toggle("activetwo");
    register.classList.toggle("activetwo");
}})



