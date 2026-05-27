const hour_el = document.querySelector("#hour");
const minute_el = document.querySelector("#minute");
const second_el = document.querySelector("#second");
const millisecond_el = document.querySelector("#millisecond");
const ampm_el = document.querySelector("#ampm");

function digitalClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let millisecond = date.getMilliseconds()
    let ampm = "AM"

    if(hour>12){
        hour = hour-12
        ampm = "PM"
    }

    // if(millisecond>60){
    //     millisecond = millisecond-1040;
    // }

    hour = hour<10 ?"0"+hour : hour;
    minute = minute<10 ?"0"+minute : minute;
    second = second<10 ?"0"+second : second;
    millisecond = millisecond<10 ?"0"+millisecond : millisecond;

    hour_el.innerText = hour;
    minute_el.innerText = minute;
    second_el.innerText = second;
    millisecond_el.innerText = millisecond;
    ampm_el.innerText = ampm;

    setTimeout(()=>{
        digitalClock()
    },100)
}
digitalClock()