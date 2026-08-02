/* =====================================
   PROJECT ZYAA V3.5
   SCRIPT
===================================== */

// =============================
// MEMBUAT BINTANG
// =============================

const stars = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random()*100 + "%";

    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay = Math.random()*5 + "s";

    star.style.animationDuration = (2 + Math.random()*3) + "s";

    stars.appendChild(star);

}
// =============================
// ELEMENT
// =============================

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const story = document.getElementById("story");
const storyBtn = document.getElementById("storyBtn");
const storyText = document.getElementById("storyText");
const gallery = document.getElementById("gallery");
const memory = document.getElementById("memory");
const photoBtn = document.getElementById("photoBtn");
const secret = document.getElementById("secret");
const birthday = document.getElementById("birthday");
const ending = document.getElementById("ending");
const confettiLeft = document.getElementById("confettiLeft");
const confettiRight = document.getElementById("confettiRight");
const birthdayBtn = document.getElementById("birthdayBtn");
const birthdayGlow = document.getElementById("birthdayGlow");
const birthdayCake = document.getElementById("birthdayCake");
const candle1 = document.getElementById("candle1");
const candle2 = document.getElementById("candle2");
const candle3 = document.getElementById("candle3");
const blowText = document.getElementById("blowText");
const blowBtn = document.getElementById("blowBtn");

const letter = document.getElementById("letter");
const partySound = document.getElementById("partySound");

const confettiContainer = document.getElementById("confettiContainer");
const heartContainer = document.getElementById("heartContainer");

// =============================
// START
// =============================

startBtn.addEventListener("click", ()=>{

clickSound.currentTime = 0;
clickSound.play();

bgMusic.volume = 0.4;

bgMusic.play();

document.querySelector(".opening").style.display="none";

letter.classList.add("show");

});

// =============================
// NEXT
// =============================

nextBtn.addEventListener("click",()=>{

clickSound.currentTime = 0;
clickSound.play();

letter.classList.remove("show");

story.classList.add("show");

typeStory();

});

const text = 
`Website ini bukan dibuat dalam satu malam.
Aku membuatnya sedikit demi sedikit.
Berharap saat kamu membukanya...
Kamu bisa merasakan betapa berharganya dirimu bagiku. ❤️`;

let i = 0;

function typeStory(){

storyText.innerHTML="";

i=0;

typing();

}

function typing(){

if(i < text.length){

storyText.innerHTML += text.charAt(i);

i++;

setTimeout(typing,45);

}else{

setTimeout(()=>{

storyBtn.style.display="inline-block";

storyBtn.style.opacity="0";
storyBtn.style.transform="translateY(18px)";

setTimeout(()=>{

storyBtn.style.opacity="1";
storyBtn.style.transform="translateY(0)";

},120);

},1200);

}

}
// =============================
// STORY BUTTON
// =============================
storyBtn.addEventListener("click", () => {

    clickSound.currentTime = 0;
    clickSound.play();
    story.classList.remove("show");
    gallery.classList.add("show");
    
const storyBox = document.querySelector(".story-box");

storyBox.style.boxShadow =
"0 20px 60px rgba(0,0,0,.45), 0 0 45px rgba(100,181,246,.28)";
});
// =============================
// GALLERY DATA
// =============================

const photos = [

{
img:"Images/foto1.jpg",
title:"Kenangan Pertama 💙",
desc:"tanggal 10/06/24 hari di mana kamu tamat SMP,aku masih ingat senyum bahagiamu."
},

{
img:"Images/foto2.jpg",
title:"Senyumanmu 🌸",
desc:"tanggal 11/08/24 permintaanku untuk ingin melihat senyum dan wajah cantik naturalmu."
},

{
img:"Images/foto3.jpg",
title:"Foto Favoritku ✨",
desc:"tanggal 29/06/25 Aku juga ga tau kenapa aku suka banget sama foto kamu yang ini."
},

{
img:"Images/foto4.jpg",
title:"HIngga Kini ❤️",
desc:"tanggal 27/07/26 seminggu sebelum perayaan hari lahirmu, dan kamu masih denganku ."
}

];

let currentPhoto = 0;
const firstPercent = ((currentPhoto + 1) / photos.length) * 100;
const progressBar = document.getElementById("progressBar");
const chapterText = document.getElementById("chapterText");

progressBar.style.width = firstPercent + "%";

chapterText.innerHTML =
`Bab ${currentPhoto + 1} dari ${photos.length}`;
let isPhotoChanging = false;

const photo = document.getElementById("photo");
const photoTitle = document.getElementById("photoTitle");
const photoDesc = document.getElementById("photoDesc");

photoBtn.addEventListener("click",()=>{
const photoCard = document.querySelector(".photo-card");

if(isPhotoChanging) return;

isPhotoChanging = true;

clickSound.currentTime = 0;
clickSound.play();

photoCard.style.transform = "scale(.98)";

photoCard.style.boxShadow =
"0 8px 25px rgba(0,0,0,.35)";

currentPhoto++;
const percent = ((currentPhoto + 1) / photos.length) * 100;
progressBar.style.width = percent + "%";

if(currentPhoto < photos.length){
  
photo.style.transition =
"opacity .45s ease, transform .45s ease, filter .45s ease";

photo.style.opacity = "0";

photo.style.transform =
"translateX(-35px) scale(.94)";

photo.style.filter = "blur(5px)";

photoBtn.style.opacity="0";
photoBtn.style.transform="translateY(10px)";
setTimeout(()=>{

photoTitle.style.opacity="1";
photoTitle.style.transform="translateY(0)";

},120);

setTimeout(()=>{

photoBtn.style.opacity="1";
photoBtn.style.transform="translateY(0)";

},320);

setTimeout(()=>{

photoDesc.style.opacity="1";
photoDesc.style.transform="translateY(0)";

},240);

setTimeout(() => {
photoCard.classList.remove("shine");
void photoCard.offsetWidth;
photoCard.classList.add("shine");
  
  if(!photos[currentPhoto]){
    photoCard.style.transform = "scale(1)";
photoCard.style.boxShadow =
"0 15px 45px rgba(0,0,0,.45), 0 0 60px rgba(100,181,246,.12)";
    isPhotoChanging = false;
    return;
}

const nextImage = new Image();

nextImage.onload = ()=>{

photo.src = nextImage.src;

photo.style.opacity = "1";

photo.style.transform =
"translateX(35px) scale(1.05)";
requestAnimationFrame(()=>{

photo.style.transform =
"translateX(0) scale(1)";

});

photo.style.filter = "blur(0px)";

setTimeout(()=>{

photo.style.animation = "float 5s ease-in-out infinite";

},80);

};

nextImage.src = photos[currentPhoto].img;

photoTitle.innerHTML = photos[currentPhoto].title;

photoDesc.innerHTML = photos[currentPhoto].desc;

   chapterText.innerHTML = `Bab ${currentPhoto + 1} dari ${photos.length}`;
   chapterText.style.transform="scale(1.08)";

setTimeout(()=>{

chapterText.style.transform="scale(1)";

},250);

photoTitle.style.opacity = "1";
photoTitle.style.transform = "translateY(0)";

photoDesc.style.opacity = "1";
photoDesc.style.transform = "translateY(0)";
isPhotoChanging = false;
}, 600);

}else{
photo.style.animation = "none";
photo.style.opacity = 0;

setTimeout(()=>{

gallery.classList.remove("show");

memory.classList.add("show");

isPhotoChanging = false;

},600);

}

});

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const memoryNextBtn = document.getElementById("memoryNextBtn");
const giftHint = document.querySelector(".giftHint")

function 
typeWriter(element,text,speed,callback){

element.innerHTML="";

let i=0;

const typing=setInterval(()=>{

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

if(callback) callback();

}

},speed);

}
giftBox.addEventListener("click",()=>{
giftHint.style.opacity="0";
giftHint.style.transform="translateY(-10px)";
clickSound.currentTime = 0;
clickSound.play();

giftBox.style.filter="drop-shadow(0 0 35px rgba(100,181,246,.9))";

giftBox.style.transform="scale(1.15) rotate(8deg)";

setTimeout(()=>{

giftBox.style.transform="scale(.95)";

giftBox.querySelector(".gift-lid").style.transform =
"translateY(-60px) rotate(-15deg)";

setTimeout(()=>{
giftBox.style.transform="scale(.15) rotate(-15deg)";
giftBox.style.filter="none";
giftBox.style.opacity="0";

},500);

setTimeout(()=>{

giftMessage.style.display="block";

giftMessage.classList.add("show");

typeWriter(

giftMessage,

"💙 Terima kasih sudah bertahan sejauh ini bersamaku.\n\nMasih ada beberapa hadiah lagi yang ingin kuberikan...",

55,

()=>{

setTimeout(()=>{

memoryNextBtn.style.display="block";

memoryNextBtn.style.opacity="0";

memoryNextBtn.style.transform="translateY(18px)";

setTimeout(()=>{

memoryNextBtn.style.opacity="1";

memoryNextBtn.style.transform="translateY(0)";

},100);

},1000);

}

);

},550);

},1000);

});

memoryNextBtn.addEventListener("click",()=>{

    clickSound.currentTime = 0;
    clickSound.play();
    for(let i=0;i<8;i++){

const s=document.createElement("div");

s.className="giftSpark";

s.style.left=(70+Math.random()*40)+"px";

s.style.top=(70+Math.random()*40)+"px";

giftBox.appendChild(s);

setTimeout(()=>{

s.remove();

},900);

}

    memory.classList.remove("show");

    secret.classList.add("show");

});

// =========================
// SECRET LETTER V2
// =========================

const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");
const secretText = document.getElementById("secretText");
const nextLetterBtn = document.getElementById("nextLetterBtn");
const envelopeHint = document.getElementById("envelopeHint");

let letterPage = 1;

envelope.addEventListener("click", openLetter);
envelope.style.transform ="scale(.96)";
function openLetter(){

    envelope.removeEventListener("click", openLetter);
 
    clickSound.currentTime = 0;
    clickSound.play();
    envelope.style.transition="transform .18s ease";

    envelope.style.transform="scale(.96)";

    setTimeout(()=>{

    envelope.style.transform="";

    },180);

    envelope.classList.add("open");

    envelopeHint.style.display="none";

    setTimeout(()=>{

    letterPaper.style.height="350px";

    letterPaper.style.transform="translateY(-30px)";
    letterPaper.style.animation =
    "paperSwing .8s ease";
    setTimeout(()=>{

    letterPaper.style.animation="";

    },800);

letterPaper.style.boxShadow =
"0 30px 70px rgba(100,181,246,.45)";

    typeWriter(

        secretText,
        "Aku ingin menyampaikan sesuatu untukmu...",

        35,

        ()=>{

            nextLetterBtn.style.display="block";

            setTimeout(()=>{

                nextLetterBtn.style.opacity="1";

                nextLetterBtn.style.transform="translateY(0)";

            },180);

        }

    );

},350);

nextLetterBtn.addEventListener("click",()=>{

    clickSound.currentTime = 0;
    clickSound.play();

    letterPage++;

    nextLetterBtn.style.opacity="0";

    nextLetterBtn.style.transform="translateY(10px)";

    setTimeout(()=>{

        if(letterPage==2){

            typeWriter(

                secretText,

`Aku bersyukur karena semesta mempertemukan kita.
Terima kasih sudah menjadi bagian dari hari-hariku.
Semoga senyummu selalu menjadi alasan dunia terasa lebih indah. 💙`,

                35,

                ()=>{

                    nextLetterBtn.style.opacity="1";

                    nextLetterBtn.style.transform="translateY(0)";

                }

            );

        }

        else if(letterPage==3){

            nextLetterBtn.innerHTML="Lanjut ke Ulang Tahun 🎂";

            typeWriter(

                secretText,

`Selamat ulang tahunnn.
Semoga semua doa dan impianmu perlahan menjadi nyata.
Tetaplah menjadi dirimu yang selalu membuatku nyaman. 💙

- Ade Ridho ❤️`,

                35,

                ()=>{

                    nextLetterBtn.style.opacity="1";

                    nextLetterBtn.style.transform="translateY(0)";

                }

            );

        }

        else{

            secret.classList.remove("show");

            birthday.classList.add("show");

        }

    },250);

});
}

birthdayBtn.addEventListener("click",()=>{
clickSound.currentTime = 0;
clickSound.play();

birthdayBtn.style.transform = "scale(.94)";

setTimeout(()=>{

birthdayBtn.style.transform = "";

},120);

birthdayBtn.style.opacity = "0";
birthdayBtn.style.pointerEvents = "none";

birthdayGlow.classList.add("show");

setTimeout(()=>{

birthdayCake.classList.add("show");

},800);

setTimeout(()=>{

candle1.classList.add("show");

},1600);

setTimeout(()=>{

candle2.classList.add("show");

},2000);

setTimeout(()=>{

candle3.classList.add("show");

},2400);

setTimeout(()=>{

blowText.innerHTML="😊 tiup lilinnya duluuu.";

blowText.classList.add("show");

blowBtn.style.display="block";

},2900);

});

blowBtn.addEventListener("click",()=>{

clickSound.currentTime = 0;
clickSound.play();

blowText.innerHTML="💨 Fiuuuuu...";

setTimeout(()=>{

candle1.style.opacity="0";

},300);

setTimeout(()=>{

candle2.style.opacity="0";

},600);

setTimeout(()=>{

candle3.style.opacity="0";

},900);

blowBtn.style.display="none";

setTimeout(()=>{

blowText.innerHTML=

"🎉 Yeay! Selamat ulang tahun ke-17 💙";

},1400);

setTimeout(()=>{

createConfetti();

},1800);

setTimeout(()=>{

birthday.classList.add("hide");

setTimeout(()=>{

birthday.classList.remove("show");
birthday.classList.remove("hide");

},800);

setTimeout(()=>{

ending.classList.add("show");
setTimeout(()=>{

endingTitle.classList.add("showEnding");

},200);

setTimeout(()=>{

endingPhoto.classList.add("showPhoto");

},700);

setTimeout(()=>{

endingText.classList.add("showEnding");

},1200);

setTimeout(()=>{

endingSubtitle.classList.add("showEnding");

},1800);

setTimeout(()=>{

endingName.classList.add("showEnding");

setTimeout(()=>{

document
.getElementById("endingQuote")
.classList.add("showEnding");

},2800);

},2200);

},1400);

},3000);

});

const endingTitle =
document.querySelector(".ending-box h2");

const endingPhoto =
document.getElementById("endingPhoto");

const endingText =
document.getElementById("endingText");

const endingSubtitle =
document.querySelector(".ending-box h3");

const endingName =
document.querySelector(".ending-box p:last-child");

function createConfetti(){
  confettiLeft.innerHTML = "";
confettiRight.innerHTML = "";

const colors = [
"#64b5f6",
"#90caf9",
"#ffffff",
"#ffd54f"
];

for(let i=0;i<40;i++){

const confetti=document.createElement("div");
if(i===7 || i===31){

confetti.innerHTML="💙";

confetti.style.background="transparent";

confetti.style.fontSize="12px";

confetti.style.width="auto";

confetti.style.height="auto";

}
confetti.style.width=(Math.random()*8+6)+"px";

confetti.style.height=confetti.style.width;

confetti.classList.add("confetti");

confetti.style.background=colors[
Math.floor(Math.random()*colors.length)
];

if(i<20){

confetti.style.left="8%";

}else{

confetti.style.left="92%";

}

confetti.style.top="88%";

confetti.style.opacity="1";
let x;

if(i<20){

x=(Math.random()*280+120)+"px";

}else{

x=-(Math.random()*280+120)+"px";

}
const y=-(Math.random()*260+280)+"px";

confetti.style.setProperty("--x",x);
confetti.style.setProperty("--y",y);

if(i < 20){

confettiLeft.appendChild(confetti);

}else{

confettiRight.appendChild(confetti);

}

}

}