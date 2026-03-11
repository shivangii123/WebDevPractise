// //==============Step1 ===============

// let canvas = document.querySelector('canvas'); //board
// let ctx = canvas.getContext('2d'); //brush

// let cellSize =50;
// let boardHeight =600;
// let boardwidth = 600;

// // snake ko draw
// function draw(){ }

// //snake update after every time interval
// function update (){ }

// setInterval( function() {
//     update() ;
//     draw() ;
// }, 200)

//==============Step2 ===============

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 20;
let boardHeight = canvas.height;
let boardWidth = canvas.width;
let direction = 'right' ;


//snake ke cells jiski wajah se Snake Rectngle ban raha h..
let snakeCells = [[0,0]]  ;
//--> assume abhi snake moves right only..

// Generate FOOD
function foodGenerate(){
    return [
        Math.round(Math.random()*(boardWidth- cellSize)/cellSize)*cellSize ,
        Math.round(Math.random()*(boardHeight- cellSize)/cellSize)*cellSize   
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

//sanke update after every time interval
function update (){
    let head_x = snakeCells[snakeCells.length -1][0] ;
    let head_y = snakeCells[snakeCells.length -1][1] ;

    // let newHead_x = head_x + cellSize ;
    // let newHead_y = head_y ;

    let newHead_x, newHead_y ;
    if(direction === 'right'){
        newHead_x = head_x + cellSize;
        newHead_y = head_y ;
    }
    else if(direction === 'left'){
        newHead_x = head_x - cellSize;
        newHead_y = head_y ;
    }
    else if(direction === 'up'){
        newHead_x = head_x ;
        newHead_y = head_y - cellSize;
    }
    else if(direction === 'down'){
        newHead_x = head_x ;
        newHead_y = head_y + cellSize;
    }


    //Boundary -Detection Condition
    if(newHead_x < 0 || newHead_x >= boardWidth || newHead_y < 0 || newHead_y >= boardHeight){
        alert("Game Over");
        snakeCells = [[0,0]];
        direction = "right";
        return;
    }

    snakeCells.push([newHead_x, newHead_y]);
    // FOOD - BITE
    if(food[0] === newHead_x && food[1] === newHead_y){
        food = foodGenerate();//re-generate food
    }
    else{
        snakeCells.shift() ;
    }

}

document.addEventListener('keydown', (e)=>{
    // console.log(e);

    //2nd condition of 'if'->>prevent opp dirc change
    if(e.key === 'ArrowUp'  && direction !== 'down'){
        direction ='up';
    }
    else if(e.key === 'ArrowRight'){
        direction ='right';
    }
    else if(e.key === 'ArrowDown'){
        direction ='down';        
    }
    else if (e.key === 'ArrowLeft'){
        direction ='left';
    }
})

setInterval( function() {
    update() ;
    draw() ;
}, 300)
