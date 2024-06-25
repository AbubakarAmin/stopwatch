let display=document.querySelector('.display span')

let start=document.querySelector(".startk")
let stopp=document.querySelector(".stopk")
let restart=document.querySelector(".resetk")

let timeSpent=0
let state=false
 let startTime=0
 let timer=null


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
   
 if(state==false){
  startTime= Date.now() 
  timer=setInterval(updater,100)
   state=true
 }}

 start.addEventListener("click",starter)
function stoper (){
  state=false
  clearInterval(timer)
  startTime=startTime+timeSpent
}
function reset(){
  display.innerHTML=`00:00:00`  
}
function updater(){
  console.log(startTime)
   timeSpent=Date.now()-startTime
     timeSpent=convertMilliseconds(timeSpent)
    
    

display.innerHTML=`${timeSpent.hours}:${timeSpent.minutes}:${timeSpent.seconds}`

}
start.addEventListener('click',starter)
stopp.addEventListener('click',stoper)
restart.addEventListener('click',reset)


