
const secondsHand = document.querySelector('#seconds')
const minutesHand = document.querySelector('#minutes')
const hoursHand = document.querySelector('#hours')

function setTime (){
    const now = new Date()

   const seconds = now.getSeconds()
   const secondsDeg = ((seconds/60)*360)+90
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`

   const minutes = now.getMinutes()
   const minutesdeg =( (minutes/60)*360)+90
    minutesHand.style.transform = `rotate(${minutesdeg}deg)`
    console.log(minutes, minutesdeg)
    

    hours = now.getMinutes()
    hoursdeg = ((minutes/12)*360)+90
    minutesHand.style.transform = `rotate(${hoursdeg}deg)`
    
    console.log(now)

} 

setInterval(setTime,1000) 


 