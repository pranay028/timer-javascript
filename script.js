
// -------Base functionality

const timerblockEl = document.querySelector(".timer");
const timeEl = document.querySelectorAll(".time");
const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");
const milliEl = document.querySelector(".millisecond");

const titleEl = document.querySelector(".title")
//----------- Custom Input
const eventEl = document.querySelector('.event')
const inputCustomEl = document.querySelector(".input-button");
const closeEl = document.querySelector('.close');
const inputEventEl = document.querySelector('.input-event');
const inputDateEl = document.querySelector(".input-date");
const submitEl = document.querySelector("#submit");
const popupEl = document.querySelector(".popup");
const inputTimeEl = document.querySelector('.input-time')
// const hiddenEl = document.querySelector('.hidden')
const bodyEl = document.getElementsByName("body");

inputCustomEl.addEventListener('click', function(){
    // popupEl.style.animation = "none";
    popupEl.classList.toggle('hidden');
    // popupEl.style.animation = "totop 300ms 1"
    

})
closeEl.addEventListener('click', function(){

    popupEl.classList.add('hidden');
    // popupEl.style.animation = "totop 300ms 1";
    
})

// bodyEl.addEventListener('click',function(){
//     popupEl.classList.add('hidden');
// })

<<<<<<< HEAD
let eventText, date, time;
=======
const eventDate = new Date(2021, 6, 10);
// console.log(eventDate);
>>>>>>> 79ebd086e0b95e191248521c066ade71d938eb03

const now = new Date();
// console.log(now);

let eventDate = new Date(2022, 0, 1);


const day = 60 * 60 * 24;
const hour = 60 * 60;
const min = 60;
// const sec = 1000;
const timeIntervel = (date1, date2) => (date2 - date1)/1000;

let timer = timeIntervel(now, eventDate);
console.log(timer);
const tick = function(){
    const dayout = String(Math.floor(timer / (60 * 60 * 24))).padStart(2, 0);
    const hourout = `${Math.floor((timer - dayout * day)/hour)}`.padStart(2, 0);
    const minout = `${Math.floor((timer - dayout * day - hourout * hour)/min)}`.padStart(2, 0);
    const secout = String(Math.floor(timer - dayout * day - hourout * hour - minout * min)).padStart(2, 0);
    
    dayEl.textContent = dayout;
    hourEl.textContent = hourout;
    minEl.textContent = minout;
    secEl.textContent = secout;
    

    timer--;
}

const onTimer = setInterval(tick, 1000);




submitEl.addEventListener('click', function(e){
    e.preventDefault();
    eventText = inputEventEl.value;
    date = (inputDateEl.value === "") ? [now.getFullYear(),now.getMonth(),now.getDate()] : (inputDateEl.value).split("-");
    time = inputTimeEl.value.split(":");
    eventEl.textContent = eventText;
    date[1] = date[1] - 1;
    // console.log(eventText, date , time);
    console.log(date);
    console.log(time);

    // console.log(new Date(...date));
    console.log(new Date(...date,...time));
    eventDate = new Date(...date,...time);
    console.log(eventDate);
    
    

    timer = timeIntervel(now, eventDate);
    console.log(timer);
    if(onTimer) clearInterval(onTimer);
    if(timer > 0){
        titleEl.textContent = `${eventText.slice(0,1).toUpperCase() + eventText.slice(1, 20)}...    Timer`;
        setInterval(tick, 1000)
        popupEl.classList.add('hidden');
    }else{
        alert("oops, You have submitted an Empty or Past date")
    }
})





// console.log(eventDate);




// timeIntervel(now, eventDate);




  
    





// console.log(`${dayout}: ${hourout} : ${minout} : ${secout}`);
