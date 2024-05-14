console.log("Script running...");
let hour = 0;
let minute = 0;
let second = 0;
second = (second<10)?("0"+second):second;
    minute = (minute<10)?("0"+minute):minute;
    hour = (hour<10)?("0"+hour):hour;
let time = document.createElement("p")
time.classList = "t-text"
time.innerText = `${hour}:${minute}:${second}`
let timerbase = document.getElementById("timer")
timerbase.append(time)

function update() {
    
        second++
    
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    second = (second<10)?("0"+second):second;
    minute = (minute<10)?("0"+minute):minute;
    hour = (hour<10)?("0"+hour):hour;

    let timeupdate = `${second}:${minute}:${second}`
    time.innerText = timeupdate
}

let playbtn = document.getElementById("play")
playbtn.onclick =()=>{
    setInterval(update,1000)
}