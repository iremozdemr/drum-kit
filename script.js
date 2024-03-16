let audio1 = new Audio("sounds/sound1.mp3");
let audio2 = new Audio("sounds/sound2.mp3");
let audio3 = new Audio("sounds/sound3.mp3");
let audio4 = new Audio("sounds/sound4.mp3");
let audio5 = new Audio("sounds/sound5.mp3");
let audio6 = new Audio("sounds/sound6.mp3");
let audio7 = new Audio("sounds/sound7.mp3");

const index = document.querySelectorAll(".drum").length;

for(let i = 0; i<index; i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

function handleClick(){
    if(this.innerHTML == "w"){
        audio1.play();
    }
    if(this.innerHTML == "a"){
        audio2.play();
    }
    if(this.innerHTML == "s"){
        audio3.play();
    }
    if(this.innerHTML == "d"){
        audio4.play();
    }
    if(this.innerHTML == "j"){
        audio5.play();
    }
    if(this.innerHTML == "k"){
        audio6.play();
    }
    if(this.innerHTML == "l"){
        audio7.play();
    }
    console.log(this.innerHTML);
}

document.addEventListener("keydown",handleKey);

function handleKey(event){
    let key = event.key;
    if(key == "w"){
        audio1.play();
    }
    if(key == "a"){
        audio2.play();
    }
    if(key == "s"){
        audio3.play();
    }
    if(key == "d"){
        audio4.play();
    }
    if(key == "j"){
        audio5.play();
    }
    if(key == "k"){
        audio6.play();
    }
    if(key == "l"){
        audio7.play();
    }
    console.log(event);
}