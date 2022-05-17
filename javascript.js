
var clickCount = 0;
var condition = false;

var xCase1 = false;
var xCase2 = false;
var xCase3 = false;
var xCase4 = false;
var xCase5 = false;
var xCase6 = false;
var xCase7 = false;
var xCase8 = false;
var xCase9 = false;

var oCase1 = false;
var oCase2 = false;
var oCase3 = false;
var oCase4 = false;
var oCase5 = false;
var oCase6 = false;
var oCase7 = false;
var oCase8 = false;
var oCase9 = false;

var case1 = false;
var case2 = false;
var case3 = false;
var case4 = false;
var case5 = false;
var case6 = false;
var case7 = false;
var case8 = false;
var case9 = false;



function    myFunction(arg) {


    
   
    if (clickCount % 2 == 0) {
        x = 1;
        Switch(x, arg);
        clickCount++;
        x = 2;
        if (clickCount < 8) {
        computerPlay(x);
        }
        
        
        
    } else if (clickCount % 2 != 0){
        x = 2; 
        computerPlay(x);      
                             
    };
    
    clickCount++;
    console.log("click count " + clickCount);
    xWin();
    oWin();
    
}

function Switch (x, arg) {
    switch (x, arg) {
    case 1:
        if (x == 1 && case1 == false) {
            console.log("button 1 worked");
            document.getElementById("block-1-a").innerHTML = "X";
            xCase1 = true;
        } else if (x == 2 && case1 == false) {
            console.log("button 1 worked");
            document.getElementById("block-1-a").innerHTML = "O";
            oCase1 = true;
        } else {
            
            computerPlay(x);
        };
        case1 = true;
        
    break;
    case 2:
        if (x == 1 && case2 == false) {
            console.log("button 2 worked");
            document.getElementById("block-1-b").innerHTML = "X";
            xCase2 = true;
        } else if (x == 2 && case2 == false) {
            console.log("button 2 worked");
            document.getElementById("block-1-b").innerHTML = "O";
            oCase2 = true;
        } else {
            
            computerPlay(x);
        };
        case2 = true;
    
    break;
    case 3:
        if (x == 1 && case3 == false) {
            console.log("button 3 worked");
            document.getElementById("block-1-c").innerHTML = "X";
            xCase3 = true;
        } else if (x == 2 && case3 == false) {
            console.log("button 3 worked");
            document.getElementById("block-1-c").innerHTML = "O";
            oCase3 = true;
        } else {
            
            computerPlay(x);
        };
        case3 = true;
    
    break;
    case 4:
        if (x == 1 && case4 == false) {
            console.log("button 4 worked");
            document.getElementById("block-2-a").innerHTML = "X";
            xCase4 = true;
        } else if (x == 2 && case4 == false) {
            console.log("button 4 worked");
            document.getElementById("block-2-a").innerHTML = "O";
            oCase4 = true;
        } else {
            
            computerPlay(x);
        };
        case4 = true;

    break;
    case 5:
        if (x == 1 && case5 == false) {
            console.log("button 5 worked");
            document.getElementById("block-2-b").innerHTML = "X";
            xCase5 = true;
        } else if (x == 2 && case5 == false) {
            console.log("button 5 worked");
            document.getElementById("block-2-b").innerHTML = "O";
            oCase5 = true;
        } else {
            
            computerPlay(x);
        };
        case5 = true;

    
    break;
    case 6:
        if (x == 1 && case6 == false) {
            console.log("button 6 worked");
            document.getElementById("block-2-c").innerHTML = "X";
            xCase6 = true;
        } else if (x == 2 && case6 == false) {
            console.log("button 6 worked");
            document.getElementById("block-2-c").innerHTML = "O";
            oCase6 = true;
        } else {
            
            computerPlay(x);
        };
        case6 = true;

    
    break;
    case 7:
        if (x == 1 && case7 == false) {
            console.log("button 7 worked");
            document.getElementById("block-3-a").innerHTML = "X";
            xCase7 = true;
        } else if (x == 2 && case7 == false) {
            console.log("button 7 worked");
            document.getElementById("block-3-a").innerHTML = "O";
            oCase7 = true;
        } else {
            
            computerPlay(x);
        };
        case7 = true;

    
    break;
    case 8:
        if (x == 1 && case8 == false) {
            console.log("button 8 worked");
            document.getElementById("block-3-b").innerHTML = "X";
            xCase8 = true;
        } else if (x == 2 && case8 == false) {
            console.log("button 8 worked");
            document.getElementById("block-3-b").innerHTML = "O";
            oCase8 = true;
        } else {
            
            computerPlay(x);
        };
        case8 = true;

    
    break;
    case 9:
        if (x == 1 && case9 == false) {
            console.log("button 9 worked");
            document.getElementById("block-3-c").innerHTML = "X";
            xCase9 = true;
        } else if (x == 2 && case9 == false) {
            console.log("button 9 worked");
            document.getElementById("block-3-c").innerHTML = "O";
            oCase9 = true;
        } else {
            
            computerPlay(x);
        };
        case9 = true;

    
    break;
    }

}


function xWin() {
    if (xCase9 == true&& xCase8==true && xCase7 == true) {
        console.log("X Game won");
        condition = true;
    }
    if (xCase6 == true&& xCase5==true && xCase4 == true) {
        console.log("X Game won");
        condition = true;
    }
    if (xCase1 == true&& xCase2==true && xCase3 == true) {
        console.log("X Game won");
        condition = true;
    }
    if (xCase1 == true&& xCase4==true && xCase7 == true) {
        console.log("X Game won");
        condition = true;
    }
    if (xCase2 == true&& xCase5==true && xCase8 == true) {
        console.log("X Game won");
        condition = true;
    }
    if (xCase3 == true&& xCase6==true && xCase9 == true) {
        console.log("X Game won");
        condition = true;
    }
    if (xCase1 == true&& xCase5==true && xCase9 == true) {
        console.log("X Game won");
        condition = true;
    }
    if (xCase3 == true&& xCase5==true && xCase7 == true) {
        console.log("X Game won");
        condition = true;
    } else if (clickCount == 9 && condition == false) {
        console.log("cat game");
    }; 
}

function oWin() {
    if (oCase9 == true&& oCase8==true && oCase7 == true) {
        console.log("O Game won");
        condition = true;
    }
    if (oCase6 == true&& oCase5==true && oCase4 == true) {
        console.log("O Game won");
        condition = true;
    }
    if (oCase1 == true&& oCase2==true && oCase3 == true) {
        console.log("O Game won");
        condition = true;
    }
    if (oCase1 == true&& oCase4==true && oCase7 == true) {
        console.log("O Game won");
        condition = true;
    }
    if (oCase2 == true&& oCase5==true && oCase8 == true) {
        console.log("O Game won");
        condition = true;
    }
    if (oCase3 == true&& oCase6==true && oCase9 == true) {
        console.log("O Game won");
        condition = true;
    }
    if (oCase1 == true&& oCase5==true && oCase9 == true) {
        console.log("O Game won");
        condition = true;
    }
    if (oCase3 == true&& oCase5==true && oCase7 == true) {
        console.log("O Game won");
        condition = true;
    }
}

function computerPlay(x) {
   if (x == 2) {
    arg = Math.floor(Math.random() * 8) + 1;    
    console.log("computer generated number " + arg);
    Switch(x, arg);
   }   
    
}
