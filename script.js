const index = document.querySelectorAll(".drum").length;

for(let i = 0; i<index; i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

function handleClick(){
    console.log("i got clicked");
}