//<...33-77
    //Set all wining positions as  sub arrays within an array
function win(){
  for(let i=0;i<winner.length;i++){
   if( document.getElementById(winner[i][0]).innerHTML===Symbol&&
    document.getElementById(winner[i][1]).innerHTML===Symbol&&
    document.getElementById(winner[i][2]).innerHTML===Symbol
    //checks within the sub arrays if the defined boxes contain simillar symbols
    ){
     document.getElementById(winner[i][0]).classList.add("win");
     document.getElementById(winner[i][1]).classList.add("win");
     document.getElementById(winner[i][2]) .classList.add("win");
     //add a class tag within the html with the name win
      End = true;
        var message = Symbol + " wins!";
        disp.innerHTML = message;
       
    }
  }
  }
document.getElementById("new").addEventListener("click", function() {
    let disp = document.getElementById("disp");
    disp.innerHTML=""
  for(let i=1;i<=9;i++){
    let thi=document.getElementById(i);
    thi.innerHTML="";
    thi.classList.remove("win")
    toggle()
    thi.classList.remove(Symbol.toLowerCase()) 
  }
  End=false
});
function draw() {
    let filledCount = 0;
    for (let i = 1; i <= 9; i++) {
      if (document.getElementById(i).innerHTML !== "") {
        filledCount++;
      }
    }
    if (filledCount === 9 && !End) {
      End = true;
      var message = "DRAW!";
      disp.innerHTML = message;
    }
  }