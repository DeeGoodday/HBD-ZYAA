// ==========================
// LOADING SYSTEM
// ==========================

const loading = document.getElementById("loading");
const loadingBar = document.getElementById("loadingProgress");
const loadingPercent = document.getElementById("loadingPercent");
const pinScreen = document.getElementById("pinScreen");

let progress = 0;

pinScreen.style.display = "none";

const loadingTimer = setInterval(()=>{

    progress++;

    loadingBar.style.width = progress + "%";
    loadingPercent.innerHTML = progress + "%";

    if(progress >= 100){

        clearInterval(loadingTimer);

        setTimeout(()=>{

            loading.classList.add("hide");

setTimeout(()=>{

    pinScreen.style.display="flex";

    requestAnimationFrame(()=>{

        pinScreen.style.opacity = "1";
        pinScreen.style.transform = 
        "translateY(0) scale(1)";

    });

},0);

setTimeout(()=>{

    loading.style.visibility="hidden";
    loading.style.pointerEvents="none";

},800);

        },300);

    }

},30);
// ==========================
// PIN SYSTEM
// ==========================

const pinInput = document.getElementById("pinInput");
const pinBtn = document.getElementById("pinBtn");
const pinError = document.getElementById("pinMessage");
const opening = document.querySelector(".opening");

const CORRECT_PIN = "030809";

pinBtn.addEventListener("click", ()=>{
pinInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        pinBtn.click();

    }

});

    if(pinInput.value === CORRECT_PIN){

        pinError.innerHTML = "💙 Selamat datang...";

        pinError.style.color = "#90caf9";

        setTimeout(()=>{

pinScreen.style.opacity="0";
pinScreen.style.transform="scale(.96)";

setTimeout(()=>{

    pinScreen.style.display="none";

    opening.style.display="flex";

    opening.style.opacity="0";
    opening.style.transform="translateY(25px)";

    requestAnimationFrame(()=>{

        opening.style.opacity="1";
        opening.style.transform="translateY(0)";

    });

},700);

},700);

    }else{

        pinError.innerHTML = "❌ PIN salah";

        pinError.style.color = "#ff8a80";

        pinInput.style.animation = "none";

        void pinInput.offsetWidth;

        pinInput.style.animation = "shake .4s";

    }

});