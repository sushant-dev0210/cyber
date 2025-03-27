document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });



});
//pass checker
function showPasswordInput() {
    document.getElementById("password-container").style.display = "block";
    document.getElementById("about").style.padding="5px";
}

function checkStrength() {
    var password = document.getElementById("password").value;
    var message = document.getElementById("strength-message");
    var strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {
        message.textContent = "Weak Password";
        message.className = "weak";
    } else if (strength === 3 || strength === 4) {
        message.textContent = "Medium Strength Password";
        message.className = "medium";
    } else {
        message.textContent = "Strong Password";
        message.className = "strong";
    }
}
// / window animation=====================================================
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logospan = document.querySelectorAll('.logo');




window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(() => {


       logospan.forEach((span, idx) =>{
        setTimeout(() => {
            span.classList.add('active');
        }, (idx + 1) *200)
       });


       setTimeout(() => {
         logospan.forEach((span, idx) =>{

            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);

         })   
       }, 2000);



       setTimeout(() => {
        intro.style.top = '-100vh';
       }, 1600);


    })

})


