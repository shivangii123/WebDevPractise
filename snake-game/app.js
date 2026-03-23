
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 40;
let boardHeight = canvas.height;
let boardWidth = canvas.width;
let direction = 'RIGHT' ;
let score = 0;


//snake ke cells jiski wajah se Snake Rectngle ban raha h..
let snakeCells = [[0,0]]  ;
//--> assume initially Snake moves right only..

// Generate FOOD
function foodGenerate(){
    return [
        Math.floor(Math.random() * (boardWidth / cellSize)) * cellSize,
        Math.floor(Math.random() * (boardHeight / cellSize)) * cellSize
    ]
}
let food = foodGenerate();


// snake draw
function draw(){
    //erase karo poora board..(pura board clean then draw)
    ctx.clearRect(0,0,boardWidth,boardHeight);

    for (let cell of snakeCells ){// cell is each el of array
        ctx.fillStyle ="red";
        ctx.fillRect( cell[0], cell[1], cellSize, cellSize);
    }
    ctx.fillStyle = 'green' ;
    ctx.fillRect(food[0], food[1], cellSize, cellSize)
    // fillRect(x , y , width, height)
}

// Self- Collision 
function isSelfCollision(x,y){
    for(let cell of snakeCells){
        if(cell[0]===x && cell[1]=== y){ 
            return true ;}
    }
    return false ;

}

//snake update after every time interval
function update (){
    let head_x = snakeCells[snakeCells.length -1][0] ;
    let head_y = snakeCells[snakeCells.length -1][1] ;

    // move snake
    if(direction === 'RIGHT')   head_x += cellSize ;
    else if(direction === 'LEFT') head_x -= cellSize ;
    else if(direction === 'UP')   head_y -= cellSize ;
    else if(direction === 'DOWN') head_y += cellSize ;

    //Boundary -Detection Condition
    if(head_x < 0 || head_x >= boardWidth || head_y < 0 ||
         head_y >= boardHeight || isSelfCollision(head_x, head_y)){
        
        clearInterval(gameloop)
        alert(`Game Over \n Score :${score}` );
        score = 0;         
        snakeCells = [[0,0]];
        direction = "RIGHT";
        return;
    }

    snakeCells.push([head_x, head_y]);
    // FOOD - BITE
    if(food[0] === head_x && food[1] === head_y){
        score += 1 ;
        food = foodGenerate();//re-generate food
    }
    else{
        snakeCells.shift() ;
    }

}

document.addEventListener('keydown', (e)=>{
    // console.log(e);

    //2nd condition of 'if'->>prevent opp dirc change
    if(e.key === 'ArrowUp'  && direction !== 'DOWN'){
        direction ='UP';
    }
    else if(e.key === 'ArrowRight'){
        direction ='RIGHT';
    }
    else if(e.key === 'ArrowDown'){
        direction ='DOWN';        
    }
    else if (e.key === 'ArrowLeft'){
        direction ='LEFT';
    }
})

let gameloop = setInterval( function() {
    update() ;
    draw() ;
}, 300)
