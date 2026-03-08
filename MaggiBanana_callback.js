
////////////////////////////////////////
///////////////////code 1//////////////////
//-> Ye Sequential task h.. ek ek karke execute honge..Nothing Asynchronous

// Callback: Ek function jab apna kaam poora kr lega toh uske baad jis function
// ko call krte hai that function is called as "CALLBACK FUNCTION"
function maggiLana(cb) {
    console.log("Maggi Le aaye 10 min mei")

    // Ab maggi aa gai, toh hum uske baad wale function jisse chalana hai
    // call kr denge usse
    cb(maggiKhana); // cb -> maggiBanana
      console.log("magi banegi usse pehle ye karo");
      console.log("magi banegi usse pehle ye karo");
      console.log("magi banegi usse pehle ye karo");
      console.log("magi banegi usse pehle ye karo");

}

function maggiBanana(cb) {
    console.log("Maggi Bana di 2 min mei")

    cb(); // cb-> maggiKhana
}

function maggiKhana(){
    console.log("Maggi ko kha lia");
}


// maggiLana ke andar humne maggiBanana pass kia
maggiLana(maggiBanana); // maggiBanana tabhi kar skte hai jab maggiLe aaenge
// maggiBanana function is callback of maggiLana function

////////////////////////////////////////
///////////////////code 2 Asynchronous..//////////////////
//-> this is asynchronous , SetTimeout(),these not run on js thread , but on web browser thead,in task ko
//  1-1- karke parallel chalana is Callback Asnchronous Work example..
// if setTimeout() ke baad code hoga , js will execute them,it will not block them..

function maggiLaana(cb) {
    console.log("Maggi lene gaye");
    setTimeout(() => {
        console.log("Maggi aa gai")

        cb(maggiKhana); // cb-> maggiBanana function ko call krdo
    }, 2000); // representing it takes 2 seconds to get maggi from shop
    console.log("Maggi laane se pehle ye karo");
    console.log("--->");
}

function maggiBanana(cb) {
    console.log("Maggi banana start");
    setTimeout(() => {
        console.log("Maggi bann gai")

        cb(); // cb-> maggiKhana function ko call kardo
    }, 2000); // representing it takes 2 seconds to get maggi make maggi
    console.log("Maggi Banane se pehle ye karo");
    console.log("--->");
}

function maggiKhana() {
    console.log("Maggi khana shuru");
    setTimeout(() => {
        console.log("Maggi khana khatam");
    }, 2000);
    console.log("Maggi Khane se pehle ye karo");
    console.log("--->");
}

maggiLaana(maggiBanana); // Pehle maggi le aao 
// maggiBanana is callback of maggiLaana(maggiBanana shuru krna hai jab
// maggi ko le aaenge)