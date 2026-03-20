

function sortArr1(a){
    return new Promise(( res, rej)=>{
        setTimeout( function(){  
            a.sort((a,b)=> a-b ) ; //numric vales accd sort ,bydefault string ke acc sort hota
            res(a);
        }, 2000)
    })
}

function sortArr2(a){
    return new Promise( (res, rej)=>{
        setTimeout( function(){
            a.sort( (a,b)=> a-b );
            res(a);
        }, 1000)
    })
}

// get both sorted arrays and provide combined results..
let arr1 = [3,1,5,7,6] ;
let arr2 = [2, 6,4,1,5];

//till abve 2 promises not resolved ".then()" not run

Promise.all([ sortArr1(arr1), sortArr2(arr2)]).then(data =>{
    // console.log(data);
    let newArr = [... data[0], ...data[1]];//de-construct
    console.log(newArr);
})