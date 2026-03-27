

// //----------- SELECTION ---------
// //J Query - only one Selector : '$' 
// let  h1 = $('h1'); // document.querySelectorAll('h1');
// // ID
// let idd = document.querySelector('#hd1');
// //CLASS
// let id2 = $('#hd1'); // document.QuerySelectorAll('h1')

// let para =$('p');

// // console.log(h1); // h1 element
// // console.log(idd);
// // console.log(id2);
// // console.log(para);


// //************ MANIPULATION ***************/
// //CSS

// //here write style-> Kabab-Case (generally likha , not obj format)
// // para.css('color', 'blue') ;
// // para.css('border', '2px solid green ');
// // para.css('background-color' , 'yellow');

// //better Approch :- here Oject Format(part of Js)-> use Camel-Case writing 
// para.css({
//     color : 'red' ,
//     border : '2px solid blue' ,
//     fontSize : '20px' ,
//     backgroundColor : 'yellow' 

// })

// //=========== Accessing text =======================
// //innerText, TextContent..
// //GETTER
// console.log(para.text());   //as textContent..
// // display hidden content also

// //SETTER
// para.text('Arre diwano mujhe pehchano..');
// console.log(para);

// //innerHTML (getter +setter)
// console.log(para.html());

// //=========== Attributes =======================

// let inp = $('input');
// // console.log(inp);

// // getAttribute or getter
// console.log(inp.attr('type'));
// console.log(inp.attr('id'));


// //setAttribute or setter ->2 argumnt(type, replc with)
// inp.attr('type', 'color');
// inp.attr('type', 'date') ;
// inp.attr('type', 'checkbox');
// inp.attr('type', 'range') ;

// //=========== select elements=======================

// //selecting first and last element
// let lis = $('ul li');
// let li2 = $('ul li').first();
// li2.css('color', 'red') ;//only first li is green

// let li3 = $('ul li ').last();

// // lis.css('color', 'red') ;// all 3 lis green colored
// li3.css({
//     color : 'green' ,
//     border :'2px solid blue' ,
//     backgroundColor : 'yellow' 
// })

// //=================== Input ========================
// // .val() ->getter +setter
// let inp = $('input') ;
// console.log(inp.val()); //getter
// inp.val('hey whats up') ; //setter


// ============Class Attributes =============
// ClassList.add, ClassList.remove/toggle 

let para = $('p'); //select paragraph
para.addClass('a'); // add class
para.addClass('a b c');//multiple class


para.removeClass(' a c')  //remove class

para.toggleClass('a c') // toggle class

//has class
console.log(para.hasClass('c')); // check if contains class or not


//-----------------------------------------



