function makeitbold (){
    if (document.getElementById('text').style.fontWeight == 'bold') {
        document.getElementById("text").style.fontWeight="normal";
    }else{
        document.getElementById("text").style.fontWeight="bold";
}}
function italic (){
    if (document.getElementById('text').style.fontStyle == 'italic') {
    document.getElementById("text").style.fontStyle="normal";
    }else{
    document.getElementById("text").style.fontStyle="italic";
    }}
 
    var text = document.getElementById('text');
function underline (){
    if (text.style.textDecoration == 'underline') {
        text.style.textDecoration="none";
}else{
    text.style.textDecoration="underline";
}} 


function changingfont (){
    var font = document.getElementById("changingfont").value;
    console.log(font);
    document.getElementById('text').style.fontFamily = font; 
}

function changingtextsize (){
    var size = document.getElementById("changing textsize").value;
    document.getElementById('text').style.fontSize = size;
}
function changingtextcolour (){
    var color = document.getElementById("changing textcolour").value;
    document.getElementById('text').style.color = color;
}
function changingtextdisplay (){
    var textdisplay = document.getElementById("changing textdisplay").value;
    document.getElementById('text').style.textAlign = textdisplay;
}