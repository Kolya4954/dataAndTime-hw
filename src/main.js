const headingRef = document.querySelector(".heading")
const daysRef = document.querySelector("[data-value='days']");
const hoursRef = document.querySelector("[data-value='hours']");
const minutesRef = document.querySelector("[data-value='mins']");
const secondsRef = document.querySelector("[data-value='secs']");


const neededTime = new Date(2026, 7, 1)



const idi = setInterval(() =>{
    const timeNow = new Date()
    
    const time = neededTime - timeNow
    if(time <= 0){
    clearInterval(id)
    return


    headingRef.textContent = "second month of summer has arrived!"


    daysRef.textContent = days
    hoursRef.textContent = hours
    minutesRef.textContent = mins
    secondsRef.textContent = secondsRef
}



 const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

},1000);
