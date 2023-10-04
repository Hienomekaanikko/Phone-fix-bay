
let text = document.getElementById('text');
let s22 = document.getElementById('s22');
let zFlip = document.getElementById('zFlip');
let a50 = document.getElementById('a50');
let iPhone11 = document.getElementById('iPhone11');
let iPhone11Pro = document.getElementById('iPhone11Pro');
let iPhone12 = document.getElementById('iPhone12');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.top = 50 + value * 0.01 + '%';
    s22.style.left = value * 0.6 + 'px';
    zFlip.style.left = value * 0.5 + 'px';
    a50.style.left = value * 0.8 + 'px';
    iPhone11.style.left = value * -1 + 'px';
    iPhone11Pro.style.left = value * -0.5 + 'px';
    iPhone12.style.left = value * -0.6 + 'px';
    s22.style.top = value * 0.5 + 'px';
    zFlip.style.top = value * 0.5 + 'px';
    a50.style.top = value * 0.5 + 'px';
    iPhone11.style.top = value * 0.5 + 'px';
    iPhone11Pro.style.top = value * 0.5 + 'px';
    iPhone12.style.top = value * 0.5 + 'px';
})

let availableKeywords = [
    'bootloop',
    'touch-id',
    'glue',
    'microphone',
    'not charging',
    'black screen',
    'blurry front-camera',
    'ear-speaker not working',
    'proximity sensor not working',
    'face-id',
    'apple-pay',
    'lines on a screen',
    'display not fitting',
    'side buttons',
    'frozen screen',
    'apple update not going through',


]

const keywordToPage = {
    'bootloop': './tips.html',
    'touch-id': './touch-id.html',
    'glue': './glue.html',
    'microphone': './microphone.html',
    'not charging': './notcharging.html',
    'black screen': './blackscreen.html',
    'blurry front-camera': './frontcamera.html',
    'ear-speaker not working': './earspeaker.html',
    'proximity sensor not working': './proxy.html',
    'face-id': './faceid.html',
    'apple-pay': './applepay.html',
    'lines on a screen': './lines.html',
    'display not fitting': './display.html',
    'side buttons': './sidebuttons.html',
    'frozen screen': './frozenscreen.html',
    'apple update not going through': './failedupdate.html',

}

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toUpperCase().includes(input.toUpperCase());
        });
        console.log(result);
    }
    display(result);
    if (!result.length) {
        resultsBox.innerHTML = '';
    }
};


function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}


function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

function selectInput(list) {
    const selectedKeyword = list.innerHTML;
    inputBox.value = selectedKeyword;
    resultsBox.innerHTML = '';

    // Check if the selected keyword has a corresponding page and redirect if needed
    if (keywordToPage[selectedKeyword]) {
        window.location.href = keywordToPage[selectedKeyword];
    }
}


// JavaScript for mobile menu interaction
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('header ul');

mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScript to toggle the mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
