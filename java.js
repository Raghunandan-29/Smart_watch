let time =document.getElementById("time");
setInterval(function(){
    let d = new Date();
    time.innerHTML=d.toLocaleTimeString();
},1000)
let showt=0;
let showh=0;
let heart=document.getElementById('heart');

let hbtn= document.getElementById('hbtn');
hbtn.onclick = function(){
   
        time.style.display='none';
        heart.style.display='block';
    
}
let tbtn= document.getElementById('tbtn');
tbtn.onclick = function(){
   
        heart.style.display='none';
        time.style.display='block';
      
}
let wimg= document.getElementById('wimg');
let black= document.getElementById('black');
black.onclick = function(){
    wimg.src ='images/iOeUBV7.png';
}
let red= document.getElementById('red');
red.onclick = function(){
    wimg.src ='images/PTgQlim.png';
}
let blue= document.getElementById('blue');
blue.onclick = function(){
    wimg.src ='images/Mplj1YR.png';
}
let purple= document.getElementById('purple');
purple.onclick = function(){
    wimg.src ='images/xSIK4M8.png';
}

    
