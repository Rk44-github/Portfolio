

const Setbutton = document.getElementsByClassName("myBtn")[0];
let date =  new Date().toLocaleTimeString();
const bikeHorn = new Audio("./sound/Bike-horn.mp3");
  
 

// ---------------------------The code for clock--------------------------- //

function TimeKeeper()
{
   
   let watch = new Date().toLocaleTimeString() ;         
   document.getElementsByClassName("clock")[0].innerText = watch;

};
setInterval( () => TimeKeeper(),1000);
//*******************************Am Pm ******************************//
// function amPm(time){
//    return (time <= 12)? time : time + " AM"
   
// }

//**************************End Am Pm *****************************//


// ****************** Add zero function *********************** //

function addZero(time) {

   return (time < 10) ? "0" + time : time;

}

// ******************End of Add zero function *********************** //

// ********************** TimeLoop  ***************************//
function timeLoop ()
{
    var hours = Math.abs((12 - (new Date().getHours()) ));
    
    var min = new Date().getMinutes();
   let currentTime = ( addZero(hours) + ":" + addZero(min));
   
   return currentTime; 
}
setInterval( () => timeLoop(),1000);


// ********************** End of TimeLoop **********************//

function handleClick()
{  
        setInterval( checkList(), 1000);
        console.log("I got Clicked");
        
}; 



// --------------------------- The code for setting alarm --------------------------- //
function getValue(){
   const alarmTime = document.getElementById("Alarm-time").value;
   return alarmTime;
}

//****************************** Check for an exisiting Alarm   ********************************//
function checkList(){
   var list = Setbutton.classList;
   const x = getValue();
    
     if(list.contains("Alarm-set"))
            { alert("Alarm is already set! Cancel the current Alarm to set a new one."); }
      else
      {
         Setbutton.innerText = "Alarm set for " + x ;
         Setbutton.classList.add("Alarm-set");
        setInterval( ()=> ringAlarm(), 1000);    
      };

}

//******************************  End of Check for an exisiting Alarm  ********************************//



// ********************* Alarm function ********************* //
function ringAlarm()
{
   let x = getValue();
      var time = timeLoop();

     if (x == time) 
     {
            bikeHorn.play();
            console.log("Ringing Now!");
         
      };
}

// ********************* End Of the Alarm function ****************//

        
// ---------------------------Cancel the Alarm--------------------------- //

function CancelAlarm(){
   document.getElementById("Alarm-time").value = "";
   Setbutton.classList.remove("Alarm-set");
   Setbutton.innerText = "Set Alarm";
   // clearInterval() ;

};


