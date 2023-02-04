
const secondsHand = document.querySelector('#seconds')
const minutesHand = document.querySelector('#minutes')
const hoursHand = document.querySelector('#hours')

function setTime (){
    const now = new Date()

    seconds = now.getSeconds()
    secondsDeg = ((seconds/60)*360)+90
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`

    minutes = now.getMinutes()
    minutesdeg =( (minutes/60)*360)+90
    minutesHand.style.transform = `rotate(${minutesdeg}deg)`
    console.log(minutesdeg)
    

    hours = now.getHours()
    hoursdeg = ((hours/12)*360)+90
    hoursHand.style.transform = `rotate(${hoursdeg}deg)`
    
    

} 

setInterval(setTime,1000) 


 