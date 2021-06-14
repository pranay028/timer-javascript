const timerblockEl = document.querySelector(".timer");
const timeEl = document.querySelectorAll(".time");
const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");
const milliEl = document.querySelector(".millisecond");




const now = new Date();
// console.log(now);

const eventDate = new Date(2021, 6, 15);
// console.log(eventDate);

const timeIntervel = (date1, date2) => {

    return (Math.abs(date2 - date1))/1000;
  
    

}

// timeIntervel(now, eventDate);

// console.log(new Date(timeIntervel(now, eventDate)));
const day = 60 * 60 * 24;
const hour = 60 * 60;
const min = 60;
// const sec = 1000;

let timer = timeIntervel(now, eventDate);

const countTimer = setInterval(function(){

    
    
    const dayout = String(Math.floor(timer / (60 * 60 * 24))).padStart(2, 0);
    const hourout = `${Math.floor((timer - dayout * day)/hour)}`.padStart(2, 0);
    const minout = `${Math.floor((timer - dayout * day - hourout * hour)/min)}`.padStart(2, 0);
    const secout = String(Math.floor(timer - dayout * day - hourout * hour - minout * min)).padStart(2, 0);
    // const milliout = Math.floor(timer - dayout * day - hourout * hour - minout * min - secout);

    // const dayout = String(Math.floor(timer / day)).padStart(2, 0);
    // const hourout = `${Math.floor((timer - dayout * day)/hour)}`.padStart(2, 0);
    // const minout = `${Math.floor((timer - dayout * day - hourout * hour)/min)}`.padStart(2, 0);
    // const secout = String(Math.floor((timer - dayout * day - hourout * hour - minout * min)/ sec)).padStart(2, 0);
    // const milliout = Math.floor((timer - dayout * day - hourout * hour - minout * min - secout)% 60);

    dayEl.textContent = dayout;
    hourEl.textContent = hourout;
    minEl.textContent = minout;
    secEl.textContent = secout;
    // milliEl.textContent = milliout;

    timer--;

}, 1000)



// console.log(`${dayout}: ${hourout} : ${minout} : ${secout}`);