

function download(url){
    return new Promise((res,rej)=>{
        if(!url)   
            return rej("URL not provided!!")  

        console.log("Download starts...");
        setTimeout(function(){
            let movie_name = url.split('/').pop();
            res( movie_name);
        }, 3000)
        
    })
}

function compress(movie_name){
    return new Promise( (res, rej)=>{
        if(!movie_name)
            return  rej("Movie name not recieved!! , can't compress"); 
        
        console.log("Compression starts...");
        setTimeout( function(){
            let compressed_movie = movie_name.split('.')[0] +'.zip' ;
            res(compressed_movie);
        }, 4000)
        
    })
}

function upload(compressed_movie){
    return new Promise( (res,rej)=>{
        if(!compressed_movie)
            return rej("Movie not recieved!!,can't upload ");
        
        console.log("Upload starts...");
        setTimeout(function(){
            let newURL = 'https://mynewurl/' +compressed_movie ;
            res(newURL) ;
        },3000)
        
    })
}

let url = 'http://fakeurl.com/movie/jaanidushman.mp4' ;
//************* WRONG WAY->> nesting, bad   ************* */
// download(url)  //this 
// .then((movie_name)=>{
//     console.log(`Downloaded movie: ${movie_name}`);
//     compress(movie_name)
//     .then((compressed_movie)=>{
//         console.log(`Compressed Movie : ${compressed_movie}`);
//         upload(compressed_movie)
//         .then(msg=>{console.log(msg);})
//         .catch(err=>{ console.log(err);})
//     })
//     .catch(err=>{ console.log(err);})
// } )
// .catch( (err) =>{
//     console.log(err);
// })
//********************************** */
//********************************** */
download(url)
    .then((movie_name)=>{
        console.log(`Downloaded movie : ${movie_name}`);
        return compress(movie_name);//always return promise, pass box fowrd
    })
    .then( (compressed_movie)=>{   //no nesting
        console.log(`Compressed movie : ${compressed_movie}`);
        return upload(compressed_movie) ;
    })
    .then(newURL=>{
        console.log(`Uploaded at ${newURL}`);
    })
    .catch(err=>{
        console.log(err);
    })

    //Here no nesting, but PROBLEM->> ".then()" ki chaining
    //SOLUTION ->> async/await, removes .then() chains entirely