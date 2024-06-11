let startBtn=document.querySelector(".start-btn");
let stopBtn=document.querySelector(".stop-btn");
let resetBtn=document.querySelector(".reset-btn");
let lapBtn=document.querySelector(".lap");;

let hour=document.querySelector(".hour");
let minute=document.querySelector(".minute");
let second=document.querySelector(".second");
let lapContainer = document.querySelector(".lapContainer");
let lapCount = 0;


let time=[0,0,0];
let timerId=0;
startBtn.addEventListener("click",function(){
    if(timerId!=0){
        return;
    }
    startBtn.classList.add("disable");
    timerId= setInterval(()=>{
        time[2]++;
        if(time[2]==60){
            time[1]++;
            time[2]=0;
        }
        if(time[1]==60){
            time[0]++;
            time[1]=0;
        }
        console.log(time);
        displayTime();
     },1000);
});

stopBtn.addEventListener("click",function(){
    stopBtn.classList.add("disable");
    clearInterval(timerId);
});

resetBtn.addEventListener("click",function(){
    startBtn.classList.remove("disable");
    stopBtn.classList.remove("disable");
    clearInterval(timerId);
    time=[0,0,0];
    timerId=0;
    lapCount = 0;
    lapContainer.innerHTML = '';
    displayTime();
});
lapBtn.addEventListener("click", function() {
    recordLap();
});


function displayTime(){
    //0-->00
    hour.innerText=time[0].toString().padStart(2,"0").padEnd(4," :");
    minute.innerText=time[1].toString().padStart(2,"0").padEnd(4," :");
    second.innerText=time[2].toString().padStart(2,"0");
}
function recordLap() {
    lapCount++;
    let lapTime = time.map(unit => unit.toString().padStart(2, "0")).join(":");
    let lapElement = document.createElement("div");
    lapElement.innerText = `Lap ${lapCount}: ${lapTime}`;
    lapContainer.appendChild(lapElement);
}



