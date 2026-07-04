
function add(a,b){
    return a+b ;

}

function sub(a,b){
    return a-b

}


//1st way to export 
module.exports.add = add ;
module.exports.sub = sub ;

// 2nd way

module.exports = {add,sub} ; //new obj 


//3rd way
//Common Js mein => require
//EsModule mein-> import , export use hoga

module.exports.add = function(a,b){ // key is "add"
    return a+b ;
}

// Named export
export function add(a,b){
    return a+b ;
}

function sub(a,b){
    return a-b;
}
//default export
