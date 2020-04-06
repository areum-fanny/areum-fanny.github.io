
const theBody = document.querySelector('body');
const topButton = document.querySelector(".top");
const centerbutton = document.querySelector(".center");
const bottombutton = document.querySelector(".bottom");
let toptext = document.querySelector('#toptext');
let centertext= document.querySelector('#centertext');
let bottomtext = document.querySelector('#bottomtext');
topButton.addEventListener('click', topClicked);
bottombutton.addEventListener('click', bottomClicked);
centerbutton.addEventListener('click', centerClicked);

function topClicked() {
 toptext.style.color = "pink";
 topButton.style.backgroundColor = "black";
 toptext.textContent = "The internet and social media such as facebook and instagram has turned our lives connected with people across the world!"
 theBody.style.backgroundRepeat = "repeat-x";
}

function bottomClicked() {
    bottomtext.style.color = "pink";
    bottombutton.style.backgroundColor = "black";
    bottomtext.textContent = "The internet has also made us connected but has also led to data privacy issues. Whatever you post online stays online forever!";
    theBody.style.backgroundRepeat = "unset";
}

function centerClicked() {
    centertext.style.color = "pink";
    theBody.style.backgroundRepeat = "repeat-y";
}