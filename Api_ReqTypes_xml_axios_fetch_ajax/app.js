
// // 4types of request using Javascript:
// (1) XMLHttpRequest (2) fetch (3)axios (4)jQuer

// // ***************************************
// //(1) XMLHttpRequest :- Contructor Function
// // Older Way--> but it's the base
// /*It's a constructor func->gies new Obj->build new connection->send connection */

// //API for TV MAZE data
// //  https://api.tvmaze.com/search/shows?q=girls


// let req = new XMLHttpRequest() ;

// //Request open->Connection build karna
// console.log(req);
// //'GET' Method se API ke connection ko open kardo

// req.open('GET', 'https://api.tvmaze.com/search/shows?q=girls');

// req.send();// sending request


// // req.onerror =function(){} // In case of error

// req.onload = function(response){//request sent succesfuly ,no error
//     // console.log(this);
//     console.log(this.response); //full data loaded
// }


// // *************************************************
// //==================================================

// // (2)***** fetch() ->Json()->.then().catch() ;mostly used *******

// /* fetch()->It's a Web API ->returns a promise
// by default ->'GET' method..  */
//fetch()->gie data in json format
//axios -> in xml format

// /* json()-> promise return karega(Wait karega) + parss the data  */


// fetch(' https://api.tvmaze.com/search/shows?q=girls')
// .then( function(response) {
//    // response->Meta data
//    return response.json()//parse the data,returns a Promise
//                 // -> saare data packets ka wait karega

// })   
// .then( function(data){
//     console.log(data);
// })           
// .catch( function(error){
//     console.log(error);
// } )



// // *************************************************
// //==================================================

// // (3)******** axios() ->V.Imp *******

// axios -> 3rd party Library/Code written by somebody , we just use it..
// returns a promise, waits for entire data at once

axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);

})