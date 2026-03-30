// =====================================
        //  E V E N T S   //
// =====================================

// // button click-> Event triggered
// $('button').click( function (){
//     console.log("User has clicked ..");
// })

// let h1 = $('h1');
// h1.addClass('a');


// $('ul li').click( function(e){
//     // console.log(e.target.textContent);

//     // e.target.css('color', 'red')// Wron

//     //'this' :-Jquery wala this-> "target"
//     // console.log(this.textContent);// one.to..

//     // $(this)//-> jaha event trigger hua h(target value)
//     // 'e' par it will not work..
//    $(this).css('color', 'red');

// })

// //keyUp , keyDown

// $('input').keyup( function(){
//     console.log("hello");
// })


// // =====================================
// //addEventListener()-> '.on' in JQuery

// $('button').on('click', function(){
//     // console.log("user clicked ");
//     let ans = $('input').val() ;
//     console.log(ans);
// })

// // ========EFFECTS IN JQUERY=============================

// $('#fadeIn').on('click', function(){
//     $('.container').fadeIn();// shows div
// })

// $('#fadeOut').on('click', function(){
//     $('.container').fadeOut(); // 'div' disapear 
// })
// $('#fadeToggle').on('click', function(){
//     $('.container').fadeToggle(); // toggle
// })


//slidIn, slideOut -> effects=>refer Documentation

$('#slideDown').on('click', function(){
    console.log("slidingDown");
    $('.container').slideDown("slow");
})
$('#slideUp').on('click', function(){
    console.log("slidingUp");
    $('.container').slideDown("slow");
})