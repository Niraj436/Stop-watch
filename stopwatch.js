const time = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");

let secs = 0;
let mins = 0;
let hrs = 0;
let timer = null;


startBtn.addEventListener("click", srtWatch);
pauseBtn.addEventListener("click",()=>{
    clearInterval(timer);
})
resetBtn.addEventListener("click",()=>{
    clearInterval(timer);
    secs=0;
    mins=0;
    hrs=0;
    time.innerHTML = "00:00:00";
})

function stopwatch(){
    secs++;
    if(secs==60){
        secs= 0;
        mins++;
        if(mins==60){
            mins=0;
            hrs++;
        }
    }
    let s = secs < 10 ? "0" + secs : secs;
    let m = mins < 10 ? "0" + mins : mins;
    let h = hrs < 10 ? "0" + hrs : hrs;


    time.innerHTML = h + ":" +m+ ":" +s;
}

function srtWatch(){
    if (timer!== null){
        clearInterval(timer);
    }
     timer = setInterval(stopwatch,1000);
}