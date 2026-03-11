

    // HTML -> has Web API's :
    //   1) Canvas : Dispaly graphics like lines, square , reactangle, text on web page
    //   2) svg : (scaler ector graphics)
    //   They work as HTML tags , but actually they are Web API..
      
   
    // //==============================================
    // // (1) white board-> canvas
    let canvas = document.querySelector('canvas');


    // // (2)brush -> context
    // // this painting is on paper so its 2D (x, y)only..
    let ctx =  canvas.getContext('2d')

    // //(3) paint mein dip karo brush(ctx) ko..
    //  ctx.fillStyle ="blue" ;

    // // (4) draw rectangle
    // //(0,0)-> at Top Left
    // ctx.fillRect(20,50,30,50);
    
    // //---------------------------------------------
    // // (5)Outline color (strokeStyle())
    // //BRUSH ko dip n give color
    // ctx.strokeStyle ="purple" ;

    // //-----------------------------------------
    
    // //(6) Outline dena..(strokeRect())
    // ctx.strokeRect(30,40,30,50);
    // //---------------------------------------
    // //=======================================
    // // fillrect() -> rectangle filled with color
    // // strokeRect() -> outline the shape with color

    // //fillStyle() -> brush dip in color
    // //StrokeStyle() -> brush colorfor ouline
    // //============================================
    // //----------------------------------------------
   
    // //drawing path...
    // ctx.beginPath();
    // ctx.moveTo(20,40);
    // ctx.lineTo(150,70);//line 1
    // ctx.lineTo(20,70);//lin2 starts after1
    // ctx.lineTo(20,40);
    // ctx.lineTo(150,40);
    // ctx.lineTo(150,60);
    // ctx.strokeStyle ="Red" ;
    // ctx.stroke();
    // ctx.fillStyle= "green";
    // // ctx.fill();
    // ctx.closePath() ;
    
    // //============================================
    //Draw text..

    ctx.font = "25px  san-serif" ;
    ctx.fillStyle ="orange"
    ctx.fillText('shivangi', 50, 70);
    


    