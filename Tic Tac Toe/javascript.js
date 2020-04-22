//Class cell which contains the name and status of our cell
class Cell{
    constructor(name,status){
        this.name = name;       
        this.status = status;   //It will be either "blank","x" or an "o"
    }
    get findstatus(){               //getter method to access the status of the cell
        return this.status;
    }
    get findname() {
        return this.name;
    }
    set setstatus(new_status){     //setter method to set the status of the cell
        this.status = new_status;
    }
}

function gridisclicked(cellname){
    grid0.innerHTML = "<img src=\"x.png\" height=\"100%\" width=\"100%\">";
    for(var i = 0; i < 9 ; i++){
        if(cellname == cells[i].findname){
            cells[i].setstatus("x");
            let x = "grid";
            x = x + i;
            x.removeEventListener();
            x.innerHTML = "<img src=\"x.png\" height=\"100%\" width=\"100%\">";
        }
    }
}

function startgame(){
    setplayerscore(0,0);
}

function setplayerscore(player1,player2){
    player.innerHTML = player1;
    pc.innerHTML = player2;
}

//Create 9 cells representing each box in tic tac toe
let cell0 = new Cell("cell0","blank");
let cell1 = new Cell("cell1","blank");
let cell2 = new Cell("cell2","blank");
let cell3 = new Cell("cell3","blank");
let cell4 = new Cell("cell4","blank");
let cell5 = new Cell("cell5","blank");
let cell6 = new Cell("cell6","blank");
let cell7 = new Cell("cell7","blank");
let cell8 = new Cell("cell8","blank");

//create an array to keep all the cells in 
let cells = [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8];
//Declare variables
let player1score = 0;                                               //Player score
let player2score = 0;                                               //PC score
//From document
let grid0 = document.getElementById("cell0");
let grid1 = document.getElementById("cell1");
let grid2 = document.getElementById("cell2");
let grid3 = document.getElementById("cell3");
let grid4 = document.getElementById("cell4");
let grid5 = document.getElementById("cell5");
let grid6 = document.getElementById("cell6");
let grid7 = document.getElementById("cell7");
let grid8 = document.getElementById("cell8");
let player = document.getElementById("player");                     
let pc = document.getElementById("pc");                             
let start = document.getElementById("startgame");                   //Startbutton
let restartgame = document.getElementById("restartgame");           //Restartbutton
//Listen to if start is clicked
start.addEventListener('click',startgame());
//Listen if any grid is clicked
grid0.addEventListener('click',gridisclicked("cell0"));




