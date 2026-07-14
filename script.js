/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2500);

});


/* ===========================
   TYPING EFFECT
=========================== */

const text=
"Selamat ulang tahun, Sekar Ayu Ningtyas. Terima kasih sudah menjadi alasan banyak senyum dalam hidupku. Semoga hari ini menjadi awal dari tahun yang penuh kebahagiaan untukmu. ❤️";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,45);

}

}

typing();

/* ===========================
   OPEN WEBSITE
=========================== */

const startBtn = document.getElementById("startBtn");
const opening = document.getElementById("opening");

startBtn.addEventListener("click",()=>{

    opening.style.display="none";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===========================
   GIFT
=========================== */

const giftBtn=document.getElementById("giftBtn");

giftBtn.onclick=()=>{

document.getElementById("giftMessage").style.display="block";

giftBtn.innerHTML="❤️ I Love You ❤️";

}


/* ===========================
   CAKE
=========================== */

const blow=document.getElementById("blow");

blow.onclick=()=>{

document.getElementById("cakeBox").innerHTML="🎂";

blow.innerHTML="Selamat Ulang Tahun ❤️";

}

/*=============================
      LIGHTBOX
=============================*/

const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const close=document.getElementById("closeLightbox");

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

close.onclick=()=>{

lightbox.style.display="none";

}


/*=============================
     FLOATING HEARTS
=============================*/

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=4+Math.random()*4+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);


/*=============================
     SHOOTING STAR
=============================*/

function shootingStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*200+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(shootingStar,3500);

/*=============================
      MUSIC
=============================*/

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("music-control");

let play=false;

musicBtn.onclick=()=>{

if(!play){

music.play();

musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

play=true;

}else{

music.pause();

musicBtn.innerHTML='<i class="fa-solid fa-play"></i>';

play=false;

}

};



/*=============================
      COUNTER
=============================*/

let second=0;
let minute=0;
let hour=0;

setInterval(()=>{

second++;

if(second==60){

second=0;
minute++;

}

if(minute==60){

minute=0;
hour++;

}

document.getElementById("second").innerHTML=String(second).padStart(2,'0');

document.getElementById("minute").innerHTML=String(minute).padStart(2,'0');

document.getElementById("hour").innerHTML=String(hour).padStart(2,'0');

},1000);



/*=============================
     SCROLL BAR
=============================*/

window.onscroll=()=>{

let win=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(win/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

};



/*=============================
     SCROLL REVEAL
=============================*/

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("active");

sec.classList.add("reveal");

}

});

});

/* ===========================
   CURSOR GLOW
=========================== */

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";
glow.style.top=e.clientY-10+"px";

});


/* ===========================
   COUNTDOWN
=========================== */

function updateCountdown(){

const now=new Date();

let target=new Date(now.getFullYear(),6,24);

if(now>target){

target=new Date(now.getFullYear()+1,6,24);

}

let diff=target-now;

let day=Math.floor(diff/1000/60/60/24);

let hour=Math.floor(diff/1000/60/60)%24;

let minute=Math.floor(diff/1000/60)%60;

let second=Math.floor(diff/1000)%60;

document.getElementById("cdDay").innerHTML=day;

document.getElementById("cdHour").innerHTML=hour;

document.getElementById("cdMinute").innerHTML=minute;

document.getElementById("cdSecond").innerHTML=second;

}

setInterval(updateCountdown,1000);

updateCountdown();

/*=========================
    OPEN LETTER
=========================*/

const envelope=document.querySelector(".envelope");

const openLetter=document.getElementById("openLetter");

openLetter.onclick=()=>{

envelope.classList.toggle("open");

if(envelope.classList.contains("open")){

openLetter.innerHTML="Tutup Surat ❤️";

}else{

openLetter.innerHTML="Buka Surat 💌";

}

};



/*=========================
    ROSE
=========================*/

function rose(){

const flower=document.createElement("div");

flower.innerHTML="🌹";

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-30px";

flower.style.fontSize="30px";

flower.style.zIndex="999";

flower.style.animation="fall 7s linear forwards";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},7000);

}

setInterval(rose,1800);

/*=========================
    FINAL GIFT
=========================*/

const openGift=document.getElementById("openGift");

const finalMessage=document.getElementById("finalMessage");

const giftBox=document.getElementById("giftBox");

openGift.onclick=()=>{

giftBox.innerHTML="💖";

giftBox.style.transform="scale(1.3)";

finalMessage.style.display="block";

firework();

};



/*=========================
      FIREWORK
=========================*/

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

function firework(){

for(let i=0;i<80;i++){

let x=Math.random()*canvas.width;

let y=Math.random()*canvas.height;

let r=Math.random()*4+2;

ctx.beginPath();

ctx.arc(x,y,r,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},1200);

}

/*=========================
      AUTO SLIDER
=========================*/

const slider=document.querySelector("#slider");

let direction=1;

setInterval(()=>{

slider.scrollLeft+=350*direction;

if(slider.scrollLeft>=slider.scrollWidth-slider.clientWidth){

direction=-1;

}

if(slider.scrollLeft<=0){

direction=1;

}

},2500);