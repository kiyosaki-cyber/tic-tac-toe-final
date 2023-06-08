let Symbol="X"
let End = false
//assignment of variables
function boxClick(cell){
    let disp=document.getElementById("disp")
     let cell=document.getElementById(cell)
      if (cell.innerHTML === "" && !End) {
        cell.innerHTML = Symbol;
        disp.innerHTML = Symbol==="X"? "O" : "X";
        win()
        disp.classList.add(Symbol.toLowerCase()) 
        cell.classList.add(Symbol.toLowerCase()) 
        //create class of the specific symbol that can be smanipulated in CSS
        toggle();
        }
        draw()
        //calls the function for alternating change of symbols
      };
      function toggle(){
        Symbol = Symbol === "X" ? "O" : "X";
        
     }