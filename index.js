var nNuts = 20;

window.onload = function() {
    getRandomImage();
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function readTextFromFile(path){
    var request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function getRandomImage(){
    console.log("got image");

    //get random nut image
    let whichNut = getRandomInt(nNuts);
    var img = new Image();
    img.src = "nuts/Nuts"+whichNut+".png"
    document.getElementById("nutPic").appendChild(img);

    let yamltext = readTextFromFile("nuts/Nuts"+whichNut+".yaml");
    document.getElementById("yamltext").innerHTML = yamltext;

}