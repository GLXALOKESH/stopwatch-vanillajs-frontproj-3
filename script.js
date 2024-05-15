console.log("Script running...");
let minute = 0;
let second = 0;
let millisecond = 0;

let time = document.createElement("p")
time.classList = "t-text"
time.innerText = `00:00:00`
let timerbase = document.getElementById("timer")
timerbase.append(time)

function getzero(){
    let nsecond = (millisecond<10)?("0"+millisecond):millisecond;
    let nminute = (second<10)?("0"+second):second;
    let nhour = (minute<10)?("0"+minute):minute;

    let timeupdate = `${nhour}:${nminute}:${nsecond}`
    time.innerText = timeupdate
}
function update() {
    
        millisecond++
    
    if (millisecond == 100) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    getzero()
}
let inter 

let playbtn = document.getElementById("play")

playbtn.onclick =()=>{
 inter = setInterval(update,10) 
 playbtn.disabled = true;
}

let resetbtn = document.getElementById("reset")
resetbtn.onclick =()=>{
    millisecond=0;
    second =0;
    minute=0;
    getzero()

}
let pausebtn = document.getElementById("pause");
pausebtn.onclick =() => {
    clearInterval(inter);
 playbtn.disabled = false;

}

