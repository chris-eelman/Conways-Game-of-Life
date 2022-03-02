var size; //length of a size of the grid
var grid; // 2D array containing either 0 or 1 (0-alive, 1-dead)
var cellHeight; //in pixels
var cellWidth; //in pixels
var rainbow = false; //indicates rainbow feature
var started = false; //indicates if there is an interval running (simulation is running)
var round = 0; //counts how many rounds have been simulated


function glider (){//sets up a grid with the information to produce a glider pattern
    document.getElementById('startButton').hidden = false;
    round = 0;
    grid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
    ];


    size = 8;
    calculateCellSize();
    displayGrid(grid);
}

function spaceship (){ //sets up a grid with the information to produce a spaceship pattern whih is a type of glider\
    document.getElementById('startButton').hidden = false;
    round = 0;
    grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    size = 14;
    calculateCellSize();
    displayGrid(grid);
}

function loafer(){//sets up a grid with the information to produce a loafer pattern which is a type of glider
    document.getElementById('startButton').hidden = false;
    round = 0;
    grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]]
    size = 20;
    calculateCellSize();
    displayGrid(grid);
}

function pulsar(){//sets up a grid with the information to produce a 3 round semi-static pulsar pattern
    document.getElementById('startButton').hidden = false;
    round = 0;
    grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]]

    size = 20;
    calculateCellSize();
    displayGrid(grid);
}

function calculateCellSize(){ //calculates the available room for grid and makes the cells 
    //smaller or larger based on the size of the gird and available space
    cellHeight = ((window.screen.availHeight) - 30) / (size + 20);
    cellWidth = cellHeight; //"square" squares

}


function generateRandomSeed(){ //creates a 2D array with the dimentions provided by user filled 
    //with randomly generated 0s(70% chance of generation) or 1s(30% chance of generation).
    document.getElementById('startButton').hidden = false;
    round = 0;
    size = Number(document.getElementById("sizeRange").value);//gets size of grid from slider
    grid = new Array(size);
    calculateCellSize(); 
   
    for (var i = 0; i < grid.length; i++) { // Loop to create 2D array using 1D array
        grid[i] = new Array();
    }

    
    for (var i = 0; i < size; i++) {// Loop to initialize 2D array elements
        for (var j = 0; j < size; j++) {
            randomNum = Math.random();
            if (randomNum <= .3){
                grid[i][j] = 1; //fills with 1 with a probability of 30%
            }else{
                grid[i][j] = 0; // fills with 0 with probability of 70%
            }
        }//col
    }//row
    displayGrid(grid);
}



/*
Explaination for checkNeighbors() and all the functions inside of it used to calulate how many 
neighbors a cell has including overlapping borders

Each cell needs to check its eight neighbors surrounding it:
For the following eight functions after checkNeighbors(), the input variables is the cell's location on the grid.
Using those input variables the ELSE part of the if statement in the functions calculate which cell is the neighbor in that direction(N,S,E,W).
For example, the cell to the east of grid[0][0] would be grid[0][1], south of grid[0][0] is grid[1][0]
But before the ELSE part is exected... since this version uses overlapping borders, it checks if the cell is on a border
and its neighboring cell in the specific direction will not exist. So if this is the case, 
if the neighboring cell in a certain direction is negative, check the neighbor of the last cell in the 
row(if the neighboring cell being checked is too far to the right or left of the grid dimensions), 
or collumn(if the neighboring cell being checked is too far above or below the grid dimensions)



*/
function checkNeighbors(r, c){ //returns the number of live neighbors for a specific cell 
 //which is then used to update that cell for the next round based on Conway's set rules

    let liveNeighbors = 0;
 
    if(checkNorth(r, c) == 1){
        liveNeighbors++;
    }
    if(checkSouth(r, c) == 1){
        liveNeighbors++;
    }
    if (checkEast(r, c) == 1){
        liveNeighbors++;
    }
    if (checkWest(r, c) == 1){
        liveNeighbors++;
    }
    if (checkNorthWest(r, c) == 1){
        liveNeighbors++;
    }
    if (checkNorthEast(r, c) == 1){
        liveNeighbors++;
    }
    if (checkSouthWest(r, c) == 1){
        liveNeighbors++;
    }
    if (checkSouthEast(r, c) == 1){
        liveNeighbors++;
    }
 
    return liveNeighbors;
 }



function checkNorth(r, c){
    let i;
    let j;
    if(r <= 0){
        i = size - 1;
    }else{
        i = r - 1;
    }
    j = c;

    return (((grid[i][j])==1)? 1 : 0);
}

function checkSouth(r,c){
    let i;
    let j;
    if(r >= (size-1)){
        i = 0;
    }else{
        i = r + 1;
    }
     j = c;

    return (((grid[i][j])==1)? 1 : 0);
}

function checkEast(r,c){
    let i;
    let j;
    if (c >= (size-1)){
        j = 0;
    }else{
        j = c + 1;
    }
    i = r;

    return (((grid[i][j])==1)? 1 : 0);
}

function checkWest(r,c){
    let i;
    let j;
    if (c <= 0) {
        j = size - 1;
    }else{
        j = c - 1;
    }
    i = r;

    return (((grid[i][j])==1)? 1 : 0);

}


function checkNorthWest(r,c){
    let i;
    let j;
    if (r <= 0){
        i = size - 1;
    }else{
        i = r - 1;
    }

    if(c <= 0){
        j = size - 1;
    }else{
        j = c - 1;
    }

    return (((grid[i][j])==1)? 1 : 0);
}

function checkNorthEast(r, c){
    let i;
    let j;
    if (r<= 0) {
        i = size - 1;
    } else {
        i = r - 1;
    }

    if (c >= (size-1)){
        j = 0;
    }else{
        j = c + 1;
    }

    return (((grid[i][j])==1)? 1 : 0);
}

function checkSouthWest(r, c){
    let i;
    let j;
    if(r >= (size - 1)){ 
        i = 0;
    }else{
        i = r + 1;
    }

    if (c <= 0){
        j = size - 1;
    }else{
        j = c - 1;
    }

    return (((grid[i][j])==1)? 1 : 0);
}

function checkSouthEast(r, c){
    let i;
    let j;
    if(r >= (size - 1)){
        i = 0;
    }else{
        i = r + 1;
    }

    if (c >= (size-1)){
        j = 0;
    }else{
        j = c + 1;
    }

    return (((grid[i][j])==1)? 1 : 0);
}


function updateCell(r,c){
    let numLive = checkNeighbors(r,c);
    if (grid[r][c] == 1){//rules for live cell:
        if(numLive < 2){ //if it has less than 2 neighbors it dies
            return 0;
        }
        if(numLive > 3){//if it has more than 3 neighbors it dies
            return 0;
        }else{
            return 1;//if it has 2 or 3 neighbors it lives 
        }
    }

    if (grid[r][c] == 0){//rules for dead cell:
        if(numLive == 3){//if it has exactly 3 neighbors it comes to life
            return 1;
        }else{
            return 0;//anything else it remains dead
        }
    }

}


function updateBoard(){ //udates the board with new data gained from current round and then displays that new data
    var newGrid = new Array(size);
    for (var i = 0; i < newGrid.length; i++) {
        newGrid[i] = new Array();
    }//creates copy of the current grid
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
        newGrid[i][j] = updateCell(i, j); // checks and sets what should be in that position the new grid (calls the updatecell function which checks neighbors and returns either 1 or 0 based on Conway's rules)
        }//collumn
    }//row
    grid = newGrid;//updates data
    displayGrid(grid);//display data
}


function displayGrid(grd){
    round ++;
    var html = "<table>";
    for (let r = 0; r < grd.length; r++){
        html+= "<tr>";
        for (let c = 0; c < grd[r].length; c++){
            let cell = "<td id = \"";
            cell += "R"+r+"c"+c +'\"'; // creates id
            let color = (grd[r][c] == 1)? getRandomColor():'white'; //sets color based on live/dead
            cell += " style=\"background-color:"+color + "; ";
            cell += "name = \"cell\""
            cell += " height="+ cellHeight;
            cell += " width=" + cellWidth;

            cell+= "</td>";
            html += cell;
        }//collumn
    }//row
    html += "</table>";
    document.getElementById("results").innerHTML = html;
    document.getElementById('roundNumber').innerHTML = "Round: " + round;

}

//got this code for random colors from -- https://stackoverflow.com/questions/1484506/random-color-generator#1484514
function getRandomColor() { //if rainbow == true, then live cells will be given random color, if not then they will be black
    if (rainbow == true){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    else {
        return 'black';
    }
}

function toggleRainbow(){
    if (rainbow == false){
        rainbow = true;
        document.querySelector('#rainbowToggle').innerHTML = 'Rainbow ON';
    }else if (rainbow == true){
        rainbow = false;
        document.querySelector('#rainbowToggle').innerHTML = 'Rainbow OFF';    }
}

function start(){
    simulateEvery = Number(document.getElementById("speedRange").value);
    interval = setInterval(updateBoard, simulateEvery);
    started = true;
    document.getElementById("stopButton").hidden = false;
    document.getElementById("startButton").hidden = true;


    document.getElementById("gliderButton").hidden = true;
    document.getElementById("spaceShipButton").hidden = true;
    document.getElementById("pulsarButton").hidden = true;
    document.getElementById("randomSeedButton").hidden = true;
    document.getElementById("loaferButton").hidden = true;

    document.getElementsByClassName("slidecontainerSpeed").hidden = true;
    document.getElementsByClassName("slidecontainerSize").hidden = true;
    document.getElementById('rainbowToggle').hidden = false;


}


function stop(){
    clearInterval(interval);
    started = false;
    document.getElementById("stopButton").hidden = true;
    document.getElementById("startButton").hidden = false;

    document.getElementById("gliderButton").hidden = false;
    document.getElementById("spaceShipButton").hidden = false;
    document.getElementById("pulsarButton").hidden = false;
    document.getElementById("randomSeedButton").hidden = false;
    document.getElementById("loaferButton").hidden = false;

    document.getElementsByClassName("slidecontainerSpeed").hidden = false;
    document.getElementsByClassName("slidecontainerSize").hidden = false;

}

function updateInterval(){ // sets interval speed (used when slider is changed while interval is running)
    if (started == true){
        clearInterval(interval);
        simulateEvery = Number(document.getElementById("speedRange").value);
        interval = setInterval(updateBoard, simulateEvery);
    } else if (started == false){
        simulateEvery = Number(document.getElementById("speedRange").value);
    }
    document.getElementById("speedResult").innerHTML = simulateEvery + "ms";


}

