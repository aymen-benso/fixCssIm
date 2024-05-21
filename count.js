const userName = "John Doe";
const userEmail = "john.doe@example.com";
const userPhone = "+1234567890";

const userNameText = document.getElementById("monTexte");
const userEmailText = document.getElementById("monTexte1");
const userPhoneText = document.getElementById("monTexte2");

userNameText.textContent = "User Name: " + userName;
userEmailText.textContent = "Email: " + userEmail;
userPhoneText.textContent = "Phone Number: " + userPhone;
const titresStages = document.querySelectorAll(".contenu p:nth-child(3), .contenu p:nth-child(6)");

const navigationLinks = document.querySelectorAll(".nav-link");

navigationLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior (jumping to top)

    const targetSection = document.getElementById(this.getAttribute("href"));
    const targetPosition = targetSection.offsetTop; // Get position of target section

    // Smooth scrolling using animation
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

const btnCompte = document.getElementById("btn_compt");

btnCompte.addEventListener("mouseover", () => {
  btnCompte.style.backgroundColor = "lightblue"; // Change to desired color
});

btnCompte.addEventListener("mouseout", () => {
  btnCompte.style.backgroundColor = "transparent"; // Change back to original color
});

let btnContact=document.getElementById("btnContact");
function SwitchPage(url) {
    if (url != ' ') {
         window.location =url;
    } 
} 
let btnAboutUs=document.getElementById("btnAboutUs");
let btnReturn=document.getElementById("return");
let btnService=document.getElementById("btnService");
let btnHome=document.getElementById("btnHome");
let btn_search=document.getElementById("btn_search");
function SwitchPage(url) {
    if (url != ' ') {
         window.location =url;
    } 
} 