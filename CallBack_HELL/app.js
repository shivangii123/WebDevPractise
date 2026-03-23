/*  Here in instagram, you have to Post a picture, Write code for it..
Step 1: Select image --> delay of 4sec 
Step 2: Apply filter --> 2 sec
Step 3: Add caption --> 3sec
Step 4: Upload it  --> 5 sec
//////////////////////////////////////



// for delay -> use " SetTimeout() ""

/************** WRONG WAY ******************/
// function step1(){
//     console.log("selecting image from gallery..");
//     setTimeout(() => {// register in browser
//         return `Selected image` ;
//     }, 3000);
// }
// // let image = step1(); // undefined : function step1 doesn't return anything , 
// // console.log(image); // setTimeout goes to browser, function ends ->return nothin

// function step2(image){
//     console.log(`Applying filter on ${image} plz wait `);
//     setTimeout(()=>{
//         return `Filter applied `;
//     }, 2000) 
// }

// let image = step1();
// console.log(image);
// let filteredImg= step2(image);
// console.log(filteredImg);

/**************************************************/

///////////////////////////////////////////////////
////////////////--> RIGHT WAY -- >///////////

function step1(fn){
    console.log("Selecting image from gallery...");
    setTimeout(()=>{
        console.log("image is selected now.");
        fn('--photo.jpg--') ;  // calling function with argument
    }, 4000)
}

function step2(image, fn2){ 
    console.log(`Applying filter to the ${image}..`);//`Applying filter to the Selected image..`);
    setTimeout(()=>{
        console.log("Filters applied");
        fn2('--filtered image--') ; // step3 ka function
    } , 2000 )
}

function step3(filtr_img,fn3){
    console.log(`Writing a caption on the ${filtr_img}...`);
    setTimeout(()=>{
        console.log(`Caption added`);
        fn3('--Img with caption--');
    }, 3000)
}

function step4 (capt_img){
    console.log(`Uploading ${capt_img}...`);
    setTimeout(()=>{
        console.log("Image Uploaded successfully ");
    } , 5000)
}

//Horizontally grow-> Pyramid of DOOM
step1(function(image){
    step2(image, function(filtr_img){ // accept parameter in func
        step3(filtr_img, function(capt_img){  
            step4(capt_img) 
        });
    }) ;
});

// /*Pros:- executes orderwise :step1->step2->step3 ....: if stp1 don't run-> step2 can't run , they will never skip order,
//          dependent on each other..
// Disadvtg:-(1) Code "grows Horizontally" rather than vertically..("Poor Readability", difficult to Debug..)  
//         (2)  step2 depend on stp1 ->"Dependency"--> further steps not executesd ->> lead to "Errors "..
        
        
//      QUES: How to overcome this disadvantages ??? 
//      Ans : use  "Promise" ....  */
// //////////////////////////////////////////////////////////////////////////

