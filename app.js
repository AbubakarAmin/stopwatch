let display=document.querySelector('.display h1')

let start=document.querySelector(".start")
let stop=document.querySelector(".stop")
let restart=document.querySelector(".restart")

let timeSpent=0
let state=false
 let startTime=0


function convertMilliseconds(ms) {
   // Calculate total seconds
   let totalSeconds = ms / 1000;

   // Calculate hours
   let hours = Math.floor(totalSeconds / 3600);
   // Calculate remaining seconds after extracting hours
   totalSeconds = totalSeconds % 3600;

   // Calculate minutes
   let minutes = Math.floor(totalSeconds / 60);
   // Calculate remaining seconds after extracting minutes
   let seconds =Math.floor (totalSeconds % 60)


   return {
       hours: hours,
       minutes: minutes,
       seconds: seconds
   };
}
function starter(){
   let startTime= Date.now()-timeSpent
 if(state==false){
   setInterval(updater,100)
   state=true
 }}

 start.addEventListener('click',starter)


function updater(){
   timeSpent=Date.now()-startTime
     timeSpent=convertMilliseconds(timeSpent)
display.textContent=`${timeSpent.hours}:${timeSpent.minutes}:${timeSpent.seconds}`

}



