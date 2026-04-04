

let inp = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');


btn.addEventListener('click', function(){

    let searchText =  inp.value ;
    fetchData(searchText) ;
    inp.value ="" ;
}) ;

function fetchData(searchText){
    /////////////////
    //fetch()
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        return response.json();//fetch returns METADATA-> so convert to Json
    })
    .then(function(data){
        manipulateDom(data);
    })
    /////////////
    // //axios
    // axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    // .then(function(response){
    //     // console.log(response.data);
    //     manipulateDom(response.data) ;
    // })
}

    function manipulateDom(allTheData){
        //to remove already present movies
        while(list.firstChild){
            list.firstChild.remove() ;
        }
        //or
        // list.innerHTML=""; //clean the list

        for(let el of allTheData){
            let figure = document.createElement('figure');
            
            let imgSrc = el.show.image ? el.show.image.medium : '' ;
            figure.innerHTML =`
            <img src=${imgSrc} />
            <h2> Name: ${el.show.name}  </h2>
            <h4>Language: ${el.show.language} </h4>
            `
            list.append(figure);
        }

    }
