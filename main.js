const handSecond = document.querySelector('div.second');
const handMinutes = document.querySelector('div.minutes');
const handHour = document.querySelector('div.hour');

const nowTime = new Date();


function getSeconds() {
    const nowTime = new Date();
    seconds = nowTime.getSeconds();
    secDeg = ((seconds / 60) * 360) + 90
    console.log(seconds);
    handMinutes.style.transform = `rotate(${secDeg}deg)`
}
setInterval(getSeconds, 1000)