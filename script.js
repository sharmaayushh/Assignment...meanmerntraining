const changed=document.getElementById(color)


function Change(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    changed.innerHTML="#"+randomColor
}

var main=document.querySelector("body");
var crsr=document.querySelector(".cursor");

main.addEventListener("mousemove",function(d){
    crsr.style.left=d.x+"px";
    crsr.style.top=d.y+"px";
})
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
