var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

 var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
           sidemenu.style.right= "0"; 
        }
        function closemenu(){
           sidemenu.style.right= "-200px"; 
        }
        
const scriptURL = 'https://script.google.com/macros/s/AKfycbzUKRCB6Te4GvaaFGj5mClY44RKH4tMiudLNcELj8scUg2O98xrYNH2m5GUY6pkLPHN/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})  

window.onscroll = function(){
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        button.classList.add("show");
    }else{
        button.classList.remove("show");
    }
};

function scrollToTop(){
    window.scrollTo({top:0, behavior:"smooth"});
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "CYBER SECURITY ANALYST",
    "GAMER",
    "HOCKEY LOVER"
]
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000)
    }
}
function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter