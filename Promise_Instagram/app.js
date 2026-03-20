
// // promise

// let step1 = function(){
//     console.log("Selecting image...");
//     return new Promise(function(resolve, reject){ // new Promise()-> gives an object , we r returning that Object...
//         setTimeout(function(){
//             resolve("image.jpg") ;
//         }, 4000)
//     })
// }

// let step2 = function(image){
//     console.log(`Applying filters to ${image}`);
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("filtr_img") ;
//         }, 2000)
//     })
// }
// let step3 = function(filtr_img){
//    console.log(`Adding caption to ${filtr_img}..`);
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Img_with_caption");
//         }, 3000)
//     })
// }

// let step4 = function(img_with_caption){
//     console.log(`Uploading ${img_with_caption} plz wait...`);
//     return new Promise(function(resolve,reject){  
//         setTimeout(function(){
//             resolve("Image posted succesfully !!");
//         }, 5000)
//     })
// }

// step1()   // Vertically grow (return each step for .then chaining ,for outside Vertcl chain, not horizontal callbk hell)
// .then(function(image){
//     console.log("image selected"); //step2() get object frm Promise ,we return entire objc,it goes in ".then"/.catch()
//     return step2(image) //step1 ke succesfully chalne par hi step2 cal ho ,so step2 called inside ".then()"...
// })
// .then(function(filtr_img){ // step2 promise fulfilled hone par step3 chalao..
//     console.log("filters applied");
//     return step3(filtr_img)
// })
// .then(function(img_with_caption){// step3 promise resolve hone par step4 chalo..
//     console.log("caption added");
//     return step4(img_with_caption)
// })
// .then(function(final_img){   /// step3 promise resolve hone par Msg print...
//     console.log("Image Posted Succesfully !!");
// })
// .catch(function(err){    // if error at any step , it come to catch (just like if-- else if -- else ..)
//     console.log(err);    // only one ".catch()"
// })



//////////////////////////////////////////


function select(url){

    console.log("Selecting image..");
    return new Promise( function(resolve, reject){
        if(!url) reject("no url provided!!");
        else{
           console.log("selection started");
            setTimeout( ()=>{
                //  let movie_name = url.split('/').pop();
                resolve(selected_img);
            }, 3000)
        }
    })
}

function filter(selected_img){
    console.log("Applying filters..");
    return new Promise( function(resolve, reject){
        console.log("Filter started");
        setTimeout( () =>{
            resolve(filtered_img);
        }, 2000)
    })

}
function caption(flt_img){
    console.log("Adding caption..");
    return new Promise( function(resolve, reject){
        resolve("Img_Caption");
    }, 3000)
}

function upload(capt_img){
    console.log("Uploading...");
    return new Promise( function(resolve, reject){
        resolve("uploaded finally !!");
    }, 3000)
    

}

select('images/shivangi.jpg')
.then(filter)
.then(caption)
.then(upload)
.then(data =>{
    console.log(data);
} )
.catch( msg =>{
    console.log(msg);
})