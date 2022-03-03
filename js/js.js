var bgimgs = ["url('imgs/header1.png')","url('imgs/header2.png')","url('imgs/4.png')",
"url('imgs/header4.png')"];
var divition = document.getElementById('header');
var i = 0;

function changeimgs() {
    
    divition.style.backgroundImage=bgimgs[i];
    if (i < bgimgs.length) {
        i++;
    } else {
        i = 0;
    }
    
}setInterval(changeimgs,3000);



