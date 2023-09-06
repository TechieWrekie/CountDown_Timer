let timer;
function startTimer() {
    const hours = parseInt(document.getElementById("hours").value) || 0;
    const mins = parseInt(document.getElementById("mins").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;
 
    let totalTime = (hours * 3600 + mins * 60 + seconds);
 
    if (totalTime <=0) {
       alert("Please set a valid time before starting");
    } else {
       document.getElementById("inputSection").style.display = "none";
       document.getElementById("displaySection").style.display = "flex";
    }
 
    if (timer) {
       clearInterval(timer);
    }
    timer = setInterval(() => {
       if (totalTime < 0) {
          clearInterval(timer);
          alert("Time's Up!");
          return;
       }
 
       displayHours = Math.floor(totalTime / 3600);
       displayMinutes = Math.floor((totalTime % 3600) / 60);
       displaySeconds = Math.floor(totalTime % 60);
 
       document.getElementById("displayHours").textContent = String(displayHours).padStart(2, "0");
       document.getElementById("displayMinutes").textContent = String(displayMinutes).padStart(2, "0");
       document.getElementById("displaySeconds").textContent = String(displaySeconds).padStart(2, "0");
       totalTime--;
    }, 1000);
 }
 

function stopTimer(){
    if(timer){
        clearInterval(timer);
    }
    document.getElementById("inputSection").style.display = "flex";
   document.getElementById("displaySection").style.display = "none";
}
