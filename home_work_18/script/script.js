const imageNode = document.querySelector(".container img");

const arrayImg = ["media/img.jpg", "media/panda.jpg", "media/parrot.jpg", "media/red_panda.jpg", "media/tiger.jpg", "media/cat.jpg"];

const leftButtonNode = document.getElementById("left");
const rightButtonNode = document.getElementById("right");

imageNode.src = arrayImg[0];
let i = 0;

function changeImg(direction){
    /* console.log('begin', i); */
    if (direction === "right") {
        i = (i === arrayImg.length -1) ? 0 : i+1;
    } else if (direction === "left") {
        i = (i === 0) ? arrayImg.length-1 : i -1
    }
    imageNode.src = arrayImg[i];
    /* console.log('end', i); */
}

rightButtonNode.addEventListener("click", () =>
    changeImg("right"));

leftButtonNode.addEventListener("click", () =>
    changeImg("left"));