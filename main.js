const handSecond = document.querySelector('div.second');
const handMinutes = document.querySelector('div.minutes');
const handHour = document.querySelector('div.hour');

const nowTime = new Date();

function setDate() {
    const nowTime = new Date();

    seconds = nowTime.getSeconds();
    secDeg = ((seconds / 60) * 360) + 90
    console.log(seconds);
    handSecond.style.transform = `rotate(${secDeg}deg)`

    minutes = nowTime.getMinutes();
    minDeg = ((minutes / 60) * 360) + 90
    console.log(minutes);
    handMinutes.style.transform = `rotate(${minDeg}deg)`


    hour = nowTime.getHours();
    hourDeg = ((hour / 24) * 360) + 90
    console.log(hour);
    handHour.style.transform = `rotate(${hourDeg}deg)`


}
setInterval(setDate, 1000)
setDate()