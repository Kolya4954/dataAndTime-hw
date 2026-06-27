
const daysRef = document.querySelector("[data-value='days']");
const hoursRef = document.querySelector("[data-value='hours']");
const minutesRef = document.querySelector("[data-value='mins']");
const secondsRef = document.querySelector("[data-value='secs']");


const neededTime = new Date(2026, 11, 31, 23, 59, 59)



const idi = setInterval(() =>{
    const timeNow = new Date()
    
    const time = (neededTime - timeNow);

const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysRef.textContent = days
    hoursRef.textContent = hours
    minutesRef.textContent = mins
    secondsRef.textContent = secs
    

},1000);

setInterval(() => {},1000)
