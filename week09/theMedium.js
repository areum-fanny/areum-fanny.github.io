console.log("the message!");



const theButton = document.querySelector("#firstButton");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');
let playaudio = document.querySelector('audio')
let iteration = 0;
// console.log(theTxt)

theButton.addEventListener('click', isClicked);
// isClicked();
function isClicked() {
 iteration += 1;
 console.log("clicked!");
 theTxt.style.backgroundColor = "blue";
 theTxt.textContent = "you turned me blue!"
 theBody.style.backgroundColor = "yellow";
 if(iteration % 2 !== 0){
     playaudio.play();
 }
 else {
     playaudio.pause();
 }
}