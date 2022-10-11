var nNuts = 20;

window.onload = function() {
    getRandomImage();
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomImage(){
    console.log("got image");

    let whichNut = getRandomInt(nNuts);
    var img = new Image();
    img.src = "nuts/Nuts"+whichNut+".png"
    document.getElementById("nutPic").appendChild(img);

}