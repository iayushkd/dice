
var a = Math.floor(Math.random() * 6 + 1);
var DicePic = "dice" + a + ".png";
var DicePicSrc = "images/" + DicePic;
var DicePic1 = document.querySelectorAll("img")[0];
DicePic1.setAttribute("src", DicePicSrc);

var b = Math.floor(Math.random() * 6 + 1);
var DicePic2 = "dice" + b + ".png";
var DicePicSrc2 = "images/" + DicePic2;
var DicePic3 = document.querySelectorAll("img")[1];
DicePic3.setAttribute("src", DicePicSrc2);
var heading = document.getElementsByTagName("h1")[0];
if (a > b) {
    heading.innerText = "Player1 wins"
}
else if (a == b) {
    heading.innerText = "Tie"
}
else {
    heading.innerText = "Player2 win"
}